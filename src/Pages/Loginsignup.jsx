import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Loginsignup = () => {
  
  const[accept ,setAccept] =useState(false);
  const handleChecked =(event)=>{
    setAccept(event.target.checked)
  }
  
  return (
    <div className='login-signup w-[100%] h-[100vh] bg-gradient-to-b from-orange-300  pt-24 pb-24'>
        <div className="login-signup-container w-[580px] h-[630px] bg-gradient-to-t from-gray-200 to-white m-auto px-14 py-16 rounded-md">
          <h1 className='mx-20 ml-0 text-3xl font-semibold'>Sign Up</h1>
          <div className="flex flex-col login-signup-fields gap-7 mt-7">
            <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-orange-500' type="text" placeholder='Your Name' />
            <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-orange-500' type="email" placeholder='Email' />
            <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-orange-500' type="password" placeholder='Password' />
          </div>
          <button  disabled={!accept} className='w-[100%] h-[72px] text-white bg-red-500 mt-7 border-none text-lg font-medium cursor-default rounded-xl disabled:bg-red-300 disabled:cursor-not-allowed active:bg-red-800'>Continue</button>
          <p className='mt-5 loginSignup-login text-[#5c5c5c] text-sm font-medium'>
            Alredy have an account ? 
            <span className='text-[red] font-semibold cursor-pointer hover:underline '> <Link to={'/login'}>Login here</Link> </span>
          </p>
          <div className="flex items-center gap-5 mt-6 loginSignup-agree text-[#5c5c5c]  font-medium">
            <input type="checkbox" name="" id="" className='cursor-pointer ' onClick={handleChecked}/>
            <p className=' loginSignup-login text-[#5c5c5c] text-base font-medium'>By continuing, i agree to terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default Loginsignup