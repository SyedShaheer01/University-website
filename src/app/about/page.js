import React from 'react'
import Image from 'next/image'
import pic from '../assets/about.png'
import icon from '../assets/play-icon.png'
import  '../about/page.css'

function Third() {
  return (
    <div className='third-sec about'>
        <div className='third-con'>
            <div className='left'>
                <Image width={300} src={pic} alt=''/>
                <div className='play-icon'>
                  <Image width={50} src={icon} alt=''/>

                </div>

            </div>
            <div className='right'>
              <h1>ABOUT UNIVERSITY</h1>
              <h2>Nurturing Tomorrows Leaders Today</h2>
              <p>An opportunity to work and upgrade oneself, as well as being involved in an organization
that believes <br/> in gaining a competitive edge and giving back to the community. I’m presently
expanding my solid <br/> experience in UI / UX design.  I focus on using my interpersonal skills to
build good user experience <br/> and my knowledge of the Web, and become an honest asset to the
business. As an individual, <br/> I’m create a strong interest in my employers. I hope to develop
skills in motion design and self-confident <br/> you’ll find me creative, funny and naturally
passionate. I’m a forward thinker, which others may <br/> find inspiring when working as a team.</p>

            </div>

        </div>
      
    </div>
  )
}

export default Third
