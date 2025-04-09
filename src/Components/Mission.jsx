import React from 'react'
import mission_img from '../assets/villa2.jpg'

const Mission = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 gap-10 mt-8'>
      {/* Left section */}
      <div className='lg:w-1/2 flex justify-center'>
        <img src={mission_img} alt="" className='w-[550px] h-[580px] rounder-[5px] rounded-tr-[100px] rounded-tl-[100px] object-cover'/>
      </div>
      {/* Right section */}
      <div className='lg:w-1/2 mt-10 lg:mt-20 text-center lg:text-left'>
      <h1 className='text-4xl lg:text-5xl font-bold text-gray-800'>Invest In Your Future Home With The Best</h1>
      <p className='mt-4 text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, minima! Voluptatum sequi earum dignissimos unde assumenda tempora itaque repellat beatae quisquam? Atque, iure dolore eum deleniti temporibus tempore? Numquam, repellat!</p>
      <button className='mt-6 bg-emerald-400 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-emerald-400 transition'>Book An Inspection</button>
      </div>
    </div>
  )
}

export default Mission