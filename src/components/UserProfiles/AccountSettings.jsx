import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const AccountSettings = () => {
    // const [prevPass, setPrevPass] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Dummy validation logic
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        // Handle password reset logic here
        console.log('Password changed');
    };

    return (
        <div className="container mx-auto px-4">
            <div className="border rounded mt-5">
                {/* Title */}
                <div className="flex items-center px-4 py-4 border-b border-gray-200 rounded-t-lg bg-white shadow-sm text-gray-900 font-medium text-xl leading-[150%]">
                    <h4>Change Password</h4>
                </div>

                <form className="p-3" onSubmit={handleResetPassword}>
                    {/* Current Password */}
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm font-normal mb-1">
                            Current Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-[49px] text-gray-600 rounded border border-gray-200 bg-white px-3"
                            // onChange={(e) => setPrevPass(e.target.value)}
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-gray-900">
                                <AiOutlineEye />
                            </span>
                        </div>
                    </div>

                    {/* New & Confirm Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-900 text-sm font-normal mb-1">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="w-full h-[49px] text-gray-600 rounded border border-gray-200 bg-white px-3"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-gray-900">
                                    <AiOutlineEye />
                                </span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-900 text-sm font-normal mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full h-[49px] text-gray-600 rounded border border-gray-200 bg-white px-3"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {error && (
                                    <p className="text-red-500 text-sm mt-1">{error}</p>
                                )}
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-gray-900">
                                    <AiOutlineEye />
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#00b207] text-white font-semibold text-sm py-3 px-8 transition duration-300 hover:bg-white hover:text-[#00b207] hover:border hover:border-[#00b207]"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountSettings;
