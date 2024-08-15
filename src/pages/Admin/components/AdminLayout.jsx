import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'

const AdminLayout = ({children}) => {
  return (
    <>
            <div id="root">
                <AdminSidebar />
                <div className="main w-full" >
                    <AdminNavbar />
                    {children}
                </div>
                {/* <Settings /> */}
            </div>
        </>
  )
}

export default AdminLayout