const User = require("../models/User");
const jwt = require("jsonwebtoken");

// const requestProviderRole = async (req, res) => {
//   try {
//     const userId = req.user.id; // Extracted from JWT Middleware
//     const user = await User.findById(userId);

//     if (!user) return res.status(404).json({ message: "User not found" });

//     if (user.role === "provider") {
//       return res.status(400).json({ message: "You are already a provider" });
//     }

//     user.role = "provider";
//     user.isApproved = false;
//     user.profileImage = req.files["profileImage"]
//       ? req.files["profileImage"][0].path
//       : "";
//     user.identityDocument = req.files["identityDocument"]
//       ? req.files["identityDocument"][0].path
//       : "";

//     await user.save();
//     res
//       .status(200)
//       .json({ message: "Provider request submitted, awaiting approval." });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

const requestProviderRole = async (req, res) => {
  try {
    const userId = req.user.id; // استخراج الـ ID من التوكن الحالي
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.role === "provider") {
      return res.status(400).json({ message: "You are already a provider" });
    }

    // تحديث البيانات
    user.role = "provider";
    user.isApproved = false;
    user.profileImage = req.files["profileImage"]
      ? req.files["profileImage"][0].path
      : "";
    user.identityDocument = req.files["identityDocument"]
      ? req.files["identityDocument"][0].path
      : "";

    await user.save();

    // استخراج بيانات التوكن الحالي
    const oldToken = req.cookies.token;
    if (!oldToken) {
      return res.status(401).json({ message: "No token found" });
    }

    // فك تشفير التوكن القديم
    jwt.verify(oldToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      // إعادة إصدار نفس التوكن ولكن مع الدور الجديد
      const updatedToken = jwt.sign(
        { id: decoded.id, role: user.role }, // تحديث الدور فقط
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      // إرسال التوكن المحدث للكوكيز
      res.cookie("token", updatedToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.status(200).json({
        message: "Provider request submitted, awaiting approval.",
        role: user.role, // تأكيد التحديث للواجهة الأمامية
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { requestProviderRole, getUserDetails };
