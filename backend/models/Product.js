const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, index: true }, // Easier price filtering
    category: { type: String, enum: ["carpet", "accessory"], required: true },
    size: { type: String, required: true, index: true }, // Indexing for filtering
    color: { type: String, required: true, index: true }, // Indexing for filtering
    material: { type: String, required: true, index: true }, // Indexing for filtering
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    images: [{ type: String }],
    stock: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    likes: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
