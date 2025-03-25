import React from 'react';
import Banner from '../components/Banner/Banner';
import BestSeller from '../components/BestSellerSection/BestSeller';
import SliderComponent from '../components/Slider/Slider';
import HotSaleProducts from '../components/SmallProductSection/SmallProducts';

const HomePage = () => {
    return (
        <>
            <div className="pt-16">
                <SliderComponent />
                <Banner />
            </div>
            <BestSeller />
            <HotSaleProducts />
        </>
    );
};

export default HomePage;