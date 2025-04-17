import React, { useState } from 'react';
import {
    AiFillAppstore,
    AiFillStar,
    AiOutlineDoubleRight,
    AiOutlineLogout,
    AiOutlineRedo,
    AiTwotoneSetting
} from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import AccountSettings from '../components/UserProfiles/AccountSettings';
import DashboardSection from '../components/UserProfiles/DashboardSection';
import OrderSection from '../components/UserProfiles/OrderSection';
import { logout } from '../redux/reducers/authSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const user = useSelector((state) => state.auth.user);
    console.log(user);

    const sampleData = [
        {
            _id: '1',
            order_code: 'A1234',
            createdAt: '2025-03-01T00:00:00.000Z',
            grand_total: '$100.00',
            status: 'delivered'
        },
        {
            _id: '2',
            order_code: 'B5678',
            createdAt: '2025-02-25T00:00:00.000Z',
            grand_total: '$200.00',
            status: 'pending'
        },
        {
            _id: '3',
            order_code: 'C91011',
            createdAt: '2025-02-20T00:00:00.000Z',
            grand_total: '$150.00',
            status: 'delivered'
        },
        {
            _id: '4',
            order_code: 'D121314',
            createdAt: '2025-02-18T00:00:00.000Z',
            grand_total: '$250.00',
            status: 'cancelled'
        },
        {
            _id: '5',
            order_code: 'E151617',
            createdAt: '2025-02-15T00:00:00.000Z',
            grand_total: '$300.00',
            status: 'pending'
        }
    ];
    const Profile = 'https://via.placeholder.com/120';

    const signOut = () => {
        dispatch(logout());
    };
    const NavItem = (props) => {
        const { icon, label, active, onClick } = props;
        const Icon = icon; // local variable assignment; ESLint sees it as used.
        return (
            <button
                onClick={onClick}
                className={`w-full flex items-center p-3 rounded-lg transition-all ${active
                    ? 'bg-[#20b526]/10 text-[#20b526] font-semibold shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a1a1a]'
                    }`}
            >
                <Icon className={`w-5 h-5 mr-3 ${active ? 'text-[#20b526]' : 'text-gray-500'}`} />
                <span>{label}</span>
            </button>
        );
    };


    return (
        <div className="min-h-screen bg-gray-50 mt-24">
            {/* Top Navigation */}
            {
                !sidebarOpen &&
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden p-2 mr-2 hover:bg-gray-100 rounded-full"
                >
                    {<AiOutlineDoubleRight className="text-xl" />}
                </button>
            }

            <div className="flex">
                {/* Desktop Sidebar */}
                <div className={`bg-white w-72 fixed lg:relative h-screen  transform transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0 z-50' : '-translate-x-full lg:translate-x-0 z-10'}`}>
                    <div className="p-6 h-full">

                        {/* Profile Section */}
                        <div className="flex items-center gap-4 mb-8">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover border-2 border-[#20b526]/20"
                            />
                            <div>
                                <h2 className="font-semibold text-gray-900">{user.name}</h2>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="lg:hidden p-2 mr-2 hover:bg-gray-100 rounded-full"
                            >
                                {sidebarOpen && <RxCross2 className="text-xl" />}
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="space-y-2">
                            <NavItem
                                icon={AiFillAppstore}
                                label="Dashboard"
                                active={activeTab === 'dashboard'}
                                onClick={() => {
                                    setActiveTab('dashboard');
                                    setSidebarOpen(false);
                                }}
                            />
                            <NavItem
                                icon={AiOutlineRedo}
                                label="Order History"
                                active={activeTab === 'order'}
                                onClick={() => {
                                    setActiveTab('order');
                                    setSidebarOpen(false);
                                }}
                            />
                            <NavItem
                                icon={AiFillStar}
                                label="Feedback"
                                active={activeTab === 'feedback'}
                                onClick={() => {
                                    setActiveTab('feedback');
                                    setSidebarOpen(false);
                                }}
                            />
                            <NavItem
                                icon={AiTwotoneSetting}
                                label="Settings"
                                active={activeTab === 'setting'}
                                onClick={() => {
                                    setActiveTab('setting');
                                    setSidebarOpen(false);
                                }}
                            />
                        </nav>

                        {/* Logout Button */}
                        <button
                            onClick={signOut}
                            className="w-full mt-6 flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <AiOutlineLogout className="w-5 h-5 mr-3 text-gray-500" />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Overlay */}
                {sidebarOpen && (
                    <>

                        <div
                            className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        ></div>
                    </>
                )}

                {/* Main Content */}
                <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'} `}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 min-h-[calc(100vh-140px)]">
                            {activeTab === 'dashboard' && (
                                <DashboardSection
                                    submitInfo={user}
                                    data={sampleData}
                                    Profile={Profile}
                                />
                            )}
                            {activeTab === 'order' && <OrderSection />}
                            {activeTab === 'feedback' && "<FeedbackList />"}
                            {activeTab === 'setting' && <AccountSettings />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;