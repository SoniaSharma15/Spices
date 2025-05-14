import React from "react";
import Imgbox from "./prod/Imgbox";
import { Spices } from "./prod/ProliSpices";
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
          <img src="img/masale-1.avif" className=" d-block  mx-auto rounded-top" style={{width:"70vw" , "aspect-ratio": "2 / 1"}} alt="spices"/>
      <h1 className="my-3 text-center pt-4">Discover the World of Spices at Hiven Product</h1> 
      <p className="container-fluid">Unleash the flavors of the world with our extensive range of spices. From the aromatic warmth of cinnamon to the bold heat of cayenne pepper, our spices are carefully selected to bring out the best in your cooking. Perfect for both professional chefs and home cooks, our spices will transform your dishes into culinary masterpieces.</p> 
      <p className="text-center pb-2">Buy spices offline, best spices for cooking, organic spices, global spices, fresh spices, exotic spices.</p>  
      <div className="main my-2 pro"data-aos="fade-up">
      {Spices.map(val)}
      </div>
    </div>
     
    </>
  );
}

export default Product;
