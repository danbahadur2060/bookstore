import React from 'react'
import NavBar from '../Navbar/Page'
import Hero from '../Hero/Page'
import Footer from '../Footer/Footer'
import Stat from '../stat/Stat'
import Card from '../card/Card'

const Header = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Stat />
    <Card />
    <Footer />
    </>
  )
}

export default Header