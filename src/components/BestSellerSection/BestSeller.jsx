import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "../ProductTab/ProductCard";

const products = [
    {
        id: 1,
        name: "Bombi Chair",
        price: "399,00",
        image: "/images/img11.jpg",
        badge: "Best Price",
    },
    {
        id: 2,
        name: "Marvelous Modern 3 Seater",
        price: "599,00",
        image: "/images/img12.jpg",
    },
    {
        id: 3,
        name: "Puff Armchair",
        price: "200,00",
        image: "/images/img13.jpg",
    },
];

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-next`}
            style={{ ...style, display: "block", background: "#aa6347", borderRadius: "50%", }}
            onClick={onClick}
        >
            tyy

        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-prev`}
            style={{ ...style, display: "block", background: "#0aabb0", borderRadius: "50%", }}
            onClick={onClick}
        >
        </div>
    );
};

const BestSeller = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="py-16 customGray text-center ">
            <div className="container mx-auto  md:px-20">
                <h2 className="text-2xl font-bold uppercase">Best Seller</h2>
                <p className="text-gray-600">EXCEPTEUR SINT OCCAECAT</p>
                <div className="mt-8  md:px-0">
                    <Slider {...settings}>
                        {products.map((product) => (
                            <ProductCard key={product.id} name={product.name} image={product.image} price={product.price} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
