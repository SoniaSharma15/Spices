import React from "react";
import Imgbox from "./prod/Imgbox";
import { Grocery } from "./prod/ProliGrocery";
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
    />
   )
}


function Product() {


  return (
    <>
          <div className="pt-2">
      <img src="img/s6.avif" className=" d-block  mx-auto rounded-top" style={{width:"70vw" , "aspect-ratio": "2 / 1"}} alt="grocery"/>
      <h1 className="my-3 text-center pt-4">Your Trusted Source for Everyday Grocery Essentials</h1> 
      <p className="text-center">Explore our range of premium teas and find your perfect cup.Hiven Product offers a wide variety of grocery items to meet all your daily needs. From pantry staples to specialty items, our products are carefully chosen for their quality and value. Stock up your kitchen with everything you need, all in one convenient offline store.</p>   
      <p className="text-center"> Buy groceries offline, organic groceries, healthy grocery products, pantry essentials.</p>
      <div className="main my-2 pro"data-aos="fade-up">
      {Grocery.map(val)}
      </div>
    </div>
     
    </>
  );
}

export default Product;
