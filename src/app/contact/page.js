"use client"

// import React from 'react'
import '../contact/page.css'
import Image from 'next/image'
import msg from '../assets/msg-icon.png'
import mail from '../assets/mail-icon.png'
import phone from '../assets/phone-icon.png'
import location from '../assets/location-icon.png'
import arrow from '../assets/white-arrow.png'
import React, { useState } from 'react'


function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8216f0a4-0e41-4514-88a2-ebd7d7c0548c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-sec'>
            <h3>Contact us</h3>
            <h1>Get in Touch</h1>

        </div>

        <div className='contact-wrap'>


        <div className='left-contact'>
            <h2>Send us a message  <Image width={25} src={msg} alt=""/></h2>

            <p>feel free to react out throught contact form or find our contact <br/>
                information below. Your feedback question and suggestions<br/>
                are important to us as we strive to provide exceptional service <br/>
                to our university community.
            </p>

            
            <div className='details'>

            <span> <Image width={18} src={mail} alt=''/> Syedshaheer266@gmail.com</span>
            <span> <Image width={18} src={phone} alt=''/> 03313804062</span>
            <span> <Image width={17} src={location} alt=''/> Pakistan ,Karachi</span>
            </div>

        </div>

        <div className='right-contact'>

        
                <form onSubmit={onSubmit}>

                
                <p>Your name</p>
                <input type='text' placeholder='Enter your name' id="name" required/>

                <p>Your email</p>
                <input type='email' placeholder='Enter your email' id="email"  required/>
                
                <p>Your message</p>
                <textarea id='message' rows={6} placeholder='Enter your message'/>                
                <button type='submit' className='contact-btn'>Submit Now  <Image width={15} src={arrow} alt=''/></button>
                </form>

                <span className='msg'>{result}</span>

        </div>

        </div>
      
    </div>
  )
}

export default Contact
