import React from 'react';
// import { ChevronRightIcon } from '@heroicons/react/24/outline';

const LoginPage = () => {
    return (
        <main className="mt-main">
            {/* Banner Section */}
            <section
                className="mt-contact-banner bg-cover bg-center py-16"
                style={{ backgroundImage: 'url(/images/img43.jpg)' }}
            >
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h1 className="text-4xl font-bold uppercase mb-4 text-gray-800 tracking-wider">
                                login
                            </h1>
                            <nav className="breadcrumbs">
                                <ul className="flex justify-center items-center space-x-2 text-sm">
                                    <li className="flex items-center">
                                        <a
                                            href="index.html"
                                            className="text-gray-800 hover:text-red-500 transition-colors"
                                        >
                                            home
                                        </a>
                                        {/* <ChevronRightIcon className="w-3 h-3 mx-1" /> */}
                                    </li>
                                    <li className="text-gray-800">login</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="mt-about-sec py-12 ">
                <div className="container mx-auto px-24">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="txt">
                                <h2 className="text-3xl font-bold uppercase mb-4 text-gray-700">
                                    login
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-3">
                                    Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque,
                                    vulputate tortor quis, efficitur arcu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Umco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    <strong className="block mt-4 text-xl font-semibold text-gray-800">
                                        Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Login Form Section */}
            <section className="mt-detail-sec pb-16 ">
                <div className="container mx-auto px-4  ">
                    <div className="max-w-4xl mx-auto customGray">
                        <div className="py-24 shadow-lg px-24">
                            <div className="mt-side-widget">
                                <header className="mb-6 ">
                                    <h2 className="text-2xl font-montserrat font-semiBold mb-2 text-gray-800">SIGN IN</h2>
                                    <p className="text-gray-500">Welcome back! Sign in to Your Account</p>
                                </header>

                                <form className="space-y-4">
                                    <fieldset className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Username or email address"
                                            className="w-full h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="w-full h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                        />

                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="check1"
                                                    className="h-4 w-4 text-red-500 rounded bg-gray-100 focus:ring-red-500"
                                                />
                                                <label htmlFor="check1" className="ml-2 text-gray-400 text-sm">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <a href="#" className="text-gray-500 text-sm hover:underline">
                                                Help?
                                            </a>
                                        </div>

                                        <div className="flex">
                                            <button
                                                type="submit"
                                                className="bg-gray-500 text-white py-2 px-6 rounded-full border-0 outline-none font-light text-sm leading-5 hover:bg-gray-600 transition-colors"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoginPage;