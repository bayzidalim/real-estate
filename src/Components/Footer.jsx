import React from 'react'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedin from '../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='bg-emerald-400 text-black flex flex-col items-center gap-5 px-8 py-20 mt-8'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-6xl'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-semibold'>HPG Properties</h2>
          <p className='text-base leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quo et optio ex facilis nesciunt explicabo, modi perspiciatis repellendus provident.</p>
          <div className='flex items-center gap-4 mt-3'>
            <img src={facebook} alt="" className='w-10 cursor-pointer' />
            <img src={twitter} alt=""  className='w-10 cursor-pointer'/>
            <img src={linkedin} alt="" className='w-10 cursor-pointer' />
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-semibold'>COMPANY</h2>
          <ul className='spec-y-2 text-base'>
            <li>Home</li>
            <li>About Us</li>
            <li>Servoces</li>
            <li>Privicay policy</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5'>
            <h2 className='text-2xl font-semibold'>GET IN TOUCH
            </h2>
            <ul className='space-y-2 text-base'>
              <li>Phone: (123) 456-7890</li>
              <li>Email: support@hpgproperties.com</li>
              <li> Address: 123 Business St, Suite 100, City, State</li>
            </ul>
        </div>
      </div>

 <hr className='w-full border-t-2 border-b-gray-600 my-5 max-w-6xl'/>
      <div className='text-center font-xl'>
        <p>Copyright 2025 Bayzid Alim</p>
      </div>
    </div>
  )
}

export default Footer