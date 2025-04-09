import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import EstateDetails from './Pages/EstateDetails'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* Renders the Navbar component at the top of every page */}
      <Navbar />
            {/*  Defines the main routing structure of the application */}
      <Routes>
          <Route path='/' element={<Homepage />} />
          {/* create a dynamic route, and ':id' is a dynamic parameter that allows fetching details for a specific property */}
          <Route path='/home/:id' element={<EstateDetails />} />
      </Routes>
      {/* Renders the Footer component at the bottom of every page */}
      <Footer />
    </div>
  )
}

export default App