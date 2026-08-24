import React, { useContext } from 'react'
import { CartContext } from '../comman/MainContext';
import { FaTrash, FaShoppingCart, FaHeart, FaArrowRight } from 'react-icons/fa';
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
            SetWishlist(Wishlist.filter(wishlistItem => wishlistItem.id !== item.id));
            toast.success("Added to Cart");
        }
    };

    const moveAllToCart = () => {
        const newCartItems = Wishlist.filter(
            item => !Cart.find(cartItem => cartItem.id === item.id)
        );

        if (newCartItems.length > 0) {
            SetCart([...Cart, ...newCartItems]);
            SetWishlist([]);
            toast.success(`${newCartItems.length} items moved to cart`);
        } else {
            toast.info("All items already in cart");
        }
    };

    return (
        <>
            <div className="relative isolate h-[48vh] min-h-90 overflow-hidden bg-[#29251f]">
                <img src="/old-bookswebp.webp" className="h-full w-full object-cover opacity-60" alt="Stack of books" />
                <div className="absolute inset-0 bg-linear-to-r from-[#29251f]/95 via-[#29251f]/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 mx-auto w-[calc(100%-2.5rem)] max-w-7xl pb-12 text-[#fffaf1] sm:pb-16">
                    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#e8bd6c]"><FaHeart /> Saved for later</p>
                    <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">Your reading list.</h1>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-[#d8d0c4] sm:text-base">The stories you want to return to, all in one place.</p>
                </div>
            </div>

            <div className="min-h-[65vh] bg-[#f6f1e8] px-5 py-12 text-[#29251f] sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-[#d9cdbb] pb-7 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a47a35]"><FaHeart /> Your collection</p>
                            <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">My Wishlist</h2>
                            <p className="mt-3 text-sm text-[#766e63]">{Wishlist.length} {Wishlist.length === 1 ? 'book' : 'books'} waiting to be discovered.</p>
                        </div>

                        {Wishlist.length > 0 && (
                            <button onClick={moveAllToCart} className="inline-flex items-center gap-3 rounded-full bg-[#e8bd6c] px-5 py-3 text-sm font-bold text-[#29251f] transition hover:-translate-y-0.5 hover:bg-[#f0cc83]">
                                <FaShoppingCart /> Move all to cart <FaArrowRight className="text-xs" />
                            </button>
                        )}
                    </div>

                    {Wishlist.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-[#cbbda8] bg-[#fffdf8]/60 px-6 py-20 text-center">
                            <FaHeart className="mx-auto mb-5 text-4xl text-[#d7a34f]" />
                            <h2 className="mx-auto max-w-md font-serif text-3xl font-semibold">Your wishlist is waiting for its first story.</h2>
                            <p className="mx-auto mb-7 mt-3 max-w-md text-sm leading-6 text-[#766e63]">Save books here when you find one you want to remember.</p>
                            <Link to="/book-listing" className="inline-flex items-center gap-3 rounded-full bg-[#e8bd6c] px-5 py-3 text-sm font-bold text-[#29251f] transition hover:-translate-y-0.5 hover:bg-[#f0cc83]">
                                Browse the collection <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                                {Wishlist.map((item) => (
                                    <article key={item.id} className="group overflow-hidden rounded-2xl border border-[#e2d7c7] bg-[#fffdf8] shadow-[0_12px_35px_rgba(78,59,31,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(78,59,31,0.14)]">
                                        <Link to={`/book-details/${item.id}`}>
                                            <div className="relative h-72 overflow-hidden bg-[#e8ded0]"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#29251f]/90 px-3 py-2 text-xs font-bold text-[#fffaf1]"><FaHeart /> Saved</span></div>
                                        </Link>

                                        <div className="p-5">
                                            <Link to={`/book-details/${item.id}`} className="transition hover:text-[#a47a35]"><h3 className="min-h-14 font-serif text-2xl font-semibold leading-tight">{item.name}</h3>
                                            </Link>
                                            <p className="mb-5 mt-2 text-sm text-[#877d70]">By {item.author}</p>
                                            <div className="flex items-center justify-between border-y border-[#e6dccd] py-4">
                                                <strong className="text-xl text-[#9a702f]">₹{item.price}</strong>
                                                <span className="rounded-full bg-[#f5ead3] px-3 py-1.5 text-xs font-bold text-[#8b6429]">★ {item.rating || 'N/A'}</span>
                                            </div>

                                            <div className="mt-5 flex gap-3">
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border-0 bg-[#29251f] px-3 text-sm font-bold text-[#fffaf1] transition hover:bg-[#a47a35]"
                                                >
                                                    <FaShoppingCart />
                                                    Add to Cart
                                                </button>

                                                <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    aria-label={`Remove ${item.name} from wishlist`}
                                                    className="flex h-11 w-11 items-center justify-center rounded-xl border-0 bg-[#f5e4df] text-[#9d4f42] transition hover:bg-[#9d4f42] hover:text-white"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}