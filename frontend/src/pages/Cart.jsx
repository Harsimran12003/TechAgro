export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const placeOrder = async () => {
    await fetch("/api/orders", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        distributorId: distributor._id,

        items: cart,
      }),
    });

    alert("Order placed");

    setCart([]);
  };
  

  return (
    <div>
      {cart.map((item) => (
        <div>
          {item.name}
          {item.partCode}
        </div>
      ))}

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
