import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './page/Home'
import Contact from './page/Contact'
import Cart from './page/Cart'
import Wishlist from './page/Wishlist'
import Booklisting from './page/Booklisting'
import BookDetails from './page/BookDetails'
import books from './comman/book'

const siteName = 'WsCube Tech'

function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const bookId = pathname.match(/^\/book-details\/(\d+)\/?$/)?.[1]
    const book = bookId ? books.find((item) => item.id.toString() === bookId) : null

    const titles = {
      '/': 'Home',
      '/book-listing': 'Book Collection',
      '/cart': 'Cart',
      '/wishlist': 'Wishlist',
      '/contact': 'Contact us',
    }

    document.title = `${book?.title || titles[pathname.replace(/\/$/, '')] || 'Book Traker'} - ${siteName}`
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <PageTitle />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/book-listing' element={<Booklisting />} />

        <Route path='/book-details/:id' element={<BookDetails />} />

        <Route path='/cart/' element={<Cart />} />

        <Route path='/wishlist/' element={<Wishlist />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
