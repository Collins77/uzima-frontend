import React, { useState } from 'react'
import { FaCogs } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AdminSidebar = () => {
    const [dropdownVisible, setDropdownVisible] = useState({
        users: false,
        corporates: false,
        counsellors: false,
        userSubs: false,
        companySubs: false,
        plans: false
    });
    const [sidebarRetracted, setSidebarRetracted] = useState(false);

    const toggleDropdown = (section) => {
        setDropdownVisible(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className='h-screen overflow-auto p-[20px] w-[250px] bg-white shadow-md'>
            <div className='flex items-center gap-2 mb-4'>
                <img src="" alt="" />
                <h1 className='font-bold text-xl'>UZIMA AI</h1>
            </div>
            <div>
                <a href='/admin/' className='flex gap-4 items-center bg-gray-50 mb-6 w-full hover:bg-green-500 px-2 py-1 rounded-sm'>
                    <FaCogs />
                    {!sidebarRetracted && <p>Dashboard</p>}
                </a>
                <div className='mb-3'>
                {!sidebarRetracted && <h1 className='text-gray-500'>User Management</h1>}
                </div>
                <div className={`flex justify-between items-center bg-gray-50 mb-2 w-full hover:bg-green-500 px-2 py-1 rounded-sm cursor-pointer ${sidebarRetracted ? 'justify-center' : ''}`} onClick={() => toggleDropdown('users')}>
                    <div className='flex gap-2 items-center'>
                        <FaUserGroup />
                        {!sidebarRetracted && <p>Users</p>}
                    </div>
                    {!sidebarRetracted && (dropdownVisible.users ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                </div>
                {dropdownVisible.users && (
                    <div className={`flex flex-col pl-8 mt-2 ${sidebarRetracted ? 'hidden' : ''}`}>
                        <a href='/admin/users' className='mb-2 text-gray-500 hover:text-green-500'>All Users</a>
                        <a href='/admin/create-user' className='mb-2 text-gray-500 hover:text-green-500'>Create User</a>
                    </div>
                )}
                <div className={`flex justify-between items-center bg-gray-50 mb-2 w-full hover:bg-green-500 px-2 py-1 rounded-sm cursor-pointer ${sidebarRetracted ? 'justify-center' : ''}`} onClick={() => toggleDropdown('corporates')}>
                    <div className='flex gap-2 items-center'>
                        <FaUserGroup />
                        {!sidebarRetracted && <p>Corporates</p>}
                    </div>
                    {!sidebarRetracted && (dropdownVisible.corporates ? <IoIosArrowUp /> : <IoIosArrowDown />)}                </div>
                    {dropdownVisible.corporates && (
                    <div className={`flex flex-col pl-8 mt-2 ${sidebarRetracted ? 'hidden' : ''}`}>
                        <a href='/admin/corporates' className='mb-2 text-gray-500 hover:text-green-500'>All Corporates</a>
                        <a href='/admin/add-corporate' className='mb-2 text-gray-500 hover:text-green-500'>Register Corporate</a>
                    </div>
                )}

                <div className='flex justify-between items-center bg-gray-50 mb-4 w-full hover:bg-green-500 px-2 py-1 rounded-sm cursor-pointer' onClick={() => toggleDropdown('counsellors')}>
                    <div className='flex gap-2 items-center'>
                        <FaUserGroup />
                        {!sidebarRetracted && <p>Counsellors</p>}
                    </div>
                    {!sidebarRetracted && (dropdownVisible.counsellors ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                </div>
                {dropdownVisible.counsellors && (
                    <div className={`flex flex-col pl-8 mt-2 ${sidebarRetracted ? 'hidden' : ''}`}>
                        <a href='/admin/counsellors' className='mb-2 text-gray-500 hover:text-green-500'>All Counsellors</a>
                        <a href='/admin/add-counsellor' className='mb-2 text-gray-500 hover:text-green-500'>Onboard Counsellor</a>
                    </div>
                )}

                <div className='mb-3'>
                {!sidebarRetracted && <h1 className='text-gray-500'>Subscription Management</h1>}                </div>
                <div className='flex justify-between items-center bg-gray-50 mb-2 w-full hover:bg-green-500 px-2 py-1 rounded-sm cursor-pointer' onClick={() => toggleDropdown('userSubs')}>
                    <div className='flex gap-2 items-center'>
                        <FaUserGroup />
                        {!sidebarRetracted && <p>User Subscriptions</p>}                    </div>
                        {!sidebarRetracted && (dropdownVisible.userSubs ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                        </div>
                        {dropdownVisible.userSubs && (
                    <div className={`flex flex-col pl-8 mt-2 ${sidebarRetracted ? 'hidden' : ''}`}>
                        <a href='/admin/users-active' className='mb-2 text-gray-500 hover:text-green-500'>Active Subscriptions</a>
                        <a href='/admin/users/subscriptions/expired' className='mb-2 text-gray-500 hover:text-green-500'>Expired Subscriptions</a>
                    </div>
                )}
                <div className='flex justify-between items-center bg-gray-50 mb-4 w-full hover:bg-green-500 px-2 py-1 rounded-sm cursor-pointer' onClick={() => toggleDropdown('companySubs')}>
                    <div className='flex gap-2 items-center'>
                        <FaUserGroup />
                        {!sidebarRetracted && <p>Company Subs</p>}
                    </div>
                    {!sidebarRetracted && (dropdownVisible.companySubs ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                </div>
                {dropdownVisible.companySubs && (
                    <div className={`flex flex-col pl-8 mt-2 ${sidebarRetracted ? 'hidden' : ''}`}>
                        <a href='/admin/companies/subscriptions' className='mb-2 text-gray-500 hover:text-green-500'>Active Subscriptions</a>
                        <a href='/admin/companies/subscriptions/expired' className='mb-2 text-gray-500 hover:text-green-500'>Expired Subscriptions</a>
                    </div>
                )}
                <div className='mb-3'>
                {!sidebarRetracted && <h1 className='text-gray-500'>Settings</h1>}
                </div>
                <div className='flex justify-between items-center bg-gray-50 mb-2 w-full hover:bg-green-500 px-2 py-1 rounded-sm cursor-pointer' onClick={() => toggleDropdown('plans')}>
                    <div className='flex gap-2 items-center'>
                        <FaUserGroup />
                        {!sidebarRetracted && <p>Plans</p>}
                    </div>
                    {!sidebarRetracted && (dropdownVisible.plans ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                </div>
                {dropdownVisible.plans && (
                    <div className={`flex flex-col pl-8 mt-2 ${sidebarRetracted ? 'hidden' : ''}`}>
                        <a href='/admin/plans' className='mb-2 text-gray-500 hover:text-green-500'>All Plans</a>
                        <a href='/admin/create-plan' className='mb-2 text-gray-500 hover:text-green-500'>Create Plan</a>
                    </div>
                )}
                <a href='/admin/' className='flex gap-4 items-center bg-gray-50 mb-2 w-full hover:bg-green-500 px-2 py-1 rounded-sm'>
                    <FaCogs />
                    {!sidebarRetracted && <p>Send Email</p>}
                </a>
                <a href='/admin/' className='flex gap-4 items-center bg-gray-50 mb-2 w-full hover:bg-green-500 px-2 py-1 rounded-sm'>
                    <FaCogs />
                    {!sidebarRetracted && <p>Schedule Webinar</p>}
                </a>
                <a href='/admin/' className='flex gap-4 items-center bg-gray-50 mb-2 w-full hover:bg-green-500 px-2 py-1 rounded-sm'>
                    <FaCogs />
                    {!sidebarRetracted && <p>Site Settings</p>}
                </a>
            </div>
        </div>
    )
}

export default AdminSidebar