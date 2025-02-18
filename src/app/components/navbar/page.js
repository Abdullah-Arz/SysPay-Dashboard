import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import userImage from "../../../../public/user.png"; // Replace with actual user image path
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      {/* Left Section - Dashboard Title */}
      <p className="text-[#151D48] text-2xl font-bold">Dashboard</p>
      
      {/* Center Section - Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-96">
        <IoSearch className="text-blue-600 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none w-full text-gray-600"
        />
      </div>
      
      {/* Right Section - Icons & User Info */}
      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
          <p className="text-sm font-medium">Eng (US)</p>
          <MdKeyboardArrowDown className="text-lg" />
        </div>

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <div className="bg-[#FFFAF1] w-8 h-8 rounded-lg flex items-center justify-center">
          <FaBell className="text-yellow-500 text-md" />
          </div>
          <span className="absolute top-1 right-1 bg-red-500 w-1 h-1 rounded-full"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={userImage}
            alt="User Profile"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="text-gray-700">
            <p className="text-sm font-semibold">Musfiq</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <MdKeyboardArrowDown className="text-lg text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default Navbar