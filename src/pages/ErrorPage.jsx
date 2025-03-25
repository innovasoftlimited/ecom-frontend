import React from "react";
import { FaSearch } from "react-icons/fa";

const ErrorSection = () => {
    return (
        <>
            <section
                className="mt-contact-banner bg-cover bg-center  p-20 mt-24"
                style={{ backgroundImage: 'url(/images/404-banner.jpg)' }}
            >
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h1 className="text-4xl font-bold uppercase mb-4 text-gray-800 tracking-wider">
                                {/* About Uss */}
                            </h1>
                            <nav className="breadcrumbs">
                                {/* <ul className="flex justify-center items-center space-x-2 text-sm">
                                    <li className="flex items-center">
                                        <a
                                            href="index.html"
                                            className="text-gray-800 hover:text-red-500 transition-colors"
                                        >
                                            home
                                        </a>
                                    </li>
                                    <li className="text-gray-800">About Uss</li>
                                </ul> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-error-sec dark relative pt-10 pb-[76px] bg-[#f6f6f6]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full text-center">
                            {/* Error Code */}
                            <span className=" font-montserrat block  font-bold tracking-[-4px] mb-[34px] text-[#545454] sm:text-[150px] sm:leading-[100px]">
                                404
                            </span>
                            {/* Error Message */}
                            <h1 className="uppercase montserrat text-[36px] leading-[38px] font-bold mb-[12px] tracking-[3px] text-[#545454] sm:text-[24px] sm:leading-[26px]">
                                PAGE NOT FOUND!
                            </h1>
                            {/* Additional Text */}
                            <div className="txt text-[24px] leading-[26px] font-light mb-[75px] font-[Source Sans Pro] text-[#494949] sm:text-[18px] sm:leading-[20px]">
                                <p>We're sorry, but something went wrong.</p>
                            </div>
                            {/* Buttons & Search Form */}
                            <ul className="btn-list list-none mb-[67px]">
                                <li className="inline-block align-middle mr-[7px] ml-[15px] sm:ml-[5px] sm:mr-[5px]">
                                    <a
                                        href="#"
                                        className="btn-back text-uppercase block w-[174px] py-[11px] px-[15px] text-[16px] leading-[18px] font-bold montserrat text-white bg-[#545454] transition-colors duration-250 hover:bg-[#ff6060] text-center sm:w-[140px] sm:text-[14px] sm:py-[8px] sm:px-[10px]"
                                    >
                                        BACK TO HOME
                                    </a>
                                </li>
                                <li className="inline-block align-middle mr-[7px] ml-[15px] sm:ml-[5px] sm:mr-[5px]">
                                    <form
                                        action="#"
                                        className="error-form inline-block w-[216px] font-bold montserrat border-2 border-[#545454] sm:w-[180px]"
                                    >
                                        <fieldset className="flex m-0 p-0">
                                            <input
                                                type="search"
                                                className="form-control w-[80%] h-[37px] border-0 outline-none bg-transparent text-[16px] leading-[18px] uppercase tracking-[-1px] p-[10px] pl-[16px] sm:text-[14px] sm:leading-[16px] sm:pl-[10px]"
                                                placeholder="Search"
                                            />
                                            <button
                                                type="submit"
                                                className="btn-submit text-[18px] leading-[20px] font-normal text-[#545454] p-[8px] px-[10px] transition-colors duration-250 hover:text-[#ff6060] sm:text-[16px] sm:leading-[18px] sm:px-[8px]"
                                            >
                                                <FaSearch />
                                            </button>
                                        </fieldset>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorSection;
