import React from 'react';

import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';

const CategoryPage = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>

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
export default CategoryPage;
