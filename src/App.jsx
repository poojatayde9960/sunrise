import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Hero from './pages/Hero'
import Footer from './pages/Footer'
import Product from './pages/Product'
// import Details from './pages/Details'
import Cart from './pages/Cart'
import Details from './pages/Details'
import LoginPage from './pages/LoginPage'
import HeroSection from './pages/HeroSection'
import ContactUs from './pages/ContactUs'

const App = () => {
  return <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Hero />} />
          <Route path='/producs' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details' element={<Details />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/about' element={<HeroSection />} />
          <Route path='/contact' element={<ContactUs />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App