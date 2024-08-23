import React,{createContext, useState} from 'react'
import all_product from '../Components/Assets/all_products'

export const ShopContext = createContext(null);


  const getDefaultCart = () =>{
    let cart = {};
    for (let i = 0 ; i < all_product.length+1; i++){
      cart[i] = 0 ;
    }
    return cart;
  }

  const ShopContextProvider = (props) => {
    
    const [cartItems,setCartItems]=useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))


    }
    const removeToCart = (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    const getTotal = () =>{
      let getTotala = 0;
      for (const items in cartItems){
        if (cartItems[items]> 0){
          let iteminfo = all_product.find((product)=>product.id===Number(items))
          getTotala+=iteminfo.new_price * cartItems[items];
          return getTotala;
        }
        
      }
    }
    const contextValue = {getTotal,all_product,cartItems,addToCart,removeToCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
  }
export default ShopContextProvider;
