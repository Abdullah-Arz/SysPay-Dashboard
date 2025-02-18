'use client'

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Sales"],
  ["United States", 300],  // USA - Orange
  ["Brazil", 400],         // Brazil - Red
  ["China", 500],          // China - Purple
  ["Indonesia", 350],      // Indonesia - Green
  ["Democratic Republic of the Congo", 450], // DR Congo - Blue
];

export const options = {
  backgroundColor: "transparent",
  colorAxis: { colors: ["#FFA500", "#E63946", "#6A5ACD", "#2ECC71", "#3498DB"] }, // Custom colors
  datalessRegionColor: "#E5E7EB", // Gray for countries with no data
  defaultColor: "#E5E7EB",
  legend: "none", // Hide legend
  tooltip: { textStyle: { color: "#333" }, showColorCode: true },
};

export function page() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Sales Mapping by Country</h2>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="191px"
        data={data}
        options={options}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const country = data[selection[0].row + 1][0];
              console.log("Selected Country:", country);
            },
          },
        ]}
      />
    </div>
  );
}

export default page;
