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

    return (
        <header>
            <ToastContainer />

            <nav
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <a href="/">
                        <img
                            src={
                                isScrolled
                                    ? "https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
                                    : "https://www.wscubetech.com/images/ws-cube-white-logo.svg"
                            }
                            alt="WsCube Tech"
                            className="w-[120px]"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8 font-medium">
                            <li>
                                <a
                                    href="/"
                                    className={`${
                                        isScrolled
                                            ? "text-black hover:text-blue-600"
                                            : "text-white hover:text-blue-300"
                                    }`}
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/book-listing"
                                    className={`${
                                        isScrolled
                                            ? "text-black hover:text-blue-600"
                                            : "text-white hover:text-blue-300"
                                    }`}
                                >
                                    Books
                                </a>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className={`${
                                        isScrolled
                                            ? "text-black hover:text-blue-600"
                                            : "text-white hover:text-blue-300"
                                    }`}
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/wishlist"
                                    className={`flex items-center gap-2 ${
                                        isScrolled
                                            ? "text-black hover:text-blue-600"
                                            : "text-white hover:text-blue-300"
                                    }`}
                                >
                                    <FaHeart />

                                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                                        {Wishlist.length}
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cart"
                                    className={`flex items-center gap-2 ${
                                        isScrolled
                                            ? "text-black hover:text-blue-600"
                                            : "text-white hover:text-blue-300"
                                    }`}
                                >
                                    <FaShoppingCart />

                                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                                        {Cart.length}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className={`md:hidden text-2xl ${
                            isScrolled ? "text-black" : "text-white"
                        }`}
                        onClick={() => setMenuOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
                    menuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
            ></div>

            {/* Offcanvas */}
            <div
                className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
                    menuOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b">
                    <img
                        src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
                        className="w-32"
                        alt=""
                    />

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Menu */}
                <ul className="flex flex-col gap-6 p-6 text-lg font-medium">

                    <li>
                        <a
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-600"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="/book-listing"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-600"
                        >
                            Books
                        </a>
                    </li>

                    <li>
                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-600"
                        >
                            Contact
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/wishlist"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between hover:text-blue-600"
                        >
                            <div className="flex items-center gap-3">
                                <FaHeart />
                                Wishlist
                            </div>

                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                                {Wishlist.length}
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/cart"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between hover:text-blue-600"
                        >
                            <div className="flex items-center gap-3">
                                <FaShoppingCart />
                                Cart
                            </div>

                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                                {Cart.length}
                            </span>
                        </Link>
                    </li>

                </ul>
            </div>
        </header>
    );
}