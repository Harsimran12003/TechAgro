import jwt from "jsonwebtoken";

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  // Hardcoded credentials
  if (email === "admin@gmail.com" && password === "admin123") {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Admin login successful",
      token,
    });
  }

  return res.status(401).json({
    message: "Invalid admin credentials",
  });
};