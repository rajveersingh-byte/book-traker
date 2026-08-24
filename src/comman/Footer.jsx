import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp, FaBookOpen, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="book-footer">
            <div className="book-footer-inner">
                <div className="book-footer-brand">
                    <Link to="/" className="book-brand">
                    <img src="https://deen3evddmddt.cloudfront.net/static/images/ws-cube-white-logo.svg" alt="WsCube tech" />
                    </Link>
                    <p>Good books, thoughtfully gathered.</p>
                </div>
                <div className="book-footer-links">
                    <div>
                        <h2>Explore</h2>
                        <Link to="/book-listing">All books</Link>
                        <Link to="/wishlist">Wishlist</Link>
                        <Link to="/cart">Your cart</Link>
                    </div>

                    <div>
                        <h2>Company</h2>
                        <Link to="/">About Book Lab</Link>
                        <Link to="/contact">Contact us</Link>
                        <Link to="mailto:support@wscubetech.com">Email us</Link>
                    </div>

                    <div>
                        <h2>Elsewhere</h2>
                        <Link to="https://www.instagram.com/wscubetechindia/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</Link>

                        <Link to="https://x.com/wscubetechindia?lang=en" target="_blank" rel="noreferrer"><FaTwitter /> Twitter</Link>

                    </div>
                </div>
            </div>
            <div className="book-footer-bottom"><span>© 2026 WsCube Tech Made for readers.</span>
            <button className='border border-[#e2d7c7] p-2 rounded-full hover:cursor-pointer' type="button" onClick={scrollToTop} aria-label="Scroll to top"><FaArrowUp /></button></div>
        </footer>

    )
}
