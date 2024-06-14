import React from 'react'
import ProductPage from '@/app/(pages)/products/pages'
import Footer from './(pages)/_components/footer'
import AppHeader from './(pages)/_components/header'
import NavBar from './(pages)/_components/navbar'

function Home() {
  return (
    <div>
      <AppHeader/>
      <NavBar/>
      <ProductPage/>
      <Footer/>
    </div>
  )
}

export default Home