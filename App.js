import './App.css';
import './Try.css'
import { NavLink } from 'react-router-dom';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/Product';
import Oil from './component/Oil';
import Snack  from './component/Snack';
import  Spice from './component/Spice';
import  Groceryy from './component/Groceryy';
import Footer from './component/Footer';
import Home from './component/Home';
import Contactus from './component/Contactus';
import Aboutus from './component/Aboutus';
import Chhole from './component/masala/Chhole'
import ChanaBesan from './component/others/ChanaBesan'
import MasalaChips from './component/others/MasalaChips'
import Mustard1 from './component/others/Mustard1'
import Mustard5 from './component/others/Mustard5'
import Mustard500 from './component/others/Mustard500'
import Navrang from './component/others/Navrang'
import Refined from './component/others/Refined'
import SaltedChips from './component/others/SaltedChips'
import Tea from './component/others/Tea'
import Dhania from './component/masala/Dhania'
import Garam from './component/masala/Garam'
import Meat from './component/masala/Meat'
import RedChilli from './component/masala/RedChilli'
import Sabji from './component/masala/Sabji'
import Turmeric from './component/masala/Turmeric'
import Panner from './component/masala/Panner'
// import Try from './component/Try'
import React, { useState } from 'react'

function App() {
    const [Colour,setColour]=useState("#2181353");
    const on=(e)=>{
      setColour(e.target.value)
    }
  return (
    <>
<BrowserRouter>
{/* <div id="google_translate_element"></div> */}
 <Navbar Colour={Colour} on={on}></Navbar>

   <NavLink to="/home" className="navbar-brand d-flex justify-content-center" ><img  className="logoo" src="img/logo.avif" alt="Hiven" /></NavLink>
 <div className="text-light d-flex justify-content-center py-2 mt-3 out" > <marquee behavior="alternate" direction="right"><b>Welcome To Hiven , The New Uprising Brand</b></marquee></div>
   <Routes>
    <Route exact path="/" Component={Home}/>
    {/* <Route exact path="/try" Component={Try}/> */}
    <Route exact path="/home" Component={Home}/>
    <Route exact path="/about" Component={Aboutus}/>
    <Route exact path="/contact" Component={Contactus}/>
    <Route exact path="/product" Component={Product}/>
    <Route exact path="/chhole" Component={Chhole}/>
    <Route exact path="/dhaniapowder" Component={Dhania}/>
    <Route exact path="/garammasala" Component={Garam}/>
    <Route exact path="/meatmasala" Component={Meat}/>
    <Route exact path="/redchilli" Component={RedChilli}/>
    <Route exact path="/sabjimasala" Component={Sabji}/>
    <Route exact path="/turmericpowder" Component={Turmeric}/>
    <Route exact path="/chanabesan" Component={ChanaBesan}/>
    <Route exact path="/masalachip" Component={MasalaChips}/>
    <Route exact path="/mustard1" Component={Mustard1}/>
    <Route exact path="/mustard5" Component={Mustard5}/>
    <Route exact path="/mustard500" Component={Mustard500}/>
    <Route exact path="/navrang" Component={Navrang}/>
    <Route exact path="/refined" Component={Refined}/>
    <Route exact path="/saltedchips" Component={SaltedChips} />
    <Route exact path="/tea" Component={Tea}/>
    <Route exact path="/pannermasala" Component={Panner}/>
    <Route exact path="/spices" Component={Spice}/>
    <Route exact path="/oils" Component={Oil}/>
    <Route exact path="/snacks" Component={Snack}/>
    <Route exact path="/groceryy" Component={Groceryy}/>
    
   </Routes> 
   <Footer />  
</BrowserRouter>
    </>
  );
}

export default App;
