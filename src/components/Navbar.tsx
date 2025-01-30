import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';

export default function Navbar() {
  return (
    <div>
        <div className='grid xl:grid-cols-1 grid-cols-1 '>
           <div className='p-5'>
            <div className='py-2 px-2 rounded-xl border w-full  bg-gradient-to-r from-yellow-500 to-yellow-600'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-items-center items-center gap-2'>
                                                                                                                                                                                                                                                                                                                                                    
                       {/*Logo*/} 
                        <GiFullPizza className='w-8 h-8 text-red-600 hover:text-white'/>

                         {/*Search icon*/} 
                         <div style={{position:"relative"}}>
                            <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block'
                            placeholder='Search for your favorite Pizzas from menu'/>
                            <FaSearch className='w-5 h-5  absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block '/>
                         </div>
                      </div>
                      <div className='flex justify-center items-center gap-2'>
                      <FaBolt className='w-5 h-5 text-purple-700 hidden lg:block md:block'/>
                      <p className='text-sm text-white hidden lg:block md:block'>Order now and get it with 
                        <span className='text-blue-700'>15 minutes</span>
                      </p>
                      
                      {/*cart icon*/} 

                      <FaCartShopping  className='w-8 h-8 relative p-1'/>
                      <Image className='w-8 h-8 rounded-full ring-2 ring-green-700 text-red-200 '
                      src="/Image.jpg"
                      alt="user avtar"
                      width={100}
                      height={100}
                      />
                      </div>

                </div>
           </div>
        </div> 
    </div>
</div>
  )
}


