import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import distributorRoutes from "./routes/distributor.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import orderRoutes from "./routes/order.routes.js";
import productRoutes from "./routes/product.routes.js";


dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
  "https://tech-agro.vercel.app",
  "https://www.techagro.co.in",
  "https://techagro.co.in",
  "http://localhost:5173"
];


app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());


app.use("/api/distributors", distributorRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

export default app;