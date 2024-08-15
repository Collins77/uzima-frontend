import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUserAdd } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";

const HrSidebar = () => {
  return (
    <div className='h-screen overflow-auto bg-white shadow-md p-4'>
        <div>
            <div className='mb-4'>
                <h1 className='font-semibold text-green-600'>UZIMA <span className='text-[10px] text-gray-500'>FOR COMPANIES</span></h1>
            </div>
            <div className='mb-3'>
                <h1 className='text-gray-500 mb-1'>Overview</h1>
                <a href='/hr' className='flex gap-1 items-center px-2 hover:bg-green-500 hover:text-white rounded-sm py-1 cursor-pointer'>
                    <LuLayoutDashboard />
                    Dashboard
                </a>
            </div>
            <div className='mb-3'>
                <h1 className='text-gray-500 mb-1'>Staff</h1> 
                <a href='/hr/register-staff' className='flex gap-1 items-center px-2 hover:bg-green-500 hover:text-white rounded-sm py-1 cursor-pointer'>
                    <HiOutlineUserAdd />
                    Register Staff
                </a>
                <a href='/hr/all-staff' className='flex gap-1 items-center px-2 hover:bg-green-500 hover:text-white rounded-sm py-1 cursor-pointer'>
                    <TbReportSearch />
                    Staff Reports
                </a>
            </div>
            <div>
                <h1 className='text-gray-500 mb-1'>Notifications</h1> 
                <a href='/hr/send-emails' className='flex gap-1 items-center px-2 hover:bg-green-500 hover:text-white rounded-sm py-1 cursor-pointer'>
                    <MdEmail />
                    Send Emails
                </a>
                <div className='flex gap-1 items-center px-2 hover:bg-green-500 hover:text-white rounded-sm py-1 cursor-pointer'>
                    <TiGroupOutline/>
                    Create Webinar
                </div>
            </div>
        </div>
    </div>
  )
}

export default HrSidebar