import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const CartPage = () => {
    return (
        <div className="min-h-screen mt-24">
            {/* Hero Section */}
            <section className="bg-gray-900 py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/images/img-76.jpg)' }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white uppercase tracking-wide">
                        Shopping Cart
                    </h1>
                </div>
            </section>

            {/* Progress Steps */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center">
                            <div className={`flex flex-col items-center relative ${step !== 1 ? 'md:ml-16' : ''}`}>
                                <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center
                                    ${step === 1 ? 'border-black bg-white' : 'border-gray-200 bg-gray-100'}`}>
                                    <span className={`text-3xl font-bold ${step === 1 ? 'text-black' : 'text-gray-400'}`}>0{step}</span>
                                </div>
                                <span className={`mt-2 text-lg  font-bold ${step === 1 ? 'text-black' : 'text-gray-400'}`}>
                                    {['Shopping Cart', 'Check Out', 'Order Complete'][step - 1]}
                                </span>
                                {step !== 3 && (
                                    <div className="hidden md:block absolute top-10 left-26 w-30 border-t-2 border-gray-200"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Content */}
            <div className="container mx-auto px-4 pb-16">
                {/* Cart Table */}
                <div className="  overflow-hidden">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12  px-6 py-4 border-b border-gray-300">
                        <div className="col-span-6 font-medium text-gray-500 uppercase">Product</div>
                        <div className="col-span-2 font-medium text-gray-500 uppercase">Price</div>
                        <div className="col-span-2 font-medium text-gray-500 uppercase">Quantity</div>
                        <div className="col-span-2 font-medium text-gray-500 uppercase">Total</div>
                    </div>

                    {/* Product Items */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-300 last:border-b-0">
                            <div className="md:col-span-6 flex items-center">
                                <img
                                    src="/images/img06.jpg"
                                    alt="Product"
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-800">Marvelous Modern 3 Seater</h3>
                                </div>
                            </div>

                            <div className="md:col-span-2 flex items-center">
                                <span className="text-gray-700">599,00</span>
                            </div>

                            <div className="md:col-span-2 flex items-center">
                                <select className="w-20 px-3 py-2 border rounded-md">
                                    {[1, 2, 3].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-2 flex items-center justify-between">
                                <span className="text-gray-700">599,00</span>
                                <button className="text-red-500 hover:text-red-700">
                                    <FaTimes className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Coupon Section */}
                    <div className="p-6 border-t border-b border-gray-300 py-12">
                        <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="Your Coupon Code"
                                className="flex-1 px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-6 py-3 bg-[#d2943b] text-white  hover:bg-blue-700 transition-colors font-montserrat uppercase">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Shipping Calculator */}
                    <div className=" p-6 ">
                        <h2 className="text-xl font-semibold mb-6 font-montserrat">Calculate Shipping</h2>
                        <div className="space-y-4">
                            <select className="w-full p-3 border border-gray-300 rounded-md text-gray-400">
                                <option>Select Country</option>
                            </select>
                            <select className="w-full p-3 border border-gray-300 rounded-md text-gray-400">
                                <option>State / Country</option>
                            </select>
                            <select className="w-full p-3 border border-gray-300 rounded-md text-gray-400">
                                <option>Zip / Postal Code</option>
                            </select>
                            <button className="w-full md:w-auto px-6 py-2 bg-gray-50 text-gray-300 font-montserrat uppercase font-semibold border border-gray-200  hover:bg-gray-700 transition-colors">
                                Update Total
                            </button>
                        </div>
                    </div>

                    {/* Cart Totals */}
                    <div className="bg-white p-6 ">
                        <h2 className="text-xl font-semibold mb-6 font-montserrat">Cart Totals</h2>
                        <div className="space-y-4 border border-gray-300 p-7">
                            <div className="flex justify-between items-center pb-1 px-3 border-b border-gray-300">
                                <span className="text-gray-600 font-bold uppercase">Subtotal:</span>
                                <span className="font-medium">1299,00</span>
                            </div>
                            <div className="flex justify-between items-center pb-1 px-3  border-b border-gray-300">
                                <span className="text-gray-600 font-bold uppercase">Shipping:</span>
                                <span className="text-green-600">Free Shipping</span>
                            </div>
                            <div className="flex justify-between items-center px-3 ">
                                <span className="text-gray-600 font-bold uppercase">Total:</span>
                                <span className="text-xl font-bold">1299,00</span>
                            </div>

                        </div>
                        <div className='flex justify-end'>
                            <button className="w-fit mt-3 px-6 py-3 bg-green-400 text-white  hover:bg-green-700 transition-colors flex items-center justify-center uppercase font-montserrat font-semibold tracking-5">
                                Proceed to Checkout
                                <FaCheck className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;