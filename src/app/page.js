"use client"

import Form from "./form/page";
import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function Home() {

  const pathname = usePathname()
  useEffect(() => {
    // console.log(location.pathname)
    const token =JSON.parse( localStorage.getItem('token') );
    // console.log("token", token)
      if(token){
  if(pathname!=="/home"){
          window.location="home"
          
          //  location.href="dashboard.html"
        }
      
        //  console.log("user", user)
        // const uid = user.uid;
        
     else {
        
           if(pathname!=="/form" && location.pathname!=="/register"){
                 window.location= "form"
         
        }
      }
    }
   
})
  

  
  
  return (
    <div>
      <Form/>
    </div>
  );
}
