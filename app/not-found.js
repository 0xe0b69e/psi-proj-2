"use client";

import React, { useEffect, useMemo, useRef } from "react";

export default function NotFound() {
  const canvasRef = useRef(null);
  const lines = useMemo(() => [
    // X - Horizontal
    // Y - Vertical
    // 4
    { startX: 100, startY: 10, endX: 100, endY: 100 },
    { startX: 100, startY: 10, endX: 60, endY: 70 },
    { startX: 60, startY: 70, endX: 110, endY: 70 },
    // 0
    { startX: 150, startY: 10, endX: 150, endY: 100 },
    { startX: 150, startY: 10, endX: 200, endY: 10 },
    { startX: 200, startY: 10, endX: 200, endY: 100 },
    { startX: 200, startY: 100, endX: 150, endY: 100 },
    { startX: 200, startY: 10, endX: 150, endY: 100 },
    // 4
    { startX: 270, startY: 10, endX: 270, endY: 100 },
    { startX: 270, startY: 10, endX: 230, endY: 70 },
    { startX: 230, startY: 70, endX: 280, endY: 70 },
  ], []);

  let index = 0;
  let segmentIndex = 0;
  const segmentLength = 1;
  const delay = 1;

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    const interval = setInterval(() => {
      if (index < lines.length) {
        const line = lines[index];
        const totalLength = Math.sqrt(Math.pow(line.endX - line.startX, 2) + Math.pow(line.endY - line.startY, 2));
        const totalSegments = Math.floor(totalLength / segmentLength);

        if (segmentIndex <= totalSegments) {
          const ratio = segmentIndex / totalSegments;
          const x = line.startX + (line.endX - line.startX) * ratio;
          const y = line.startY + (line.endY - line.startY) * ratio;

          ctx.beginPath();
          ctx.moveTo(line.startX, line.startY);
          ctx.lineTo(x, y);
          ctx.stroke();

          segmentIndex++;
        } else {
          index++;
          segmentIndex = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [index, lines]);

  return <canvas ref={canvasRef} />;
}
