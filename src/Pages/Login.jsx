import React from 'react'

const Login = () => {
  return (
    <div className='login-signup w-[100%] h-[100vh] bg-gradient-to-b from-orange-300  pt-24 pb-24 '>
        <div className="login-signup-container w-[580px] h-[630px] bg-gradient-to-t from-gray-200 to-white m-auto px-14 py-16 rounded-md justify-center flex flex-col">
          <h1 className='mx-20 ml-0 text-3xl font-semibold'>Login</h1>
          <div className="flex flex-col login-signup-fields gap-7 mt-7">
            <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-orange-500' type="email" placeholder='Email' />
            <input className='h-[72px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-orange-500' type="password" placeholder='Password' />
          </div>
          <button className='w-[100%] h-[72px] text-white bg-red-500 mt-7 border-none text-lg font-medium cursor-default  rounded-xl disabled:bg-red-300 disabled:cursor-not-allowed active:bg-red-800'>Continue</button>
        </div>
    </div>
  )
}

export default Login