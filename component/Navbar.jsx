import {NavLink } from "react-router-dom";
import React from 'react'

function Navbar(props){
 
return(<><nav className={`navbar navbar-expand-lg navbar-${props.Colour==="#000000"?"dark":"light"}`}  style={{background:props.Colour}}>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className=""> */}
      <ul className="navbar-nav collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
        <li className="nav-item">
        <NavLink to="/home"  className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about"  className="nav-link active" aria-current="page">AboutUs</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact" className="nav-link active" aria-current="page">ContactUs</NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink to="/try" className="nav-link active" aria-current="page">Try</NavLink>
        </li> */}
        <li className="nav-item dropdown">
        <NavLink to="/product"  className="nav-link active dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Products
          </NavLink>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink to="/oils" className="dropdown-item" >Oils</NavLink></li>
            <li><NavLink to="/snacks" className="dropdown-item">Sancks|Chips</NavLink></li>
            <li><NavLink to="/spices" className="dropdown-item">Spices|Masala</NavLink></li>
            <li><NavLink to="/groceryy" className="dropdown-item">Grocery</NavLink></li>
            <li><NavLink to="/product" className="dropdown-item">All Products</NavLink></li>
        </ul>  
        </li>      
        {/* <li className="nav-item">
        <NavLink to="/product" className="nav-link active" aria-current="page">Products</NavLink>
        </li> */}
        <li>
        <label htmlFor="color"></label>
        <input type="color" name="color" id="color" onChange={props.on}  className="mx-2"/>
        </li>
      </ul>
     
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
  {/* </div> */}
</nav>
</>

);}
export default Navbar; 