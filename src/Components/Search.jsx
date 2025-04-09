import React, { useContext } from 'react'
import { FaDollarSign, FaHome, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import { HomeContext } from '../Context/HomeContext'

const Search = () => {

  const {homes, country, setCountry, property, setPrice, price, setProperty, handleSearch} = useContext(HomeContext)

  return (
    <div className='absolute flex items-center gap-4 w-[70%] bg-white p-4 rounded-lg -mt-38 ml-50 shadow-md'>
      {/* Location */}
      <div className='flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg'>
        <FaMapMarkerAlt className='text-emerald-400 text-2xl'/>
        <div>
          <p className='text-gray-800 font-semibold'>Location (any) </p>
          <select value={country}
          onChange={(e)=> setCountry(e.target.value)}
           className='border-none outline-none bg-transparent text-gray-700 w-full mt-1'>
            <option value="default">Select your place</option>
            <option value="United State">United State</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>
      </div>
      {/* Property Type */}
      <div className='flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg'>
        <FaHome className='text-emerald-400 text-2xl'/>
        <div>
          <p className='text-gray-800 font-semibold'>Property type (any)</p>
          <select value={property}
          onChange={(e) => setProperty(e.target.vale)}
           className='border-none outline-none bg-transparent text-gray-700 w-full mt-1'>
            <option value="default">Select your place</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>
      </div>
      {/* Price range */}
      <div className='flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg'>
        <FaDollarSign className='text-emerald-400 text-2xl'/>
        <div>
          <p className='text-gray-800 font-semibold'>Price range (any)</p>
          <select value={price}
          onChange={(e)=> setPrice(e.target.value)}
          className='border-none outline-none bg-transparent text-gray-700 w-full mt-1' >
            <option value="default">Select price range</option>
            <option value="0-200000">0-200000</option>
            <option value="200001-300000">200001-300000</option>
            <option value="300001-400000<">300001-400000</option>
          </select>
        </div>
      </div>
      {/* Search Button */}
      <button onClick={handleSearch}
       className='bg-emerald-400 text-white px-6 py-3 rounded-lg cursor-pointer text-xl flex items-center justify-center hover:bg-cyan-700 transition'>
        <FaSearch />
      </button>
    </div>
  )
}

export default Search