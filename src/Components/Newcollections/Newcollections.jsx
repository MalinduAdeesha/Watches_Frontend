import React from 'react'
import new_collections from '../Assets/new_collections'
import Item  from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='new-collection flex flex-col items-center gap-[10px] mb-[100px]'>
       <h1 className='text-[#171717] lg:text-5xl text-2xl font-semibold md:text-4xl'>NEW COLLECTIONS</h1>
       <hr className='lg:w-[200px] lg:h-[6px] rounded-lg bg-[#252525] w-[100px] h-[3px] md:w-[150px] md:h-[4px]' />
       <div className="grid grid-cols-1 gap-3 mt-12 lg:grid-cols-4 md:grid-cols-2 md:gap-10 lg:gap-3">
       {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}></Item>
            })}
        </div> 
    </div>
  )
}

export default NewCollection