import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import distributorRoutes from "./routes/distributor.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import orderRoutes from "./routes/order.routes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/distributors", distributorRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api/orders", orderRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

export default app;