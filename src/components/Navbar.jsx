import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
//   const [isPricingDropdownOpen, setPricingDropdownOpen] = useState(false);

  return (
    <div className='w-full h-[70px] bg-transparent px-[30px] flex justify-between items-center py-4 border-b-2'>
      <a href='/' className='no-underline text-black flex items-center'>
        <img src="" alt="" />
        <h1 className='text-green-500 font-bold'>UZIMA AI</h1>
      </a>
      <div className='flex items-center justify-between gap-4 bg-white p-3 rounded-lg'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <div className=''>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => setProductsDropdownOpen(!isProductsDropdownOpen)}
          >
            Products <FaChevronDown size={15} color='gray' className='ml-1' />
          </div>
          {isProductsDropdownOpen && (
            <div className='absolute left-100 mt-4 bg-white shadow-lg rounded-lg z-10'>
              <a href='/product1' className='block px-4 py-1 hover:bg-gray-100'>Personal</a>
              <a href='/product2' className='block px-4 py-1 hover:bg-gray-100'>Corporate</a>
            </div>
          )}
        </div>
        <a href="/corp-pricing">Pricing</a>
        {/* <div className=''>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => setPricingDropdownOpen(!isPricingDropdownOpen)}
          >
            Pricing <FaChevronDown size={15} color='gray' className='ml-1' />
          </div>
          {isPricingDropdownOpen && (
            <div className='absolute left-150 mt-2 bg-white shadow-lg rounded-lg z-10'>
              <a href='/pricing1' className='block px-4 py-1 hover:bg-gray-100'>Personal Use</a>
              <a href='/corp-pricing' className='block px-4 py-1 hover:bg-gray-100'>Corporates</a>
            </div>
          )}
        </div> */}
        <a href='/'>Partners</a>
        <a href='/'>Contact</a>
      </div>
      <div className='flex gap-2'>
        <a href="/" className='bg-black text-white p-1.5 rounded-md'>Corporates</a>
        <a href="/signin" className='bg-black text-white p-1.5 rounded-md'>Login</a>
        <a href="/signup" className='bg-transparent border-black border p-1.5 rounded-md'>Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;
