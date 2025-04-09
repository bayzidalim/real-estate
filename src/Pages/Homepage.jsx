import React from 'react'
import Hero from '../Components/Hero'
import Search from '../Components/Search'
import EstateList from '../Components/EstateList'
import Mission from '../Components/Mission'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Search />
      <EstateList />
      <Mission />
    </div>
  )
}

export default Homepage