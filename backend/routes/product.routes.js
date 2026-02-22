import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

/* Search product by part code OR description OR name */

router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.json([]);
    }

    const products = await Product.find({
      $or: [
        { partCode: { $regex: query, $options: "i" } },

        { name: { $regex: query, $options: "i" } },

        { description: { $regex: query, $options: "i" } },
      ],
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
