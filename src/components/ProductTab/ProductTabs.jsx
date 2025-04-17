import { useEffect, useState } from "react";
import useAxiosRequest from "../../hooks/useAxiosRequest";
import ProductCard from "./ProductCard";

const ProductTabs = () => {
    const tabs = ["Featured", "New Arrivals", "Best Sellers"];
    const { execute, loading } = useAxiosRequest();
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await execute("GET", "/products");
                setProducts(response.data || []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

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
                    {loading ? (
                        <p>Loading products...</p>
                    ) : (
                        products.map((product) => (
                            <ProductCard key={product.id} id={product.id} name={product.name} image={product.thumb_image} price={product.unit_price} product={product} />
                        ))
                    )}
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
