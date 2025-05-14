import React from 'react'
import Container from '../Container'
import { Chip } from '../prod/ProliSnacks';
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
function SaltedChips() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <h1 className='text-center my-2'>SALTED CHIPS</h1>
        <div className="mainpro">
             {Chip.map(val)}
          </div>
        </>
      )
}

export default SaltedChips