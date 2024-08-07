"use client"

import React from 'react'
import '../testimonials/page.css'
import Image from 'next/image'
import pic from '../assets/back-icon.png'
import pic2 from '../assets/next-icon.png'
import profile from '../assets/user-1.png'
import profile2 from '../assets/user-2.png'
import profile3 from '../assets/user-3.png'
import profile4 from '../assets/user-4.png'
import { useRef } from 'react'
import next from 'next'

function Testimonial() {

    const slider = useRef()
    let tx = 0

    const next=()=>{
        if(tx > -50){
            tx -= 25

        }

        slider.current.style.transform = `translateX(${tx}%)`
        // slider.current.style =`transform: translateX(-0%);`
    }
    const back=()=>{
        if(tx < 0){
            tx += 25

        }

        slider.current.style.transform = `translateX(${tx}%)`
        // slider.current.style =`transform: translateX(-0%);`
    }


  return (
    <div className='testimonial'>
        <div className='testi-sec'>
            <h3>Testimonials</h3>
            <h1>What students says</h1>

        </div>
        <div className='parent-test'>
            <Image onClick={back} src={pic} alt='' className='next-arr'/>
            <Image  onClick={next} src={pic2} alt='' className='back-arr'/>

            <div className='slide'>

                    <ul ref={slider}>
                    <li>
            <div className='slider'>
                <div className='user-info'>
                    <Image  src={profile} alt=''/>

                    <div>
                        <h3>Williom Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>feel free to react out throught contact form
                    <br/>
                    information below. Your feedback question 
                    <br/>
                    are important to us as we strive to provide 
                    <br/>
                   
                    {/* alxhahxahxhahxhdkhjxjjjx */}
                    {/* axalxhalxhahxhbbb */}
                  
                    
                    </p>
            </div>
                    </li>
                   
                    <li>
            <div className='slider'>
                <div className='user-info'>
                    <Image  src={profile2} alt=''/>

                    <div>
                        <h3>Williom Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>hello hhhhye yes wht are they sgsggs
                    <br/>
                    no way yes this is the best og the all
                    <br/>
                    yes very good your arehh nice to here
                    <br/>
                   
                    {/* alxhahxahxhahxhdkhjxjjjx */}
                    {/* axalxhalxhahxhbbb */}
                  
                    
                    </p>

            </div>
                    </li>
                   
                    <li>
            <div className='slider'>
                <div className='user-info'>
                    <Image width={100} src={profile3} alt=''/>

                    <div>
                        <h3>Williom Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>hello hhhhye yes wht are they sgsggs
                    <br/>
                    no way yes this is the best og the all
                    <br/>
                    yes very good your arehh nice to here
                    <br/>
                   
                    {/* alxhahxahxhahxhdkhjxjjjx */}
                    {/* axalxhalxhahxhbbb */}
                  
                    
                    </p>
            </div>
                    </li>
                    <li>
            <div className='slider'>
                <div className='user-info'>
                    <Image width={100} src={profile4} alt=''/>

                    <div>
                        <h3>Williom Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>hello hhhhye yes wht are they sgsggs
                    <br/>
                    no way yes this is the best og the all
                    <br/>
                    yes very good your arehh nice to here
                    <br/>
                   
                    {/* alxhahxahxhahxhdkhjxjjjx */}
                    {/* axalxhalxhahxhbbb */}
                  
                    
                    </p>
            </div>
                    </li>
                   
                    </ul>

            </div>

        </div>
      
    </div>
  )
}

export default Testimonial
