import React from 'react'
import Image from 'next/image' 
export default function HeroSection() {
  return (
    <div>
      <section className='bg-gradient-to-r from-orange-500 to-orange-700'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 h-auto bg-gradient-to-b from-gray-900/25 to-gray-900/5 md:h-full flex flex-col'>
              <a href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
               <Image src="/Crown Crust.jpg"
                alt="pizza 1"
                width={500}
                height={400}
                className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
              </div>
              <h3 className='z-10 text-2xl font-medium text-black absolute top-0 left-0  p-4 xs:text-xl md:text-0xl'>
              Crown Crust {""}
                </h3>
              </a>
              </div>

              <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
              <a href=""
              className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
            <Image 
            src="/Veggie Lover.jpg"
            alt='Pizza 2' 
            width={500}
            height={400}
             className='absolute inset-0  h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                />
                <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
              <h3 className='z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
              Veggie Lover{""}
                </h3>
                </a>

                <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 '>
            <a href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <Image 
              src="/Detroit Pepperoni.jpg"
              alt="Pizza 3"
              width={1000}
              height={500}
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
               <div className='absolute insect-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
               <h3 className='z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                Detroit Pepperoni{""}</h3>
                </a>

                <a href='' 
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
          
               <Image 
              src="/Ohio Thrill.jpg"
              alt="Pizza 4"
              width={1000}
              height={500}
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
              <div className='absolute insect-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
              <h3 className='z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                Ohio Thrill {""}</h3>
              </a>
            </div>
         </div>

            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
              <a href=''
             className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
             <Image 
              src="/Pizza Cheesy.jpg"
             
             alt="Pizza 5"
             width={300}
             height={300}
             className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
             />
              <div className='absolute insect-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
              <h3 className='z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
              Pizza Cheesy {""}
                </h3>
             </a>

            </div>
            

        

          </div>
         </div>
     </section>
    </div>
  )
}


