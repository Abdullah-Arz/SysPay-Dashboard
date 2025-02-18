"use client"

import { useEffect, useState } from "react";
// import ReactApexChart from 'react-apexcharts';
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});


const page = () => {

  const state = {
    series: [
      {
        name: "Online Sales",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "Offline Sales",
        data: [76, 45, 31, 98, 87, 15, 91],
        //   color:'#28930a'
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
        text: "Total Revenue",
        align: "left",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
        },
      },
      xaxis: {
        categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + "k"; // Appends 'k' to y-axis values
          },
        },
        },
        // yaxis: {
        //   title: {
        //     text: '$ (thousands)'
        //   }
        // },
      fill: {
        opacity: 1,
      },
      //   tooltip: {
      //     y: {
      //       formatter: function (val) {
      //         return "$ " + val + " thousands"
      //       }
      //     }
      //   }
    },
  };

  return (
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={237}
          />
  );
}

export default page;
