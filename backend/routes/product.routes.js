import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

/* Search product by part code */

router.get("/search", async (req, res) => {

  const query = req.query.q;

  const products = await Product.find({
    partCode: { $regex: query, $options: "i" }
  });

  res.json(products);

});

export default router;