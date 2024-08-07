"use client"


import React from 'react'
import Image from 'next/image'
// import one from'../assets/program-1.png'
// import two from'../assets/program-2.png'
import three from'../assets/program-3.png'
import one from'../assets/program-1.png'
import two from'../assets/program-2.png'
// import three from'../assets/program-3.png'
import ione from '../assets/program-icon-1.png'
import itwo from '../assets/program-icon-2.png'
import ithree from '../assets/program-icon-3.png'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Third from '../about/page'
import '../home/page.css'

function Program() {
  return (
    <div className='program-sec'>
                <div className='offer'>

                    <h3>Our Program</h3>
                    <h1>What We Offer</h1>
                </div>
        <div className='pro-second'>
            <div className='program'>
                <Image width={300} height={300} src={one} alt=''/>
                <div className='caption'>
                    <Image  width={60} src={ione} alt=''/>
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <Image width={300} height={300} src={two} alt=''/>

                <div className='caption'>
                    <Image width={60} src={itwo} alt=''/>
                    <p>Master Degree</p>

                </div>
            </div>
            <div className='program'>
                <Image width={300} height={300} src={three} alt=''/>

                <div className='caption'>
                    <Image width={60}  src={ithree} alt=''/>
                    <p>Post Graduation</p>

                </div>
            </div>


      
    </div>
      
    </div>
  )
}

export default Program
