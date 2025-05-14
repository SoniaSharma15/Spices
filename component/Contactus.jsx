import React, { useState } from 'react'
import '../Try.css'
import axios from 'axios';

function Contactus() {
  const [contact,setContact]=useState({
    email:"",
    feedback:"",
    name:"",
    number:""
  });
  const HandleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setContact({
      ...contact,
      [name]:value,
    });
    
  }
 const HandleSubmit=async(e)=>{
  e.preventDefault();
 

try{
  let fData=new FormData();
    fData.append('name',contact.name);
    fData.append('email',contact.email);
    fData.append('feedback',contact.feedback);
    fData.append('number',contact.number);
  const url=await axios.post("http://hivenproducts.in/test/contact",fData);
  

if (url.data){
  alert("Successfully! your data has been inserted.") 
  setContact({...contact,
    email:"",
    feedback:"",
    name:"",
    number:""
  });
}
else{
  alert("Warning! your data has not been inserted.") 
}
}
catch(error){
  console.log(error)
}

 }
        return (
    <><div className='box-design my-2 letsee'>
      
    <div>
    <h2 className='text-center'>Contact us</h2>
        <form method="POST" action="contact.php">
<div className="mb-3 d-flex justify-content-center flex-column w-75 m-auto">
  <label htmlFor="Name" className="form-label text-center fw-bold fs-3">Name</label>
  <input type="text" className="form-control border border-warning" id="Name" name='name' required placeholder='Name' value={contact.name} onChange={HandleInput} ></input>
  
</div>
       <div className="mb-3 d-flex justify-content-center flex-column w-75 m-auto"> 
  <label htmlFor="email" className="form-label text-center fw-bold fs-3">Email address</label>
  <input type="email" className="form-control border border-warning" id="email" placeholder="Please Enter valid email" name='email'  required value={contact.email}  onChange={HandleInput} 
  />
</div>
      
       <div className="mb-3 d-flex justify-content-center flex-column w-75 m-auto"> 
  <label htmlFor="number" className="form-label text-center fw-bold fs-3">Mobile Number</label>
  <input type="number" className="form-control border border-warning" id="number" placeholder="Contact Number"
  name='number'  required value={contact.number}  onChange={HandleInput}
  />
</div>

<div className="mb-3 d-flex justify-content-center flex-column w-75 m-auto">
  <label htmlFor="feedback" className="form-label text-center fw-bold fs-3">Feedback</label>
  <textarea className="form-control border border-warning"  id="feedback" rows="2" name='feedback'  required value={contact.feedback} onChange={HandleInput}placeholder='Feedback'></textarea>
</div>
  <div className="d-flex justify-content-center">

<button type="submit" class="btn btn-primary my-3 p-2 fs-3 my-2" onClick={HandleSubmit}>Submit</button>
  </div>
  </form>
        </div>
  </div>
    </>
  )
}

export default Contactus