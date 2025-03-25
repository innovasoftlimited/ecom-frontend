import React, { useState } from "react";

const ProductDetailTab = () => {
    const [activeTab, setActiveTab] = useState("tab3"); // default active tab

    const tabs = [
        { id: "tab1", label: "DESCRIPTION" },
        { id: "tab2", label: "INFORMATION" },
        { id: "tab3", label: "REVIEWS (12)" },
    ];

    return (
        <div
            className="overflow-hidden pb-6 bg-gray-100 wow fadeInUp"
            data-wow-delay="0.4s"
        >
            <div className="container mx-auto px-4">
                {/* Tabs Navigation */}
                <ul className="flex justify-center space-x-6 uppercase text-center mb-6">
                    {tabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`transition-colors duration-250 text-sm ${activeTab === tab.id
                                        ? "text-red-500 font-bold"
                                        : "text-gray-600 hover:text-red-500"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Tab Content */}
                <div className="tab-content">
                    {activeTab === "tab1" && (
                        <div id="tab1" className="text-gray-700">
                            <p className="mb-4">
                                Koila is a chair designed for restaurants and food lovers in general.
                                Designed in collaboration with restaurant professionals, it ensures
                                comfort and an ideal posture, as there are armrests on both sides of the
                                chair.
                            </p>
                            <p>
                                Koila is a seat designed for restaurants and gastronomic places in general.
                                Designed in collaboration with professionals in restaurants and hotels,
                                this armchair is composed of a curved shell with a base in oak that has
                                pinched the back upholstered in fabric or leather. It provides comfort
                                and supports an ideal sitting position.
                                <br />
                                Solid oak construction.
                                <br />
                                Back in plywood (2 faces oak veneer) or upholstered in fabric, leather or
                                eco-leather.
                                <br />
                                Seat upholstered in fabric, leather or eco-leather.
                                <br />
                                H 830 x L 585 x P 540 mm.
                            </p>
                        </div>
                    )}

                    {activeTab === "tab2" && (
                        <div id="tab2" className="text-gray-700">
                            <p className="mb-4">
                                Koila is a chair designed for restaurants and food lovers in general.
                                Designed in collaboration with restaurant professionals, it ensures
                                comfort and an ideal posture, as there are armrests on both sides of the
                                chair.
                            </p>
                            <p>
                                Koila is a seat designed for restaurants and gastronomic places in general.
                                Designed in collaboration with professionals in restaurants and hotels,
                                this armchair is composed of a curved shell with a base in oak that has
                                pinched the back upholstered in fabric or leather. It provides comfort
                                and supports an ideal sitting position.
                                <br />
                                Solid oak construction.
                                <br />
                                Back in plywood (2 faces oak veneer) or upholstered in fabric, leather or
                                eco-leather.
                                <br />
                                Seat upholstered in fabric, leather or eco-leather.
                                <br />
                                H 830 x L 585 x P 540 mm.
                            </p>
                        </div>
                    )}

                    {activeTab === "tab3" && (
                        <div id="tab3" className="text-gray-700">
                            {/* Reviews List */}
                            <div className="space-y-6 mb-8">
                                <div className="p-4 border border-gray-200 rounded">
                                    <div className="flex items-center space-x-4 mb-2">
                                        <ul className="flex space-x-1 text-yellow-500">
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                        </ul>
                                        <span className="font-medium">John Wick</span>
                                        <time dateTime="2016-01-01" className="text-sm text-gray-400">
                                            09:10 Nov, 19 2016
                                        </time>
                                    </div>
                                    <p>
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.
                                    </p>
                                </div>
                                <div className="p-4 border border-gray-200 rounded">
                                    <div className="flex items-center space-x-4 mb-2">
                                        <ul className="flex space-x-1 text-yellow-500">
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                        </ul>
                                        <span className="font-medium">John Wick</span>
                                        <time dateTime="2016-01-01" className="text-sm text-gray-400">
                                            09:10 Nov, 19 2016
                                        </time>
                                    </div>
                                    <p>
                                        Usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non.
                                    </p>
                                </div>
                            </div>

                            {/* Review Form */}
                            <form
                                action="#"
                                className="p-commentform"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <fieldset className="space-y-4">
                                    <h2 className="text-xl font-semibold">Add Comment</h2>
                                    <div className="flex items-center space-x-2">
                                        <label className="w-20 text-sm uppercase text-gray-500">
                                            Rating
                                        </label>
                                        <ul className="flex space-x-1 text-yellow-500">
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm uppercase text-gray-500 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm uppercase text-gray-500 mb-1">
                                            E-Mail
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm uppercase text-gray-500 mb-1">
                                            Review
                                        </label>
                                        <textarea
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-red-500 hover:bg-black text-white uppercase text-sm font-bold py-2 px-4 rounded-full transition duration-250"
                                    >
                                        ADD REVIEW
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailTab;
