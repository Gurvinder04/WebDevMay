import React from 'react'
import {FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa'


function Footer() {
  return (
    // <h2>Footer REMAINS STATIC ONLY THE CONTENT WITHIN HEADER AND FOOTER CHANGES</h2>
    <div className='bg-danger text-light text-center mt-4'>
      <h1 className='styling pt-5'>Cinopa</h1>
      <p>copyright © 2022 cinopa,Inc</p>
      <p className='pb-4 mb-0 end'>Legal Stuff<span>|</span>Privacy Policy<span>|</span>Security</p>
    </div>
  
  )
}

export default Footer