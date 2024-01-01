import React from 'react'
import main_img from '../Assets/Main_img.png';
import arrow_icon from '../Assets/arrow.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero h-[100vh] flex bg-gradient-to-b from-orange-300'>
      <div className="flex flex-col justify-center flex-1 gap-5 pl-20 mb-20 hero-left lg:pl-44 ">
        <h2 className='text-[#090909] lg:text-2xl font-semibold lg:-mb-10 text-lg md:text-xl first-letter:'>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-5 -mb-10 hero-hand-icon">
            <p className='text-[#171717] lg:text-[100px] font-bold text-[50px] mb-8 lg:mb-0 md:text-[65px] '>new</p>
            
          </div>
          <p className='text-[#171717] lg:text-[100px] font-bold lg:-mb-10 text-[50px]  md:text-[65px]'>collections</p>
          <p className='text-[#171717] lg:text-[100px] font-bold lg:-mb-10 text-[50px]  md:text-[65px]'>for everyone</p>
        </div>
        <Link to={'/newcollection'}>
          <div className="flex items-center justify-center gap-4 hero-latest-btn lg:w-[310px] w-[150px] lg:h-[70px] h-[40px] md:w-[225px] md:h-[50px] rounded-full mt-7 bg-orange-500 text-white text-xl font-medium hover:bg-orange-600  transition duration-300 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
            <div className='text-sm lg:text-2xl md:text-lg' >Latest Collection</div>
            <img className='hidden lg:block ' src={arrow_icon} alt="" />
        </div>
        </Link>
        
      </div>
      <div className="flex items-center justify-center flex-1 hero-right">
        <img  src={main_img} alt="" className=' mb-20 hidden lg:block md:block md:h-[40%] lg:h-[70%]'/>
      </div>
    </div>
  )
}

export default Hero