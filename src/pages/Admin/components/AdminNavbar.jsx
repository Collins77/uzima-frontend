import React, { useState } from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/authSlice';
import avatar from '../../../assets/user_icon.png';

const AdminNavbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Add any additional logout logic here
  };
  return (
    <div className='bg-white h-[50px] shadow-md px-4 w-[100%] flex items-center justify-end'>
      <div className='flex gap-2 items-center'>
        <div>
          <IoIosNotifications size={28} />
        </div>
        <div onClick={() => setDropdownVisible(!dropdownVisible)} className='cursor-pointer'>
          <img src={avatar} alt="Profile" className='w-10 h-10 rounded-full' />
        </div>
        {dropdownVisible && (
          <div className='absolute right-0 mt-[150px] w-48 bg-white border border-gray-200 rounded-lg shadow-lg'>
            <ul>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profile</li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminNavbar