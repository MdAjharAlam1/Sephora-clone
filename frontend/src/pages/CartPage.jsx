import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/cart");
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  if (!cart) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.items.map((item) => (
        <div key={item.productId._id} className="flex items-center justify-between mb-4">
          <img src={item.productId.image} alt={item.productId.name} className="h-16 w-16 object-cover" />
          <div>
            <h3 className="font-bold">{item.productId.name}</h3>
            <p className="text-gray-500">Quantity: {item.quantity}</p>
          </div>
          <p className="font-bold">${item.productId.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;