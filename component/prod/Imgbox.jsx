import React from 'react'
import './Proli';
import { NavLink } from 'react-router-dom';
function Imgbox(props) {
  return (
    <>
    <div className='aspect box-design2 d-flex flex-column text-center ' data-aos="fade-up">
              <NavLink to={`${props.itm}`}>
  <img className='let'
          src={props.imgsrc} alt={props.alt} />
          </NavLink>
          <hr className='mp'/>
          <span>{props.name}</span>
          <hr className='mp'/>
          <span>{props.pck}</span>
        </div>    
        </>
  )
}

export default Imgbox