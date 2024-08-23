import React, { useContext } from 'react'
import all_product from '../Components/Assets/all_products'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { Breadcrum } from '../Components/Breadcrum/Breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
export const Product = () => {
  const{all_product}=useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    
    <div>
      <Breadcrum product= {product}/>

      <ProductDisplay product = {product}/>
      
      
    </div>
  )
}
