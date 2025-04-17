import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTruck } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosRequest from '../hooks/useAxiosRequest';

const OrderDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { execute } = useAxiosRequest();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await execute("GET", `/orders/${id}`);
                setOrderData(response.data);
            } catch (error) {
                console.error("Failed to fetch order details:", error);
            }
        };
        fetchOrderDetails();
    }, [id]);

    if (!orderData) {
        return (
            <div className="mt-24 min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    const steps = [
        { status: 0, title: 'Order Received', icon: FaCheckCircle },
        { status: 1, title: 'Processing', icon: FaTruck },
        { status: 2, title: 'Shipped', icon: FaTruck },
        { status: 3, title: 'Delivered', icon: FaCheckCircle },
    ];

    const getStepStatus = (targetStatus) => {
        const currentStatus = orderData.status;
        if (targetStatus < currentStatus) return 'completed';
        if (targetStatus === currentStatus) return 'current';
        return 'upcoming';
    };

    return (
        <div className="mt-24 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <button
                        onClick={() => navigate('/account')}
                        className="inline-flex items-center text-[#00b207] hover:text-[#008a05] mb-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Orders
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">Order Details</h1>
                    <p className="text-gray-600 mt-2">
                        Order ID: <span className="font-medium">{orderData.invoice_no}</span>
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center">
                        {steps.map((step, index) => (
                            <div key={step.title} className="flex flex-col items-center relative w-1/4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                                    ${getStepStatus(step.status) === 'completed' ? 'bg-green-600 text-white' :
                                        getStepStatus(step.status) === 'current' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    {getStepStatus(step.status) === 'completed' ? (
                                        <FaCheckCircle className="w-6 h-6" />
                                    ) : (
                                        <step.icon className="w-6 h-6" />
                                    )}
                                </div>
                                <div className={`mt-2 text-sm text-center font-medium ${getStepStatus(step.status) !== 'upcoming' ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {step.title}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`absolute top-5 left-3/4 w-1/2 h-1 ${getStepStatus(steps[index + 1].status) === 'completed' ? 'bg-green-600' :
                                        getStepStatus(step.status) === 'completed' ? 'bg-green-600' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Shipping Info */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
                        <div className="space-y-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Customer Name</dt>
                                <dd className="mt-1 text-gray-900">{orderData.user_id}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Order Date</dt>
                                <dd className="mt-1 text-gray-900">{new Date(orderData.created_at).toLocaleDateString()}</dd>
                            </div>
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Total Price:</span>
                                <span>৳{orderData.total_price}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-4">Products ({orderData.order_details?.length})</h2>
                    <div className="space-y-4">
                        {orderData.order_details?.map((item) => (
                            <div key={item.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <img
                                    src={item.product.image}
                                    alt={item.product.sku}
                                    className="w-16 h-16 rounded-md object-contain border border-gray-200"
                                />
                                <div className="ml-4 flex-1">
                                    <h3 className="font-medium text-gray-900">{item.product.sku}</h3>
                                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                                        <span>৳{item.product.unit_price} x {item.quantity}</span>
                                        <span className="font-medium">
                                            ৳{item.total_price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;