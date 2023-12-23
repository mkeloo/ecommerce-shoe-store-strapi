import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-3 border-b">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" alt="product 1" />
      </div>
      {/* Image End */}

      {/* Product Info Start */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>

          {/* Product Subtitle */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shoes
          </div>

          {/* Product Price */}
          <div className="text-md md:text-md font-bold text-black/[0.8] mt-2">
            $225
          </div>
        </div>

        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Men&apos;s Golf Shoes
        </div>

        {/* Product Size */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            {/* Size */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                name="size-dropdown"
                id="size-dropdown"
                className="hover:text-black"
              >
                <option value="1">US 7</option>
                <option value="2">US 7.5</option>
                <option value="3">US 8</option>
                <option value="4">US 8.5</option>
                <option value="5">US 9</option>
                <option value="6">US 9.5</option>
                <option value="7">US 10</option>
                <option value="8">US 10.5</option>
                <option value="9">US 11</option>
                <option value="10">US 11.5</option>
                <option value="11">US 12</option>
                <option value="12">US 12.5</option>
                <option value="13">US 13</option>
                <option value="14">US 13.5</option>
                <option value="15">US 14</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quanity:</div>
              <select
                name="quanity-dropdown"
                id="quantity-dropdown"
                className="hover:text-black"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">6</option>
                <option value="4">7</option>
                <option value="4">8</option>
                <option value="4">9</option>
                <option value="4">10</option>
              </select>
            </div>
          </div>

          {/* Delete Icon */}
          <RiDeleteBin6Line className="text-black/[0.5] cursor-pointer hover:scale-105 duration-200 hover:text-red-600 text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};
export default CartItem;
