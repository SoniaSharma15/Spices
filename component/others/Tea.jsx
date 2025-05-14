import React from 'react'
import Container from '../Container'
import { Teaa } from '../prod/ProliGrocery';
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
function Tea() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
        <h1 className='text-center my-2'>HIVEN TEA</h1>
        <div className="mainpro">
             {Teaa.map(val)}
          </div>
        </>
      )
}

export default Tea