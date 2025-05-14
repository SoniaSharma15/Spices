import React from "react";
import Imgbox from "./prod/Imgbox";
import { Snacks } from "./prod/ProliSnacks";
function val(n){
   return(
    <Imgbox
    imgsrc={n.imgsrc}
    alt={n.alt}
    key={n.id}
    name={n.name}
    pck={n.packsize}
    ing={n.ingredients}
    itm={n.item}
    hindi={n.hindi}
    pouc={n.pouch}
    />
   )
}


function Product() {


  return (
    <>

    <div className="pt-2">
          <img src="img/masale-2.avif" className=" d-block  mx-auto rounded-top" alt="snacks" style={{width:"70vw" , "aspect-ratio": "2 / 1"}}/>
      <h1 className="my-3 text-center pt-4">Our Products</h1>
    
      <div className="main my-2 pro"data-aos="fade-up">
      {Snacks.map(val)}
      </div>
    </div>
     
    </>
  );
}

export default Product;
