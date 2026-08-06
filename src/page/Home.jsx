import React from 'react'
import books from '../comman/book';
import { Link } from 'react-router-dom';


export default function Home() {

    // console.log(books);
    return (

        <>

            <div className="w-[100%]">
                <img src="/old-bookswebp.webp" className='w-[100%] sm:h-[50vh] md-[100vh] lg:h-[100vh]' alt="Book Lab" />
            </div>


            <div className='max-w-[1320px] mx-auto py-5 my-5'>
                <h1 className='text-center text-4xl font-bold pb-5'>Book Lab</h1>

                <div className="py-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book, index) => (
                        <div
                            key={book.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >

                            <div className="overflow-hidden rounded-lg">
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

                                <Link to={`/book-details/${book.id}`}>
                                    <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                        View Details
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>



    )
}
