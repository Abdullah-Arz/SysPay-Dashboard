"use client";

import React from "react";
// import ReactApexChart from "react-apexcharts";
import firstMonth_logo from "../../../../public/greenIcon.png";
import lastMonth_logo from "../../../../public/blueIcon.png";
import Image from "next/image";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Page() {
  const state = {
    series: [
      {
        name: "Last Month",
        data: [30, 50, 40, 70, 60, 50, 80, 70, 60, 90, 80, 100],
        color: "#007bff", // Blue
      },
      {
        name: "This Month",
        data: [50, 60, 70, 80, 90, 100, 110, 90, 80, 110, 100, 120],
        color: "#00C49F", // Green
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 250,
        zoom: { enabled: false },
        foreColor: "#2E2E2E",
      },
      title: {
        text: "Customer Satisfaction",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#121212",
        },
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.4,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      markers: {
        size: 5,
      },
      dataLabels: {
        enabled: false, // Hide numbers from the line
      },
      grid: {
        show: false,
      },
      xaxis: {
        labels: { show: false }, // Hide X-axis labels
        axisBorder: { show: false },
        axisTicks: { show: false },
        categories: [],
      },
      yaxis: {
        labels: { show: false }, // Hide Y-axis labels
      },
      legend: {
        show:false,
        position: "bottom",
        horizontalAlign: "center",
      },
    },
  };

  return (
    <div className="">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={190}
      />

      <div className="border-b-2 border-gray-300" />
      <div className="flex justify-center text-gray-700 mt-2 text-sm">
        <div className="flex items-start justify-start gap-3">
        <Image
        alt='last month logo'
        src={lastMonth_logo}
        className='w-4 h-2 mt-[0.3rem]' 
        />
        <div className="flex flex-col items-start">
          
          <p className="text-gray-400">Last Month</p>
          <p className="font-semibold">$3,004</p>
        </div>
        
        </div>

        <div className="w-[1px] h-full bg-gray-400 mx-4" />

        <div className="flex items-start justify-start gap-3">
        <Image
        alt="first month logo"
        src={firstMonth_logo}
        className='w-4 h-2 mt-[0.3rem]' 
        />
        <div className="flex flex-col items-start">
          
          <p className="text-gray-400">This Month</p>
          <p className="font-semibold">$3,004</p>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Page;
