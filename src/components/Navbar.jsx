import React, { useState } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/uzima-logo.png'

const Navbar = () => {
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
//   const [isPricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='w-full h-[70px] bg-transparent sm:px-[30px] px-[10px] flex justify-between items-center py-4 border-b-2'>
      <a href='/' className='no-underline text-black flex items-center'>
        <img src={logo} alt="" className='w-12 h-12' />
        {/* <h1 className='text-green-500 font-bold'>UZIMA AI</h1> */}
      </a>
      <div className='sm:flex hidden items-center justify-between gap-4 bg-white p-3 rounded-lg'>
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
              <a href='/for-users' className='block px-4 py-1 hover:bg-gray-100'>Personal</a>
              <a href='/for-corporate' className='block px-4 py-1 hover:bg-gray-100'>Corporate</a>
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
      <div className='sm:flex hidden gap-2'>
        <a href="/corp-signin" className='bg-black text-white p-1.5 rounded-md'>Corporates</a>
        <a href="/signin" className='bg-black text-white p-1.5 rounded-md'>Login</a>
        <a href="/signup" className='bg-transparent border-black border p-1.5 rounded-md'>Sign Up</a>
      </div>
      <div className='sm:hidden flex items-center'>
        <FaBars size={24} onClick={() => setMobileMenuOpen(true)} />
      </div>

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-20 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='p-4 flex justify-between items-center border-b-2'>
          <h1 className='text-green-500 font-bold'>UZIMA AI</h1>
          <button onClick={() => setMobileMenuOpen(false)} className='text-2xl'>&times;</button>
        </div>
        <div className='flex flex-col p-4'>
          <a href="/" className='py-2' onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/about" className='py-2' onClick={() => setMobileMenuOpen(false)}>About</a>
          <div className='py-2'>
            <div
              className='flex items-center cursor-pointer'
              onClick={() => setProductsDropdownOpen(!isProductsDropdownOpen)}
            >
              Products <FaChevronDown size={15} color='gray' className='ml-1' />
            </div>
            {isProductsDropdownOpen && (
              <div className='mt-2'>
                <a href='/product1' className='block px-4 py-1 hover:bg-gray-100'>Personal</a>
                <a href='/product2' className='block px-4 py-1 hover:bg-gray-100'>Corporate</a>
              </div>
            )}
          </div>
          <a href="/corp-pricing" className='py-2' onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href='/' className='py-2' onClick={() => setMobileMenuOpen(false)}>Partners</a>
          <a href='/' className='py-2' onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="/signin" className='bg-black text-white p-2 rounded-md mt-4' onClick={() => setMobileMenuOpen(false)}>Login</a>
          <a href="/signup" className='bg-transparent border-black border p-2 rounded-md mt-2' onClick={() => setMobileMenuOpen(false)}>Sign Up</a>
          <a href="/corp-signin" className='bg-transparent border-black border p-2 rounded-md mt-2' onClick={() => setMobileMenuOpen(false)}>Corporates</a>
        </div>
        </div>
    </div>
  );
}

export default Navbar;
