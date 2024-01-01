import React from 'react'
import exclusive_image from '../Assets/offers.png'

const Offers = () => {
  return (
    <div className='offers lg:w-[70%] w-[85%] h-[60vh] flex m-auto pt-2 lg:pr-36 mb-36 bg-gradient-to-b from-yellow-300 pl-16 transition duration-300 ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 '>
      <div className="flex flex-col justify-center flex-1 gap-2 offers-left">
        <h1 className='text-[#171717] lg:text-7xl text-5xl font-semibold md:text-6xl'>Exclusive</h1>
        <h1 className='text-[#171717] lg:text-7xl text-5xl font-semibold md:text-6xl'>Offers For You</h1>
        <p className='text-[#171717] lg:text-xl text-lg font-semibold mt-10'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button  className='lg:w-[240px] w-[150px] lg:h-[60px] h-[40px] rounded-xl bg-black text-white lg:text-xl text-base font-medium mt-7 cursor-pointer hover:bg-gray-600 '>Check Now</button>
      </div>
      <div className="flex items-center justify-end flex-1 pt-12 offers-right md:mr-20 md:mb-10">
        <img className='hidden lg:block md:block md:w-[300px]' src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers