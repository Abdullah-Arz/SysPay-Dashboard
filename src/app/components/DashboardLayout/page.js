"use client";

import React from 'react'
import Sidebar from '../sidebar/page';
import Navbar from '../navbar/page';


function DashboardLayout({children}) {
  return (
    
    <div className="flex">
    <div className='h-full'>
        <Sidebar />
    </div>
    <div className='flex-1'>
      <Navbar />
    <div className='p-4 ' >
      {children}
    </div>
    </div>
    </div>
  )
}

export default DashboardLayout