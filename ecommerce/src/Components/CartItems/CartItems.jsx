import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotal,all_product,cartItems,addToCart,removeToCart} = useContext(ShopContext);

  return (
    <div className="cartitems">
        <div className="cartitems-format-main cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr/>

            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return (
                        <div>
                           <div className="cartitems-format cartitems-format-main">
                            <img src={e.image}alt="" className='cartitems-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon"  src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />

                           </div>
                           <hr/>
                      </div>)
                    
                }
                return null;
            
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart total</h1>
                    <div>
                        <div className='cartitems-total-items'>
                            <p>Subtotal</p>
                            <p>${getTotal()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>${getTotal()}</h3>
                        </div>
                        <button>Proceed to checkout</button>


                    </div>

                </div>
            </div>

        </div>
        
  )
}
