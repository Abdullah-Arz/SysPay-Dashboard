"use client";

import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import dynamic from 'next/dynamic';

function Page() {
  const state = {
    series: [
      {
        name: "Loyal Customers",
        data: [20, 40, 20, 60, 80, 50, 100, 110, 70, 130, 65, 150],
        color: "#800080", // Purple
      },
      {
        name: "New Customers",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 54, 34, 56],
        color: "#FF0000", // Red
      },
      {
        name: "Unique Customers",
        data: [50, 70, 50, 90, 110, 80, 130, 140, 100, 160, 95, 180],
        color: "#008000", // Green
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "line",
        zoom: {
          enabled: false,
        },
        foreColor: "#000000",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Visitor Insights",
        align: "left",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
        },
      },
      grid: {
        row: {
          colors: ["transparent", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="line"
      height={205}
    />
  );
}

export default Page;
