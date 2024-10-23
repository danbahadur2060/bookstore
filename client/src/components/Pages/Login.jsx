import React from 'react'
import NavBar from '../Navbar/Page'
import Footer from '../Footer/Footer'
import LoginCom from '../Auth/SignIn'

const LoginPage = () => {
  return (
    <>
    <NavBar/>
    <LoginCom />
    <Footer />
    </>
  )
}

export default LoginPage