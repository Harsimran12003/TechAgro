import Distributor from "../models/distributor.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* REGISTER */
export const registerDistributor = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const existing = await Distributor.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const distributor = await Distributor.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: distributor._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({ distributor, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* LOGIN */
export const loginDistributor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const distributor = await Distributor.findOne({ email });
    if (!distributor) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, distributor.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: distributor._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ distributor, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};