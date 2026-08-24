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
            <div className="w-[100%]">
                <img src="/old-bookswebp.webp" className='w-[100%] h-[50vh]' alt="Book Lab" />
            </div>

            <section className="bg-gray-100 min-h-screen py-10">
                <div className="max-w-7xl mx-auto px-5">

                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold">Book Collection</h1>
                            <p className="text-500 mt-2">Showing {filteredBooks.length} Books</p>
                        </div>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="border rounded-lg px-4 py-2"
                        >
                            <option value="">Sort By</option>
                            <option value="low">Price Low → High</option>
                            <option value="high">Price High → Low</option>
                            <option value="rating">Highest Rated</option>
                            <option value="name">Book Name</option>
                        </select>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <aside className="bg-white rounded-2xl shadow-lg p-6 h-fit lg:sticky top-24">
                            <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
                                <FaFilter /> Filters
                            </h2>

                            <input
                                type="text"
                                placeholder="Search Books..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border rounded-lg px-4 py-3 mb-6"
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
                                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl"
                            >
                                Reset Filters
                            </button>
                        </aside>

                        {/* Product Grid */}
                        <div className="lg:col-span-3">
                            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
                                {filteredBooks.length > 0 ? (
                                    filteredBooks.map((book) => (
                                        <div
                                            key={book.id}
                                            className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300"
                                        >
                                            {/* Image */}
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={book.coverImage}
                                                    alt={book.title}
                                                    className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                                                />
                                                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                                    {book.category}
                                                </span>
                                                <button 
                                                    onClick={() => handleAddToWishlist(book)}
                                                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow transition ${
                                                        isInWishlist(book.id)
                                                            ? "bg-red-500 text-white"
                                                            : "bg-white hover:bg-red-500 hover:text-white"
                                                    }`}
                                                >
                                                    <FaHeart />
                                                </button>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5">
                                                <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{book.title}</h2>
                                                <p className="text-sm text-gray-500 mt-1">By {book.author}</p>
                                                <p className="text-gray-600 text-sm mt-3 line-clamp-3">{book.description}</p>

                                                {/* Book Info */}
                                                <div className="mt-4 space-y-1 text-sm text-gray-500">
                                                    <p><span className="font-semibold text-gray-700">Brand :</span> {book.brand}</p>
                                                    <p><span className="font-semibold text-gray-700">Language :</span> {book.language}</p>
                                                    <p><span className="font-semibold text-gray-700">Pages :</span> {book.pages}</p>
                                                </div>

                                                {/* Rating */}
                                                <div className="flex items-center justify-between mt-5">
                                                    <div className="flex items-center gap-2">
                                                        <FaStar className="text-yellow-400" />
                                                        <span className="font-semibold">{book.rating}</span>
                                                        <span className="text-gray-400 text-sm">({book.reviews?.toLocaleString()})</span>
                                                    </div>
                                                    <span className="text-green-600 text-sm font-semibold">{book.stock} In Stock</span>
                                                </div>

                                                {/* Price */}
                                                <div className="flex items-center gap-3 mt-5">
                                                    <span className="text-2xl font-bold text-blue-600">₹{book.discountPrice}</span>
                                                    <span className="line-through text-gray-400">₹{book.price}</span>
                                                </div>

                                                {/* Buttons */}
                                                <div className="mt-6">
                                                    <button
                                                        onClick={() => handleBuyNow(book)}
                                                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-center transition"
                                                    >
                                                        Buy Now
                                                    </button>
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