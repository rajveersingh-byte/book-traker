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
        toast.success('Items Added in Cart ')
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
            toast.success("Removed from Wishlist");
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

            <div className="relative isolate h-[62vh] overflow-hidden bg-[#171512]">
                <img src="/old-bookswebp.webp" className="h-full w-full object-cover opacity-75" alt="Book Lab" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/95 via-[#171512]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-12 text-[#fffaf1]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b36a]">The Book Lab</p>
                    <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-7xl">Stories worth keeping.</h1>
                    <p className="mt-4 max-w-lg text-base leading-7 text-[#d8d0c4]">A carefully selected collection for curious minds and long evenings.</p>
                </div>
            </div>


            <div className='mx-auto my-5 max-w-[1320px] px-5 py-10'>
                <h1 className='mb-8 border-b border-[#d9cdbb] pb-6 text-center text-4xl font-semibold tracking-tight text-[#29251f] sm:text-5xl'>Book Lab</h1>

                <div className="py-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => {

                        const isInCart = Cart.some((item) => item.id === book.id);

                        return (
                            <div
                                key={book.id}
                                className="group overflow-hidden rounded-3xl border border-[#e2d7c7] bg-[#fffdf8] shadow-[0_12px_35px_rgba(78,59,31,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(78,59,31,0.16)]"
                            >



                                <div className="relative overflow-hidden bg-[#e8ded0]">

                                    <button
                                        onClick={() => handleAddToWishlist(book)}
                                        className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition hover:cursor-pointer ${isInWishlist(book.id)
                                            ? "bg-red-500 text-white"
                                            : "bg-white hover:bg-red-500 hover:text-white"
                                            }`}
                                    >
                                        <FaHeart />
                                    </button>
                                    <img
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">

                                    <span className="inline-block rounded-full bg-[#efe2c5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8b6429]">
                                        {book.category}
                                    </span>

                                    <h2 className="mt-3 line-clamp-1 text-xl font-semibold text-[#29251f]">
                                        {book.title}
                                    </h2>

                                    <p className="mt-1 text-sm text-[#877d70]">
                                        By {book.author}
                                    </p>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#665e53]">
                                        {book.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-[#e6dccd] pt-4">
                                        <div>
                                            <span className="text-xl font-bold text-[#9a702f]">
                                                ₹{book.discountPrice}
                                            </span>

                                            <span className="ml-2 text-sm text-[#aaa092] line-through">
                                                ₹{book.price}
                                            </span>
                                        </div>

                                        <span className="rounded-full bg-[#f5ead3] px-2.5 py-1 text-sm font-semibold text-[#8b6429]">
                                            ⭐ {book.rating}
                                        </span>
                                    </div>

                                    <div className="mt-6 flex w-full gap-3">

                                        <Link
                                            to={`/book-details/${book.id}`}
                                            className="w-1/2"
                                        >
                                            <button className="w-full rounded-xl bg-[#29251f] px-4 py-2 font-semibold text-[#fffaf1] transition hover:bg-[#a47a35] hover:cursor-pointer">
                                                View Details
                                            </button>
                                        </Link>

                                        {isInCart ? (
                                            <button
                                                onClick={() => removeFromcart(book.id)}
                                                className=" rounded-xl bg-[#9d4f42] px-3 py-2 font-semibold text-sm text-white transition hover:bg-[#7f3d34] hover:cursor-pointer"
                                            >
                                                Remove Cart
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => AddtoCart(book)}
                                                className=" rounded-xl bg-[#a47a35] px-3 py-2 font-semibold text-white transition hover:bg-[#805d27] hover:cursor-pointer"
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
