import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './comman/Header.jsx'
import Footer from './comman/Footer.jsx'
import MainContext from './comman/MainContext.jsx'

createRoot(document.getElementById('root')).render(
 <MainContext>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </MainContext>
)
