
'use client'; // Mark the component as a client-side component

import React, { useState } from 'react';

export default function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOrderNowClick = () => {
    setIsModalOpen(true); // Open the modal when "Order Now" is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section className='container mx-auto py-10 flex flex-col items-center justify-center text-center'>
      <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Pizza</h2>
        <p className='text-white mb-4'>
          A delicious pizza boasts a crispy, golden crust topped with tangy tomato sauce, gooey melted cheese
        </p>

        {/* Button that triggers modal */}
        <button 
          onClick={handleOrderNowClick} 
          className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-200 mb-6'
        >
          Order Now
        </button>

        <h3 className='text-2xl font-semibold mb-6 text-white'>
          New Arrival: A delicious pizza boasts a crispy, golden crust topped with tangy tomato sauce, melted cheese
        </h3>

        <ul className='list-none'>
          <li><strong>Fajita Sicilian:</strong> The Fajita Sicilian pizza combines bold.</li>
          <br />
          <li><strong>Cheese & Pepperoni:</strong> Cheese & Pepperoni pizza is a classic favorite.</li>
          <br />
          <li><strong>Creamy Tikka:</strong> The creamy tomato-based sauce adds a smooth, velvety texture.</li>
          <br />
          <li><strong>Seekh Kabab:</strong> Seekh Kabab pizza combines tender, flavorful seekh kabab pieces with a crispy crust.</li>
          <br />
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold text-center mb-4">Order Your Pizza</h2>
            <p className="text-center mb-6">Please choose your pizza and confirm your order.</p>
            {/* Add more order options or form here */}
            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
