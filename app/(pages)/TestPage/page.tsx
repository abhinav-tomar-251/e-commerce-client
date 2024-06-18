import React from 'react'
import AppHeader from '../_components/header'
import NavBar from '../_components/navbar'
import Footer from '../_components/footer'
import RegisterForm from '../_components/RegisterForm'

function TestPage() {
  return (
    <main className=''>
        <AppHeader/>
        <NavBar/>
       <RegisterForm/> 
        <Footer/>
    </main>
  )
}

export default TestPage