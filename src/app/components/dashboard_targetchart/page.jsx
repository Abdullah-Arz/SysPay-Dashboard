"use client"

import React from "react";
// import ReactApexChart from "react-apexcharts";
import Image from "next/image";
import realityIcon from "../../../../public/realityIcon.png";
import targetIcon from "../../../../public/targetIcon.png";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function page() {

    const state = {
        series: [
            {
                name: "Online Sales",
                data: [44, 55, 57, 56, 61, 58, 63],
                color: '#4AB58E'
            },
            {
                name: "Offline Sales",
                data: [76, 45, 31, 98, 87, 15, 91],
                color: '#FFCF00'
            }
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
                // foreColor: "#7B91B0",
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "50%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            title: {
                text: "Target vs Reality",
                align: "left",
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                },
            },
            xaxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July'
                ],
            },
            yaxis: {
                labels: { show: false }, // Hide Y-axis labels
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
        },
    };

    return (
        <>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={145}
            />

            {/* Reality Sales & Target Sales UI Section */}
            <div className="flex flex-col justify-between items-start px-4 gap-4">
                {/* Reality Sales */}
                <div className="flex items-center space-x-20">
                    <div className="flex items-center space-x-3">
                        <Image src={realityIcon} width={40} height={40} alt="Reality Sales" />
                        <div className="flex flex-col">
                            <p className="text-black font-semibold text-sm">Reality Sales</p>
                            <p className="text-gray-400 text-xs">Global</p>
                        </div>
                    </div>
                    <p className="text-green-600 font-semibold text-lg">8.823</p>
                </div>

                <div className="flex items-center space-x-20">
                    <div className="flex items-center space-x-3">
                        <Image src={targetIcon} width={40} height={40} alt="Target Sales" />
                        <div className="flex flex-col">
                            <p className="text-black font-semibold text-sm">Reality Sales</p>
                            <p className="text-gray-400 text-xs">Global</p>
                        </div>
                    </div>
                    <p className="text-[#FFA412] font-semibold text-lg">12.12</p>
                </div>
            </div>
        </>
    );
}

export default page;
