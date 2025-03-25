import { useState } from "react";
import { FaEuroSign, FaRegStar, FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingBag, FiShuffle } from "react-icons/fi";

const ProductCard = ({ name, image, price }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative  p-4 overflow-hidden group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="relative ">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover rounded-md"
                />
                <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase rounded">
                    New
                </span>
                <ul className="absolute bottom-0 left-2 flex space-x-1 text-yellow-500 pl-14">
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaRegStar /></li>
                </ul>
            </div>

            <div className="mt-2 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                    <a href="product-detail.html">{name}</a>
                </h3>
                <p className="text-gray-900 font-bold flex items-center justify-center ">
                    <FaEuroSign className="mr-1" /> {price}
                </p>
            </div>

            <div
                className={`absolute bottom-18 left-0 right-0 bg-white p-2 flex justify-around border border-gray-200 transition-opacity duration-300 ${hover ? "opacity-100" : "opacity-0"}`}
            >
                <button className="flex items-center text-gray-700 hover:text-red-500 ">
                    <FiShoppingBag className="mr-2" /> Add to Cart
                </button>
                <span className="border-r"></span>
                <button className="text-gray-700 hover:text-red-500">
                    <FiHeart />
                </button>
                <span className="border-r"></span>
                <button className="text-gray-700 hover:text-red-500">
                    <FiShuffle />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
