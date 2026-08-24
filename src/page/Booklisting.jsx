import React, { useState, useMemo, useContext} from 'react'
import { FaStar, FaShoppingCart, FaHeart, FaFilter } from "react-icons/fa";
import books from '../comman/book';
import { Link } from 'react-router-dom';
import { CartContext } from '../comman/MainContext';
import { toast } from 'react-toastify';

export default function Booklisting() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [author, setAuthor] = useState("All");
    const [brand, setBrand] = useState("All");
    const [rating, setRating] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sortBy, setSortBy] = useState("");

    const { Cart, SetCart, Wishlist, SetWishlist } = useContext(CartContext);

    const categories = [
        "All",
        ...new Set(books.map((item) => item.category)),
    ];

    const authors = [
        "All",
        ...new Set(books.map((item) => item.author)),
    ];

    const brands = [
        "All",
        ...new Set(books.map((item) => item.brand)),
    ];

    const filteredBooks = useMemo(() => {
        let data = books.filter((book) => {
            return (
                (category === "All" || book.category === category) &&
                (author === "All" || book.author === author) &&
                (brand === "All" || book.brand === brand) &&
                book.rating >= rating &&
                book.discountPrice <= maxPrice &&
                book.title.toLowerCase().includes(search.toLowerCase())
            );
        });

        switch (sortBy) {
            case "low":
                data.sort((a, b) => a.discountPrice - b.discountPrice);
                break;

            case "high":
                data.sort((a, b) => b.discountPrice - a.discountPrice);
                break;

            case "rating":
                data.sort((a, b) => b.rating - a.rating);
                break;

            case "name":
                data.sort((a, b) => a.title.localeCompare(b.title));
                break;

            default:
                break;
        }

        return data;
    }, [search, category, author, brand, rating, maxPrice, sortBy]);

    const resetFilters = () => {
        setSearch("");
        setCategory("All");
        setAuthor("All");
        setBrand("All");
        setRating(0);
        setMaxPrice(1000);
        setSortBy("");
    };

    const handleBuyNow = (book) => {
        const itemToCart = {
            id: book.id,
            name: book.title,
            description: book.description,
            image : book.coverImage,
            author: book.author,
            price: book.discountPrice,
            qty: 1
        };
        
        // Check if item already exists in cart
        const existingItem = Cart.find(item => item.id === book.id);
        if (existingItem) {
            toast.info("Item already in cart");
        } else {
            SetCart([...Cart, itemToCart]);
            toast.success("Added to Cart");
        }
    };

    const removeFromCart = (id) => {
        SetCart(Cart.filter((item) => item.id !== id));
        toast.success("Removed from Cart");
    };

    const handleAddToWishlist = (book) => {
        const itemToWishlist = {
            id: book.id,
            name: book.title,
            description: book.description,
            image: book.coverImage,
            author: book.author,
            price: book.discountPrice,
            rating: book.rating
        };

        const existingItem = Wishlist.find(item => item.id === book.id);
        
        if (existingItem) {
            // Remove from wishlist
            const updatedWishlist = Wishlist.filter(item => item.id !== book.id);
            SetWishlist(updatedWishlist);
            toast.info("Removed from Wishlist");
        } else {
            // Add to wishlist
            SetWishlist([...Wishlist, itemToWishlist]);
            toast.success("Added to Wishlist");
        }
    };

    const isInWishlist = (bookId) => {
        return Wishlist.some(item => item.id === bookId);
    };

    return (
        <>
            <div className="relative isolate h-[50vh] overflow-hidden bg-[#171512]">
                <img src="/old-bookswebp.webp" className="h-full w-full object-cover opacity-75" alt="Book Lab" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/95 via-[#171512]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-10 text-[#fffaf1]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b36a]">The Book Lab Edit</p>
                    <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-6xl">Find your next great read.</h1>
                </div>
            </div>

            <section className="min-h-screen bg-[#f6f1e8] py-12 text-[#29251f] sm:py-16">
                <div className="max-w-7xl mx-auto px-5">

                    <div className="mb-10 flex flex-col gap-5 border-b border-[#d9cdbb] pb-7 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a47a35]">Curated collection</p>
                            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Book Collection</h1>
                            <p className="mt-3 text-sm text-[#766e63]">Showing {filteredBooks.length} books selected for every kind of reader.</p>
                        </div>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-full border border-[#cbbda8] bg-[#fffaf1] px-5 py-3 text-sm font-semibold text-[#40382e] shadow-sm outline-none transition focus:border-[#a47a35]"
                        >
                            <option value="">Sort By</option>
                            <option value="low">Price Low → High</option>
                            <option value="high">Price High → Low</option>
                            <option value="rating">Highest Rated</option>
                            <option value="name">Book Name</option>
                        </select>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-4">
                        {/* Sidebar */}
                        <aside className="h-fit rounded-3xl border border-[#ded2c0] bg-[#fffaf1] p-6 shadow-[0_18px_50px_rgba(78,59,31,0.08)] lg:sticky lg:top-24">
                            <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#29251f] text-[#e5c27a]"><FaFilter /></span> Filters
                            </h2>

                            <input
                                type="text"
                                placeholder="Search Books..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="mb-6 w-full rounded-xl border border-[#d9cdbb] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#9b9184] focus:border-[#a47a35]"
                            />

                            {/* Category */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Category</h3>
                                {categories.map((item) => (
                                    <label key={item} className="flex items-center gap-2 mb-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={category === item}
                                            onChange={() => setCategory(item)}
                                        />
                                        {item}
                                    </label>
                                ))}
                            </div>

                            {/* Author */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Author</h3>
                                <select
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className="w-full border rounded-lg p-3"
                                >
                                    {authors.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Brand */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Publisher / Brand</h3>
                                <select
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="w-full border rounded-lg p-3"
                                >
                                    {brands.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Rating */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Rating</h3>
                                {[0, 4, 4.5, 4.7, 4.8].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setRating(item)}
                                        className={`block w-full text-left px-3 py-2 rounded mb-2 ${
                                            rating === item ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                                        }`}
                                    >
                                        {item === 0 ? "All Ratings" : `${item}+ Stars`}
                                    </button>
                                ))}
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <h3 className="font-semibold mb-3">Max Price ₹{maxPrice}</h3>
                                <input
                                    type="range"
                                    min="100"
                                    max="1000"
                                    step="50"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full"
                                />
                            </div>

                            <button
                                onClick={resetFilters}
                                className="w-full rounded-xl bg-[#29251f] py-3 font-semibold text-[#fffaf1] transition hover:bg-[#a47a35]"
                            >
                                Reset Filters
                            </button>
                        </aside>

                        {/* Product Grid */}
                        <div className="lg:col-span-3">
                            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredBooks.length > 0 ? (
                                    filteredBooks.map((book) => (
                                        <div
                                            key={book.id}
                                            className="group overflow-hidden rounded-3xl border border-[#e2d7c7] bg-[#fffdf8] shadow-[0_12px_35px_rgba(78,59,31,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(78,59,31,0.16)]"
                                        >
                                            <div className="relative overflow-hidden bg-[#e8ded0]">
                                                <img
                                                    src={book.coverImage}
                                                    alt={book.title}
                                                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <button 
                                                    onClick={() => handleAddToWishlist(book)}
                                                    className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition ${
                                                        isInWishlist(book.id)
                                                            ? "bg-red-500 text-white"
                                                            : "bg-white hover:bg-red-500 hover:text-white"
                                                    }`}
                                                >
                                                    <FaHeart />
                                                </button>
                                            </div>

                                            <div className="p-5">
                                                <span className="inline-block rounded-full bg-[#efe2c5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8b6429]">
                                                    {book.category}
                                                </span>
                                                <h2 className="mt-3 line-clamp-1 text-xl font-semibold text-[#29251f]">{book.title}</h2>
                                                <p className="mt-1 text-sm text-[#877d70]">By {book.author}</p>
                                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#665e53]">{book.description}</p>

                                                <div className="mt-5 flex items-center justify-between border-t border-[#e6dccd] pt-4">
                                                    <div>
                                                        <span className="text-xl font-bold text-[#9a702f]">₹{book.discountPrice}</span>
                                                        <span className="ml-2 text-sm text-[#aaa092] line-through">₹{book.price}</span>
                                                    </div>
                                                    <span className="rounded-full bg-[#f5ead3] px-2.5 py-1 text-sm font-semibold text-[#8b6429]">
                                                        <FaStar className="inline text-[#c28c35]" /> {book.rating}
                                                    </span>
                                                </div>

                                                <div className="mt-6 flex w-full gap-3">
                                                    <Link to={`/book-details/${book.id}`} className="w-1/2">
                                                        <button className="w-full rounded-xl bg-[#29251f] px-3 py-2 font-semibold text-[#fffaf1] transition hover:bg-[#a47a35]">
                                                            View Details
                                                        </button>
                                                    </Link>
                                                    {Cart.some((item) => item.id === book.id) ? (
                                                        <button
                                                            onClick={() => removeFromCart(book.id)}
                                                            className="rounded-xl bg-[#9d4f42] px-3 py-2 font-semibold text-white text-sm transition hover:bg-[#7f3d34]"
                                                        >
                                                            Remove Cart
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleBuyNow(book)}
                                                            className="rounded-xl bg-[#a47a35] px-3 py-2 font-semibold text-white transition hover:bg-[#805d27]"
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full">
                                        <div className="bg-white rounded-xl shadow p-16 text-center">
                                            <h2 className="text-3xl font-bold text-gray-700">No Books Found</h2>
                                            <p className="text-gray-500 mt-3">Try changing your search or filters.</p>
                                            <button
                                                onClick={resetFilters}
                                                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
                                            >
                                                Reset Filters
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}