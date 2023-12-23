'use client';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showThumbs={60}
        showIndicators={false}
        showStatus={false}
        className="productCarousel"
      >
        <img src="/p1.png" alt="product1" />
        <img src="/p2.png" alt="product2" />
        <img src="/p3.png" alt="product3" />
        <img src="/p4.png" alt="product4" />
        <img src="/p5.png" alt="product5" />
        <img src="/p6.png" alt="product6" />
        <img src="/p7.png" alt="product7" />
      </Carousel>
    </div>
  );
};
export default ProductDetailsCarousel;
