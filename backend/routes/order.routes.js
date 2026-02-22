import express from "express";
import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getOrdersByDistributor,
} from "../controllers/order.controller.js";
import Order from "../models/order.model.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);
router.get("/distributor/:distributorId", getOrdersByDistributor);
router.post("/", async (req, res) => {
  const order = await Order.create({
    distributor: req.body.distributorId,

    items: req.body.items,

    status: "Placed",
  });

  res.json(order);
});
router.post("/", async (req, res) => {
  const order = await Order.create({
    distributor: req.body.distributorId,

    items: req.body.items,

    status: "Placed",
  });

  res.json(order);
});

export default router;
