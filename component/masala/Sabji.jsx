import React from 'react';
import {Sabjim} from "../prod/ProliSpices";
import Container from '../Container';
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
    pouch={n.pouch}
    hindi={n.hindi}
    hindipack={n.hindipack}
    hindipackpouch={n.hindipackpouch}
    />);}
function Sabji() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <h1 className='text-center my-2'>SABJI MASALA</h1>
        <div className="mainpro">
             {Sabjim.map(val)}
          </div>
        </>
      )
}

export default Sabji