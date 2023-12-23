'use client';
import React from 'react';
import Wrapper from '@/components/Wrapper';
import RelatedProducts from '@/components/RelatedProducts';

import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import { IoMdHeartEmpty } from 'react-icons/io';

const sizeNum = [
  {
    id: 1,
    size: 7,
  },
  {
    id: 2,
    size: 7.5,
  },
  {
    id: 3,
    size: 8,
  },
  {
    id: 4,
    size: 8.5,
  },
  {
    id: 5,
    size: 9,
  },
  {
    id: 6,
    size: 9.5,
  },
  {
    id: 7,
    size: 10,
  },
  {
    id: 8,
    size: 10.5,
  },
  {
    id: 9,
    size: 11,
  },
  {
    id: 10,
    size: 11.5,
  },
  {
    id: 11,
    size: 12,
  },
  {
    id: 12,
    size: 12.5,
  },
  {
    id: 13,
    size: 13,
  },
  {
    id: 14,
    size: 13.5,
  },
  {
    id: 15,
    size: 14,
  },
];

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left Column Start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Left Column End */}

          {/* Right Column Start */}
          <div className="flex-[1] py-3">
            {/* Product Name */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/* Product Price */}
            <div className="text-lg font-semibold">$225</div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              incl. of taxes, plus shipping costs
            </div>

            {/* Product Size Range Start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">
                  Select Size (US Size)
                </div>
                <div className="text-md font-semibold text-black/[0.5] cursor-pointer">
                  Size Guide
                </div>
              </div>
              {/* Heading End */}

              {/* Size Buttons Start */}
              <div className="grid grid-cols-3 gap-2">
                {sizeNum.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"
                  >
                    US {item.size}
                  </div>
                ))}
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  US 14.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  US 15
                </div>
              </div>
              {/* Size Buttons End */}

              {/* Show Error Start */}
              <div className="text-red-600 mt-2">Please select a size</div>
              {/* Show Error End */}
            </div>
            {/* Product Size Range End */}

            {/* Add to Cart Button Start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* Add to Cart Button End */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            {/* Product Description Start */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                The Jordan Retro 6 G is a throwback to the original AJ6, updated
                for the course. It&apos;s got the same iconic look as the
                original, with a soft foam midsole and a cushioned collar for
                comfort on the course.
              </div>
              <div className="text-md mb-5">
                The Jordan Retro 6 G is a throwback to the original AJ6, updated
                for the course. It&apos;s got the same iconic look as the
                original, with a soft foam midsole and a cushioned collar for
                comfort on the course.
              </div>
            </div>
            {/* Product Description END */}
          </div>
          {/* Right Column End */}
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  );
};
export default ProductDetails;
