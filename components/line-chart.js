/* I could've probably do bar-chart using react-chars too 🤣 */

"use client";

import { Line } from "react-chartjs-2";
import "chart.js/auto";
import TailwindConfig from "@/tailwind.config";

/**
 * @param data {{label: string, value: number}[]}
 * @param label {string}
 * @returns {JSX.Element}
 */
export default function LineChart ( { data, label } )
{
  const sortedData = data//.sort( ( a, b ) => a.label.localeCompare( b.label ) );
  
  const chartData = {
    labels: sortedData.map( ( { label } ) => label ),
    datasets: [
      {
        label: label,
        data: sortedData.map( ( { value } ) => value ),
        fill: true,
        backgroundColor: TailwindConfig.theme.extend.colors.primary.transparent,
        borderColor: TailwindConfig.theme.extend.colors.primary.DEFAULT,
        pointBackgroundColor: TailwindConfig.theme.extend.colors.primary.lighter,
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: TailwindConfig.theme.extend.colors.primary.lighter,
        tension: 0.4,
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function ( context )
          {
            let label = context.dataset.label || "";
            if ( label )
            {
              label += ": ";
            }
            if ( context.parsed.y !== null )
            {
              label += `$${context.parsed.y.toLocaleString()}`;
            }
            return label;
          },
        },
      },
    },
  };
  
  return (
    <div className="w-full h-full flex flex-col text-xs p-2">
      <Line data={chartData} options={options} />
    </div>
  );
}
