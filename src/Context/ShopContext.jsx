import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

  // cart
  const getDefaultCart =()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
       cart [index]=0;    
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    // cart
    const[cartItems,setCartItems] =useState(getDefaultCart());
    
    
    // addcart
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    // removecart
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const zeroToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]=0}))
    }
    //cart
    const getTotalCartAmount =()=>{
        let TotalAmount =0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                TotalAmount += itemInfo.new_price * cartItems[item];
            }     
        }
        return TotalAmount;
    }
    //cartnum
    const getTotalCartItems =()=>{
        let TotalItem =0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                
                TotalItem += cartItems[item];
            }     
        }
        return TotalItem;
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,zeroToCart,getTotalCartAmount,getTotalCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;