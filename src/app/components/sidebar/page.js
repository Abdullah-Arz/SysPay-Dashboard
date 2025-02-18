"use client"

import Image from "next/image";
import { useState } from "react";
import icon_half from "../../../../public/icon_half.png";
import sidebar_logo from "../../../../public/sidebar_logo.png";
import dash_icon from "../../../../public/vector.png";
import pro_logo from "../../../../public/pro_logo.png";
import { BsChevronDown } from "react-icons/bs";
import {
  TbChevronRight,
  TbUserCheck,
  TbMessage,
  TbLogout,
} from "react-icons/tb";
import { FiSettings, FiBarChart2, FiShoppingBag, FiShoppingCart  } from "react-icons/fi";
import { usePathname, useRouter } from 'next/navigation'
import { IoMenu } from "react-icons/io5";
function Page() {

  const [state_Open, setState_Opne] = useState(true);
  const [state_OpenSubmenu, setState_OpenSubmenu] = useState(true);
  const router = useRouter()
  const currentRoute = usePathname();
  console.log('Current page ----- ', currentRoute)

  const Menus = [
    { id: 1, title: "Leaderboard", icon: <FiBarChart2 />, link: '/Leaderboard' },
    { id: 2, title: "Order", icon: <FiShoppingCart />, link: '/lrder' },
    { id: 3, title: "Products", icon: <FiShoppingBag  />, link: '/products' },
    { id: 4, title: "Sales Report", icon: <TbUserCheck />, link: '/sales' },
    { id: 5, title: "Messages", icon: <TbMessage />, link: '/messages' },
    { id: 6, title: "Settings", icon: <FiSettings />, link: '/settings' },
    { id: 7, title: "Sign Out", icon: <TbLogout />, link: '/signout' },
  ];
  const HandleSidebar = () => {
    setState_Opne(!state_Open);
  };

  const HandleSubMenu = () => {
    setState_OpenSubmenu(!state_OpenSubmenu);
  };

  const HandleNavigate = (data) => {
    router.push(data)
  }


  return (
    <div className="relative h-screen flex">
      <div
        className={`bg-[#FFFFFF] min-h-screen p-0 xl:p-10 lg:p-10 md:p-10 sm:p-10  pt-10 ${state_Open ? "w-72" : "w-0 sm:w-20 md:w-20 lg:w-20 xl:w-20"
          } duration-300 relative`}
      >
        <IoMenu
          className={`text-[#73858F] text-3xl absolute -right-10 top-5
            cursor-pointer duration-0 sm:block md:block lg:hidden xl:hidden`}
          onClick={HandleSidebar}
        />
        <div className="flex flex-col items-center justify-center gap-8">
          {
            state_Open ?
              <Image
                src={sidebar_logo}
                alt="SysPay Icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "11em",
                  height: "3em",
                  transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
                }}
                className="cursor-pointer block float-left mr-2"
              /> :
              <Image
                src={icon_half}
                alt="Connect Pro Icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "30px",
                  height: "30px",
                  transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
                }}
                className="cursor-pointer block float-left mr-2"
              />
          }

          <div className="pt-2 2xl:px-0 xl:px-0 lg:px-0 md:px-5 px-5 2xl:-ml-5 xl:-ml-5 lg:-ml-5 w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full h-[44px] rounded-lg bg-[#1559ED] flex items-center justify-center gap-3 p-0 m-0">
              <Image
                src={dash_icon}
                alt="Dashboard Icon"
                width={20}
                height={20}
                className="cursor-pointer block float-left mr-2"
              />
              <p className="text-white ">Dashboard</p>

            </div>
            <ul>
              {Menus.map((item, index) => (
                <div key={index}>
                  <li
                    key={item.id}
                    onClick={() => HandleNavigate(item.link)}
                    className={` ${currentRoute === item.link ? "text-sm text-[#000000] flex items-center gap-x-4 p-2 mt-4 cursor-pointer bg-transparent duration-100" : "text-sm text-[#737791] flex items-center border-0 gap-x-4 p-2 mt-4 cursor-pointer hover:text-[#000000] rounded-md duration-100"} `}
                  >
                    {item.submenuitem ? (
                      <>
                        <span
                          onClick={HandleSubMenu}
                          className="text-2xl block float-left"
                        >
                          {item.icon}
                        </span>
                        <span
                          onClick={HandleSubMenu}
                          className={`text-sm font-medium flex-1 ${!state_Open && "hidden"
                            }`}
                        >
                          {item.title}
                        </span>
                        <TbChevronRight
                          onClick={HandleSubMenu}
                          className={` ${state_OpenSubmenu && "rotate-90"}`}
                        />
                        {/* </div> */}
                      </>
                    ) : (
                      <>
                        <span className={`text-2xl block float-left ${!state_Open && "hidden sm:block md:block lg:block xl:block"} `}>
                          {item.icon}
                        </span>
                        <span
                          className={`text-sm font-medium flex-1 ${!state_Open && "hidden"
                            }`}
                        >
                          {item.title}
                        </span>
                      </>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <Image
            src={pro_logo}
            alt="Pro Icon"
            // width={100}
            height={100}
            className="w-full cursor-pointer block float-left mr-2 2xl:px-0 xl:px-0 lg:px-0 md:px-5 px-5"
          />

        </div>

      </div>
    </div>
  );
}

export default Page;  