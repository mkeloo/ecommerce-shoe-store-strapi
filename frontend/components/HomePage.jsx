import React from 'react';
import HeroBanner from './HeroBanner';
import Wrapper from './Wrapper';
import ProductCard from './ProductCard';

const HomePage = () => {
  return (
    <div className="">
      <HeroBanner />
      <Wrapper>
        {/* Heading and Paragraph section start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* Heading and Paragraph section end */}

        {/* Product Card section start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14 px-5 md:px-0">
          {/* Repeat 10 times using loop */}
          {[...Array(10)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        {/* Product Card section end */}
      </Wrapper>
    </div>
  );
};
export default HomePage;
