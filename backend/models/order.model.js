import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    machinery: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    distributor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Distributor",
      required: true,
    },
    status: {
      type: String,
      enum: ["Placed", "Shipped", "Out for Delivery", "Delivered"],
      default: "Placed",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);