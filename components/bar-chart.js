"use client"

import { useEffect, useRef } from 'react';

const BarChart = ({ data }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const chartHeight = 400;
    const chartWidth = 600;
    const barWidth = 40;
    const barGap = 20;
    const maxValue = Math.max(...data.map(item => item.value));
    const scaleY = chartHeight / maxValue;
    
    ctx.clearRect(0, 0, chartWidth, chartHeight);
    
    data.forEach((item, index) => {
      const barHeight = item.value * scaleY;
      ctx.fillStyle = 'blue';
      ctx.fillRect(index * (barWidth + barGap), chartHeight - barHeight, barWidth, barHeight);
    });
    
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    data.forEach((item, index) => {
      ctx.fillText(item.label, index * (barWidth + barGap), chartHeight - 5);
      ctx.fillText(`$${item.value.toLocaleString()}`, index * (barWidth + barGap), chartHeight - item.value * scaleY - 5);
    });
  }, [data]);
  
  return <canvas ref={canvasRef} width="600" height="400"></canvas>;
};

export default BarChart;
