import React from 'react';
import {ChaanaBesan} from "../prod/ProliGrocery";
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
    hindi={n.hindi}
    hindipack={n.hindipack}
    />);}
function ChanaBesan() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <h1 className='text-center my-2'>CHANA BEASN</h1>
        <div className="mainpro">
             {ChaanaBesan.map(val)}
          </div>
        </>
      )
}

export default ChanaBesan