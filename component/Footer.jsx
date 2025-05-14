import React from 'react'
import {FaInstagramSquare,FaLinkedinIn,FaYoutubeSquare,FaWhatsappSquare,FaTwitter,FaFacebookSquare} from "react-icons/fa";
function Footer() {
  return (
    <><footer className="navbar-light ">
      <div className="co">
      <h4 className='text-center'>Follow us </h4>
      <div className='account d-flex flex-row justify-content-center pt-5'>
      <button><a className="l1"  aria-label="insta"  rel="canonical"  href="https://www.instagram.com/srisai_enterprises7?igsh=OHhwcHNiYjJ4b3J3"><FaInstagramSquare/></a></button>
      <button><a  className="l2" aria-label="linkdin"  rel="canonical"  href="https://www.linkedin.com/in/satyendra-sharma-285275318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a></button>
      <button><a className="l1"  aria-label="relaxzone"  rel="canonical"  href="https://www.youtube.com/@Hiven-sb8sb"><FaYoutubeSquare/></a></button>
      <button><a className="l3"  aria-label="whatsapp"  rel="canonical"  href="https://api.whatsapp.com/send?phone=9452785929&amp;text= Hello I am Interested "><FaWhatsappSquare/></a> </button>
      <button><a className="l2"  aria-label="twiteer"  rel="canonical"  href="https://x.com/anjali990971?t=YwnArdO3T8HA-2iYynkUzw&s=08 "><FaTwitter/></a>
      </button>
      <button><a className="l2"  aria-label="facebook"  rel="canonical"  href="https://www.facebook.com/profile.php?id=61559917705746&mibextid=ZbWKwL"><FaFacebookSquare/></a>
      </button>
      </div>
      </div>
      <div className="co pe-3">
          <h4 className='text-center'>Contacts</h4>
   <p>
 Manufacturer & Supplier of: Sri Sai Enterprises®
Salempur, Mohan Road, Lucknow-227107 Uttar Pradesh
    </p>       
          <p>India</p>
          <p>  <a href="tel:+91 9452785929" className="link-light text-decoration-none">+91 
9452785929</a> <a href="tel:+91 9455623036" className="link-light text-decoration-none">+91 9455623036</a></p>

          <p>
          srisaienterprises9452@gmail.com</p>
          <p>info@hivenproducts.in
          </p>
      </div>
    </footer>
    <div className="foot bg-dark text-light d-flex justify-content-center">
      Copyright &copy; Hiven Masala 2024-2025
    </div>
    </>
  )
}

export default Footer