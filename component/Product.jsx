import React from "react";
import Imgbox from "./prod/Imgbox";
import { Ground } from "./prod/Proli";
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
    pouc={n.pouch}
    hindi={n.hindi}
    hindipack={n.hindipack}
    hindipackpouch={n.hindipackpouch}
    />
   )
}


function Product() {


  return (
    <>
    <div>
      <h1 className="my-3 text-center">Our Products</h1>
      <h2 className="text-center">Check Some of our Products </h2>
      <div className="main my-2 pro"data-aos="fade-up">
      {Ground.map(val)}
      </div>
    </div>
     
    </>
  );
}

export default Product;
