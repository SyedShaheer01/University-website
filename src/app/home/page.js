'use client'

import React, { useState } from 'react'
import  Logo from '../assets/logo.png'
import Image from 'next/image'
import '../home/page.css'
import dark from '../assets/dark-arrow.png'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Third from '../about/page'
import Program from '../program/page'
import Campus from '../campus/page'
import { usePathname } from 'next/navigation'
import Testimonial from '../testimonials/page'
import Contact from '../contact/page'
import menu from '../assets/menu-icon.png'
import { Link } from 'react-scroll'
import Footer from '../footer/page'
import { IoMdLogOut } from "react-icons/io";
import Swal from 'sweetalert2'




function Home() {


    const [sticky, setSticky]= useState(false)
    const [hide, setHide]= useState(false)
    const pathname = usePathname()

    
    useEffect(() => {
        // console.log(location.pathname)
        const token =JSON.parse( localStorage.getItem('token') );
        // console.log("token", token)
          if(token){
      if(pathname!=="/home"){
              window.location="home"
              
            }
          
           
        }
        else{
            window.location="form"
        }
    })

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
            // console.log(window.screenY)
        })

    },[])
    
    const router = useRouter()

    const LogOut=()=>{
        localStorage.removeItem('token')
        router.push('/form')
        Swal.fire({
            title: "Logout Successfully!",
            icon: "success"
          });

        
    }

    const menuBtn=()=>{

        hide ? setHide(false):setHide(true)


    }

    return (
    <div className='boss'>

    <div className='parent home'>
        <div className= {`container-sec ${sticky ? 'dark-nav': ''}`}>
            <div className='logo'>
                <Image 
                src={Logo}
                width={180}
                height={40}
                alt=''
                
                />
            </div>
            <div className='list-sec'>
                <ul className={hide ? "" : "menu-hide"}>
                    <li><Link to='home' offset={-50} duration={500} smooth={true}>Home </Link></li>
                    <li> <Link to='program' offset={-50} duration={500} smooth={true}>Program </Link></li>
                    <li> <Link to='about' offset={-150} duration={500} smooth={true}>About us </Link></li>
                    <li> <Link to='campus' offset={-80} duration={500} smooth={true}>Campus </Link></li>
                    <li> <Link to='testimonial' offset={-100} duration={500} smooth={true}>Testimonial </Link></li>
                    <button className='btn'><Link  to='contact' offset={-100} duration={500} smooth={true}>Contact us</Link></button>
                    <IoMdLogOut onClick={LogOut} className='log-icon' color='white' size={20} />
                </ul>
                <Image src={menu} alt='' className='menu-icon' onClick={menuBtn}/>
            </div>


        </div>
            <div className='heading-sec'>
                <h1> we insure better education <br/> for a better world</h1>
                <p>hello and welcom to this university<br/> this is the best university of usa</p>
                    <button className='btn2'>Explore More <Image width={18} src={dark} alt=''/></button>
            </div>


        </div>

        <div id='program'>
            <Program/>
        </div>


            <div>

    <Third/>
            </div>
            <div>
                <Campus/>
            </div>
            <div>
                <Testimonial/>
            </div>

            <div>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
    </div>
  )
}

export default Home
