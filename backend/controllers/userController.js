const User = require("../models/User");

exports.getUserInfo = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "لم يتم العثور على المستخدم" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      phone: user.phone,
      address: user.address,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
