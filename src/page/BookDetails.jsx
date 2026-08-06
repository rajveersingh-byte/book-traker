import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import books from '../comman/book';
import { CartContext } from '../comman/MainContext';
import { toast } from 'react-toastify';

export default function BookDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { Cart, SetCart } = useContext(CartContext);

  useEffect(() => {
    const singleBook = books.find((book) => book.id.toString() === id);
    setProduct(singleBook);
  }, [id]);

  if (!product) {
    return <h2>Book Not Found</h2>;
  }

  const discountPercentage = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  );

  let AddtoCart = () => {
    const itemToCart = {
      id: product.id,
      name: product.title,
      description: product.description,
      image: product.coverImage,
      author: product.author,
      price: product.discountPrice,
      qty: 1
    };

    SetCart([...Cart, itemToCart]);
    toast('Items Added in Cart ')
  }



  return (
    <>
      <div className="w-[100%]">
        <img src="/old-bookswebp.webp" className='w-[100%] h-[50vh]' alt="Book Lab" />
      </div>


      <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/80 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <section className="space-y-6">
              <div className="overflow-hidden rounded-3xl bg-slate-100 border">
                <img
                  src={product.coverImage}
                  alt="Book cover image"
                  className="h-[420px] w-full object-center sm:h-[500px] lg:h-[540px]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-3xl bg-slate-100 px-5 py-6">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500">Product details</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li>
                      <span className="font-semibold">Format:</span> Paperback / eBook
                    </li>
                    <li>
                      <span className="font-semibold">Pages:</span> {product.pages}
                    </li>
                    <li>
                      <span className="font-semibold">Language:</span> {product.language}
                    </li>
                    <li>
                      <span className="font-semibold">ISBN:</span> {product.isbn}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <aside className="space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span
                    className={`rounded-full px-3 py-1 ${product.stock > 0
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                  </span>
                  <span>Publisher : {product.publisher}</span>
                  <span>Year : {product.publishedYear}</span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{product.title}</h1>
                    <p className="mt-2 text-base text-slate-600">{product.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-4xl font-bold text-slate-900">
                      ₹{product.discountPrice}
                    </span>

                    <span className="text-xl text-slate-500 line-through">
                      ₹{product.price}
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      {discountPercentage}% OFF
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                    <span>Author: <strong className="text-slate-900">{product.author}</strong></span>
                    <span className="before:content-['•'] before:mx-2">Category: <strong className="text-slate-900">{product.category}</strong></span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">


                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-500">Rating</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{product.rating} / 5</p>
                    </div>
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-500">Reviews</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{product.reviews}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button onClick={AddtoCart} className="inline-flex min-w-[160px] items-center justify-center rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Add to Cart
                  </button>
                  <button className="inline-flex min-w-[160px] items-center justify-center rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
                    Buy Now
                  </button>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>

    </>
  )
}
