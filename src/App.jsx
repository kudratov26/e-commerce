import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}
