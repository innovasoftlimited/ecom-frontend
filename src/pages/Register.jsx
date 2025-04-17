import React, { useState } from 'react';
import { FaDribbble, FaFacebookF, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { loginSuccess } from '../redux/reducers/authSlice';
import { toastError, toastSuccess } from '../utils/toast'; // Adjust the import path as needed

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { execute, loading } = useAxiosRequest();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, password_confirmation } = formData;

        if (!name || !email || !phone || !password || !password_confirmation) {
            toastError('Please fill up all fields');
            return;
        }

        if (password !== password_confirmation) {
            toastError('Passwords do not match');
            return;
        }

        try {
            const response = await execute('Post', '/register', formData);
            const { data, message } = response;
            console.log(response);

            toastSuccess(message || 'Registration successful! Redirecting...');
            dispatch(loginSuccess({ token: data.token, user: data.user }, 48 * 3600)); // Set token to expire in 2 days

            const redirectTo = location.state?.from || '/';
            navigate(redirectTo, { replace: true });
        } catch (error) {
            console.error(error);
            console.log(error);

            toastError(`${error || 'Registration failed'}`);
        }
    };

    return (
        <main className="mt-main mt-24">
            {/* Banner Section */}
            <section
                className="mt-contact-banner bg-cover bg-center py-16"
                style={{ backgroundImage: 'url(/images/img43.jpg)' }}
            >
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h1 className="text-4xl font-bold uppercase mb-4 text-gray-800 tracking-wider">
                                Register
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
                                    </li>
                                    <li className="text-gray-800">Register</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="mt-about-sec py-12">
                <div className="container mx-auto px-4 md:px-24">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="txt">
                                <h2 className="text-3xl font-bold uppercase mb-4 text-gray-700">
                                    Register
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

            {/* Register Form Section */}
            <section className="mt-detail-sec pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto customGray">
                        <div className="py-12 md:py-24 px-4 md:px-20 shadow-lg">
                            <div className="mt-side-widget">
                                <header className="mb-6">
                                    <h2 className="text-2xl font-montserrat font-semiBold mb-2 text-gray-800">SIGN UP</h2>
                                    <p className="text-gray-500">Create a new account</p>
                                </header>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <fieldset className="space-y-4">
                                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full md:w-1/2 h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                            />
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full md:w-1/2 h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full md:w-1/2 h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                            />
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="w-full md:w-1/2 h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                            <input
                                                type="password"
                                                name="password_confirmation"
                                                placeholder="Confirm Password"
                                                value={formData.password_confirmation}
                                                onChange={handleChange}
                                                className="w-full md:w-1/2 h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                            />
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="check1"
                                                    className="h-4 w-4 text-red-500 rounded bg-gray-100 focus:ring-red-500"
                                                />
                                                <label htmlFor="check1" className="ml-2 text-gray-400 text-sm">
                                                    I agree to the terms and conditions
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex mb-8">
                                            <button
                                                type="submit"
                                                className="bg-gray-500 text-white py-2 px-6 rounded-full border-0 outline-none font-light text-sm leading-5 hover:bg-gray-600 transition-colors"
                                            >
                                                {loading ? "Registering...." : "Register Me "}
                                            </button>
                                        </div>
                                        <header>
                                            <h2 className="text-xl font-semibold mb-2 text-gray-600 font-montserrat">Register with social</h2>
                                            <p className="text-gray-400 mb-4">Create an account using social</p>
                                        </header>
                                        <ul className="flex flex-wrap justify-center space-x-0 text-2xl">
                                            <li className="mt-facebook bg-blue-800 text-white p-5 px-14 ">
                                                <a href="#">
                                                    <FaFacebookF />
                                                </a>
                                            </li>
                                            <li className="mt-twitter bg-blue-400 text-white p-5 px-14 ">
                                                <a href="#">
                                                    <FaTwitter />
                                                </a>
                                            </li>
                                            <li className="mt-linkedin bg-blue-700 text-white p-5 px-14 ">
                                                <a href="#">
                                                    <FaLinkedin />
                                                </a>
                                            </li>
                                            <li className="mt-dribbble bg-pink-500 text-white p-5 px-14 ">
                                                <a href="#">
                                                    <FaDribbble />
                                                </a>
                                            </li>
                                            <li className="mt-pinterest bg-red-600 text-white p-5 px-14 ">
                                                <a href="#">
                                                    <FaPinterest />
                                                </a>
                                            </li>
                                            <li className="mt-youtube bg-red-500 text-white p-5 px-14 ">
                                                <a href="#">
                                                    <FaYoutube />
                                                </a>
                                            </li>
                                        </ul>
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

export default RegisterPage;
