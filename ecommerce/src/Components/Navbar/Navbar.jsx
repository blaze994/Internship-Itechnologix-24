import React from "react";
import './Navbar.css'
import {useState} from "react";
import { Link } from "react-router-dom";
import cart_icon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
const NavBar = () => {
    const [menu,setmMenu] = useState("shop")
    return(
        <div className="navbar">
            <div className="nav-logo">
            <img src={logo} alt="" />

            <p>USER</p>

            </div>
            
        
            <ul className="nav-menu">
                <li onClick={()=>{setmMenu("shop")}}><Link style={{textDecoration:'none'}} to ='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmMenu("men")}}><Link style={{textDecoration:'none'}} to = '/men'>MEN </Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setmMenu("women")}}><Link style={{textDecoration:'none'}} to = '/women'>WOMEN </Link> {menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmMenu("kid")}}><Link style={{textDecoration:'none'}} to = '/kid'>KID</Link>{menu==="kid"?<hr/>:<></>}</li>
               
            </ul>
            <div   className="nav-login-cart">
           {/*  <Link to='/loginsignup'><button>Login</button></Link> */}
            <button onClick={() => {setmMenu("loginsignup")}}> <Link style={{textDecoration:'none'}} to = '/loginsignup'>Login</Link></button>
               <Link to = {`/cart`}><img src={cart_icon} alt=""/></Link>
            </div>
            <div>
             
            </div>

        </div>

    )
}
export default NavBar

