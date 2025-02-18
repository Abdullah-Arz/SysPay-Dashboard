import React from "react";
import { FaChartBar, FaFileAlt, FaTags, FaUserPlus } from "react-icons/fa";

const DashboardCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Total Sales",
      count: "$1k",
      increase: "+8% from yesterday",
      icon: <FaChartBar className="text-white text-2xl" />,
      bgColor: "bg-red-200",
      iconBg: "bg-red-500",
    },
    {
      id: 2,
      title: "Total Order",
      count: "300",
      increase: "+5% from yesterday",
      icon: <FaFileAlt className="text-white text-2xl" />,
      bgColor: "bg-yellow-200",
      iconBg: "bg-orange-500",
    },
    {
      id: 3,
      title: "Product Sold",
      count: "5",
      increase: "+1.2% from yesterday",
      icon: <FaTags className="text-white text-2xl" />,
      bgColor: "bg-green-200",
      iconBg: "bg-green-500",
    },
    {
      id: 4,
      title: "New Customers",
      count: "8",
      increase: "0.5% from yesterday",
      icon: <FaUserPlus className="text-white text-2xl" />,
      bgColor: "bg-purple-200",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <div className="p-3 bg-white rounded-2xl shadow-md">
      <div className="flex items-center justify-between pb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Today's Sales</h2>
          <p className="text-gray-500 text-sm mb-4">Sales Summary</p>
        </div>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50">Export</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((item) => (
          <div key={item.id} className={`p-3 rounded-lg shadow-md ${item.bgColor}`}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.iconBg}`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">{item.count}</h3>
            <p className="text-gray-600 text-xs">{item.title}</p>
            <p className="text-blue-500 text-[9px] mt-1">{item.increase}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DashboardCards;
