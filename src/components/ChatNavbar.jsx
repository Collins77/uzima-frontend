import React, { useState } from 'react'
import { FaBell, FaUser } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import { FaCogs } from 'react-icons/fa';
import { IoIosLogOut } from "react-icons/io";

const ChatNavbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signin');
    };

  return (
    <div className='w-full flex items-center justify-between px-[40px] bg-gray-50 border-b shadow-md h-[50px]'>
        <div>
            <img src="" alt="" />
            <h1 className='font-bold text-green-500'>UZIMA AI</h1>
        </div>
        <div className='flex items-center gap-3'>
            <div className='hover:bg-gray-100 rounded-sm px-2 py-1'>
                <p className='text-sm'>Plan: <span className='text-red-500 text-sm '>Free</span></p>
            </div>
            <div className='p-2 cursor-pointer hover:bg-gray-100 rounded-sm'>
                <FaBell />
            </div>
            <div onClick={toggleDropdown} className='flex items-center px-2 py-1 gap-3 justify-center bg-gray-200 hover:bg-gray-100 cursor-pointer'>
                <div className='bg-purple-200 rounded-full p-1 w-8 h-8 flex items-center justify-center'>
                    <h1>C</h1>
                </div>
                <div className='hover:text-white'>
                    <h1 className='text-sm text-black'>{user?.firstName} {user?.lastName}</h1>
                    <p className='text-sm text-black'>Personal</p>
                </div>
                {dropdownVisible && (
                    <div className="dropdown-menu top-10 absolute right-4 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-100 text-[13px] cursor-pointer">
                                <a href="/profile" className='flex items-center gap-2'>
                                <FaUser />
                                Profile
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 border-b text-[13px] cursor-pointer">
                                <a href="/profile" className='flex items-center gap-2'>
                                <FaCogs />
                                Settings
                                </a>
                            </li>
                            <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 text-[13px] flex items-center gap-2 cursor-pointer">
                                <IoIosLogOut />
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ChatNavbar