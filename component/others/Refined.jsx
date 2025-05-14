import React from 'react'
import {Refinedo} from "../prod/ProliOils";
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
function Refined() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <h1 className='text-center my-2'>SOYA REFINED OIL</h1>
    <div className="mainpro">
         {Refinedo.map(val)}
      </div>
    </>
  )
}

export default Refined