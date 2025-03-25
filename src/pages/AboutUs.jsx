import React from 'react';
import { FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const AboutUs = () => {
    return (
        <div className="mt-main mt-24">
            {/* Banner Section */}
            <section
                className="mt-contact-banner bg-cover bg-center py-16"
                style={{ backgroundImage: 'url(/images/img43.jpg)' }}
            >
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h1 className="text-4xl font-bold uppercase mb-4 text-gray-800 tracking-wider">
                                About Us
                            </h1>
                            <nav className="breadcrumbs">
                                <ul className="flex justify-center items-center space-x-2 text-sm">
                                    <li className="flex items-center">
                                        <a
                                            href="index.html"
                                            className="text-gray-800 hover:text-red-500 transition-colors"
                                        >
                                            home
                                        </a>
                                    </li>
                                    <li className="text-gray-800">About Us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container mx-auto px-4 sm:px-8 lg:px-32 py-16'>
                <section
                    className="mt-about-sec wow fadeInUp"
                    data-wow-delay="0.4s"
                >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="txt overflow-hidden text-[18px] leading-[31px] font-light mb-6 text-[#494949]">
                                    <h2 className="text-[30px] leading-[33px] font-bold uppercase mb-12 font-montserrat text-[#494949]">
                                        WHO WE ARE?
                                    </h2>
                                    <p className="mb-9">
                                        Morbi in erat malesuada, sollicitudin massa at, tristique nisl.
                                        Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Umco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat{" "}
                                        <strong className="block text-[24px] leading-[26px] font-semibold">
                                            Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem.
                                        </strong>
                                    </p>
                                    <p>
                                        Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut.
                                        Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin massa at,
                                    </p>
                                </div>
                                <div className="mt-follow-holder">
                                    <span className="title block text-[13px] leading-[18px] font-bold font-montserrat mb-4 text-[#575757]">
                                        Follow Us
                                    </span>
                                    <ul className="social-network flex space-x-3">
                                        <li>
                                            <a href="#" className="text-[18px] leading-[20px]">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-[18px] leading-[20px]">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-[18px] leading-[20px]">
                                                <FaGooglePlus />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-[18px] leading-[20px]">
                                                <FaYoutube />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-[18px] leading-[20px]">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-[18px] leading-[20px]">
                                                <FaWhatsapp />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mt Team Section */}
                <section className="mt-team-sec py-[0] pb-[87px]">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <h3 className="text-[30px] leading-[33px] font-bold uppercase mb-9 font-montserrat text-[#494949]">
                                OUR TEAM
                            </h3>
                            <div className="holder flex flex-wrap">
                                {/* Team Member 1 */}
                                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0 sm:pr-4 wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="img-holder mb-4 overflow-hidden">
                                        <a href="#" className="relative block">
                                            <img
                                                src="/images/fahimvai.jpeg"
                                                alt="CLARA WOODEN"
                                                className="w-full"
                                            />
                                            <ul className="social-icon absolute inset-0 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-250">
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaTwitter className="text-white" />
                                                </li>
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaFacebook className="text-white" />
                                                </li>
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaLinkedin className="text-white" />
                                                </li>
                                            </ul>
                                        </a>
                                    </div>
                                    <div className="mt-txt pl-2 border-l-4 border-gray-200">
                                        <h4 className="text-[20px] leading-[22px] font-bold uppercase text-[#494949]">
                                            <a href="#" className="transition duration-250 hover:text-[#f53434] uppercase">
                                                Md. Mahmudul Haque
                                            </a>
                                        </h4>
                                        <span className="sub-title text-[12px] leading-[14px] uppercase tracking-[4px] text-[#a0a0a0] block pt-1">
                                            COO
                                        </span>
                                    </div>
                                </div>
                                {/* Team Member 2 */}
                                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0 sm:pr-4 wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="img-holder mb-4 overflow-hidden">
                                        <a href="#" className="relative block">
                                            <img
                                                src="/images/shoiebvai.jpeg"
                                                alt="JOHN WICK"
                                                className="w-full"
                                            />
                                            <ul className="social-icon absolute inset-0 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-250">
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaTwitter className="text-white" />
                                                </li>
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaFacebook className="text-white" />
                                                </li>
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaLinkedin className="text-white" />
                                                </li>
                                            </ul>
                                        </a>
                                    </div>                                    <div className="mt-txt pl-2 border-l-4 border-gray-200">
                                        <h4 className="text-[20px] leading-[22px] font-bold uppercase text-[#494949]">
                                            <a href="#" className="transition duration-250 hover:text-[#f53434] uppercase">
                                                Shoieb Rahman
                                            </a>
                                        </h4>
                                        <span className="sub-title text-[12px] leading-[14px] uppercase tracking-[4px] text-[#a0a0a0] block pt-1">
                                            CEO
                                        </span>
                                    </div>
                                </div>
                                {/* Team Member 3 */}
                                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0 sm:pr-4 wow fadeInRight" data-wow-delay="0.4s">
                                    <div className="img-holder mb-4 overflow-hidden">
                                        <a href="#" className="relative block">
                                            <img
                                                src="/images/souravvai2.png"
                                                alt="HARRY KANE"
                                                className="w-full "
                                            />
                                            <ul className="social-icon absolute inset-0 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-250">
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaTwitter className="text-white" />
                                                </li>
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaFacebook className="text-white" />
                                                </li>
                                                <li className="bg-[#494949] rounded-full w-10 h-10 flex justify-center items-center">
                                                    <FaLinkedin className="text-white" />
                                                </li>
                                            </ul>
                                        </a>
                                    </div>
                                    <div className="mt-txt pl-2 border-l-4 border-gray-200">
                                        <h4 className="text-[20px] leading-[22px] font-bold uppercase text-[#494949]">
                                            <a href="#" className="transition duration-250 hover:text-[#f53434]">
                                                Sourav Chowdhury
                                            </a>
                                        </h4>
                                        <span className="sub-title text-[12px] leading-[14px] uppercase tracking-[4px] text-[#a0a0a0] block pt-1">
                                            SOFTWARE ENGINEER
                                        </span>
                                    </div>
                                </div>
                                {/* Team Member 4 */}
                                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0 wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="img-holder mb-4 overflow-hidden">
                                        <a href="#" className="block">
                                            <img
                                                src="/images/imgU.jpg"
                                                alt="CLARA WOODEN"
                                                className="w-full "
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mt Workspace Section */}

            </div>
            <section
                className="mt-workspace-sec wow fadeInUp -mb-64 "
                data-wow-delay="0.4s"
            >
                <div className="container mx-auto px-4">
                    <div className="w-full">
                        <h2 className="text-[30px] leading-[33px] font-bold uppercase mb-9 font-montserrat text-[#494949]">
                            OUR WORKSPACE
                        </h2>
                    </div>
                </div>
                {/* Work Slider */}
                {/* <Slider {...settings} className="work-slider"></Slider> */}
                <ul className="work-slider list-none flex overflow-x-auto space-x-4 px-4 snap-x">
                    {/* Slide 1 */}
                    <li className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 snap-center">
                        {/* Left Image (Full height) */}
                        <div className="h-2/3">
                            <img
                                src="images/img48f.jpg"
                                alt="Main product"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Images Grid */}
                        <div className="grid grid-rows-2 gap-4 h-2/3">
                            {/* Top Row - Two Images */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="relative overflow-hidden rounded-lg shadow-lg col-span-2">
                                    <img
                                        src="/images/img49s.jpg"
                                        alt="Product detail 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg col-span-1">
                                    <img
                                        src="/images/img50th.jpg"
                                        alt="Product detail 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bottom Row - Single Image */}
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="/images/img51f.jpg"
                                    alt="Product context"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </li>

                </ul>
            </section>

        </div>
    );
};

export default AboutUs;
