import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { Shopcat } from './Pages/Shopcat';
import { Product } from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import { Cart } from './Pages/Cart';


function App() {
  return (
    <div >
    <BrowserRouter>
      <NavBar/>
      <Routes>
         <Route path = "/" element={<Shop/>}/>
         <Route path ='/men' element={<Shopcat banner = {men_banner} category="men"/>}/>
         <Route path = '/women' element = {<Shopcat banner = {women_banner} category="women"/>}/>
         <Route path = '/kid' element = {<Shopcat banner = {kid_banner} category="kid"/>}/>
         <Route path  = '/product/:productId' element = {<Product/>}/>
         <Route path ='/loginsignup' element={<LoginSignup/>}/>
         <Route path  = '/cart' element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
