import React, { useState } from 'react'

const ContactUsComponent = () => {

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Subject: '',
        Message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                alert('Email sent successfully');
                // Optionally, you can reset the form fields here
                setFormData({
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Subject: '',
                    Message: '',
                });
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            alert('Error occurred while sending email', error);
        }
    };

    return (
        <>

            <section class="flex items-center  font-poppins dark:bg-gray-800 ">
                <div class="max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6">
                    <div class="mb-20 text-center pb-7">
                        <h2 class="pb-2 mb-2 text-xl font-bold text-[gray-800] md:text-4xl dark:text-gray-300">
                            Let's Stay Connected
                        </h2>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            GROW WITH US
                        </p>
                    </div>
                    <div class="flex flex-wrap mb-6">
                        <div class="w-full px-4 mb-20 lg:w-1/3 lg:mb-0">
                            <div class="relative h-full px-6 pt-20 pb-12 text-center shadow bg-gray-50 dark:bg-gray-900">
                                <div
                                    class="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-[#F58E22] transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 border border-[#F58E22] rounded-full dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 left-1/2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-envelope-paper" viewBox="0 0 16 16">
                                        <path
                                            d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                                    </svg>
                                </div>
                                <h2 class="mb-6 text-3xl font-bold md:text-4xl border-b-4 border-[#F58E22] dark:text-gray-300">Email</h2>

                                <p class="text-xl text-gray-500 sm:text-2xl dark:text-gray-400">shjhfzops@sahels
                                    hipping.ae</p>
                            </div>
                        </div>
                        <div class="w-full px-4 mb-20 lg:w-1/3 lg:mb-0">
                            <div class="relative h-full px-6 pt-20 pb-12 text-center shadow bg-gray-50 dark:bg-gray-900">
                                <div
                                    class="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-[#F58E22] transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 border border-[#F58E22] rounded-full dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 left-1/2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-telephone" viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                </div>
                                <h2 class="mb-6 text-3xl font-bold md:text-4xl border-b-4 border-[#F58E22] dark:text-gray-300">Phone</h2>

                                <p class="text-xl text-gray-500 sm:text-2xl dark:text-gray-400">+971-504661315</p>
                            </div>
                        </div>
                        <div class="w-full px-4 mb-10 lg:w-1/3 lg:mb-0">
                            <div class="relative h-full px-6 pt-20 pb-12 text-center shadow bg-gray-50 dark:bg-gray-900">
                                <div
                                    class="absolute top-0 inline-flex items-center justify-center w-20 h-20 text-[#F58E22] transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 border border-[#F58E22] rounded-full dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 left-1/2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </div>
                                <h2 class="mb-6 text-3xl font-bold md:text-4xl border-b-4 border-[#F58E22] dark:text-gray-300">Office</h2>

                                <p class="text-xl text-gray-500 sm:text-2xl dark:text-gray-400">LOB-6(21)
                                    Hamriyah Free
                                    Zone Phase 1</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 py-6 ">
                        <form onSubmit={handleSubmit} class="py-6 rounded shadow dark:bg-gray-900 bg-gray-50">
                            <div class="flex flex-wrap ">
                                <div class="w-full px-3 md:w-1/2 md:mb-4">
                                    <label for="FirstName"
                                        class="block mb-3 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        First Name
                                    </label>
                                    <input type="text"
                                        name="FirstName"
                                        placeholder="First name"
                                        value={formData.FirstName}
                                        onChange={handleChange}
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100  border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 focus:border-[#F58E22]  hover:border-[#F58E22] outline-none" />
                                </div>
                                <div class="w-full px-3 md:w-1/2 md:mb-4">
                                    <label for="LastName"
                                        class="block mb-3 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Last Name</label>
                                    <input type="text"
                                        name="LastName"
                                        placeholder="Last name"
                                        value={formData.LastName}
                                        onChange={handleChange}
                                        required
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 outline-none focus:border-[#F58E22]  hover:border-[#F58E22]" />
                                </div>
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label for="Email"
                                        class="block mb-3 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Email</label>
                                    <input type="email"
                                        name="Email"
                                        placeholder="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        required
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 focus:border-[#F58E22]  hover:border-[#F58E22]" />
                                </div>
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label for="Subject"
                                        class="block mb-3 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Subject</label>
                                    <input type="text"
                                        name="Subject"
                                        value={formData.Subject}
                                        onChange={handleChange}
                                        placeholder="I'm asking information for..."
                                        required
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 focus:border-[#F58E22]  hover:border-[#F58E22]" />
                                </div>
                            </div>
                            <div class="w-full px-3 mb-6">
                                <label htmlFor="Message" class="block mb-3 font-bold text-gray-700 uppercase dark:text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    name="Message"
                                    placeholder="Describe your problem"
                                    value={formData.Message}
                                    onChange={handleChange}
                                    required
                                    class="block w-full px-4 py-10 leading-tight text-gray-700 bg-gray-100 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 focus:border-[#F58E22]  hover:border-[#F58E22]"
                                ></textarea>
                            </div>
                            <div class="px-6">
                                <button
                                    type="submit"
                                    class="px-4 py-2 font-medium text-gray-100 bg-[#F58E22] rounded shadow hover:bg-yellow-700 dark:bg-[#F58E22] dark:hover:bg-yellow-700">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



        </>
    )
}

export default ContactUsComponent
