import React, { useEffect, useState } from 'react';
import { AiFillEye, AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAxiosRequest from '../../hooks/useAxiosRequest';

const DashboardSection = ({ submitInfo, Profile }) => {
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
    console.log(data);

    return (
        <div>
            {/* Profile Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {/* Profile Card */}
                <div className="border rounded text-center h-[200px] flex flex-col items-center justify-center">
                    <img
                        src={Profile}
                        alt="Profile"
                        className="mt-3 w-[120px] h-[120px] object-cover"
                    />
                    <h6 className="my-2 mb-0">
                        {submitInfo?.name ? submitInfo.name : submitInfo?.name}
                    </h6>
                    <p>
                        <small className="text-gray-500">Customer</small>
                    </p>
                </div>
                {/* Address Card */}
                <div className="border rounded px-3 py-3 h-[200px]">
                    <p className="uppercase text-gray-500">Address</p>
                    <h6>{submitInfo?.name}</h6>
                    <h6>{submitInfo?.email}</h6>
                    <h6>{submitInfo?.phone}</h6>
                </div>
            </div>

            {/* Order History Table */}
            <div className="border rounded mt-3 mb-5 overflow-x-auto">
                <div className="flex justify-between items-center mx-3 my-3">
                    <h6 className="font-medium">Recent Order History</h6>
                    <Link to="#" className="text-[#00b207] no-underline">
                        View All
                    </Link>
                </div>
                <table className="w-full table-auto">
                    <thead className="uppercase bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-gray-700 text-xs font-medium">
                                Order Id
                            </th>
                            <th className="px-4 py-2 text-gray-700 text-xs font-medium">
                                Date
                            </th>
                            <th className="px-4 py-2 text-gray-700 text-xs font-medium">
                                Totals
                            </th>
                            <th className="px-4 py-2 text-gray-700 text-xs font-medium">
                                Status
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.slice(0, 5).map((dt) => (
                            <tr
                                key={dt._id}
                                className="hover:bg-gray-50 text-gray-700 text-xs font-medium"
                            >
                                <th className="px-4 py-2">#{dt.invoice_no}</th>
                                <td className="px-4 py-2">
                                    {dt.created_at}
                                </td>
                                <td className="px-4 py-2">{dt.total_price}</td>
                                <td className="px-4 py-2">{dt.status}</td>
                                <td className="px-4 py-2 flex items-center space-x-2">
                                    <Link to={`/order-details/${dt.id}`}>
                                        <AiFillEye className="text-xl" />
                                    </Link>
                                    {dt.status === 'delivered' && (
                                        <Link to="/feedback" className="text-[#00b207] no-underline">
                                            Feedback
                                        </Link>
                                    )}
                                    {dt.status === 'pending' && (
                                        <Link to={`/cancel-order/${dt._id}`}>
                                            <AiOutlineCloseCircle className="text-xl text-red-500" />
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardSection;
