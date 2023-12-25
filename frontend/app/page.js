'use server';

import HomePage from '@/components/HomePage';
import HeroBanner from '@/components/HeroBanner';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
// import { fetchDataFromAPI } from '@/utils/api';
import { API_URL, STRAPI_API_TOKEN } from '@/utils/urls';

export default async function Home() {
  const fetchDataFromAPI = async (endpoint) => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    };

    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();

    return data;
  };

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const products2 = await fetchDataFromAPI('/api/products');
  //   // setData(data);
  //   return products2;
  // };

  let data = await fetchDataFromAPI('/api/products');

  // Alternative way to fetch data for GetStaticProps in app directory (not in page directory)

  return (
    <main>
      <HeroBanner />
      <h1 className="text-black">{data.data[0].attributes.name}</h1>
      {/* This will not update when products is fetched */}
      {/* <h1>{products}</h1> */}
      {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
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

// export async function getStaticProps() {
//   return {
//     props: { products: [{ id: 1, name: 'Test Product' }] },
//   };
// }
