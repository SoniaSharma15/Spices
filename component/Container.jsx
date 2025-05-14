import React from 'react'
import './prod/Proli'

function Container(props) {
  return (
    <>
    <div className="main box-design my-2 ">
      <div className="left order-1">
        <p>
          {props.desc}
          </p>
          <p>{props.ing}</p>
          <p>
        {props.pck}
          </p>
          <p>
        {props.pouch}
          </p>
          <p>
        {props.hindi}
          </p>
          <p>
        {props.hindipack}
          </p>
          <p>
        {props.hindipackpouch}
          </p>
        </div>
       <div className="right order-0">
         <img src={props.imgsrc} alt={props.alt} />
        </div>
    </div>
    </>
  )
}

export default Container