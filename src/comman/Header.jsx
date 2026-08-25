import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./MainContext";
import { ToastContainer } from "react-toastify";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { Cart, Wishlist } = useContext(CartContext);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinkClass = ({ isActive }) =>
        `book-nav-link ${isActive ? "book-nav-link-active" : ""}`;

    return (
        <header>
            <ToastContainer />

            <nav
                className={`book-header ${isScrolled ? "book-header-scrolled" : ""}`}
            >
                <div className="book-header-inner">
                    <Link to="/" className="book-brand" aria-label="Book Lab home">
                        <img className="max-w-[150px]"
                            src={isScrolled
                                ? "https://deen3evddmddt.cloudfront.net/static/images/wscube-tech-logo-2.svg"
                                : "https://deen3evddmddt.cloudfront.net/static/images/ws-cube-white-logo.svg"}
                            alt="WsCube Tech"
                        />
                    </Link>

                    <div className="book-desktop-menu">
                        <Link to="/" className={navLinkClass}>Home</Link>
                        <Link to="/book-listing" className={navLinkClass}>Browse books</Link>
                        <Link to="/contact" className={navLinkClass}>Contact</Link>
                        <Link to="/wishlist" className="book-icon-link" aria-label={`Wishlist, ${Wishlist.length} items`}>
                            <FaHeart /><span>{Wishlist.length}</span>
                        </Link>
                        <Link to="/cart" className="book-cart-link">
                            <FaShoppingCart /> Cart <span>{Cart.length}</span>
                        </Link>
                    </div>

                    <button
                        className="book-menu-button"
                        aria-label="Open navigation menu"
                        onClick={() => setMenuOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            <div
                onClick={() => setMenuOpen(false)}
                className={`book-menu-overlay ${menuOpen ? "book-menu-overlay-open" : ""}`}
            ></div>

            <div
                className={`book-mobile-menu ${menuOpen ? "book-mobile-menu-open" : ""}`}
            >
                <div className="book-mobile-menu-header">
                    <Link to="/" className="book-brand" onClick={() => setMenuOpen(false)}>
                        <img
                            src="https://deen3evddmddt.cloudfront.net/static/images/wscube-tech-logo-2.svg"
                            alt="WsCube Tech"
                        />
                    </Link>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="book-close-button"
                        aria-label="Close navigation menu"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="book-mobile-links">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/book-listing" onClick={() => setMenuOpen(false)}>Browse books</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    <Link to="/wishlist" onClick={() => setMenuOpen(false)}><span><FaHeart /> Wishlist</span><b>{Wishlist.length}</b></Link>
                    <Link to="/cart" onClick={() => setMenuOpen(false)}><span><FaShoppingCart /> Cart</span><b>{Cart.length}</b></Link>
                </div>
            </div>
        </header>
    );
}