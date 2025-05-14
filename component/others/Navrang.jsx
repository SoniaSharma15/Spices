import React from 'react'
import {Navrangg} from "../prod/ProliSnacks";
import { useEffect } from 'react';

import Container from '../Container'
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
function Navrang() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <h1 className='text-center my-2'>NAVRANG NAMKEEN</h1>
        <div className="mainpro">
             {Navrangg.map(val)}
          </div>
        </>
      )
}

export default Navrang