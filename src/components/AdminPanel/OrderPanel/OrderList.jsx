import React, { useEffect, useState } from 'react';
import useAxiosRequest from '../../../hooks/useAxiosRequest';

// Updated Status configuration
const STATUSES = {
    0: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
    1: { label: 'Processing', color: 'bg-blue-100 text-blue-800' },
    2: { label: 'Shipped', color: 'bg-indigo-100 text-indigo-800' },
    3: { label: 'Delivered', color: 'bg-green-100 text-green-800' },
    4: { label: 'Cancelled', color: 'bg-red-100 text-red-800' },
    5: { label: 'Refunded', color: 'bg-purple-100 text-purple-800' },
    6: { label: 'Failed', color: 'bg-gray-100 text-gray-800' },
    7: { label: 'On Hold', color: 'bg-orange-100 text-orange-800' },
    8: { label: 'Returned', color: 'bg-pink-100 text-pink-800' },
};

export default function OrderList() {
    const { execute, loading } = useAxiosRequest();
    const [orders, setOrders] = useState([]);
    const [pagination, setPagination] = useState({
        current_page: 1,
        total_pages: 1,
    });
    const [updatingOrderId, setUpdatingOrderId] = useState(null);

    const fetchOrders = async (page = 1) => {
        try {
            const response = await execute("GET", `/orders`, null, {
                page,
                perPage: 10,
            });
            setOrders(response.data || []);
            setPagination({
                current_page: response.current_page,
                total_pages: response.total_pages,
            });
        } catch (error) {
            console.error("Failed to fetch orders:", error);
        }
    };

    const handleStatusUpdate = async (orderId, newStatus) => {
        try {
            setUpdatingOrderId(orderId);
            await execute("PUT", `/orders/${orderId}`, { status: newStatus });

            setOrders(prevOrders => prevOrders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            ));
        } catch (error) {
            console.error("Status update failed:", error);
        } finally {
            setUpdatingOrderId(null);
        }
    };

    useEffect(() => {
        fetchOrders(pagination.current_page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= pagination.total_pages) {
            fetchOrders(page);
        }
    };
    const renderPagination = () => {
        return (
            <nav aria-label="Page navigation example" className="mt-4">
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        <button
                            onClick={() => handlePageChange(pagination.current_page - 1)}
                            disabled={pagination.current_page === 1}
                            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${pagination.current_page === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            Previous
                        </button>
                    </li>

                    {Array.from({ length: pagination.total_pages }, (_, i) => i + 1).map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => handlePageChange(page)}
                                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${page === pagination.current_page
                                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                                    }`}
                                aria-current={page === pagination.current_page ? 'page' : undefined}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={() => handlePageChange(pagination.current_page + 1)}
                            disabled={pagination.current_page === pagination.total_pages}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${pagination.current_page === pagination.total_pages ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        );
    };
    return (
        <div className="p-6 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Orders</h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Invoice No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Total Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.invoice_no}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.total_price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full ${STATUSES[order.status]?.color || 'bg-gray-100 text-gray-800'}`}>
                                            {STATUSES[order.status]?.label || 'Unknown'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <select
                                            value={order.status}
                                            onChange={(e) => handleStatusUpdate(order.id, parseInt(e.target.value))}
                                            className={`text-sm border rounded-md px-2 py-1 ${updatingOrderId === order.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={updatingOrderId === order.id}
                                        >
                                            {Object.entries(STATUSES).map(([key, { label }]) => (
                                                <option key={key} value={key}>{label}</option>
                                            ))}
                                        </select>
                                        {updatingOrderId === order.id && (
                                            <span className="ml-2 text-gray-500 text-sm">Updating...</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                                    No Orders Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-end'>
                {renderPagination()}
            </div>
        </div>
    );
}