import React from 'react'
import hero_img from '../assets/img4.png'

const Hero = () => {
  return (
    <div>
      <div className=' h-[120vh] grid place-items-center bg-emerald-400 rounded-br-[30%] rounded-bl-[30%]'>
        {/* <div className='mt-70'>
          <h2 className='font-bold text-5xl text-center'>4000+</h2>
          <p className='text-lg mt-2'>Properties Listed</p>
        </div> */}
        <div className='text-center'>
          <h1 className='text-6xl font-semibold mt-3 text-white'>Your Dream Home Awaits  </h1>
          <p className='mt-2 text-lg text-gray-900'>Explore the best properties in top locations. Whether you're looking to buy, sell, <br /> or rent, we’re here to make the process simple and stress-free. </p>
          <img src={hero_img} alt="" className='w-[1000px] h-[750px] object-contain -mt-28'/>
        </div>
        {/* <div className='mt-70'>
          <h2 className='font-bold text-5xl text-center'>3000+</h2>
          <p className='text-lg mt-2'>Satisfied Clients</p>
        </div> */}
      </div>
    </div>
  )
}

export default Hero