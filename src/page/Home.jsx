import React, { useContext } from 'react'
import books from '../comman/book';
import { Link } from 'react-router-dom';
import { CartContext } from '../comman/MainContext';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';


export default function Home() {

    const { Cart, SetCart, Wishlist, SetWishlist } = useContext(CartContext);

    let AddtoCart = (book) => {
        const itemToCart = {
            id: book.id,
            name: book.title,
            description: book.description,
            image: book.coverImage,
            author: book.author,
            price: book.discountPrice,
            qty: 1
        };

        SetCart([...Cart, itemToCart]);
        toast('Items Added in Cart ')
    }

    const removeFromcart = (id) => {
        const updated = Cart.filter(item => item.id !== id);
        SetCart(updated);
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

            <div className="w-[100%]">
                <img src="/old-bookswebp.webp" className='w-[100%] sm:h-[50vh] md-[100vh] lg:h-[100vh]' alt="Book Lab" />
            </div>


            <div className='max-w-[1320px] mx-auto py-5 my-5'>
                <h1 className='text-center text-4xl font-bold pb-5'>Book Lab</h1>

                <div className="py-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => {

                        const isInCart = Cart.some((item) => item.id === book.id);

                        return (
                            <div
                                key={book.id}
                                className="bg-white  rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >



                                <div className="overflow-hidden rounded-lg relative">

                                    <button
                                        onClick={() => handleAddToWishlist(book)}
                                        className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow transition z-999 ${isInWishlist(book.id)
                                            ? "bg-red-500 text-white"
                                            : "bg-white hover:bg-red-500 hover:text-white"
                                            }`}
                                    >
                                        <FaHeart />
                                    </button>
                                    <img
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="w-full h-72 transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                <div className="p-4">

                                    <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                                        {book.category}
                                    </span>

                                    <h2 className="text-xl font-bold mt-3 line-clamp-1">
                                        {book.title}
                                    </h2>

                                    <p className="text-gray-500 text-sm mt-1">
                                        By {book.author}
                                    </p>

                                    <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                                        {book.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <span className="text-xl font-bold text-green-600">
                                                ₹{book.discountPrice}
                                            </span>

                                            <span className="text-sm text-gray-400 line-through ml-2">
                                                ₹{book.price}
                                            </span>
                                        </div>

                                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                                            ⭐ {book.rating}
                                        </span>
                                    </div>

                                    <div className="w-full flex gap-3 mt-5">

                                        <Link
                                            to={`/book-details/${book.id}`}
                                            className="w-1/2"
                                        >
                                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                                                View Details
                                            </button>
                                        </Link>

                                        {isInCart ? (
                                            <button
                                                onClick={() => removeFromcart(book.id)}
                                                className="w-1/2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                                            >
                                                Remove Cart
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => AddtoCart(book)}
                                                className="w-1/2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                                            >
                                                Add to Cart
                                            </button>
                                        )}

                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


        </>



    )
}
