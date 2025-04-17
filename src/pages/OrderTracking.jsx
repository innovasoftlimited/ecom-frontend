import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTruck } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAxiosRequest from '../hooks/useAxiosRequest';

const OrderTracking = () => {
    const { id } = useParams();
    const { execute } = useAxiosRequest();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchOrderTracking = async () => {
            try {
                const response = await execute("GET", `/orders/${id}`);
                setOrderData(response.data);
            } catch (error) {
                console.error("Failed to fetch order tracking details:", error);
            }
        };
        fetchOrderTracking();
    }, [id]);

    if (!orderData) {
        return (
            <div className="mt-24 min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    const steps = [
        { status: 0, title: 'Order Confirmed', icon: FaCheckCircle },
        { status: 1, title: 'Order Processed', icon: FaTruck },
        { status: 2, title: 'Shipped', icon: FaTruck },
        { status: 3, title: 'Delivered', icon: FaCheckCircle },
        // { status: 4, title: 'Cancelled', icon: FaCheckCircle },
        // { status: 5, title: 'Refunded', icon: FaCheckCircle },
        // { status: 6, title: 'Failed', icon: FaCheckCircle },
        // { status: 7, title: 'On Hold', icon: FaTruck },
        // { status: 8, title: 'Returned', icon: FaTruck },
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Tracking</h1>
                    <p className="text-gray-600">
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
                                <div className={`mt-2 text-sm font-medium ${getStepStatus(step.status) !== 'upcoming' ? 'text-gray-900' : 'text-gray-400'}`}>
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

                {/* Order Details */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Products */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                        <div className="space-y-4">
                            {orderData.order_details?.map((product) => (
                                <div key={product.id} className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors">
                                    <img src={product.product.image} alt={product.product.sku} className="w-16 h-16 rounded-md object-cover" />
                                    <div className="ml-4 flex-1">
                                        <h3 className="font-medium text-gray-900">{product.product.sku}</h3>
                                        <p className="text-gray-600 text-sm">
                                            {product.quantity} x ৳{product.product.unit_price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 border-t pt-4">
                            <div className="flex justify-between text-gray-900 font-medium">
                                <span>Total</span>
                                <span>৳{orderData.total_price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Info */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                        <div className="space-y-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Order Date</dt>
                                <dd className="mt-1 text-gray-900">{new Date(orderData.created_at).toLocaleDateString()}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Shipping Address</dt>
                                <dd className="mt-1 text-gray-900">
                                    <div>{orderData.shipping_address?.name}</div>
                                    <div>{orderData.shipping_address?.street}</div>
                                    <div>{orderData.shipping_address?.city}</div>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;