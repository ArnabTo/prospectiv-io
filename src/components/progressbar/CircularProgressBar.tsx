'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CircularProgressBar = ({ rating }: { rating: number }) => {

    const circleRadius = 40;
    const circumference = 2 * Math.PI * circleRadius;
    const [offset, setOffset] = useState(circumference);
  
    useEffect(() => {
      const progressOffset = circumference - (rating / 10) * circumference;
      setOffset(progressOffset);
    }, [rating, circumference]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
    <svg
      className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
      viewBox="0 0 100 100"
    >
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r={circleRadius}
        fill="none"
        stroke="#e5e7eb" // Tailwind's gray-200 for background circle
        strokeWidth="10"
      />

      {/* Progress Circle with Framer Motion animation */}
      <motion.circle
        cx="50"
        cy="50"
        r={circleRadius}
        fill="none"
        stroke="#3b82f6" // Tailwind's blue-500 for progress circle
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </svg>
    <div className="absolute text-lg font-semibold text-blue-500">
      {rating}/10
    </div>
  </div>
  );
};

export default CircularProgressBar;
