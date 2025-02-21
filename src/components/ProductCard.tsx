'use client'
import Image from 'next/image';
import { Product } from '@/pages/types';
import React from 'react';

interface ProductCardProps extends Product {
    onAddToCart: (product: Product) => void; // Fix the prop name here
};

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    image,
    onAddToCart,
  }) => {
    const handleAddToCart = onAddToCart || (() => console.log('Add to cart function not provided'));
  
    return (
      <div className='bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
        
        <img
          src={image}
          alt={name}

     className='w-full h-55 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-110'
        />
        <h3 className='text-xl font-semibold mb-2'>{name}</h3>
        <p className='text-lg text-slate-500 mb-4'>{price}</p>
  
        <button onClick={() => handleAddToCart({ id, name, price, image, quantity: 1 })}

         
          className='bg-blue-500 text-white px-4 rounded-lg text-lg shadow-md hover:bg-blue-400 transition duration-300 ease-in-out'
        >
          Add To Cart
        </button>
      </div>
    );
  };
  export default ProductCard;

