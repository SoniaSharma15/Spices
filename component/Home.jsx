import React from 'react'
import Slider from './Slider'
import Product from './Product'
function Home() {
  return (
    <>  

    <Slider></Slider>
    <h1 className='text-center my-6 pt-3'>Welcome to Hiven Product – Your One-Stop Shop for Quality Spices, Teas, Oils, and Grocery Essentials!</h1>
    <p className='container-fluid'>
    At Hiven Product, we are committed to bringing you the finest selection of spices, teas, oils, and everyday grocery items. Our products are sourced from trusted suppliers to ensure you get the best quality every time. Whether you're a culinary enthusiast looking to elevate your dishes with exotic spices or a tea lover searching for the perfect blend, we have something for everyone.
    </p>
    <p className='container-fluid'>At Hiven Product, we believe in the power of quality ingredients. Our mission is to provide our customers with the best products that nature has to offer. With a focus on sustainability and ethical sourcing, we ensure that every item in our store is of the highest standard. Join us on a journey of flavor and wellness.</p>
    <p className='text-center'>
    Hiven products provide high Quality spices, premium teas, essential oils, grocery products, online spice store, natural ingredients, healthy groceries.
    </p>
    <h1 className='text-center my-6 pb-5'>Spice Up Your Life with Every Bite!</h1>
    <div className="container">
    <div className="s3  row row-cols-2 row-cols-lg-3 g-3">
     <div className="col">
      <div className="lg d-flex justify-content-center">
        <img src="img/hy.avif" alt="Slider1" />
      </div>
       <h5 className='head text-center'>Packed Hygienically</h5>
      <div className='font-small'>Hiven Spices are packed hygienically for unmatched freshness and quality.
</div >
     </div>
     <div className="col">
     <div className="lg d-flex justify-content-center">        
      <img src="img/best.avif" alt="Slider2" />
     </div>
       <h5 className='head text-center'>Picked From Best Farms</h5>
      <div className='font-small'>Hiven Spices are handpicked from the finest farms for exceptional flavor and quality.</div>
     </div>
     <div className="col">
     <div className="lg d-flex justify-content-center">      
        <img src="img/variety.avif" alt="Slider3" />
     </div>
      <h5 className='head text-center'>Variety</h5>
      <div className='font-small'>Having the extensive variety of spices, from the aromatic warmth of cinnamon to the vibrant heat of chili peppers, each carefully selected to elevate your culinary creations.</div >
     </div>
    </div>
    <img className="s1" src="./img/right.avif" alt="bg1" />
    <img className="s2" src="./img/left.avif" alt="bg2" />
   </div>
   <div className="guttr row align-items-md-stretch my-5">
      <div className="col-md-6 my-4">
        <div className="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Welcome to Hiven Products</h2>
          <p>Your premier destination for top-quality spices, oils, and chips. We take pride in offering the finest selection of ingredients and snacks that elevate your culinary experience. Our commitment to quality ensures that every product we provide meets the highest standards of freshness and flavor.</p>
          {/* <button className="btn btn-outline-light" type="button">Products</button> */}
        </div>
      </div>
      <div className="col-md-6 my-2">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Explore Our Range</h2>
          <p>- *Spices:* Discover a world of flavors with our extensive range of spices, including black pepper, cumin, turmeric, and more.</p><p>
- *Oils:* Enhance your cooking with our selection of high-quality oils, perfect for frying, baking, and dressing.
</p><p>
- *Chips:* Indulge in our crispy, delicious chips made from the finest ingredients and available in a variety of flavors.</p>
          {/* <button className="btn btn-outline-secondary" type="button">Example button</button> */}
        </div>
      </div>
    </div>
   
    <Product></Product>
 
    <div className="h-100 p-5 bg-light border rounded-3 my-3">
          <h2>Why Choose Hiven Products?</h2>
          <p>- *Premium Spices:* Our spices are sourced from the best regions around the world, ensuring rich aromas and bold flavors. Each spice is carefully selected and processed to maintain its natural essence and potency.</p><p>
          - *Pure Oils:* We offer a variety of oils, including extra virgin olive oil, coconut oil, and more. Our oils are cold-pressed and free from additives, preserving their natural taste and health benefits.</p>
          <p>
          - *Delicious Chips:* Our chips are crafted from the finest ingredients, offering a perfect balance of crunch and flavor. Whether you prefer classic potato chips or exotic vegetable chips, we have something to satisfy every craving.  </p> 
          
          <p>-*Quality You Can Trust:*

At Hiven Products, we understand that quality is non-negotiable. That's why we implement rigorous quality control measures at every step of our process. From sourcing to packaging, our goal is to deliver products that you can trust and enjoy.</p>
          <p>-*Customer Satisfaction:*

          Our customers are at the heart of everything we do. We are dedicated to providing excellent service and ensuring that your experience with Hiven Products is exceptional. Your satisfaction is our priority, and we are always here to assist you with any questions or concerns.
          </p>                    
        </div>
    <div>

      

    </div>
    <div className="banner d-flex m-2 mt-4">
      <div className="banner-img">
        <img src="img/s8.avif" alt="banner1" />
      </div>
      <div className="bannerinfo text-center text-light w-50">
      SPICE UP YOUR LIFE WITH OUR EXOTIC BLENDS
      </div>
      <div className="banner-img">
        <img src="img/s7.avif" alt="banner2" />
      </div>
      <div className="bannerinfo text-center text-light w-50">
        FROM FARM TO TABLE, TASTE THE DIFFERENCE.</div>
    </div>
    <div className="main2">
      <div className="sticky-page text-center text-light">
<p className='fs-4 w-75'> Healthy Herbs</p>       
<p className='fs-3 text-warning w-75'>
Variety's the very spice of life,
That gives it all its flavor.
</p>
<p className='fs-4 w-75'>
Enhance Every Dish: Our spices add flavor, depth, and richness to your culinary creations, making every meal an exquisite experience
</p>
        </div>
    </div>
    <div className="h-100 p-5 text-white bg-dark rounded-3 my-4">
          <h2>*Contact Us*</h2>
          <p>Ready to elevate your culinary experience? Visit our offline store today and explore our premium selection of spices, oils, and chips. For any inquiries, feel free to contact us at srisaienterprises9452@gmail.com</p>
          <p>Thank you for choosing Hiven Products – where quality meets flavor.
          </p>
        </div>

    </>
  )
}

export default Home