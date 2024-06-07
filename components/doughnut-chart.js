import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

/**
 * @param data {{label: string, value: number, color: string}[]}
 * @returns {JSX.Element}
 */
export default function DoughnutChart ( { data } )
{
  const chartData = {
    labels: data.map( item => item.label ),
    datasets: [
      {
        data: data.map( item => item.value ),
        backgroundColor: data.map( item => item.color ),
        hoverBackgroundColor: data.map( item => item.color ),
        borderWidth: 1,
      },
    ],
  };
  
  const config = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
      },
      tooltip: {
        callbacks: {
          label: function ( context )
          {
            let label = context.label || "";
            if ( label )
              label += ": ";
            if ( context.raw !== null )
              label += `${context.raw}%`;
            return label;
          },
        },
      },
    },
  };
  
  return (
    <div className="max-w-[500px] flex flex-col items-center">
      <div className="relative w-full h-full">
        <Doughnut data={chartData} options={config} />
      </div>
    </div>
  );
};