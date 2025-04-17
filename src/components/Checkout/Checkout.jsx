import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxiosRequest from '../../hooks/useAxiosRequest';
import { removeProduct } from '../../redux/reducers/cartSlice';
import { toastError, toastSuccess } from '../../utils/toast';

const Checkout = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.auth.user);
    const { execute } = useAxiosRequest();
    const dispatch = useDispatch();

    const discount = 0; // Example: 0% discount
    const shippingCost = cartItems.length > 0 ? 50 : 0; // Example: $50 shipping if cart is not empty

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount + shippingCost;

    const handleOrderSubmit = async () => {
        const orderData = {
            user_id: user?.id, // Replace with actual user ID
            total_price: total,
            status: 1, // Example: 1 for pending
            order_details: cartItems.map((item) => ({
                product_details_id: item.variantId,
                quantity: item.quantity,
                total_price: item.price * item.quantity,
            })),
        };

        try {
            const response = await execute('Post', '/orders', orderData);
            console.log('Order submitted successfully:', response.data);
            toastSuccess('Order submitted successfully!');
            cartItems.map((item) => (dispatch(removeProduct(item?.id))))
            navigate('/order-complete'); // Redirect to order complete page
        } catch (error) {
            console.error('Error submitting order:', error);
            toastError(error || 'Failed to submit order. Please try again.');
        }
    };

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
                {/* Billing Details */}
                <h2 className="text-xl mb-6 font-montserrat">Billing Details</h2>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Billing Form */}
                    <div className="p-6">
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
                    <div className="bg-gray-50 p-10">
                        <div className="holder">
                            <h2 className="text-[18px] leading-[20px] uppercase font-normal mb-6 text-black font-montserrat">
                                YOUR ORDER
                            </h2>
                            <ul className="list-none block mb-6">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="mb-3">
                                        <div className="txt-holder flex justify-between">
                                            <div className="text-wrap pull-left">
                                                <span className="block">{item.name} x{item.quantity}</span>
                                            </div>
                                            <div className="text-wrap txt text-right pull-right">
                                                <span className="block">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                <li className="mb-3 border-t border-gray-300 pt-2">
                                    <div className="txt-holder flex justify-between">
                                        <strong className="title sub-title text-[16px] uppercase text-gray-600">
                                            CART SUBTOTAL
                                        </strong>
                                        <div className="txt">
                                            <span className="block">${subtotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3 border-t border-gray-300 pt-2">
                                    <div className="txt-holder flex justify-between">
                                        <strong className="title sub-title text-[16px] uppercase text-gray-600">
                                            SHIPPING
                                        </strong>
                                        <div className="txt">
                                            <span className="block">{shippingCost > 0 ? `$${shippingCost.toFixed(2)}` : 'Free Shipping'}</span>
                                        </div>
                                    </div>
                                </li>
                                {discount > 0 && (
                                    <li className="mb-3 border-t border-gray-300 pt-2">
                                        <div className="txt-holder flex justify-between">
                                            <strong className="title sub-title text-[16px] uppercase text-gray-600">
                                                DISCOUNT
                                            </strong>
                                            <div className="txt">
                                                <span className="block">- ${discountAmount.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </li>
                                )}
                                <li className="mb-6 border-t border-gray-300 pt-2">
                                    <div className="txt-holder flex justify-between">
                                        <strong className="title sub-title text-[16px] uppercase text-gray-600">
                                            ORDER TOTAL
                                        </strong>
                                        <div className="txt">
                                            <span className="block">${total.toFixed(2)}</span>
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
                        <div className="flex justify-center mt-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" defaultChecked className="mr-2" /> I’ve read
                                &amp; accept the{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    terms &amp; conditions
                                </a>
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleOrderSubmit} // Attach the order submission handler
                                className="w-fit mt-3 px-6 py-3 bg-green-400 text-white hover:bg-green-700 transition-colors flex items-center justify-center uppercase font-montserrat font-semibold tracking-[3px]"
                            >
                                Confirm Order
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
