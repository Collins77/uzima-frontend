/* eslint-disable react/prop-types */
// import React from 'react'

// import { useState } from "react";
import HrNavbar from "./components/HrNavbar";
import HrSidebar from "./components/HrSidebar";

const HrLayout = ({ children }) => {
    
    return (
        <>
            <div id="root">
                <HrSidebar />
                <div className="main w-full">
                    <HrNavbar />
                    {children}
                </div>
                {/* <Settings /> */}
            </div>
        </>

    )
}

export default HrLayout