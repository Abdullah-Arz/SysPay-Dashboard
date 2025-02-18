"use client";

import React from "react";

function TopProducts() {
  const products = [
    { id: "01", name: "Home Decor Range", popularity: 45, color: "bg-blue-500", sales: "45%", salesColor: "bg-blue-100 text-blue-600" },
    { id: "02", name: "Disney Princess Pink Bag 18'", popularity: 29, color: "bg-green-500", sales: "29%", salesColor: "bg-green-100 text-green-600" },
    { id: "03", name: "Bathroom Essentials", popularity: 18, color: "bg-purple-500", sales: "18%", salesColor: "bg-purple-100 text-purple-600" },
    { id: "04", name: "Apple Smartwatches", popularity: 25, color: "bg-orange-500", sales: "25%", salesColor: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Top Products</h2>
      <table className="w-full min-w-[400px]">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Popularity</th>
            <th className="p-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t text-gray-700">
              <td className="p-2 text-gray-500 text-xs">{product.id}</td>
              <td className="p-2 font-sm text-xs">{product.name}</td>
              <td className="p-2">
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className={`${product.color} h-2 rounded-full`}
                    style={{ width: `${product.popularity}%` }}
                  ></div>
                </div>
              </td>
              <td className="p-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-lg ${product.salesColor}`}>
                  {product.sales}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopProducts;
