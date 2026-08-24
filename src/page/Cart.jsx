import React, { useContext } from 'react'
import { CartContext } from '../comman/MainContext'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Cart() {
  const { Cart, SetCart } = useContext(CartContext);
  const getQuantity = (item) => item.quantity ?? item.qty ?? 1;
  const subtotal = Cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * getQuantity(item),
    0
  );
  const shipping = Cart.length > 0 ? 4.99 : 0;
  const discount = Cart.length > 0 ? Math.min(5, subtotal) : 0;
  const total = subtotal + shipping - discount

  const updateQuantity = (id, change) => {
    const updated = Cart.flatMap((item) => {
      if (item.id !== id) return [item];

      const quantity = Math.max(1, getQuantity(item) + change);
      return [{ ...item, quantity }];
    });

    SetCart(updated);
  };

  const removeFromcart = (id) => {
    const updated = Cart.filter(item => item.id !== id);
    SetCart(updated);
    toast.success("Removed from Cart");
  };

  return (

    <>
      <div className="w-[100%]">
        <img src="/old-bookswebp.webp" className='w-[100%] h-[50vh]' alt="Book Lab" />
      </div>

      <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/80 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-slate-900">Your cart</h1>
                <p className="mt-2 text-sm text-slate-500">Review your items, update quantities, and complete your purchase.</p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">{Cart.length} items</div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.7fr_0.95fr]">
              <section className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                  {Cart.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                      <FaHeart className="text-6xl text-gray-300 mx-auto mb-6" />

                      <h2 className="text-2xl font-bold text-gray-600 mb-4">
                        Your Cart is Empty
                      </h2>

                      <p className="text-gray-500 mb-8">
                        Add your Product
                      </p>

                      <Link
                        to="/book-listing"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  ) : (
                    Cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-4 border-b border-slate-200 p-6 last:border-b-0 sm:flex-row sm:items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-36 w-full rounded-[1.5rem] object-cover sm:h-32 sm:w-32"
                        />

                        <div className="flex-1 space-y-3">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <h2 className="text-xl font-semibold text-slate-900">
                                {item.title}
                              </h2>

                              <p className="text-sm text-slate-500">
                                by {item.author}
                              </p>
                            </div>

                            <p className="text-lg font-semibold text-slate-900">
                              {item.price}
                            </p>
                          </div>

                          <p className="text-sm text-slate-600 line-clamp-3">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={getQuantity(item) <= 1}
                                className="h-7 w-7 rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 transition hover:bg-slate-100"
                                aria-label={`Decrease quantity of ${item.title || item.name}`}
                              >
                                -
                              </button>
                              <strong>{getQuantity(item)}</strong>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-7 w-7 rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 transition hover:bg-slate-100"
                                aria-label={`Increase quantity of ${item.title || item.name}`}
                              >
                                +
                              </button>
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                              Format: e-content
                            </span>

                            <button
                              onClick={() => removeFromcart(item.id)}
                              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>

              <aside className="space-y-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
                  <div className="mt-6 space-y-4 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toFixed(2) || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>₹{shipping.toFixed(2) || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span className="text-emerald-600">-₹{discount.toFixed(2) || 0}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>

                  <button className="mt-6 w-full rounded-[1.75rem] bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Checkout now
                  </button>
                </div>

                <div className="rounded-[2rem] bg-slate-50 p-6 text-sm text-slate-600 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Need help?</h3>
                  <p className="mt-3 leading-6">
                    Reach out to our support team if you have any questions about your order or delivery options.
                  </p>
                  <a href="/contact" className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline">
                    Contact support
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}
