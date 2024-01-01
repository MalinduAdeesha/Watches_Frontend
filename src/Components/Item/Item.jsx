import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='item lg:w-[350px] w-[200px] md:w-[275px] transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}alt="" /></Link>
        <p className='mr-0 mt-[6px]'>{props.name}</p>
        <div className="flex gap-5 item-prices">
            <div className="item-price-new text-[#374151] text-lg font-semibold">${props.new_price}</div>
        </div>
    </div>
  )
}

export default Item