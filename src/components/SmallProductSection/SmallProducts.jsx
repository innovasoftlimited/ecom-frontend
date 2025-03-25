import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Product = ({ product }) => {
    const truncateName = (name) => {
        const maxLength = 20;
        return name.length > maxLength ? `${name.substring(0, maxLength - 3)}...` : name;
    };

    return (
        <div className="flex items-start mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-auto" />
            </div>
            <div className="ml-3">
                <h4 className="text-gray-600 text-sm md:text-base">
                    <a href="product-detail.html" className="transition duration-300 hover:text-red-500 font-montserrat">
                        <span className="block truncate">{truncateName(product.name)}</span>
                    </a>
                </h4>
                <div className="flex items-center text-yellow-500 text-xs mt-1">
                    {Array.from({ length: 4 }).map((_, starIndex) => (
                        <i key={starIndex} className={`fa fa-${starIndex < product.rating ? "star" : "star-o"}`}></i>
                    ))}
                </div>
                <ul className="text-xs flex space-x-1 text-yellow-500">
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaRegStar /></li>
                </ul>
                <div className="flex items-center mt-1">
                    <del className="text-gray-400 text-sm mr-2">{product.oldPrice}</del>
                    <span className="text-lg font-bold text-gray-900">{product.newPrice}</span>
                </div>
            </div>
        </div>
    );
};

const Section = ({ section }) => (
    <div className="max-w-xs mx-auto ">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5 font-montserrat pb-5">{section.title}</h3>
        {section.products.map((product, index) => (
            <Product key={index} product={product} />
        ))}
    </div>
);

const HotSaleProducts = () => {
    const sections = [
        {
            title: "Hot Sale",
            products: [
                {
                    name: "Egon Wooden Chair ",
                    image: "/images/img05.jpg",
                    oldPrice: "$75.00",
                    newPrice: "$55.00",
                    rating: 3,
                },
                {
                    name: "Oyo Cantilever Chair",
                    image: "/images/img08.jpg",
                    oldPrice: "$75.00",
                    newPrice: "$55.00",
                    rating: 0,
                },
                {
                    name: "Kurve Chair",
                    image: "/images/img09.jpg",
                    oldPrice: "$75.00",
                    newPrice: "$55.00",
                    rating: 3,
                },
            ],
        },
        {
            title: "New Arrivals",
            products: [
                {
                    name: "Modern Sofa",
                    image: "/images/img10.jpg",
                    oldPrice: "$150.00",
                    newPrice: "$120.00",
                    rating: 4,
                },
                {
                    name: "Classic Armchair",
                    image: "/images/img01.jpg",
                    oldPrice: "$200.00",
                    newPrice: "$180.00",
                    rating: 5,
                },
                {
                    name: "Stylish Table",
                    image: "/images/img02.jpg",
                    oldPrice: "$100.00",
                    newPrice: "$80.00",
                    rating: 2,
                },
            ],
        },
        {
            title: "Best Deals",
            products: [
                {
                    name: "Luxury Bed",
                    image: "/images/img03.jpg",
                    oldPrice: "$500.00",
                    newPrice: "$450.00",
                    rating: 5,
                },
                {
                    name: "Dining Set",
                    image: "/images/img04.jpg",
                    oldPrice: "$300.00",
                    newPrice: "$250.00",
                    rating: 4,
                },
                {
                    name: "Office Chair",
                    image: "/images/img05.jpg",
                    oldPrice: "$100.00",
                    newPrice: "$90.00",
                    rating: 3,
                },
            ],
        },
        {
            title: "Top Rated",
            products: [
                {
                    name: "Ergonomic Chair",
                    image: "/images/img06.jpg",
                    oldPrice: "$120.00",
                    newPrice: "$100.00",
                    rating: 5,
                },
                {
                    name: "Gaming Desk",
                    image: "/images/img07.jpg",
                    oldPrice: "$200.00",
                    newPrice: "$180.00",
                    rating: 4,
                },
                {
                    name: "Bookshelf",
                    image: "/images/img08.jpg",
                    oldPrice: "$80.00",
                    newPrice: "$70.00",
                    rating: 3,
                },
            ],
        },
    ];

    return (
        <div className="px-4 py-8 md:px-16 lg:px-48 lg:py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((section, sectionIndex) => (
                        <Section key={sectionIndex} section={section} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotSaleProducts;
