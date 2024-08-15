import React from 'react'
import ChatNavbar from '../../components/ChatNavbar'
import ChatSidebar from '../../components/ChatSidebar'

const UserLayout = ({children}) => {
  return (
    <div className='w-full'>
        <ChatNavbar/>
        <div className='flex w-full'>
            <ChatSidebar />
            {children}
        </div>
    </div>
  )
}

export default UserLayout