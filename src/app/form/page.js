"use client"

// import { useForm } from 'react-hook-form';
// import TextField from '@mui/material/TextField';
import axios from 'axios';
// import { useState } from 'react';
import { useEffect, useState } from 'react'
import '../form/page.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Swal from 'sweetalert2'
import ClipLoader from "react-spinners/ClipLoader";









 function Form() {
   
   
   const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [login,setLogin]=useState(false);
  const [loder,setLoder]=useState(false);

  const pathname =usePathname()
  
  
  useEffect(() => {
    const token =JSON.parse(localStorage.getItem('token'));
    // console.log("token", token)
      if(token){

        if(pathname !=="/home"){
          window.location="home"
          
        }
        
     
        
     else {
       
       if(pathname!=="/form" && pathname!=="/register"){
         window.location= "form"
         
        }
      }
    }
    //
      })
      
      const router = useRouter()
  const Btn=()=>{

    setLoder(true)

    const user={

      email: email.trim(),
      password: pass.trim()
    }

    axios.post('https://uni-backend.vercel.app/api/users/userlogin',user)
    .then(res=>{
      console.log(res)
      router.push('/home')
      setLoder(false)
      Swal.fire({
        title: "Login Successfully!",
          icon: "success"
        });
        const token = res.data.token;
        localStorage.setItem('token',JSON.stringify(token))
        
        
      })
    .catch(err=>{
      console.log(err)
      Swal.fire({
        icon: "error",
        title: err.response.data.message,
      });
      setLoder(false)
    })

  }
  
  return(

    <div className="container" login={login} setLogin={setLogin}>
      <div className='header2'>

      

            <h1>Login</h1>
            <div className="row">
        
        
            </div>

            <div className="input-group">
            <input value={email} onChange={(e)=>setEmail(e.target.value.trim())} type="email"  id="email" required />
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i> your email</label>
            </div>
            <div className="input-group">
            <input value={pass} onChange={(e)=>setPass(e.target.value.trim())} type="password" id="pass"  required/>
            <label htmlFor="pass"><i className="fa-solid fa-envelope"></i> your password</label>
            </div>

           
            <div className='log-btn'>

            <button onClick={Btn}>submit {loder ? <ClipLoader size={15} color='white'/>:<></>} </button>
            <p className='para'>Dont have an account? <Link style={{color:"blue"}} href={'/register'}>Signup </Link></p>
            </div>
      

      </div>
    </div>
  )
  

}
export default Form