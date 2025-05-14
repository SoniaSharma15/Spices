import React from 'react'

function Slider() {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide mt-2" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="active bg-dark"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="active bg-dark"></button>
  </div> */}
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src="img/masale-1.avif" className=" d-block  mx-auto" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/masale-2.avif" className="d-block mx-auto" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/masale-3.avif" className="d-block  mx-auto" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/s1.avif" className="d-block  mx-auto" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/s2.avif" className="d-block  mx-auto" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/s5.avif" className="d-block  mx-auto" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/s6.avif" className="d-block  mx-auto w-100" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/s7.avif" className="d-block  mx-auto w-100" alt="slider"/>
    </div>
    <div className="carousel-item">
      <img src="img/s10.avif" className="d-block  mx-auto w-100" alt="slider"/>
    </div>
  </div>
  </div>
  {/* <button className="carousel-control-prev  " aria-label="car1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next  " aria-label="car2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
  </button> */}
    </>
  )
}

export default Slider