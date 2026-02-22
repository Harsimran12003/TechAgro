import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  name: String,

  partCode: {
    type: String,
    required: true,
    unique: true
  },

  description: String

});

export default mongoose.model("Product", productSchema);