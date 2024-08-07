"use client"

// import { useForm } from 'react-hook-form';
// import TextField from '@mui/material/TextField';

// import { useState } from 'react';
import { useState,useEffect } from 'react'
import '../form/page.css'
import Link from 'next/link';
// import { data } from 'autoprefixer';
import axios from 'axios';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'






 function Register() {
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

const pathname =usePathname()
  // let flag=true;

  useEffect(() => {
    const token =JSON.parse( localStorage.getItem('token') );
    if(token){

      if(pathname!=="/home"){
        window.location="home"
        
        //  location.href="dashboard.html"
      }
      //  console.log("user", user)
      // const uid = user.uid;
      
   else {
     
     if(pathname!=="/form" && pathname!=="/register"){
       window.location= "form"
       
      }
    }
  }
  // else{
  //   location.href= "/form"


  // }
})

const router = useRouter()

  const Btn =()=>{


      const user = {

        name: name,
        phone: Number(phone),
        email: email,
        password: pass

      }
    // console.log("user",user)

     axios.post('https://uni-backend.vercel.app/api/users/signup',user)
    .then(res=>{
      router.push('/form')
      console.log(res)
      Swal.fire({
        title: "Register Successfully!",
        icon: "success"
      });

    })
    .catch(err=>{
      console.log(err)
      Swal.fire({
        icon: "error",
        title: err.response.data.message,
      });
    })


  }
  return(

    <div className="container2">
      <div className='header'>

<div className='form'>

      

            <h1>SIGNUP</h1>
            <div className="row">
            <div className="input-group">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text"  id="name" required/>
            
            <label htmlFor="name">your name</label>
        </div>
        
            <div className="input-group">
            <input value={email} onChange={(e)=>setEmail(e.target.value.trim())} type="email"  id="email" required/>
            <label htmlFor="email"> your email</label>
            </div>

        <div className="input-group">
            <input value={phone} onChange={(e)=>setPhone(e.target.value.trim())} type="number"  id="number" required/>
            <label htmlFor="number"> phone number</label>
        </div>
            </div>

            <div className="input-group">
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password"  id="pass" required/>
            <label htmlFor="pass">your password</label>
            </div>

           
            <div className='log-btn'>

            <button onClick={Btn}>submit</button>
            <p className='para'>Already have an account? <Link style={{color:"blue"}} href={'/form'}>Login </Link></p>
            </div>
      
        
      </div>

      </div>
    </div>
  )
  

}
export default Register