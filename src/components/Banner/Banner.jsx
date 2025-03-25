import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import ProductTabs from '../ProductTab/ProductTabs';

const Banner = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-6">
            {/* Banner 1 */}
            <div className="relative w-[385px]">
                <img src="/images/img01L.jpg" alt="MY SMALL WRITING DESK" className="w-full" />
                <div className="absolute inset-0 p-6 flex flex-col text-white">
                    <h2 className="m-0 mb-[3px] uppercase tracking-[4.6px] text-[24px] leading-[28px] text-xl font-light text-gray-500 ">MY SMALL WRITING DESK</h2>
                    <div className="flex justify-between items-center mt-0">
                        <a href="product-detail.html" className="text-gray-600 uppercase text-sm flex items-center gap-2 transition hover:text-red-500">
                            <span>Shop Now</span>
                            <MdOutlineKeyboardArrowRight
                                className="fa fa-angle-right border border-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-lg" />
                        </a>
                        <div className="bg-yellow-300 text-white text-5xl font-bold rounded-full w-36 h-36 flex items-center justify-center "> -20%</div>
                    </div>
                </div>
            </div>

            {/* Banner Box */}
            <div className="flex flex-col gap-4">
                {/* Banner 2 */}
                <div className="relative w-[385px]">
                    <img src="/images/img02T.jpg" alt="MODULAR LOUNGE TEAK" className="w-full" />
                    <div className="absolute inset-0 p-4 text-white">
                        <h2 className="m-0 mb-[3px] uppercase font-light tracking-[4.6px] text-[24px] leading-[28px] text-xl font-light uppercase text-gray-500">MODULAR LOUNGE TEAK</h2>
                        <span className="block text-gray-400 mt-2">$ 129.00</span>
                    </div>
                </div>
                {/* Banner 3 */}
                <div className="relative w-[385px] text-right">
                    <img src="/images/img03B.jpg" alt="Modular technical fabric sofa" className="w-full" />
                    <div className="absolute inset-0 p-4 text-white flex flex-col justify-between">
                        <h2 className="m-0 mb-[3px] uppercase font-light tracking-[4.6px] text-[24px] leading-[28px]text-xl font-light tracking-wide text-gray-500 ">Modular technical fabric sofa</h2>
                        <a href="product-detail.html" className="text-gray-600 uppercase text-sm transition hover:text-red-500">Shop Now</a>
                    </div>
                </div>
            </div>

            {/* Banner 4 */}
            <div className="relative w-[385px] ">
                <img src="/images/img04R.jpg" alt="Direct light pendant lamp" className="w-full" />
                <div className="absolute inset-0 p-6 text-white">
                    <h2 className="m-0 mb-[3px] uppercase font-light tracking-[4.6px] text-[24px] leading-[28px] text-xl font-light text-gray-500">Direct light pendant lamp</h2>
                    <span className="block text-gray-400 mt-2">$ 129.00</span>
                    <a href="product-detail.html" className="text-gray-600 uppercase text-sm flex items-center gap-2 mt-4 transition hover:text-red-500">
                        <span>Shop Now</span>
                        <MdOutlineKeyboardArrowRight
                            className="fa fa-angle-right border border-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-lg" />
                    </a>
                </div>
            </div>
            <ProductTabs />
        </div>
    );
};

export default Banner;
