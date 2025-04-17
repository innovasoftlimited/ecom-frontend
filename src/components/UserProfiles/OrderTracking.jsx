import { useState } from 'react';
import { FaCheckCircle, FaTruck } from 'react-icons/fa';

const OrderTracking = () => {
    const [currentStep] = useState(2); // 0: Ordered, 1: Processed, 2: Shipped, 3: Delivered

    const steps = [
        { title: 'Order Confirmed', status: 'completed' },
        { title: 'Order Processed', status: 'completed' },
        { title: 'Shipped', status: 'current' },
        { title: 'Delivered', status: 'upcoming' },
    ];

    const orderDetails = {
        orderNumber: '#SK2540',
        date: '24 March 2024',
        total: '$399.00',
        paymentMethod: 'Visa ending in 4242',
        products: [
            { name: 'Wireless Headphones', price: '$299.00', quantity: 1, image: 'https://via.placeholder.com/80' },
            { name: 'Charging Cable', price: '$100.00', quantity: 2, image: 'https://via.placeholder.com/80' },
        ],
        shippingAddress: {
            name: 'John Doe',
            street: '4054 Roosevelt Wilson',
            city: 'San Bernardino, CA 92405',
        },
    };

    return (
        <div className=" mt-24 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Tracking</h1>
                    <p className="text-gray-600">
                        Order ID: <span className="font-medium">{orderDetails.orderNumber}</span>
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center">
                        {steps.map((step, index) => (
                            <div key={step.title} className="flex flex-col items-center relative w-1/4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${index <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    {index <= currentStep ? (
                                        <FaCheckCircle className="w-6 h-6" />
                                    ) : (
                                        <span className="font-medium">{index + 1}</span>
                                    )}
                                </div>
                                <div className={`mt-2 text-sm font-medium ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {step.title}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`absolute top-5 left-3/4 w-1/2 h-1 ${index < currentStep ? 'bg-purple-600' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Details */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Products */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                        <div className="space-y-4">
                            {orderDetails.products.map((product) => (
                                <div key={product.name} className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-md object-cover" />
                                    <div className="ml-4 flex-1">
                                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                                        <p className="text-gray-600 text-sm">
                                            {product.quantity} x {product.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 border-t pt-4">
                            <div className="flex justify-between text-gray-900 font-medium">
                                <span>Total</span>
                                <span>{orderDetails.total}</span>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Info */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                        <div className="space-y-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Payment Method</dt>
                                <dd className="mt-1 text-gray-900">{orderDetails.paymentMethod}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Shipping Address</dt>
                                <dd className="mt-1 text-gray-900">
                                    <div>{orderDetails.shippingAddress.name}</div>
                                    <div>{orderDetails.shippingAddress.street}</div>
                                    <div>{orderDetails.shippingAddress.city}</div>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex justify-end">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                        <FaTruck className="w-5 h-5 mr-2" />
                        Track Package
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;