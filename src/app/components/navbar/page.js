import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import userImage from "../../../../public/user.png"; // Replace with actual user image path
import flagIcon from "../../../../public/United.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm h-16 flex items-center justify-between  px-6">
      {/* Left Section - Dashboard Title */}
      <p className="text-[#151D48] text-2xl font-bold 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-5 sm:ml-5 ml-5">Dashboard</p>
      
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
      <div className="flex items-center 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-2 sm:gap-2 gap-2">
        {/* Language Selector */}
        <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
        <Image
            src={flagIcon}
            alt="No Flag Found"
            width={20}
            height={20}
            className="rounded-full"
          />
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