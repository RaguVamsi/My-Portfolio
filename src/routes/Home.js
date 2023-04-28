import React from 'react'
import NavBar from '../components/NavBar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer';
import Work from '../components/Work'

const home = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default home