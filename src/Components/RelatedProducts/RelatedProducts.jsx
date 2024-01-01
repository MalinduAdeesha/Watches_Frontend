import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'


const RelatedProducts = () => {
  return (
    <div className='lg:flex flex-col items-center popular gap-[10px] lg:h-[90vh] mb-20 hidden '>
      <h1 className='text-[#171717] lg:text-5xl text-2xl font-semibold md:text-4xl '>Related Items</h1>
      <hr className='lg:w-[200px] lg:h-[6px] rounded-lg bg-[#252525] w-[100px] h-[3px] md:w-[150px] md:h-[4px] lg:mb-20 mb-10' />
        <div className="grid grid-cols-1 gap-3 t-12 popular-item lg:flex md:grid md:grid-cols-2 md:gap-10 md:mb-12 lg:gap-3 ">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}></Item>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts