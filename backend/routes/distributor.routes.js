import express from "express";
import {
  registerDistributor,
  loginDistributor,
} from "../controllers/distributor.controller.js";
import Distributor from "../models/distributor.model.js";

const router = express.Router();

router.post("/register", registerDistributor);
router.post("/login", loginDistributor);
router.get("/", async (req, res) => {
  const distributors = await Distributor.find().select("name email");
  res.json(distributors);
});

export default router;