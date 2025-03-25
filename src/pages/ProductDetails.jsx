import React, { useState } from "react";
import { FaAngleRight, FaComments, FaExchangeAlt, FaHeart, FaShareAlt, FaStar } from "react-icons/fa"; // Import React icons
import Slider from "react-slick"; // Import the react-slick slider
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "../components/ProductTab/ProductCard";

const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState('#B91C1C');
    const [selectedSize, setSelectedSize] = useState('M');
    const productImages = [
        "/images/imgDT59.jpg",
        "/images/imgDT64.jpg",
        "/images/imgDT65.jpg",
        "/images/imgDT66.jpg",
    ];

    const [activeImage, setActiveImage] = useState(productImages[0]); // State to track the active image

    const thumbnailImages = [
        "/images/imgDT59.jpg",
        "/images/imgDT64.jpg",
        "/images/imgDT65.jpg",
        "/images/imgDT66.jpg",
    ];
    const [activeTab, setActiveTab] = useState("tab3"); // default active tab

    const tabs = [
        { id: "tab1", label: "DESCRIPTION" },
        { id: "tab2", label: "INFORMATION" },
        { id: "tab3", label: "REVIEWS (12)" },
    ];
    const products = [
        { id: 1, name: "Bombi Chair", image: "/images/img01.jpg", price: "200,00" },
        { id: 2, name: "Product 2", image: "/images/img02.jpg", price: "150,00" },
        { id: 3, name: "Product 3", image: "/images/img03.jpg", price: "100,00" },
        { id: 4, name: "Product 4", image: "/images/img04.jpg", price: "250,00" },
        { id: 5, name: "Product 5", image: "/images/img05.jpg", price: "300,00" },

    ];



    const thumbnailSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            <div className="customGray mt-24">
                <section
                    className="overflow-hidden pb-16 wow fadeInUp container mx-auto px-4 sm:px-6 lg:px-8 py-10"
                    data-wow-delay="0.4s"
                >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row">
                            {/* Slider Section */}
                            <div className="w-full md:w-[55.5%] pr-0 md:pr-[4.65%]">
                                {/* Comment List */}
                                <ul className="flex space-x-4 text-base font-normal text-gray-400 pt-14">
                                    <li>
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            <FaHeart className="mr-1" />27
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            <FaComments className="mr-1" />12
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            <FaShareAlt className="mr-1" />14
                                        </a>
                                    </li>
                                </ul>

                                {/* Product Slider */}
                                <div className="my-8">
                                    <img src={activeImage} alt="Product" className="w-full" />
                                </div>

                                {/* Pagination Slider */}
                                <div className="px-8">
                                    <Slider {...thumbnailSettings}>
                                        {thumbnailImages.map((thumb, idx) => (
                                            <div key={idx} className="cursor-pointer" onClick={() => setActiveImage(thumb)}>
                                                <div className={`bg-white p-2 ${activeImage === thumb ? 'border-red-500' : ''}`}>
                                                    <img src={thumb} alt="Thumbnail" className="w-full" />
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            {/* Detail Holder */}
                            <div className="w-full md:w-[40%] pt-12 md:pt-0">
                                {/* Breadcrumbs */}
                                <ul className="flex items-center text-sm text-gray-400 mb-2">
                                    <li className="mr-2">
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            Chairs
                                        </a>
                                    </li>
                                    <li><FaAngleRight className="mx-1" /></li>
                                    <li>Products</li>
                                </ul>

                                {/* Title */}
                                <h2 className="text-[32px] sm:text-[44px] leading-[36px] sm:leading-[46px] font-light tracking-[5px] text-black mb-4">
                                    KAILA FABRIC CHAIR
                                </h2>

                                {/* Rank Rating */}
                                <div className="flex items-center mb-8">
                                    <span className="text-sm text-gray-400 mr-2">Reviews (12)</span>
                                    <ul className="flex space-x-1 text-[14px] text-yellow-500">
                                        <li>
                                            <FaStar />
                                        </li>
                                        <li>
                                            <FaStar />
                                        </li>
                                        <li>
                                            <FaStar />
                                        </li>
                                        <li>
                                            <FaStar />
                                        </li>
                                    </ul>
                                </div>

                                {/* Product Variants */}
                                {/* Product Variants */}
                                <div className="mb-6 space-y-4">
                                    {/* Color Variant */}
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-medium uppercase text-gray-500 tracking-wide">Color</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {['#B91C1C', '#1D4ED8', '#047857', '#F59E0B'].map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={` rounded-full border transition-all duration-200
                        ${selectedColor === color ? 'border-black scale-105 shadow-xl w-7 h-7' : 'border-gray-200'}
                         w-6 h-6`}
                                                    style={{ backgroundColor: color }}
                                                    title={color}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Size Variant */}
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-medium uppercase text-gray-500 tracking-wide">Size</h3>
                                        <div className="grid grid-cols-6 gap-2">
                                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`py-1.5 text-xs font-medium uppercase rounded-sm transition-colors duration-200
                        ${selectedSize === size
                                                            ? 'bg-black text-white border-black'
                                                            : 'bg-gray-100 text-gray-600 border-gray-200'}
                        hover:bg-gray-200 hover:text-black border`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                {/* Price */}
                                <div className="mb-8">
                                    <span className="block text-2xl sm:text-3xl font-normal tracking-tight text-black">
                                        $ 79.00 <del className="text-lg text-gray-400 pl-2">399,00</del>
                                    </span>
                                </div>
                                {/* Product Form */}
                                <form className="mb-10" action="#">
                                    <fieldset className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <label
                                                htmlFor="qty"
                                                className="uppercase text-sm text-gray-400 pt-2 font-montserrat"
                                            >
                                                qty
                                            </label>
                                            <input
                                                type="number"
                                                id="qty"
                                                placeholder="1"
                                                className="w-[72px] h-[42px] rounded-full px-4 text-[18px] font-bold text-gray-400 bg-white font-montserrat"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="w-[173px] py-3 bg-[#ff8283] text-white uppercase text-sm font-bold rounded-full transition duration-250 hover:bg-black font-montserrat"
                                            >
                                                ADD TO CART
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>

                                {/* Text Wrap */}
                                <div className="max-w-[490px] mb-8 border-b border-gray-200 pb-10">
                                    <p className="mb-10">
                                        Koila is a chair designed for restaurants and food lovers in general.
                                        Designed in collaboration with restaurant professionals, it ensures comfort
                                        and an ideal posture, as there are armrests on both sides of the chair.
                                    </p>
                                    <p>
                                        Koila is a seat designed for restaurants and gastronomic places in general.
                                        Designed in collaboration with professionals in the restaurant and hotel field,
                                        this armchair is composed of a curved shell with a base in oak and a back upholstered
                                        in fabric or leather. It provides comfort and supports an ideal sitting position.
                                    </p>
                                </div>

                                {/* Action List */}
                                <ul className="flex space-x-8 text-sm text-gray-400 pb-8 border-b border-gray-200 mb-8 ">
                                    <li>
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            <FaShareAlt className="mr-1" />SHARE
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            <FaExchangeAlt className="mr-1" />COMPARE
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            <FaHeart className="mr-1" />ADD TO WISHLIST
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div
                className="overflow-hidden py-10 bg-white wow fadeInUp"
                data-wow-delay="0.4s"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                    {/* Tabs Navigation */}
                    <ul className="flex justify-center space-x-6 uppercase text-center mb-6">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`transition-colors duration-250 font-semibold font-montserrat ${activeTab === tab.id
                                        ? " font-bold"
                                        : "text-gray-400 hover:text-black"
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
                            <div id="tab3" className="text-gray-400">
                                {/* Reviews List */}
                                <div className="space-y-6 mb-8">
                                    <div className="p-4 border border-gray-200 rounded">
                                        <div className="flex items-center space-x-4 mb-2">
                                            <ul className="flex space-x-1 text-yellow-400">
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                            </ul>
                                            <span className="font-bold">John Wick</span>
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
                                            <ul className="flex space-x-1 text-yellow-400">
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                            </ul>
                                            <span className="font-bold">John Wick</span>
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
                                    <fieldset className="space-y-4 py-6 px-10">
                                        <h2 className="text-xl font-semibold">Add Comment</h2>
                                        <div className="flex items-center space-x-2">
                                            <label className="w-20 text-sm uppercase text-gray-500">
                                                Rating
                                            </label>
                                            <ul className="flex space-x-1 text-yellow-500">
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
                                                </li>
                                                <li>
                                                    <FaStar />
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
                                            className="bg-white border border-gray-400 text-gray-400 hover:bg-black hover:text-white uppercase text-sm font-bold py-2 px-4 rounded-full transition duration-250"
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

            {/* Related Products Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-24 bg-white py-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-6 font-montserrat">RELATED PRODUCTS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {/* Product Item */}
                    {products.map((product) => (
                        <ProductCard key={product.id} name={product.name} image={product.image} price={product.price} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
