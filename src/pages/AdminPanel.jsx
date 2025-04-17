import React, { useState } from 'react';
import {
    FaBars,
    FaBox,
    FaChartBar,
    FaCog,
    FaHome,
    FaSearch,
    FaSignOutAlt
} from 'react-icons/fa';
import { FiAlertCircle, FiMessageSquare, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import OrderList from '../components/AdminPanel/OrderPanel/OrderList';
import ProductList from '../components/AdminPanel/ProductsPanel/ProductList';
import { logout } from '../redux/reducers/authSlice'; // Import logout action

const AdminPanel = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const userName = useSelector((state) => state.auth.user?.name); // Get user type from Redux store
    const dispatch = useDispatch(); // Initialize dispatch

    const renderContent = () => {
        switch (activeMenu) {
            case 'products':
                return (
                    <ProductList />
                );
            case 'orders':
                return (
                    <OrderList />
                );
            case 'dashboard':
            default:
                return (
                    <div className="p-6 bg-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-b-4 border-blue-500">
                                <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
                                <p className="mt-2 text-3xl font-semibold">123</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-b-4 border-green-500">
                                <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
                                <p className="mt-2 text-3xl font-semibold">$45,678</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-b-4 border-yellow-500">
                                <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
                                <p className="mt-2 text-3xl font-semibold">89</p>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen">
            {/* Top Navigation */}
            <div className="bg-white border-b-2 border-gray-200">
                <div className="h-16 mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 mr-2 hover:bg-gray-100 rounded-full"
                        >
                            {sidebarOpen ? <FiX className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                        <img
                            src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                            className="h-8 w-auto"
                            alt="Logo"
                        />
                    </div>

                    {/* Search bar hidden on mobile */}
                    <div className="hidden lg:block ml-4 relative max-w-xs flex-1 mx-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input
                            type="search"
                            placeholder="Type to search"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-sm"
                        />
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-6">
                        <button className="p-2 hover:bg-gray-100 rounded-full relative">
                            <FiMessageSquare className="text-gray-600 text-xl" />
                        </button>

                        <button className="p-2 hover:bg-gray-100 rounded-full relative">
                            <FiAlertCircle className="text-gray-600 text-xl" />
                            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full px-1.5 py-0.5 text-xs">
                                2
                            </span>
                        </button>

                        <div className="flex items-center space-x-2">
                            <img
                                src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                                className="h-9 w-9 rounded-full"
                                alt="Profile"
                            />
                            <span className="font-semibold text-sm">{userName}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar - Mobile responsive */}
                <div className={`bg-white w-64 fixed lg:relative h-screen lg:h-auto z-50 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                    <div className="pt-5 px-4 space-y-8 h-full">
                        <div className="space-y-4">
                            <button
                                onClick={() => setActiveMenu('dashboard')}
                                className={`w-full flex items-center space-x-4 px-4 py-2.5 rounded-lg ${activeMenu === 'dashboard' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                <FaHome className="flex-shrink-0 w-5 h-5" />
                                <span>Dashboard</span>
                            </button>

                            <button
                                onClick={() => setActiveMenu('products')}
                                className={`w-full flex items-center space-x-4 px-4 py-2.5 rounded-lg ${activeMenu === 'products' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                <FaBox className="flex-shrink-0 w-5 h-5" />
                                <span>Products</span>
                            </button>
                            <button
                                onClick={() => setActiveMenu('orders')}
                                className={`w-full flex items-center space-x-4 px-4 py-2.5 rounded-lg ${activeMenu === 'orders' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                <FaBox className="flex-shrink-0 w-5 h-5" />
                                <span>Orders</span>
                            </button>

                            <button className="w-full flex items-center space-x-4 px-4 py-2.5 rounded-lg text-gray-900 hover:bg-gray-200">
                                <FaChartBar className="flex-shrink-0 w-5 h-5" />
                                <span>Analytics</span>
                            </button>
                        </div>

                        <div className="border-t pt-4">
                            <div className="space-y-4">
                                <button className="w-full flex items-center space-x-4 px-4 py-2.5 rounded-lg text-gray-900 hover:bg-gray-200">
                                    <FaCog className="flex-shrink-0 w-5 h-5" />
                                    <span>Settings</span>
                                </button>

                                <button
                                    onClick={() => dispatch(logout())} // Dispatch logout on click
                                    className="w-full flex items-center space-x-4 px-4 py-2.5 rounded-lg text-gray-900 hover:bg-gray-200"
                                >
                                    <FaSignOutAlt className="flex-shrink-0 w-5 h-5" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* Main Content */}
                <div className={`flex-1  transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} `}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;