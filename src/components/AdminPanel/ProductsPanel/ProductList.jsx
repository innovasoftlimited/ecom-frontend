import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import TailwindModal from '../../CommonModal';
import ProductCreateForm from './ProductCreate';

export default function ProductList() {
    const { execute, loading } = useAxiosRequest();
    const [isOpen, setIsOpen] = useState(false);

    // State for products and pagination metadata
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({
        current_page: 1,
        total_pages: 1,
    });

    // State for modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Function to fetch products for a given page.
    const fetchProducts = async (page = 1) => {
        try {
            const response = await execute("GET", `/products`, null, {
                page,
                perPage: 10, // Ensure this matches the API's expected parameter
            });
            // Assuming the API response has the structure:
            // { success: true, data: [products], current_page, total_pages }
            const resData = response;
            console.log(resData);

            setProducts(resData.data || []); // Set the products array
            setPagination({
                current_page: resData.current_page,
                total_pages: resData.total_pages,
            });
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    // Initial fetch when the component mounts.
    useEffect(() => {
        fetchProducts(pagination.current_page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handler to change pages.
    const handlePageChange = (page) => {
        if (page >= 1 && page <= pagination.total_pages) {
            fetchProducts(page);
        }
    };

    // Render pagination controls.
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
            <div className="p-4">


                <TailwindModal
                    show={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Create New Product"
                    size="4xl"
                    centered
                    backdrop="static"
                >
                    <ProductCreateForm />

                    {/* Custom footer */}

                </TailwindModal>
            </div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Products</h2>
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Create Product
                </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Create Product</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Stock</th>
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
                        ) : products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.unit_price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {/* Display stock information. Replace with actual value if available */}
                                        {product.stock || 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex space-x-4">
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FaEdit />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                                    No Products Found
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
