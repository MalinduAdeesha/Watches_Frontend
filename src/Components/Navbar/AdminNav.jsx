import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div>
        <div className='sticky top-0 flex justify-center h-20 mb-12 bg-gray-500 shadow-xl'>
            <ul className="gap-[150px]  items-center font-medium  flex text-white  ">
                <li className='cursor-pointer active:text-orange-500'><Link to={'/summary'}>SUMMARY</Link> </li><span >|</span>
                <li className='cursor-pointer active:text-orange-500'><Link to={'/additems'}>ADD ITEMS</Link></li><span >|</span>
                <li className='cursor-pointer active:text-orange-500'><Link to={'/manageproduct'}>MANAGE PRODUCTS</Link></li><span >|</span>
                <li className='cursor-pointer active:text-orange-500'><Link to={'/manageorder'}>MANAGE ORDERS</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default AdminNav