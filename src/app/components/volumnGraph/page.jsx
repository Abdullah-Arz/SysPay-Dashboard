"use client";

import React from "react";
// import ReactApexChart from "react-apexcharts";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const page = () => {
    const chartData = {
        series: [
            {
                name: "Volume",
                data: [50, 70, 65, 55, 40, 50], // Blue
                color: "#2E90FA",
            },
            {
                name: "Services",
                data: [35, 50, 45, 35, 30, 40], // Green
                color: "#3CCB7F",
            },
        ],
        options: {
            chart: {
                type: "bar",
                stacked: true,
                toolbar: { show: false },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "50%",
                    borderRadius: 4,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: false,
            },
            grid: {
                show: false,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                labels: {
                    show: false,
                    style: { colors: "#94A3B8", fontSize: "12px" },
                },
            },
            yaxis: {
                show: false,
            },
            legend: {
                show: false, // Hide default legend
            },
            fill: {
                opacity: 1,
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <h2 className="text-lg font-bold text-gray-900">
                Volume vs Service Level
            </h2>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={159}
            />

            <div className="border-b-2 border-gray-150" />
            <div className="flex justify-center text-gray-700 mt-2 text-sm">
                <div className="flex items-start justify-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <div className="flex flex-col items-start">

                        <p className="text-gray-400 text-sm">Volumn</p>
                        <p className="font-semibold text-sm">1,004</p>
                    </div>

                </div>

                <div className="w-[1px] h-full bg-gray-400 mx-4" />

                <div className="flex items-start justify-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div className="flex flex-col items-start">

                        <p className="text-gray-400 text-sm">Services</p>
                        <p className="font-semibold text-sm">635</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default page;
