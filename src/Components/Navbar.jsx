import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-24 py-3 bg-emerald-400 text-white'>
      {/* Logo */}
      <Link to='/'>
      <div className='text-2xl font-bold'>
        <h2>HPG Properties</h2>
      </div>
      </Link>
      {/* Navlink */}
      <div >
        <ul className='flex space-x-8 text-lg font-semibold'>
          <li className='hover:text-black cursor-pointer'>Home</li>
          <li className='hover:text-black cursor-pointer'>About</li>
          <li className='hover:text-black cursor-pointer'>Properties</li>
          <li className='hover:text-black cursor-pointer'>Mission</li>
        </ul>
      </div>
      {/* button */}
      <div>
        <button className='border border-emerald-600 px-10 py-4 font-semibold rounded-full hover:bg-white hover:text-black'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar