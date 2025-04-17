import { FaCheckCircle, FaDollarSign, FaTruck } from 'react-icons/fa';

const OrderCompletePage = () => {
    // Example data - replace with real data from your app
    const orderDetails = {
        orderNumber: '#123456',
        date: 'October 15, 2023',
        total: '₹5,999.00',
        paymentMethod: 'Credit Card',
        deliveryAddress: '123 Main Street, Mumbai, Maharashtra 400001',
        estimatedDelivery: 'October 18, 2023'
    };

    const orderedItems = [
        { id: 1, name: 'Wireless Bluetooth Headphones', price: '₹1,999.00', quantity: 2, image: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Smart Watch Fitness Tracker', price: '₹1,999.00', quantity: 1, image: 'https://via.placeholder.com/80' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-3xl mx-auto">
                {/* Success Header */}
                <div className="text-center mb-12">
                    <FaCheckCircle className="mx-auto h-16 w-16 text-green-600" />
                    <h1 className="mt-4 text-3xl font-bold text-gray-900">Order Confirmed!</h1>
                    <p className="mt-2 text-gray-600">
                        Thank you for your purchase. We've sent a confirmation email with your order details.
                    </p>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                    <div className="space-y-4 mb-8">
                        {orderedItems.map((item) => (
                            <div key={item.id} className="flex items-center border-b pb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div className="ml-4 flex-1">
                                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-medium text-gray-900">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Order Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Order Number</dt>
                                <dd className="mt-1 text-gray-900">{orderDetails.orderNumber}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Order Date</dt>
                                <dd className="mt-1 text-gray-900">{orderDetails.date}</dd>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Total Amount</dt>
                                <dd className="mt-1 text-xl font-semibold text-gray-900">{orderDetails.total}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Payment Method</dt>
                                <dd className="mt-1 text-gray-900">{orderDetails.paymentMethod}</dd>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Information */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FaTruck className="h-6 w-6 text-blue-600 mb-2" />
                            <dt className="text-sm font-medium text-gray-600">Shipping Address</dt>
                            <dd className="mt-1 text-gray-900">{orderDetails.deliveryAddress}</dd>
                        </div>
                        <div>
                            <FaDollarSign className="h-6 w-6 text-green-600 mb-2" />
                            <dt className="text-sm font-medium text-gray-600">Estimated Delivery</dt>
                            <dd className="mt-1 text-gray-900">{orderDetails.estimatedDelivery}</dd>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <a
                        href="/shop"
                        className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Continue Shopping
                    </a>
                    <p className="mt-4 text-sm text-gray-600">
                        Need help? <a href="/contact" className="text-indigo-600 hover:text-indigo-500">Contact our support</a>
                    </p>
                </div>

                {/* Recommended Products (Optional) */}
                <div className="mt-12">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">You Might Also Like</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-square bg-gray-100 rounded-lg mb-3"></div>
                                <div className="h-4 bg-gray-100 rounded mb-2"></div>
                                <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCompletePage;