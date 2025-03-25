import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Checkout = () => {
    return (
        <div className="min-h-screen mt-24 ">
            {/* Hero Section */}
            <section className="bg-gray-900 py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/images/img-76.jpg)' }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white uppercase tracking-wide">
                        Checkout
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
                                    ${step <= 2 ? 'border-black bg-white' : 'border-gray-200 bg-gray-100'}`}>
                                    <span className={`text-3xl font-bold ${step <= 2 ? 'text-black' : 'text-gray-400'}`}>0{step}</span>
                                </div>
                                <span className={`mt-2 text-lg  font-bold ${step <= 2 ? 'text-black' : 'text-gray-400'}`}>
                                    {['Shopping Cart', 'Check Out', 'Order Complete'][step - 1]}
                                </span>
                                {step !== 3 && (
                                    <div className={`hidden md:block absolute top-10 left-26 w-30 border-t-2 ${step < 2 ? "border-black " : "border-gray-200"} `}></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Content */}
            <div className="container mx-auto px-4 pb-16">

                {/* Cart Summary */}
                <h2 className="text-xl  mb-6 font-montserrat">Billing Details</h2>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Shipping Calculator */}
                    <div className=" p-6 ">
                        {/* <div className="space-y-4">
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
                        </div> */}
                        <form action="#" className="bill-detail">
                            <fieldset>
                                <div className="form-group mb-4">
                                    <select
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        defaultValue="1"
                                    >
                                        <option value="1">Select Country</option>
                                    </select>
                                </div>
                                <div className="form-group mb-4 flex space-x-4">
                                    <div className="col w-1/2">
                                        <input
                                            type="text"
                                            className="form-control w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col w-1/2">
                                        <input
                                            type="text"
                                            className="form-control w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <textarea
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="Address"
                                    ></textarea>
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="Town / City"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="State / Country"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="Postcode / Zip"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        type="email"
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        type="tel"
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="mr-2" /> Ship to a different
                                        address?
                                    </label>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control w-full border border-gray-300 rounded-md p-2"
                                        placeholder="Order Notes"
                                    ></textarea>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                    {/* Cart Totals */}
                    <div className="  ">
                        <div className='bg-gray-50 p-10'>
                            <div className="holder">
                                <h2 className="text-[18px] leading-[20px] uppercase font-normal mb-6 text-black font-montserrat">
                                    YOUR ORDER
                                </h2>
                                <ul className="list-none block mb-6">
                                    <li className="mb-3">
                                        <div className="txt-holder flex justify-between">
                                            <div className="text-wrap pull-left">
                                                <strong className="title block text-[16px] uppercase text-gray-600 mb-2">
                                                    PRODUCTS
                                                </strong>
                                                <span className="block">
                                                    Marvelous Modern 3 Seater x1
                                                </span>
                                                <span className="block">Bombi Chair x1</span>
                                            </div>
                                            <div className="text-wrap txt text-right pull-right">
                                                <strong className="title block text-[16px] uppercase text-gray-600 mb-2">
                                                    TOTALS
                                                </strong>
                                                <span className="block">
                                                    299,00
                                                </span>
                                                <span className="block">
                                                    532,00
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3 border-t border-gray-300 pt-2">
                                        <div className="txt-holder flex justify-between">
                                            <strong className="title sub-title text-[16px] uppercase text-gray-600 ">
                                                CART SUBTOTAL
                                            </strong>
                                            <div className="txt">
                                                <span className="block">
                                                    532,00
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3 border-t border-gray-300 pt-2">
                                        <div className="txt-holder flex justify-between">
                                            <strong className="title sub-title text-[16px] uppercase text-gray-600">
                                                SHIPPING
                                            </strong>
                                            <div className="txt">
                                                <span className="block">Free Shipping</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-6  border-t border-gray-300 pt-2" >
                                        <div className="txt-holder flex justify-between">
                                            <strong className="title sub-title text-[16px] uppercase text-gray-600">
                                                ORDER TOTAL
                                            </strong>
                                            <div className="txt">
                                                <span className="block">
                                                    1299,00
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <h2 className="text-[18px] leading-[20px] pt-5 uppercase font-normal mb-6 text-black font-montserrat">
                                    PAYMENT METHODS
                                </h2>
                                <div className="panel-group" role="tablist" aria-multiselectable="true">
                                    {/* Panel 1 – Direct Bank Transfer */}
                                    <div className="panel panel-default border-t border-gray-300">
                                        <div className="panel-heading py-3" role="tab" id="headingOne">
                                            <h4 className="panel-title text-[16px] leading-[18px] uppercase font-bold text-gray-600">
                                                <button
                                                    type="button"
                                                    className="w-full text-left flex justify-between items-center focus:outline-none"
                                                >
                                                    DIRECT BANK TRANSFER
                                                    <span className="check ml-2">
                                                        <input type="checkbox" className="text-[14px] leading-[16px] text-gray-700" />
                                                    </span>
                                                </button>
                                            </h4>
                                        </div>
                                        {(
                                            <div

                                            >
                                                <div className="panel-body text-[12px] leading-[16px] font-light text-gray-600 py-2">
                                                    <p>
                                                        Make your payment directly into our bank account. Please use
                                                        your order id as the payment reference. Your order won't be
                                                        shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Panel 2 – Cheque Payment */}
                                    <div className="panel panel-default border-t border-gray-300">
                                        <div className="panel-heading py-3" role="tab" id="headingTwo">
                                            <h4 className="panel-title text-[16px] leading-[18px] uppercase font-bold text-gray-600">
                                                <button
                                                    type="button"
                                                    className="w-full text-left flex justify-between items-center focus:outline-none"
                                                >
                                                    CHEQUE PAYMENT
                                                    <span className="check ml-2">
                                                        <input type="checkbox" className="text-[14px] leading-[16px] text-gray-700" />
                                                    </span>
                                                </button>
                                            </h4>
                                        </div>
                                        {(
                                            <div

                                            >
                                                <div className="panel-body text-[12px] leading-[16px] font-light text-gray-600 py-2">
                                                    <p>
                                                        Make your payment directly into our bank account. Please use
                                                        your order id as the payment reference. Your order won't be
                                                        shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Panel 3 – PayPal */}
                                    <div className="panel panel-default border-t border-gray-300">
                                        <div className="panel-heading py-3" role="tab" id="headingThree">
                                            <h4 className="panel-title text-[16px] leading-[18px] uppercase font-bold text-gray-600">
                                                <button
                                                    type="button"
                                                    className="w-full text-left flex justify-between items-center focus:outline-none"
                                                >
                                                    PAYPAL
                                                    <span className="check ml-2">
                                                        <input type="checkbox" className="text-[14px] leading-[16px] text-gray-700" />
                                                    </span>
                                                </button>
                                            </h4>
                                        </div>
                                        {(
                                            <div

                                            >
                                                <div className="panel-body text-[12px] leading-[16px] font-light text-gray-600 py-2">
                                                    <p>
                                                        Make your payment directly into our bank account. Please use
                                                        your order id as the payment reference. Your order won't be
                                                        shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="flex justify-center mt-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" defaultChecked className="mr-2" /> I’ve read
                                &amp; accept the{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    terms &amp; conditions
                                </a>
                            </label>
                        </div>
                        <div className='flex justify-end'>
                            <button className="w-fit mt-3 px-6 py-3 bg-green-400 text-white  hover:bg-green-700 transition-colors flex items-center justify-center uppercase font-montserrat font-semibold tracking-[3px]">
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

export default Checkout;
