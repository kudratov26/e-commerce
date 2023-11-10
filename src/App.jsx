import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
    </div>
  )
}
