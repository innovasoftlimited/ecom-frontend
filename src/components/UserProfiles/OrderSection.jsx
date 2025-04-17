import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAxiosRequest from '../../hooks/useAxiosRequest';

const OrderSection = () => {
    const { execute } = useAxiosRequest();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await execute("GET", "/user-orders");
                setData(response.data || []);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <div className="border rounded">
                {/* Title */}
                <div className="p-2.5 text-gray-900 font-medium text-xl leading-[150%]">
                    <h5>Order History</h5>
                </div>

                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-50 uppercase">
                                <tr className="h-9">
                                    <th className="px-4 py-2 text-gray-700 text-xs font-medium tracking-wider">
                                        Order ID
                                    </th>
                                    <th className="px-4 py-2 text-gray-700 text-xs font-medium tracking-wider">
                                        Invoice No
                                    </th>
                                    <th className="px-4 py-2 text-gray-700 text-xs font-medium tracking-wider">
                                        Total Price
                                    </th>
                                    <th className="px-4 py-2 text-gray-700 text-xs font-medium tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((order) => (
                                    <React.Fragment key={order.id}>
                                        <tr className="h-11 hover:bg-gray-50 text-gray-800 text-xs font-normal leading-[150%]">
                                            <td className="px-4 py-2">{order.id}</td>
                                            <td className="px-4 py-2">{order.invoice_no}</td>
                                            <td className="px-4 py-2">${order.total_price}</td>
                                            <td className="px-4 py-2">{order.status}</td>
                                            <td className="px-4 py-2 flex space-x-2">
                                                <Link
                                                    to={`/order-track/${order.id}`}
                                                    className="text-blue-500 no-underline hover:text-blue-700"
                                                >
                                                    Track Order
                                                </Link>
                                                <Link
                                                    to={`/order-details/${order.id}`}
                                                    className="text-[#00b207] no-underline hover:text-[#00b207]"
                                                >
                                                    <AiFillEye className="text-lg" />
                                                </Link>
                                            </td>
                                        </tr>

                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSection;
