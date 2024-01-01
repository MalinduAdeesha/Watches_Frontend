import React from 'react'
import arrow_icn from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='flex flex-row items-center gap-3 mt-10 ml-5 font-light'>
        HOME <img src={arrow_icn} alt="" className='w-2 h-4'/> SHOP <img src={arrow_icn} alt="" className='w-2 h-4'/>{product.category} <img src={arrow_icn} alt="" className='w-2 h-4'/> {product.name}
    </div>
  )
}

export default Breadcrum