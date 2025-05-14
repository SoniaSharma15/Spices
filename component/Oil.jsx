import React from "react";
import Imgbox from "./prod/Imgbox";
import {Oils} from "./prod/ProliOils";
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
      <img src="img/masale-3.avif" className="d-block  mx-auto rounded-top" style={{width:"70vw" , "aspect-ratio": "2 / 1"}} alt="oils"/>
      <h1 className="my-3 text-center pt-4">Pure and Natural Oils for Cooking and Wellness</h1>
    <p className="container-fluid">Explore our range of high-quality oils, perfect for both culinary use and wellness. From extra virgin olive oil to nourishing coconut oil, our products are 100% natural and packed with health benefits. Elevate your cooking and self-care routines with oils that are as pure as nature intended.</p>
    <p className="text-center"> Buy oils offline, cooking oils, essential oils ,Refined oils , Mustard oils and this oils are good for health. </p>
      <div className="main my-2 pro"data-aos="fade-up">
      {Oils.map(val)}
      </div>
    </div>
     
    </>
  );
}

export default Product;
