'use client'; // Add this at the top of the file to enable client-side rendering

import React, { useState } from 'react';

const Reservation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Here you can handle the reservation logic (e.g., API call or saving to local storage)
    console.log('Reservation Details:', { name, email, date, time });

    // Optionally show a confirmation message
    alert(`Reservation for ${name} on ${date} at ${time} confirmed!`);
  };

  return (
    <section className='bg-gradient-to-r from-pink-500 to bg-pink-300 py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-extrabold mb-6 text-white'>Make A Reservation</h2>
        <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-3 border border-gray-300 rounded-md'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-3 border border-gray-300 rounded-md'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <input
              type='date'
              className='w-full p-3 border border-gray-300 rounded-md'
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <input
              type='time'
              className='w-full p-3 border border-gray-300 rounded-md'
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <button
              type='submit' // Ensure the button submits the form
              className='bg-green-600 text-white py-2 px-4 rounded-md hover:bg-red-800'
            >
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
