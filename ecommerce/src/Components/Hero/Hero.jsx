import React from 'react'
import  hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
import '../Hero/Hero.css'
import p1 from '../Assets/1.jpeg.webp'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>LATEST PRODUCTS </h2>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt=''/>1
            </div>
            <p>collection</p>
            <p>General</p>
            <div className="hero-latest-btn">
                <div>Latest Arrivals</div>
                <img src={arrow_icon} alt="" />

            </div>


        </div>
        <div className="hero-right">
            <img src={p1} alt="" />

        </div>

    </div>
  )
}
