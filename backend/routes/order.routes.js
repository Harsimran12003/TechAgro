import express from "express";
import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getOrdersByDistributor,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

router.get("/distributor/:distributorId", getOrdersByDistributor);

export default router;