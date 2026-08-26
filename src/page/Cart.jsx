import React, { useContext } from 'react'
import { CartContext } from '../comman/MainContext'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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

  const removeFromcart = async (id) => {
    const result = await Swal.fire({
      title: 'Remove this book?',
      text: 'This item will be removed from your cart.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it',
      cancelButtonText: 'Cencel',
      confirmButtonColor: '#7f3d34',
      cancelButtonColor: '#29251f',
    });

    if (!result.isConfirmed) return;

    const updated = Cart.filter(item => item.id !== id);
    SetCart(updated);
    toast.success("Removed from Cart");
  };

  return (

    <>
      <div className="relative isolate h-[50vh] overflow-hidden bg-[#171512]">
        <img src="/old-bookswebp.webp" className="h-full w-full object-cover opacity-75" alt="Book Lab" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/95 via-[#171512]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 text-[#fffaf1] sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b36a]">Your private library</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">A considered collection.</h1>
        </div>
      </div>

      <main className="min-h-screen bg-[#f6f1e8] px-4 py-12 text-[#29251f] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-[#ded2c0] bg-[#fffaf1] p-6 shadow-[0_18px_50px_rgba(78,59,31,0.1)] sm:p-8">
            <div className="flex flex-col gap-4 border-b border-[#d9cdbb] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a47a35]">Selection in progress</p>
                <h1 className="text-3xl font-semibold tracking-tight text-[#29251f]">Your cart</h1>
                <p className="mt-2 text-sm text-[#766e63]">Review your books, refine your quantities, and complete your purchase.</p>
              </div>
              <div className="rounded-full bg-[#efe2c5] px-4 py-2 text-sm font-semibold text-[#8b6429]">{Cart.length} items</div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.7fr_0.95fr]">
              <section className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-[#ded2c0] bg-[#f8f3eb] shadow-sm">
                  {Cart.length === 0 ? (
                    <div className="rounded-lg bg-[#fffdf8] p-12 text-center">
                      <FaHeart className="mx-auto mb-6 text-6xl text-[#d8cbb8]" />

                      <h2 className="mb-4 text-2xl font-semibold text-[#51483d]">
                        Your Cart is Empty
                      </h2>

                      <p className="mb-8 text-[#877d70]">
                        Add your Product
                      </p>

                      <Link
                        to="/book-listing"
                        className="rounded-full bg-[#29251f] px-8 py-3 font-semibold book-list text-[#fffaf1] transition hover:bg-[#a47a35]"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  ) : (
                    Cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-4 border-b border-[#e2d7c7] p-6 last:border-b-0 sm:flex-row sm:items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-36 w-full rounded-[1.5rem] object-cover shadow-sm sm:h-32 sm:w-32"
                        />

                        <div className="flex-1 space-y-3">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <h2 className="text-xl font-semibold text-[#29251f]">
                                {item.title || item.name}
                              </h2>

                              <p className="text-sm text-[#877d70]">
                                by {item.author}
                              </p>
                            </div>

                            <p className="text-lg font-semibold text-[#9a702f]">
                              ₹{item.price}
                            </p>
                          </div>

                          <p className="line-clamp-3 text-sm leading-6 text-[#665e53]">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3 text-sm text-[#665e53]">
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#e2d7c7] bg-[#fffdf8] px-3 py-2 shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={getQuantity(item) <= 1}
                                className="h-7 w-7 rounded-full border border-[#d9cdbb] bg-white text-base font-semibold text-[#51483d] transition hover:bg-[#efe2c5] disabled:cursor-not-allowed disabled:opacity-40 hover:cursor-pointer"
                                aria-label={`Decrease quantity of ${item.title || item.name}`}
                              >
                                -
                              </button>
                              <strong>{getQuantity(item)}</strong>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-7 w-7 rounded-full border border-[#d9cdbb] bg-white text-base font-semibold text-[#51483d] transition hover:bg-[#efe2c5] hover:cursor-pointer"
                                aria-label={`Increase quantity of ${item.title || item.name}`}
                              >
                                +
                              </button>
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full border border-[#e2d7c7] bg-[#fffdf8] px-3 py-2 shadow-sm">
                              Format: Paperback / eBook
                            </span>

                            <button
                              onClick={() => removeFromcart(item.id)}
                              className="rounded-full border border-[#d9cdbb] bg-transparent px-4 py-2 text-sm font-semibold text-[#7f3d34] transition hover:bg-[#f3dfda] hover:cursor-pointer"
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
                <div className="rounded-[2rem] border border-[#ded2c0] bg-[#29251f] p-6 text-[#fffaf1] shadow-[0_18px_50px_rgba(41,37,31,0.18)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d8b36a]">At a glance</p>
                  <h2 className="mt-2 text-xl font-semibold">Order summary</h2>
                  <div className="mt-6 space-y-4 text-sm text-[#d8d0c4]">
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
                      <span className="text-[#d8b36a]">-₹{discount.toFixed(2) || 0}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#5b5145] pt-4 text-lg font-semibold text-[#fffaf1]">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>

                  <button className="mt-6 w-full rounded-full bg-[#d8b36a] px-5 py-3 text-sm font-semibold text-[#29251f] transition hover:bg-[#f0d08d] hover:cursor-pointer">
                    Checkout now
                  </button>
                </div>

                <div className="rounded-[2rem] border border-[#ded2c0] bg-[#fffaf1] p-6 text-sm text-[#766e63] shadow-sm">
                  <h3 className="text-base font-semibold text-[#29251f]">Need help?</h3>
                  <p className="mt-3 leading-6">
                    Reach out to our support team if you have any questions about your order or delivery options.
                  </p>
                  <Link to="/contact" className="mt-4 inline-flex hover:cursor-pointer text-sm font-semibold text-slate-900 underline">
                    Contact support
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}
