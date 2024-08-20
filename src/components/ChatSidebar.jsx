import React, { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { RiSecurePaymentFill } from "react-icons/ri";
import { CgIfDesign } from "react-icons/cg";
import { FaBars } from 'react-icons/fa';

const ChatSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='relative'>
      {/* Hamburger Icon for Small Screens */}
      <div className='sm:hidden p-4'>
        <FaBars size={24} onClick={() => setSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen sm:w-[150px] w-[200px] sm:relative fixed top-0 left-0 border-r bg-white shadow-lg z-20 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className='p-4'>
          <h1 className='text-gray-600 text-sm mb-4'>Features</h1>
          <ul>
            <li className='hover:bg-gray-100 px-1 rounded-sm mb-2'>
              <a href="/dashboard" className='flex items-center gap-2 text-[15px] text-gray-600'>
                <MdOutlineDashboard />
                Dashboard
              </a>
            </li>
            <li className='hover:bg-gray-100 px-1 rounded-sm mb-2'>
              <a href="/chat" className='flex items-center gap-2 text-[15px] text-gray-600'>
                <IoChatbubbleEllipsesOutline />
                Chat
              </a>
            </li>
            <li className='hover:bg-gray-100 px-1 rounded-sm mb-2'>
              <a href="/analytics" className='flex items-center gap-2 text-[15px] text-gray-600'>
                <MdOutlineAnalytics />
                Analytics
              </a>
            </li>
          </ul>
          <h1 className='text-gray-600 text-sm mb-4'>Settings</h1>
          <ul>
            <li className='hover:bg-gray-100 px-1 rounded-sm mb-2'>
              <a href="/profile" className='flex items-center gap-2 text-[15px] text-gray-600'>
                <CgProfile />
                Profile
              </a>
            </li>
            <li className='hover:bg-gray-100 px-1 rounded-sm mb-2'>
              <a href="/billing" className='flex items-center gap-2 text-[15px] text-gray-600'>
                <RiSecurePaymentFill />
                Billing & Usage
              </a>
            </li>
            <li className='hover:bg-gray-100 px-1 rounded-sm mb-2'>
              <a href="/settings" className='flex items-center gap-2 text-[15px] text-gray-600'>
                <CgIfDesign />
                Preference
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-10 sm:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default ChatSidebar;
