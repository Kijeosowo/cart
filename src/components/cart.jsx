import React, { useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";

const Cart = () => {
  const [cartsItem, setCartsItem] = useState([]);

  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    setCartsItem((prevItem) => [...prevItem, item]);
  };

  // Function to Calculate the total price of added items
  const totalPrice = cartsItem.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cartsItem.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);
      setCartsItem([]);
    }
  };

  const carts = [
    {
      id: 1,
      image:
        "https://images-cdn.ubuy.com.sa/65c933102c464c064c203c8f-coofandy-men-39-s-varsity-jacket.jpg",
      title: "Cofandy's men Varsity Jacket",
      description: "Regular fit casual Baseball Bomber",
      price: 20999,
    },
    {
      id: 2,
      image:
        "https://techmall.com.ng/wp-content/uploads/2024/07/JBL-Boombox-3-1.jpg",
      title: "JBL Charge 5",
      description: "Portable Waterproof (IP67) Bluetooth",
      price: 15499,
    },
    {
      id: 3,
      image:
        "https://tradefair.ng/wp-content/uploads/2021/12/IMG_COM_20211215_13350373-1.jpg",
      title: "Air Force Nike sneakers",
      description: "Size 42 - 44",
      price: 59999,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row md:justify-around gap-8">
      <div className="flex flex-col gap-6">
        {carts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col gap-5 items-center md:flex-row">
            <img
              src={item.image}
              alt={item.description}
              className="w-full md:w-64 h-64 object-cover"
            />
            <div className="p-4 flex flex-col gap-3">
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <p className="text-[#777]">{item.description}</p>
              <div className="flex items-center gap-2">
                <p className="text-black font-bold text-2xl">
                  ₦{item.price}
                </p>
                <button
                  className="self-start bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 rounded cursor-pointer flex gap-2"
                  onClick={() => {
                    handleAddToCart(item);
                  }}>
                  Add to Cart <GiShoppingCart className="mt-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <aside className="w-full md:w-[300px] h-fit bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Summary</h2>
        <p className="text-gray-600 mb-2 flex gap-2">
          Items in <GiShoppingCart className="mt-1" /> {carts.length}
        </p>
        <p>₦{totalPrice}</p>
        <button
          className="bg-green-600 p-2 rounded text-white mt-3 flex gap-2 cursor-pointer"
          onClick={handleCheckout}>
          Checkout <IoBagCheckOutline className="mt-1" />
        </button>
      </aside>
    </section>
  );
};

export default Cart;
