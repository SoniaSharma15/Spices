import React from 'react'
import {Mustard1l} from "../prod/ProliOils";
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
function Mustard1() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <h1 className='text-center my-2'>MUSTARD 1Ltr OIL</h1>
        <div className="mainpro">
             {Mustard1l.map(val)}
          </div>
        </>
      )
}

export default Mustard1