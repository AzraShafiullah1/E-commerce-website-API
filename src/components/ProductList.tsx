import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: "Kabab Popper",
    category: "Pizza",
    price: "1795",
    image: "/Kabab Popper.jpg", // Images should be in the public folder
    bgColor: "bg-amber-500"
  },
  {
    id: 2,
    title: "Mughlai",
    category: "Pizza",
    price: "1295",
    image: "/Mughlai.jpg", // Images should be in the public folder
    bgColor: "bg-teal-500"
  },
  {
    id: 3,
    title: "Malai Boti",
    category: "Pizza",
    price: "1295",
    image: "/MalaiBoti.jpg", // Images should be in the public folder
    bgColor: "bg-cyan-500"
  },
];

export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-sm shadow-lg group`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="black"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="purple"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(green, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            {/* Use Image component from next/image */}
            <Image
              className="relative w-50"
              src={product.image} // Use the image path relative to the public folder
              alt={product.title}
              width={900} // You can set width and height for Image component
              height={700}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{product.title}</span>
            </div>
            <div className="pb-5 py-4">
              <span
                className="block bg-white rounded-full text-orange-500 font-bold text-xs px-3 py-2 pb-3 leading-none items-center"
                style={{
                  width: '70px', // Set a fixed width for the "six" shape
                  height: '70px', // Set a fixed height for the "six" shape
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%', // This makes it a circle
                  textAlign: 'center',
                  fontSize: '18px', // Adjust font size if needed
                }}
              >
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}






