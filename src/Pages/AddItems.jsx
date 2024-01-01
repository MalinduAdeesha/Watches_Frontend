import React from 'react'
import AdminNav from '../Components/Navbar/AdminNav'
import ImageUploader from '../Components/ImageUploder/ImageUploder'

function AddItems() {
  return (
    <div >
        <AdminNav/>
        <div className=" w-[80%] h-[120vh]  bg-gradient-to-t from-gray-200 to-white m-auto   rounded-md  ">
          <div className='flex flex-col items-center'>
          <div className='mb-10 text-2xl font-semibold'>
            <h1>ADD ITEMS</h1>
          </div>
            
            <div className='flex flex-col '>
              <div className='mb-6'>
                <h1>Item Name</h1>                
                <input className='h-8 border-[2px] border-gray-300 rounded-md outline-none w-96 focus:border-orange-500 p-5 mt-2 focus:border-[2px]' type="text" placeholder='type here . . .'/>
              </div>

              <div className='mb-6'>
                <h1>Category</h1>
                <input className='h-8 border-[2px] border-gray-300 rounded-md outline-none w-96 focus:border-orange-500 p-5 mt-2 focus:border-[2px]' type="text" placeholder='type here . . .'/>
              </div>

              <div className='mb-6'>
                <h1>Price</h1>
                <input className='h-8 border-[2px] border-gray-300 rounded-md outline-none w-96 focus:border-orange-500 p-5 mt-2 focus:border-[2px]' type="text" placeholder='type here . . .'/>
              </div>

              <div className='mb-6'>
                <h1>Discription</h1>
                <input className='h-32 border-[2px] border-gray-300 rounded-md outline-none w-96 focus:border-orange-500 p-5 pt-0 mt-2 focus:border-[2px]' type="text" placeholder='type here . . .'/>
              </div>
              
              
            </div>
            </div>
            
            <div className='flex flex-col items-center ' >
              <h1 className='my-5 text-lg'>Add Images</h1>
              <div className='flex justify-center gap-3'>
                
              <div><ImageUploader/></div>
              <div><ImageUploader/></div>
              <div><ImageUploader/> </div>
              <div><ImageUploader/></div>
               
              </div>
            </div>
        
        </div>
        
        
    </div>
  )
}

export default AddItems