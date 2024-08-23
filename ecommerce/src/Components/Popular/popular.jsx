import React from 'react'

import data_product from '../Assets/data'
import { Items } from '../Items/Items'
import '../Popular/popular.css'


export const Popular = () => {
  return (
    <div className="popular">

        <h1>Popular Buys</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Items key = {i} id = {item.id} name= {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}
