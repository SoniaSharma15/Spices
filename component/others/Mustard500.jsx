import React from 'react'
import {Mustard500ml} from "../prod/ProliOils";
import Container from '../Container'
import { useEffect } from 'react';

function val(n){
  return(
<Container
    imgsrc={n.imgsrc}
    alt={n.alt}
    key={n.id}
    desc={n.dec}
    categ={n.categ}
    pck={n.packsize}
    name={n.name}
    ing={n.ingredients}
    hindi={n.hindi}
    hindipack={n.hindipack}
    />);}
function Mustard500() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <h1 className='text-center my-2'>MUSTARD 500Ml OIL</h1>
        <div className="mainpro">
             {Mustard500ml.map(val)}
          </div>
        </>
      )
}

export default Mustard500