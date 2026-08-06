import React, { useContext } from 'react'
import { CartContext } from '../comman/MainContext';
import { FaTrash, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Wishlist() {
    const { Wishlist, SetWishlist, Cart, SetCart } = useContext(CartContext);

    const removeFromWishlist = (id) => {
        const updatedWishlist = Wishlist.filter(item => item.id !== id);
        SetWishlist(updatedWishlist);
        toast.success("Removed from Wishlist");
    };

    const addToCart = (item) => {
        const cartItem = {
            id: item.id,
            name: item.name,
            description: item.description,
            image: item.image,
            author: item.author,
            price: item.price,
            qty: 1
        };
        
        // Check if item already exists in cart
        const existingItem = Cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            toast.info("Item already in cart");
        } else {
            SetCart([...Cart, cartItem]);
            toast.success("Added to Cart");
        }
    };

    const moveAllToCart = () => {
        const newCartItems = Wishlist.filter(
            item => !Cart.find(cartItem => cartItem.id === item.id)
        );

        if (newCartItems.length > 0) {
            SetCart([...Cart, ...newCartItems]);
            toast.success(`${newCartItems.length} items moved to cart`);
        } else {
            toast.info("All items already in cart");
        }
    };

    return (
        <>
            <div className="w-[100%]">
                <img src="/old-bookswebp.webp" className='w-[100%] h-[50vh] object-cover' alt="Wishlist" />
            </div>

            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-6xl mx-auto px-5">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">
                        <FaHeart className="inline text-red-500 mr-3" />
                        My Wishlist
                    </h1>

                    {Wishlist.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-md p-12 text-center">
                            <FaHeart className="text-6xl text-gray-300 mx-auto mb-6" />
                            <h2 className="text-2xl font-bold text-gray-600 mb-4">Your Wishlist is Empty</h2>
                            <p className="text-gray-500 mb-8">Add your favorite books to your wishlist and save them for later.</p>
                            <Link to="/book-listing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-6 flex justify-between items-center">
                                <p className="text-lg text-gray-600">
                                    {Wishlist.length} {Wishlist.length === 1 ? 'item' : 'items'} in your wishlist
                                </p>
                                {Wishlist.length > 0 && (
                                    <button
                                        onClick={moveAllToCart}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition flex items-center gap-2"
                                    >
                                        <FaShoppingCart />
                                        Move All to Cart
                                    </button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Wishlist.map((item) => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
                                        {/* Book Image */}
                                        <Link to={`/book-details/${item.id}`}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-64 object-cover hover:opacity-90 transition"
                                            />
                                        </Link>

                                        {/* Book Details */}
                                        <div className="p-5">
                                            <Link to={`/book-details/${item.id}`} className="hover:text-blue-600 transition">
                                                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                                    {item.name}
                                                </h3>
                                            </Link>

                                            <p className="text-sm text-gray-600 mb-2">{item.author}</p>

                                            <div className="flex items-center justify-between mb-4">
                                                <p className="text-xl font-bold text-blue-600">₹{item.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-yellow-500">★</span>
                                                    <span className="text-sm font-semibold text-gray-700">{item.rating || 'N/A'}</span>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition flex items-center justify-center gap-2"
                                                >
                                                    <FaShoppingCart />
                                                    Add to Cart
                                                </button>

                                                <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition flex items-center justify-center gap-2"
                                                >
                                                    <FaTrash />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}