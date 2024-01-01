import React, { useContext } from 'react'
import{ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const{all_product,cartItems,removeFromCart,addToCart,zeroToCart,getTotalCartAmount}=useContext(ShopContext)
  return (
    <div className='mx-[100px] my-[120px]'>
        <div className='grid items-center gap-10 px-5 text-[#454545] text-lg font-semibold grid-cols-6'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>

        <hr className='h-1 bg-[#a7a4a4] border-0 mt-4'/>

        {all_product.map((i)=>{
            if(cartItems[i.id]>0){
                return(

                    <div>
                        <div className='grid items-center gap-0 px-5 text-[#8d8b8b] text-base font-medium grid-cols-6'>
                            {/* productimg */}
                            <img src={i.image} alt="" className='h-16' />
                            <p>{i.name} <span className='font-light text-black'> <br />{i.category}</span> </p>
                            <p className='mx-5'>${i.new_price}</p>
                            
                            <div className='flex items-center gap-1 -mx-3'>
                                <h1 onClick={()=>{removeFromCart(i.id)}} className='w-8 h-8 border-[1px] border-black text-3xl flex justify-center items-center cursor-pointer pb-1 rounded-sm active:bg-gray-300  '>-</h1>
                                <button className='w-16 h-12 border-[1px] border-black'>{cartItems[i.id]}</button>
                                <h1 onClick={()=>{addToCart(i.id)}} className='w-8 h-8 border-[1px] border-black text-3xl flex justify-center items-center cursor-pointer pb-1 rounded-sm active:bg-gray-300  '>+</h1>
                            </div>
                            
                            <p className='mx-9'>${i.new_price*cartItems[i.id]}</p>
                            {/* removeicn */}
                            <img src={remove_icon} onClick={() => { zeroToCart(i.id) } } alt=""  className='w-4 my-6 cursor-pointer mx-14'/>

                        </div>
                        <hr className='h-[2px] bg-[#e2e2e2] border-0'/>
                    </div>
                )
            }
            return null;
        })}

        <div className='flex mx-24 my-20'>
            <div className='flex flex-col flex-1 gap-10 mr-48'>
                <h1 className='text-3xl font-semibold'>Cart Totals</h1>
                <div>
                    <div className='flex justify-between px-4 py-2'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between px-4 py-2'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='flex justify-between px-4 py-2'>
                        <h3 className='text-2xl font-semibold text-orange-500'>Total</h3>
                        <h3 className='text-2xl font-semibold text-orange-500'>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-64 text-base font-semibold text-white bg-red-400 cursor-pointer h-14'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex-1 text-base font-medium '>
                <p className='text-[#555]'>If you have a promo code , Enter it here</p>
                <div className='w-[500px] mt-4 pl-5 h-14 bg-gray-200 flex  rounded-lg'>
                    <input type="text" placeholder='promo code' className='text-base bg-transparent border-none outline-none w-[330px] h-[50px] ' />
                    <button className='w-[170px] h-[55px] text-base bg-black text-white cursor-pointer rounded-lg'>Submit</button>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default CartItem