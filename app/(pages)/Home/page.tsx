import React from 'react'
import AppHeader from '../_components/header'
import NavBar from '../_components/navbar'
import ProductPage from '../products/pages'
import Footer from '../_components/footer'


function HomePage() {
  return (
    <div>
      <AppHeader/>
      <NavBar/>
      <ProductPage/>
      <Footer/>
    </div>
  )
}

export default HomePage