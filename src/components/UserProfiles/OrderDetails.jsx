import React from 'react';
import { FaCheckCircle, FaCreditCard, FaTruck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
    const navigate = useNavigate();
    const sampleSingleData = {
        createdAt: '2025-03-20T10:30:00.000Z',
        order_code: 'ORD123456',
        payment_type: 'COD', // or "Online"
        customer_name: 'John Doe',
        customer_email: 'john.doe@example.com',
        customer_mobile: '123-456-7890',
        delivery_address: {
            customer_addr: '1234 Main St',
            locations: {
                upazila: 'Upozila Name',
                district: 'District Name',
                division: 'Division Name',
                country: 'Country Name'
            }
        },
        total_amount: '$100.00',
        discount_amount: '$10.00',
        shipping_cost: '$5.00',
        grand_total: '$95.00',
        status: 'delivered', // or "cancelled"
        all_status: [
            { status: 'pending' },
            { status: 'processing' },
            { status: 'on_the_way' },
            { status: 'delivered' }
        ],
        product: [
            {
                info: JSON.stringify({
                    name: 'Product 1',
                    images: ['/images/product1.jpg']
                }),
                each_product_price: '20.00',
                total_qty: 2
            },
            {
                info: JSON.stringify({
                    name: 'Product 2',
                    images: ['/images/product2.jpg']
                }),
                each_product_price: '15.00',
                total_qty: 1
            }
        ]
    };
    // Progress steps configuration
    const getStepStatus = (targetStatus) => {
        const statusIndex = sampleSingleData?.all_status?.findIndex(s => s.status === targetStatus);
        if (statusIndex === -1) return 'upcoming';
        return sampleSingleData?.all_status[statusIndex]?.completed ? 'completed' : 'current';
    };

    const steps = [
        {
            status: getStepStatus('pending'),
            title: 'Order Received',
            icon: FaCheckCircle
        },
        {
            status: getStepStatus('processing'),
            title: 'Processing',
            icon: FaTruck
        },
        {
            status: getStepStatus('shipped'),
            title: 'On the Way',
            icon: FaTruck
        },
        {
            status: sampleSingleData?.status === 'delivered' ? 'completed' : 'upcoming',
            title: 'Delivered',
            icon: FaCheckCircle
        },
    ];

    return (
        <div className=" mt-24 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
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
                        Order ID: <span className="font-medium">{sampleSingleData?.order_code}</span>
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center">
                        {steps.map((step, index) => (
                            <div key={step.title} className="flex flex-col items-center relative w-1/4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                                    ${step.status === 'completed' ? 'bg-green-600 text-white' :
                                        step.status === 'current' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    {step.status === 'completed' ? (
                                        <FaCheckCircle className="w-6 h-6" />
                                    ) : (
                                        <step.icon className="w-6 h-6" />
                                    )}
                                </div>
                                <div className={`mt-2 text-sm text-center font-medium ${step.status !== 'upcoming' ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {step.title}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`absolute top-5 left-3/4 w-1/2 h-1 ${steps[index + 1].status === 'completed' ? 'bg-green-600' :
                                        step.status === 'completed' ? 'bg-green-600' : 'bg-gray-200'}`} />
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
                                <dd className="mt-1 text-gray-900">{sampleSingleData?.customer_name}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Shipping Address</dt>
                                <dd className="mt-1 text-gray-900">
                                    {sampleSingleData?.delivery_address?.customer_addr}<br />
                                    {sampleSingleData?.delivery_address?.locations?.upazila}, {sampleSingleData?.delivery_address?.locations?.district}<br />
                                    {sampleSingleData?.delivery_address?.locations?.division}, {sampleSingleData?.delivery_address?.locations?.country}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-600">Contact Information</dt>
                                <dd className="mt-1 text-gray-900">
                                    <div>{sampleSingleData?.customer_email}</div>
                                    <div>{sampleSingleData?.customer_mobile}</div>
                                </dd>
                            </div>
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Payment Method:</span>
                                <div className="flex items-center">
                                    {sampleSingleData?.payment_type === 'COD' ? (
                                        <>
                                            <FaTruck className="w-5 h-5 mr-2 text-purple-600" />
                                            <span className="font-medium">Cash on Delivery</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaCreditCard className="w-5 h-5 mr-2 text-purple-600" />
                                            <span className="font-medium">Online Payment</span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>৳{sampleSingleData?.total_amount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount:</span>
                                <span>৳{sampleSingleData?.discount_amount || 0}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping:</span>
                                <span>৳{sampleSingleData?.shipping_cost}</span>
                            </div>
                            <div className="pt-4 border-t">
                                <div className="flex justify-between font-bold">
                                    <span>Total:</span>
                                    <span className="text-green-600">৳{sampleSingleData?.grand_total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-4">Products ({sampleSingleData?.product?.length})</h2>
                    <div className="space-y-4">
                        {sampleSingleData?.product?.map((item, index) => (
                            <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <img
                                    src={JSON.parse(item?.info)?.images[0]}
                                    alt={JSON.parse(item?.info)?.name}
                                    className="w-16 h-16 rounded-md object-contain border border-gray-200"
                                />
                                <div className="ml-4 flex-1">
                                    <h3 className="font-medium text-gray-900">
                                        {JSON.parse(item?.info)?.name}
                                    </h3>
                                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                                        <span>৳{item.each_product_price} x {item.total_qty}</span>
                                        <span className="font-medium">
                                            ৳{Number(item.each_product_price * item?.total_qty).toFixed(2)}
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