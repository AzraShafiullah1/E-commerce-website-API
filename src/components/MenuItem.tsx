'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/types/types";

const MenuItem = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false); // state to toggle cart visibility
  const [isCheckout, setIsCheckout] = useState(false); // state to handle checkout modal
  const router = useRouter();

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    // sync cart from localstorage on page load
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add item To Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, {...product, quantity: 1}];  // Initialize with quantity 1
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Remove item from Cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(product => product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Proceed to checkout
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Update the quantity of items in the cart
  const updateQuantity = (productId: number, change: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity + change) } // Ensure quantity is never less than 1
          : product
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div className="relative min-h-screen py-6">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-background"
        style={{
          backgroundImage: "url('./bg-Menu.png')",
        }}
      ></div>
      <div className="relative z-10">
        {/* Product section */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Delicious Pizza In Our Menu</h1>
          <p className="text-xl text-white">Explore our section of mouth-watering pizzas to order now!</p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-700 transition duration-300 ease-out transform"
          >
            {showCart ? 'Hide Cart' : 'View Cart'} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">Your Cart Items Includes:</h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product) => (
                      <li
                        key={product.id}
                        className="flex items-center justify-between mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform text-black"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>

                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="bg-gray-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                          >
                            -
                          </button>

                          <span className="mx-2">{product.quantity}</span>

                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="bg-gray-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                          >
                            +
                          </button>

                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ml-4"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold">Total:</span>
          

                    <span className="font-semibold">
                  ${cart.reduce((total, product) => total + parseFloat(product.price?.toString() || "0") * product.quantity, 0).toFixed(2)}
                </span> 

                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-500 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed to Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-red-500 py-3 px-8 rounded-lg ml-4 text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-500">Your cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-95">
              <h2 className="text-4xl font-bold text-green-700 mb-4">Checkout</h2>
              <p className="text-lg text-red-500">Please confirm your order before proceeding</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product) => (
                    <li key={product.id} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price} x {product.quantity}</span>
                    </li>
                  ))}
                </ul>
   

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                  ${cart.reduce((total, product) => total + parseFloat(product.price?.toString() || "0") * product.quantity, 0).toFixed(2)}
                </span>

                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-500 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-500 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() => alert('Order Confirmed! We will deliver it to your doorstep.')}
                  className="bg-green-700 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-500 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;

