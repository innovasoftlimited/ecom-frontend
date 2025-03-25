import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductTabs = () => {
    const tabs = ["Featured", "New Arrivals", "Best Sellers"];
    const products = [
        { id: 1, name: "Bombi Chair", image: "/images/img01.jpg", price: "200,00" },
        { id: 2, name: "Product 2", image: "/images/img02.jpg", price: "150,00" },
        { id: 3, name: "Product 3", image: "/images/img03.jpg", price: "100,00" },
        { id: 4, name: "Product 4", image: "/images/img04.jpg", price: "250,00" },
        { id: 5, name: "Product 5", image: "/images/img05.jpg", price: "300,00" },
        { id: 6, name: "Product 6", image: "/images/img06.jpg", price: "200,00" },
        { id: 7, name: "Product 7", image: "/images/img07.jpg", price: "150,00" },
        { id: 8, name: "Product 8", image: "/images/img08.jpg", price: "100,00" },
        { id: 9, name: "Product 9", image: "/images/img09.jpg", price: "250,00" },
        { id: 10, name: "Product 10", image: "/images/img10.jpg", price: "300,00" },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full px-4 md:px-16 bg-white pt-8">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center md:justify-start">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 md:px-8 font-bold font-montserrat uppercase text-gray-500 transition-all duration-300 ${tab !== "Best Sellers" && "border-r-2"}  ${activeTab === index
                            ? " text-gray-900 "
                            : " text-gray-300"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="relative mt-6 px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} name={product.name} image={product.image} price={product.price} />
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    {/* <ChevronLeftIcon className="h-6 w-6 text-gray-500" /> */}
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    {/* <ChevronRightIcon className="h-6 w-6 text-gray-500" /> */}
                </button>
            </div>
        </div>
    );
};

export default ProductTabs;
