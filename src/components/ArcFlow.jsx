"use client";
import React from "react";

const ArcFlow = () => {
  const steps = [
    { id: 1, label: "Code" },
    { id: 2, label: "Build" },
    { id: 3, label: "Test" },
    { id: 4, label: "Release" },
    { id: 5, label: "Deploy" },
    { id: 6, label: "Monitor" },
    { id: 7, label: "Build" },
  ];

  const radius = 280;
  const centerX = 800;
  const centerY = 400;

  const positions = steps.map((_, i) => {
    const angle = Math.PI * (i / (steps.length - 1)); // Semi-circle
    return {
      x: Number((centerX + radius * Math.cos(angle - Math.PI)).toFixed(4)),
      y: Number((centerY + radius * Math.sin(angle - Math.PI)).toFixed(4)),
    };
  });

  return (
    <div className="md:w-[90vw] w-[100vw] flex justify-center md:-mt-20">
      <svg
        viewBox="450 40 700 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient
            id="circleGradient"
            x1="0%"
            y1="10%"
            x2="100%"
            y2="0%"
          >
            <stop offset="-20%" stopColor="black" />
            <stop offset="100%" stopColor="gray" />
          </linearGradient>
        </defs>

        {/* Dotted Arc Path */}

        <path
          d={`M${positions[0].x} ${positions[0].y} 
        A${radius} ${radius} 0 0 1 ${positions[positions.length - 1].x} ${
            positions[positions.length - 1].y
          }`}
          stroke="white"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="transparent"
        />

        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="#27B4A3" />
          </linearGradient>
        </defs>
        {/* Steps */}
        {steps.map((step, i) => (
          <g key={step.id}>
            {/* Gradient Circle */}
            <circle
              cx={positions[i].x}
              cy={positions[i].y}
              r="18"
              fill="url(#circleGradient)"
              stroke="gray"
              strokeWidth="1"
            />
            {/* Step Number */}
            <text
              x={positions[i].x}
              y={positions[i].y + 5}
              textAnchor="middle"
              fontSize="14"
              fill="white"
              fontWeight="bold"
            >
              {step.id}
            </text>
            {/* Label */}
            <text
              x={positions[i].x}
              y={positions[i].y - 25}
              textAnchor="middle"
              fontSize="16"
              fill="url(#textGradient)"
              fontWeight="500"
            >
              {step.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ArcFlow;
