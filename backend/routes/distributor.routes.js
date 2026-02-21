import express from "express";
import {
  registerDistributor,
  loginDistributor,
  approveDistributor ,
} from "../controllers/distributor.controller.js";
import Distributor from "../models/distributor.model.js";

const router = express.Router();

router.post("/register", registerDistributor);
router.post("/login", loginDistributor);
router.get("/", async (req, res) => {
  const distributors = await Distributor.find().select("name email");
  res.json(distributors);
});
router.put("/approve/:id", approveDistributor);

export default router;