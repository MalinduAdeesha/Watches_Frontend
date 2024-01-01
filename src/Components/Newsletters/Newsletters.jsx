import React from 'react'

const NewsLetters = () => {
  return (
    <div className='news-letter lg:w-[75%] w-[85%] lg:h-[40vh] h-[60vh]  flex flex-col items-center justify-center m-auto pt-0  mb-36 gap-8 bg-gradient-to-r from-yellow-200  lg:rounded-full'>
        <h1 className='text-[#454545] lg:text-[55px] text-[35px] font-semibold px-5 md:text-[50px]  '>Get Exclusive Offers On Your Email</h1>
        <p className='text-[#454545] lg:text-xl text-base mx-5 md:text-xl'>Subscribe to Our Newsletter and Stay Updates</p>
        <div className='flex items-center justify-between bg-white lg:w-[730px] md:w-[500px] lg:h-[70px] md:h-[50px] w-[300px] h-[50px] rounded-full border-2 border-[#dcd9d9]'>
            <input className=' ml-7  outline-none border-none text-[#616161] font-thin text-base' type="email" placeholder='Your Email Id' />
            <button className='w-[210px] md:w-[150px] lg:h-[70px] h-[50px] rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-[white] lg:text-[18px] text-[15px] cursor-pointer hover:from-pink-500 hover:to-yellow-500  '>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetters