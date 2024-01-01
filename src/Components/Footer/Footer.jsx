import React from 'react'
import footer_logo from '../Assets/logo.png'
import insta_icn from '../Assets/instagram_icon.png'
import printrest_icn from '../Assets/pintester_icon.png'
import whatsapp_icn from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12 footer'>
      <hr className='w-[90%] border-none rounded-lg h-[2px] bg-[#c7c7c7]'/>
        <div className="flex items-center gap-5 footer-logo">
          <img src={footer_logo} alt="" className='w-20 h-20'  />
          <p className='text-3xl font-bold text-orange-500 lg:text-5xl md:text-4xl'>WATCHES</p>
        </div>
        <ul className="lg:flex gap-12 list-none footer-links text-[#2525250] text-xl w-full justify-between hidden">
          
          <div className='flex flex-col'>
            <h1 className='mb-5 ml-32 text-lg font-semibold'>Shop Categories</h1>
              <Link className='ml-32 text-base' href=''>Home</Link>
              <Link className='ml-32 text-base' href=''>Mens</Link>
              <Link className='ml-32 text-base' href=''>Womens</Link>
              <Link className='ml-32 text-base' href=''>Kids</Link>
          </div>
          
          <div className='flex flex-col'>
            <h1 className='mb-5 text-lg font-semibold'>Customer Service</h1>
              <Link className='text-base ' href=''>Contact Us</Link>
              <Link className='text-base' href=''>Shopping Policy</Link>
              <Link className='text-base' href=''>Return & Exchange</Link>
              <Link className='text-base' href=''>FAQs</Link>
          </div>
          
          <div className=''>
           <h1 className='mb-5 text-lg font-semibold'>About Us</h1>
            <p className='text-base w-52'>Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Magni nam quas officia ipsa! Assumenda laudantium dolore deleniti ratione fugiat repudiandae.</p>
          </div>
          
          <div className='flex flex-col'>
            <h1 className='mb-5 text-lg font-semibold '>Follow Us</h1>
            <div className="flex gap-5 mr-32 footer-social-icon">
              <div className="p-2 footer-icons-container pb-[6px] bg-[#fbfbfb] border-[#ebebeb] ">
                <img src={insta_icn} alt="" />
              </div>
              <div className="p-2 footer-icons-container pb-[6px] bg-[#fbfbfb] border-[#ebebeb] ">
                <img src={printrest_icn} alt="" />
              </div>
              <div className="p-2 footer-icons-container pb-[6px] bg-[#fbfbfb] border-[#ebebeb] ">
                <img src={whatsapp_icn} alt="" />
              </div>
            </div>
          </div>
          
      
        </ul>
        
          <div className="flex flex-col items-center gap-8 footer-copyright w-[100%] mb-7 text-[#1a1a1a] text-xl">
            <hr className='w-[90%] border-none rounded-lg h-[3px] bg-[#c7c7c7] '/>
            <p className='text-sm lg:text-lg md:text-base'>Copiright @ Malindu - All Right Reserved.</p>
          </div>
        
    </div>
  )
}

export default Footer