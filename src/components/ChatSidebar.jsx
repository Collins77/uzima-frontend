import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { RiSecurePaymentFill } from "react-icons/ri";
import { CgIfDesign } from "react-icons/cg";

const ChatSidebar = () => {
  return (
    <div className='h-screen w-[150px] border-r'>
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
  )
}

export default ChatSidebar