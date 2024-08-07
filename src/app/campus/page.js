import React from 'react'
import pic1 from '../assets/gallery-1.png'
import pic2 from '../assets/gallery-2.png'
import pic3 from '../assets/gallery-3.png'
import pic4 from '../assets/gallery-4.png'
import arrow from '../assets/white-arrow.png'
import Image from 'next/image'
import '../campus/page.css'

function Campus() {
  return (
    <div className='campus'>
                <div className='campus-sec'>

                    <h3>GALLERY</h3>
                    <h1>Campus Photo</h1>
                </div>

                <div className='campus-img'>
                    <div className='campus-wrap'>
                        <Image width={220} src={pic1} alt=''/>
                    </div>
                    <div className='campus-wrap'>
                        <Image width={220} src={pic2} alt=''/>
                    </div>
                    <div className='campus-wrap'>
                        <Image width={220} src={pic3} alt=''/>
                    </div>
                    <div className='campus-wrap'>
                        <Image width={220} src={pic4} alt=''/>
                    </div>
                       
    

                </div>

                <div className='campus-btn'>
                    <button className='camp-btn'> See more here  <Image width={20} src={arrow} alt=''/> </button>

                </div>
        

      
    </div>
  )
}

export default Campus
