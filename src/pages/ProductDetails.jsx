import React, { useEffect, useState } from "react";
import { FaAngleRight, FaComments, FaExchangeAlt, FaHeart, FaShareAlt, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; // to get the product id from route
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "../components/ProductTab/ProductCard"; // your related products component
import useAxiosRequest from "../hooks/useAxiosRequest";
import { addToCart } from "../redux/reducers/cartSlice";

const ProductDetail = () => {
    // Get product id from URL parameters
    const { id } = useParams();

    // For API call using your custom hook
    const { execute } = useAxiosRequest();
    const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

    // Local states for product, images, variants, and active tab
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [activeTab, setActiveTab] = useState("tab3");

    const dispatch = useDispatch();

    // For related products (example static data)
    const products = [
        { id: 1, name: "Bombi Chair", image: "/images/img01.jpg", price: "200,00" },
        { id: 2, name: "Product 2", image: "/images/img02.jpg", price: "150,00" },
        { id: 3, name: "Product 3", image: "/images/img03.jpg", price: "100,00" },
        { id: 4, name: "Product 4", image: "/images/img04.jpg", price: "250,00" },
        { id: 5, name: "Product 5", image: "/images/img05.jpg", price: "300,00" },
    ];

    // Tabs for the lower content section
    const tabs = [
        { id: "tab1", label: "DESCRIPTION" },
        { id: "tab2", label: "INFORMATION" },
        { id: "tab3", label: "REVIEWS (12)" },
    ];

    // Fetch product details on mount using the product id.
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Adjust endpoint as needed; here we use /products/{id}
                const response = await execute("GET", `/products/${id}`);
                // Assuming response.data is an array with one product (adjust according to your API)
                const fetchedProduct = response.data && response.data[0];
                setProduct(fetchedProduct || null);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    // Once product is loaded, set default values for active image and variant choices
    useEffect(() => {
        if (product && product.product_details && product.product_details.length > 0) {
            // Set default active image from the first variant
            const firstImage = baseUrl + product.product_details[0].image;
            setActiveImage(firstImage);

            // Set initial variant options from the first product detail
            setSelectedColor(product.product_details[0].color.value);
            setSelectedSize(product.product_details[0].size.value);
        }
    }, [product, baseUrl]);

    // Build an array of images from the product details
    const productImages =
        product && product.product_details
            ? product.product_details.map((detail) => baseUrl + detail.image)
            : [];

    // Gather available colors and sizes from product details (unique values)
    const availableColors =
        product && product.product_details
            ? [...new Set(product.product_details.map((detail) => detail.color.value))]
            : [];

    const availableSizes =
        product && product.product_details
            ? [...new Set(product.product_details.map((detail) => detail.size.value))]
            : [];

    // Find the variant that matches the selected color and size.
    const selectedVariant =
        product && product.product_details
            ? product.product_details.find(
                (detail) =>
                    detail.color.value === selectedColor && detail.size.value === selectedSize
            )
            : null;

    // Slider settings for thumbnails
    const thumbnailSettings = {
        dots: false,
        infinite: false,
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

    const handleAddToCart = () => {
        if (selectedVariant) {
            dispatch(
                addToCart({
                    id: product.id,
                    name: product.name,
                    price: selectedVariant.unit_price,
                    quantity: 1,
                    image: selectedVariant.image,
                    variantId: selectedVariant.id,
                })
            );
        }
    };

    // Until product is loaded, show loading indicator
    if (!product) {
        return <div className="min-h-screen mt-24 flex justify-center items-center">Loading...</div>;
    }

    return (
        <>
            <div className="customGray mt-24">
                <section
                    className="overflow-hidden pb-16 container mx-auto px-4 sm:px-6 lg:px-8 py-10"
                    data-wow-delay="0.4s"
                >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row">
                            {/* Slider Section */}
                            <div className="w-full md:w-[55.5%] pr-0 md:pr-[4.65%]">
                                {/* Comments / Social icons */}
                                <ul className="flex space-x-4 text-base font-normal text-gray-400 ">
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

                                {/* Main Product Image */}
                                <div className="my-8">
                                    <img src={activeImage} alt="Product" className="w-full" />
                                </div>

                                {/* Thumbnails Slider */}
                                <div className="px-8">
                                    <Slider {...thumbnailSettings}>
                                        {productImages.map((thumb, idx) => (
                                            <div key={idx} className="cursor-pointer" onClick={() => setActiveImage(thumb)}>
                                                <div className={`bg-white p-2 ${activeImage === thumb ? "border-red-500" : "border-transparent"} border`}>
                                                    <img src={thumb} alt="Thumbnail" className="w-full" />
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            {/* Detail Holder Section */}
                            <div className="w-full md:w-[40%] pt-12 md:pt-0">
                                {/* Breadcrumbs */}
                                <ul className="flex items-center text-sm text-gray-400 mb-2">
                                    <li className="mr-2">
                                        <a href="#" className="transition duration-250 hover:text-pink-400">
                                            {product.category?.parent?.name || "Category"}
                                        </a>
                                    </li>
                                    <li>
                                        <FaAngleRight className="mx-1" />
                                    </li>
                                    <li>{product.category?.name || "Sub-category"}</li>
                                </ul>

                                {/* Product Title */}
                                <h2 className="text-[32px] sm:text-[44px] leading-[36px] sm:leading-[46px] font-light tracking-[5px] text-black mb-4">
                                    {product.name}
                                </h2>

                                {/* Reviews and Ratings */}
                                <div className="flex items-center mb-8">
                                    <span className="text-sm text-gray-400 mr-2">Reviews (12)</span>
                                    <ul className="flex space-x-1 text-[14px] text-yellow-500">
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                    </ul>
                                </div>

                                {/* Product Variants */}
                                <div className="mb-6 space-y-4">
                                    {/* Color Variant */}
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-medium uppercase text-gray-500 tracking-wide">Color</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {availableColors.map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={`rounded-full border transition-all duration-200 ${selectedColor === color ? "border-black scale-105 shadow-xl w-7 h-7" : "border-gray-200"
                                                        } w-6 h-6`}
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
                                            {availableSizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`py-1.5 text-xs font-medium uppercase rounded-sm transition-colors duration-200 ${selectedSize === size ? "bg-black text-white border-black" : "bg-gray-100 text-gray-600 border-gray-200"
                                                        } hover:bg-gray-200 hover:text-black border`}
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
                                        ${selectedVariant ? selectedVariant.unit_price : product.product_details[0].unit_price}{" "}
                                        <del className="text-lg text-gray-400 pl-2">
                                            {product.featured ? product.featured : ""}
                                        </del>
                                    </span>
                                </div>

                                {/* Add to Cart Form */}
                                <form className="mb-10" action="#" onSubmit={(e) => e.preventDefault()}>
                                    <fieldset className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <label htmlFor="qty" className="uppercase text-sm text-gray-400 pt-2 font-montserrat">
                                                qty
                                            </label>
                                            <input
                                                type="number"
                                                id="qty"
                                                defaultValue={1}
                                                min={1}
                                                className="w-[72px] h-[42px] rounded-full px-4 text-[18px] font-bold text-gray-400 bg-white font-montserrat"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={handleAddToCart}
                                                className="w-[173px] py-3 bg-[#ff8283] text-white uppercase text-sm font-bold rounded-full transition duration-250 hover:bg-black font-montserrat"
                                            >
                                                ADD TO CART
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>

                                {/* Product Description */}
                                <div className="max-w-[490px] mb-8 border-b border-gray-200 pb-10">
                                    <p className="mb-10">{product.description}</p>
                                </div>

                                {/* Action List */}
                                <ul className="flex space-x-8 text-sm text-gray-400 pb-8 border-b border-gray-200 mb-8">
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

            {/* Tabs Section */}
            <div className="overflow-hidden py-10 bg-white" data-wow-delay="0.4s">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                    {/* Tabs Navigation */}
                    <ul className="flex justify-center space-x-6 uppercase text-center mb-6">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`transition-colors duration-250 font-semibold font-montserrat ${activeTab === tab.id ? "font-bold" : "text-gray-400 hover:text-black"
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
                                <p className="mb-4">{product.description}</p>
                                <p>
                                    Detailed information about the product construction, materials and care instructions.
                                </p>
                            </div>
                        )}

                        {activeTab === "tab2" && (
                            <div id="tab2" className="text-gray-700">
                                <p className="mb-4">
                                    Additional specifications such as dimensions, materials, care instructions, and warranty details.
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
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                            </ul>
                                            <span className="font-bold">John Wick</span>
                                            <time dateTime="2016-01-01" className="text-sm text-gray-400">
                                                09:10 Nov, 19 2016
                                            </time>
                                        </div>
                                        <p>
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded">
                                        <div className="flex items-center space-x-4 mb-2">
                                            <ul className="flex space-x-1 text-yellow-400">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                            </ul>
                                            <span className="font-bold">John Wick</span>
                                            <time dateTime="2016-01-01" className="text-sm text-gray-400">
                                                09:10 Nov, 19 2016
                                            </time>
                                        </div>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                        </p>
                                    </div>
                                </div>

                                {/* Review Form */}
                                <form action="#" className="p-commentform" onSubmit={(e) => e.preventDefault()}>
                                    <fieldset className="space-y-4 py-6 px-10">
                                        <h2 className="text-xl font-semibold">Add Comment</h2>
                                        <div className="flex items-center space-x-2">
                                            <label className="w-20 text-sm uppercase text-gray-500">Rating</label>
                                            <ul className="flex space-x-1 text-yellow-500">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm uppercase text-gray-500 mb-1">Name</label>
                                            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm uppercase text-gray-500 mb-1">E-Mail</label>
                                            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm uppercase text-gray-500 mb-1">Review</label>
                                            <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" rows="4"></textarea>
                                        </div>
                                        <button type="submit" className="bg-white border border-gray-400 text-gray-400 hover:bg-black hover:text-white uppercase text-sm font-bold py-2 px-4 rounded-full transition duration-250">
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
                    {products.map((prod) => (
                        <ProductCard key={prod.id} name={prod.name} image={prod.image} price={prod.price} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
