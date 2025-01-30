import React from 'react'

export default function ProcessSection() {
  return (
    <div>
      <div className='flex items-start mx-w-screen-lg w-full mx-auto mt-10'>

        <div className='w-full'>
          <div className='flex item-center w-full'>
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-500 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-black font-bold'>1</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-purple-700'></div>
     </div>

     <div className='mt-2 mr-4'>
      <h6 className='text-2xl font-bold text-red-700'>Step:1 Choose Your Dish</h6>
      <p className='text-xl text-black'>Explore our delicious menu and select your favorite meal.</p>
     </div>
     </div>

     <div className='w-full'>
          <div className='flex item-center w-full'>
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-500 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-black font-bold'>2</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-purple-700'></div>
     </div>

     <div className='mt-2 mr-4'>
      <h3 className='text-2xl font-bold text-red-700'>Step:2 customize Your Order</h3>
      <p className='text-xl text-black'>Tailor your meal to your taste </p>
     </div>
     </div>


     <div className='w-full'>
          <div className='flex item-center w-full'>
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-500 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-black font-bold'>3</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-purple-700'></div>
     </div>

     <div className='mt-2 mr-4'>
      <h3 className='text-2xl font-bold  text-red-700'>Step:3 Place Your Order</h3>
      <p className='text-xl text-black'>Ready to eat! Process to checkout and complete your order</p>
     </div>
     </div>


     </div>
</div>
  )
}


