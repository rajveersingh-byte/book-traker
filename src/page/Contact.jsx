import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="relative isolate h-[50vh] overflow-hidden bg-[#171512]">
                <img src="/old-bookswebp.webp" className="h-full w-full object-cover opacity-75" alt="Book Lab" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/95 via-[#171512]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-10 text-[#fffaf1]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b36a]">The Book Lab</p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Let’s start a conversation.</h1>
                </div>
            </div>

            <div className='mx-auto my-4 max-w-[1320px] px-5 py-12 text-[#29251f] sm:py-16'>
                <div className="mb-10 border-b border-[#d9cdbb] pb-7">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a47a35]">Visit, call, write</p>
                    <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Contact Us</h1>
                </div>

                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>

                    <div className='contact-details my-5 rounded-3xl bg-[#29251f] p-8 text-[#d8d0c4] shadow-[0_18px_50px_rgba(41,37,31,0.18)]'>
                        <p><span className='font-bold text-[#d8b36a]'>Address :</span> First Floor, Laxmi Tower, Bhaskar Circle, Ratanada, Jodhpur - Rajasthan - India (342001) </p>

                        <p><span className='font-bold text-[#d8b36a]'>Phone Number :</span> +91 9024244886 </p>

                        <p><span className='font-bold text-[#d8b36a]'>Email :</span> learner@wscubetech.com</p>
                    </div>

                    <div className='contact-form my-5 rounded-3xl border border-[#ded2c0] bg-[#fffaf1] p-8 shadow-[0_18px_50px_rgba(78,59,31,0.1)]'>
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
                                        className="peer block w-full border-0 border-b-2 border-[#d9cdbb] bg-transparent px-0 py-2.5 text-sm text-[#29251f] outline-none focus:border-[#a47a35] focus:ring-0"
                                        placeholder=" "
                                        required=""
                                    />
                                    <label
                                        htmlFor="floating_first_name"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-[#877d70] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#a47a35]"
                                    >
                                        First name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="floating_last_name"
                                        id="floating_last_name"
                                        className="peer block w-full border-0 border-b-2 border-[#d9cdbb] bg-transparent px-0 py-2.5 text-sm text-[#29251f] outline-none focus:border-[#a47a35] focus:ring-0"
                                        placeholder=" "
                                        required=""
                                    />
                                    <label
                                        htmlFor="floating_last_name"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-[#877d70] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#a47a35]"
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
                                        className="peer block w-full border-0 border-b-2 border-[#d9cdbb] bg-transparent px-0 py-2.5 text-sm text-[#29251f] outline-none focus:border-[#a47a35] focus:ring-0"
                                        placeholder=" "
                                        required=""
                                    />
                                    <label
                                        htmlFor="floating_phone"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-[#877d70] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#a47a35]"
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
                                className="rounded-full bg-[#29251f] px-6 py-3 text-sm font-semibold text-[#fffaf1] shadow-sm transition hover:bg-[#a47a35] focus:outline-none"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>


                <div className='google-map mt-8 overflow-hidden rounded-3xl border border-[#ded2c0] p-3 shadow-[0_18px_50px_rgba(78,59,31,0.1)]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d425.07648767378083!2d73.03026345408598!3d26.273667497181805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c37b277d1c3%3A0x1412272be9646840!2sWsCube%20Tech!5e1!3m2!1sen!2sin!4v1784893958120!5m2!1sen!2sin"
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className='h-[450px] w-full rounded-2xl'
                    />

                </div>
            </div>
        </>
    )
}
