import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { loginSuccess } from '../redux/reducers/authSlice';
import { toastError, toastSuccess } from '../utils/toast';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { execute, loading } = useAxiosRequest();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!credentials.email || !credentials.password) {
            toastError('Please fill up all field ');
            return;
        }

        try {
            const response = await execute('POST', '/login', credentials);
            const { data, message } = response;
            if (data?.type === 'admin') {
                navigate('/admin', { replace: true });
            }
            else {
                const redirectTo = location.state?.from || '/';
                navigate(redirectTo, { replace: true });
            }
            toastSuccess(message || 'Login successful! Redirecting...');
            dispatch(loginSuccess({ token: data.token, user: data }, 48 * 36000)); // Set token to expire in 2 days


        } catch (error) {
            console.log(error);

            toastError(` ${error || 'Login failed'}`);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main className="mt-main mt-24">
            {/* Existing sections remain the same */}
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
            <section className="mt-detail-sec pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto customGray">
                        <div className="py-24 shadow-lg px-24">
                            <div className="mt-side-widget">
                                <header className="mb-6">
                                    <h2 className="text-2xl font-montserrat font-semiBold mb-2 text-gray-800">SIGN IN</h2>
                                    <p className="text-gray-500">Welcome back! Sign in to Your Account</p>
                                </header>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <fieldset className="space-y-4">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email address"
                                            value={credentials.email}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={credentials.password}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-6 py-2 mb-3 bg-gray-200 text-gray-600 rounded-full border-0 outline-none focus:ring-0 font-light text-sm leading-5"
                                        />

                                        {/* Remember Me and Help section remains same */}

                                        <div className="flex justify-between">
                                            <button
                                                type="submit"
                                                className="bg-gray-500 text-white py-2 px-6 rounded-full border-0 outline-none font-light text-sm leading-5 hover:bg-gray-600 transition-colors"
                                                disabled={loading}
                                            >
                                                {loading ? 'Logging in...' : 'Login'}
                                            </button>
                                            <div className=" text-center">
                                                <p className="text-gray-600 text-sm">
                                                    Not registered yet?{' '}
                                                    <Link
                                                        to="/register"
                                                        className="text-red-500 hover:underline transition-colors"
                                                    >
                                                        Create an account
                                                    </Link>
                                                </p>
                                            </div>
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