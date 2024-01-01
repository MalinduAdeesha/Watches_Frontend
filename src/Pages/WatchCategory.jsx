import React, { useContext } from 'react'
import dropdown_icn from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import arrow_icon from '../Components/Assets/arrow.png'
import {ShopContext} from '../Context/ShopContext'


const WatchCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className=''>
       <img className='lg:block m-auto mt-7 lg:w-[95%] w-[90%] mb-4 lg:h-[350px] h-[100px]  lg:rounded-3xl hidde' src={props.banner} alt="" />
        <div className="flex items-center justify-between mt-4 lg:mt-0 shopCategory-indexSort lg:mr-44">
          <p>
            <span className='font-semibold lg:ml-12'>Showing 1-12</span>out of 36 products
          </p>
          <div className=" shopCategory-sort lg:flex items-center justify-center mx-6 my-6 w-[100px] h-[30px] rounded-full border-[#6f6b6b] text-[#323030] gap-3 border text-md hidden">
            Sort by  <img className='' src={dropdown_icn} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-20 ml-28 lg:my-5 lg:mx-12 lg:grid-cols-4 lg:grid shopCategory-products">
          {all_product.map((item,i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;

            }
          })}
        </div>
        <div className="flex items-center justify-center mx-auto load-more lg:my-28 my-14 lg:w-[233px] w-[130px] lg:h-[69px] h-[40px] rounded-full bg-[#6f6b6b] text-[#e7e3e3] lg:text-lg text-sm font-semibold gap-3 hover:bg-[#3c3a3a] hover:cursor-pointer">
          Explore More
          <img className='hidden lg:block' src={arrow_icon} alt="" />
        </div>
    </div>
  )
}


export default WatchCategory