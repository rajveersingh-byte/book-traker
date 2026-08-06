import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="w-[100%]">
                <img src="/old-bookswebp.webp" className='w-[100%] h-[50vh]' alt="Book Lab" />
            </div>

            <div className='max-w-[1320px] mx-auto my-4 py-5'>
                <h1 className='text-center font-bold text-4xl'>Contact Us</h1>

                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    <div className='contact-details p-3 my-5'>
                        <p><span className='font-bold'>Address :</span> First Floor, Laxmi Tower, Bhaskar Circle, Ratanada, Jodhpur - Rajasthan - India (342001) </p>

                        <p><span className='font-bold'>Phone Number :</span> +91 9024244886 </p>

                        <p><span className='font-bold'>Email :</span> learner@wscubetech.com</p>
                    </div>

                    <div className='contact-form my-5 p-3'>
                        <form className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="email"
                                    name="floating_email"
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                    required=""
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                >
                                    Email address
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="password"
                                    name="floating_password"
                                    id="floating_password"
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                    required=""
                                />
                                <label
                                    htmlFor="floating_password"
                                    className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                >
                                    Password
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="password"
                                    name="repeat_password"
                                    id="floating_repeat_password"
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                    required=""
                                />
                                <label
                                    htmlFor="floating_repeat_password"
                                    className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                >
                                    Confirm password
                                </label>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="floating_first_name"
                                        id="floating_first_name"
                                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                        placeholder=" "
                                        required=""
                                    />
                                    <label
                                        htmlFor="floating_first_name"
                                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                    >
                                        First name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="floating_last_name"
                                        id="floating_last_name"
                                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                        placeholder=" "
                                        required=""
                                    />
                                    <label
                                        htmlFor="floating_last_name"
                                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                    >
                                        Last name
                                    </label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        name="floating_phone"
                                        id="floating_phone"
                                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                        placeholder=" "
                                        required=""
                                    />
                                    <label
                                        htmlFor="floating_phone"
                                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                    >
                                        Phone number
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="floating_company"
                                        id="floating_company"
                                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                        placeholder=" "
                                        required=""
                                    />
                                    <label
                                        htmlFor="floating_company"
                                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                    >
                                        Company (Ex. Google)
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 rounded hover:cursor-pointer box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>


                <div className='google-map p-3'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d425.07648767378083!2d73.03026345408598!3d26.273667497181805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c37b277d1c3%3A0x1412272be9646840!2sWsCube%20Tech!5e1!3m2!1sen!2sin!4v1784893958120!5m2!1sen!2sin"
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className='w-[100%]'
                    />

                </div>
            </div>
        </>
    )
}
