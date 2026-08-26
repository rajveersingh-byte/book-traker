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
      <div className="relative isolate h-[50vh] overflow-hidden bg-[#171512]">
        <img src="/old-bookswebp.webp" className="h-full w-full object-cover opacity-75" alt="Book Lab" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/95 via-[#171512]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 text-[#fffaf1] sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b36a]">Inside the collection</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">A closer look.</h1>
        </div>
      </div>


      <main className="min-h-screen bg-[#f6f1e8] px-4 py-12 text-[#29251f] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#ded2c0] bg-[#fffaf1] p-6 shadow-[0_18px_50px_rgba(78,59,31,0.1)] sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <section className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-[#ded2c0] bg-[#e8ded0] p-3 shadow-[0_18px_50px_rgba(78,59,31,0.12)]">
                <img
                  src={product.coverImage}
                  alt="Book cover image"
                  className="h-[420px] w-full rounded-2xl object-cover object-center sm:h-[500px] lg:h-[540px]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-3xl border border-[#ded2c0] bg-[#29251f] px-5 py-6 text-[#fffaf1] shadow-sm">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-[#d8b36a]">Product details</h3>
                  <ul className="mt-4 space-y-3 text-sm text-[#d8d0c4]">
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
              <div className="rounded-3xl border border-[#ded2c0] bg-[#29251f] p-6 text-[#fffaf1] shadow-[0_18px_50px_rgba(41,37,31,0.18)]">
                <div className="flex flex-wrap items-center gap-2 text-sm text-[#d8d0c4]">
                  <span
                    className={`rounded-full px-3 py-1 ${product.stock > 0
                      ? "bg-[#d7eadb] text-[#356944]"
                      : "bg-[#f3dfda] text-[#9d4f42]"
                      }`}
                  >
                    {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                  </span>
                  <span>Publisher : {product.publisher}</span>
                  <span>Year : {product.publishedYear}</span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-[#fffaf1]">{product.title}</h1>
                    <p className="mt-2 text-base leading-7 text-[#d8d0c4]">{product.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-4xl font-bold text-[#d8b36a]">
                      ₹{product.discountPrice}
                    </span>

                    <span className="text-xl text-[#9d9385] line-through">
                      ₹{product.price}
                    </span>

                    <span className="rounded-full bg-[#efe2c5] px-3 py-1 text-sm font-medium text-[#8b6429]">
                      {discountPercentage}% OFF
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm text-[#bdb4a8]">
                    <span>Author: <strong className="text-[#fffaf1]">{product.author}</strong></span>
                    <span className="before:content-['•'] before:mx-2">Category: <strong className="text-[#fffaf1]">{product.category}</strong></span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">


                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-[#5b5145] bg-[#3a342c] p-4 shadow-sm">
                      <p className="text-sm text-[#bdb4a8]">Rating</p>
                      <p className="mt-2 text-lg font-semibold text-[#fffaf1]">{product.rating} / 5</p>
                    </div>
                    <div className="rounded-3xl border border-[#5b5145] bg-[#3a342c] p-4 shadow-sm">
                      <p className="text-sm text-[#bdb4a8]">Reviews</p>
                      <p className="mt-2 text-lg font-semibold text-[#fffaf1]">{product.reviews}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button onClick={AddtoCart} className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-[#d8b36a] px-5 py-3 text-sm font-semibold text-[#29251f] transition hover:corsor-pointer hover:bg-[#f0d08d]">
                    Add to Cart
                  </button>
                  <button className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-[#d8b36a] bg-transparent px-5 py-3 text-sm font-semibold text-[#fffaf1] hover:corsor-pointer transition hover:bg-[#3a342c]">
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
