import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative bg-gray-700 font-sans px-6 py-12 mb-7'>
        <div className='absolute inset-0 opacity-20'>
          <Image src='/bg-pizza.jpg'
          alt='delicious Pizza banner' 
          width={500}
          height={500}
          className='w-full h-full object-cover'/>
          </div>

          <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
            <h2 className='text-white sm:text-5xl font-bold mb-4 '> 
            Everyday Double Value
            </h2>
            <p className='text-white text-lg text-center mb-6 max-w-xl'>
             Exclusive Pizza Discount!
            </p>
            <button 
            type='button'
            className='bg-pink-700 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300  '>
              Exciting Deals Launch at 12pm!

            </button>


          </div>
    </div>
  )
}
