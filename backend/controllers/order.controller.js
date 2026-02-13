import Order from "../models/order.model.js";

/* CREATE ORDER */
export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ALL ORDERS */
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("distributor", "name email"); 

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE ORDER */
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* DELETE ORDER */
export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrdersByDistributor = async (req, res) => {
  try {
    const { distributorId } = req.params;
    console.log("Distributor ID from params:", distributorId);

    const orders = await Order.find({ distributor: distributorId })
      .populate("distributor", "name");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};