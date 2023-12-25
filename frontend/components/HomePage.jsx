// 'use client';
// import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import Wrapper from './Wrapper';
import ProductCard from './ProductCard';
import { fetchDataFromAPI } from '@/utils/api';

export default function HomePage({ products }) {
  console.log('Products:', products);

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromAPI('/api/products');
  //   setData(data);
  // };

  console.log(products);
  // console.log(data);

  return (
    <main>
      <HeroBanner />
      <h1>{products}</h1>
      <h1>{products?.data?.[0]?.attributes?.name}</h1>
      {/* <h1>{data?.[0]?.attributes?.name}</h1> */}

      <Wrapper>
        {/* Heading and Paragraph section start */}
        <div className="text-  max-w-[800px] mx-auto my-[50px] md:my-[80px]">
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
    </main>
  );
}

// export async function getStaticProps() {
//   const products = await fetchDataFromAPI('/api/products');
//   return {
//     props: { products },
//   };
// }

// export async function getStaticProps() {
//   const response = await fetchDataFromAPI('/api/products');
//   const products = response.data;
//   return {
//     props: { products },
//   };
// }

export async function getStaticProps() {
  return {
    props: { products: [{ id: 1, name: 'Test Product' }] },
  };
}
