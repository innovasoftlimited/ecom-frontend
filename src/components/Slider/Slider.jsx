import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import furniture from '../../assets/images/furniture.jpg';
import backcountry from '../../assets/images/lamp01.jpg';
import sofas from '../../assets/images/sofa.jpg';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="overflow-hidden bg-gray-100 ">
            <Slider {...settings}>
                <div className="relative h-[600px] w-full">
                    <img
                        src={backcountry}
                        alt="Backcountry"
                        className="absolute inset-0 w-full h-full object-cover "
                    />
                    {/* Content overlay */}
                    <div className="relative z-10">
                        {/* Your content here */}
                        <div className="container mx-auto">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="max-w-xl mx-auto py-20 md:py-40 text-center md:text-center">
                                        <strong className="block text-gray-500 mb-2 font-semibold tracking-widest uppercase text-sm">FURNITURE DESIGNS IDEAS</strong>
                                        <h1 className="text-[#3b3b3b] m-0 mb-[-7px] font-bold uppercase text-[65px] leading-[68px] font-montserrat">LIGHTING</h1>
                                        <h2 className="text-[#7a7a7a] m-0 mb-[12px] font-bold text-[51px] leading-[54px] font-montserrat mt-[-1rem]">PENDANT LAMPS</h2>
                                        <div className="text-gray-500 italic max-w-md mx-auto mb-10 md:mb-20 text-lg leading-6">
                                            <p>Consectetur adipisicing elit. Beatae accusamus, optio, repellendus inventore</p>
                                        </div>
                                        <a className="text-gray-500 font-bold uppercase text-lg leading-6 transition-all duration-400 inline-block relative hover:text-red-500">
                                            shop now
                                            <span className="absolute top-2 left-full h-px w-8 bg-gray-500 transition-all duration-400 hover:w-12 hover:bg-red-500"></span>
                                            <span className="absolute top-2 right-full h-px w-8 bg-gray-500 transition-all duration-400 hover:w-12 hover:bg-red-500"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Slide - Right Aligned */}
                <div className="relative h-[600px] w-full">
                    <img
                        src={furniture}
                        alt="Furniture"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 h-full flex items-center">
                        <div className="container mx-auto">
                            <div className="max-w-2xl ml-auto py-20 md:py-40 text-center pr-4 md:pr-20 lg:pr-20">
                                <strong className="block text-gray-500 mb-3 font-semibold tracking-widest uppercase text-sm">FURNITURE DESIGNS IDEAS</strong>
                                <h1 className="text-[#3b3b3b] m-0 mb-[-7px] font-bold uppercase text-[65px] leading-[68px] font-montserrat">LOUNGE CHAIRS</h1>
                                <h2 className="text-[#7a7a7a] m-0 mb-[12px] font-bold text-[51px] leading-[54px] font-montserrat mt-[-1rem]">SW DAYBED</h2>
                                <div className="text-gray-500 italic max-w-md ml-auto mb-10 md:mb-20 text-lg leading-6">
                                    <p>Consectetur adipisicing elit. Beatae accusamus, optio, repellendus inventore</p>
                                </div>
                                <a href="product-detail.html" className="text-gray-500 font-bold uppercase text-lg leading-6 transition-all duration-400 inline-block relative hover:text-red-500">
                                    shop now
                                    <span className="absolute top-2 left-full h-px w-8 bg-gray-500 transition-all duration-400 hover:w-12 hover:bg-red-500"></span>
                                    <span className="absolute top-2 right-full h-px w-8 bg-gray-500 transition-all duration-400 hover:w-12 hover:bg-red-500"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Slide - Left Aligned */}
                <div className="relative h-[600px] w-full">
                    <img
                        src={sofas}
                        alt="Sofas"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 h-full flex items-center">
                        <div className="container mx-auto">
                            <div className="max-w-2xl mr-auto py-20 md:py-40 text-center pl-4 md:pl-20 lg:pl-24">
                                <strong className="block text-gray-500 mb-2 font-semibold tracking-widest uppercase text-sm">FURNITURE DESIGNS IDEAS</strong>
                                <h1 className="text-[#3b3b3b] m-0 mb-[-7px] font-bold uppercase text-[65px] leading-[68px] font-montserrat">CARDBOARD</h1>
                                <h2 className="text-[#7a7a7a] m-0 mb-[12px] font-bold text-[51px] leading-[54px] font-montserrat mt-[-1rem]">Sofas and Armchairs</h2>
                                <div className="text-gray-500 italic max-w-md mr-auto mb-10 md:mb-20 text-lg leading-6 pl-16">
                                    <p>Consectetur adipisicing elit. Beatae accusamus, optio, repellendus inventore</p>
                                </div>
                                <a href="product-detail.html" className="text-gray-500 font-bold uppercase text-lg leading-6 transition-all duration-400 inline-block relative hover:text-red-500">
                                    shop now
                                    <span className="absolute top-2 left-full h-px w-8 bg-gray-500 transition-all duration-400 hover:w-12 hover:bg-red-500"></span>
                                    <span className="absolute top-2 right-full h-px w-8 bg-gray-500 transition-all duration-400 hover:w-12 hover:bg-red-500"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
