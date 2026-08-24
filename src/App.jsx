import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Contact from './page/Contact'
import Cart from './page/Cart'
import Wishlist from './page/Wishlist'
import Booklisting from './page/Booklisting'
import BookDetails from './page/BookDetails'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/book-listing' element={<Booklisting />} />

      <Route path='/book-details/:id' element={<BookDetails />} />

      <Route path='/cart/' element={<Cart />} />

      <Route path='/wishlist/' element={<Wishlist />} />

      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
