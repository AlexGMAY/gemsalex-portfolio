"use client";
import React from "react";

// Simple fallback component
export const World = ({ globeConfig, data }: any) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Animated globe placeholder */}
        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 animate-pulse">
          {/* Globe circles */}
          <div className="absolute inset-4 rounded-full border border-cyan-400/20"></div>
          <div className="absolute inset-8 rounded-full border border-blue-400/20"></div>
          <div className="absolute inset-12 rounded-full border border-indigo-400/20"></div>

          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/50 animate-ping"></div>
        </div>

        {/* Floating dots representing data points */}
        <div className="absolute inset-0">
          {data?.slice(0, 8).map((_: any, i: number) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.6 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-cyan-400 text-sm font-light mb-1">
              Interactive
            </div>
            <div className="text-blue-400 text-xs opacity-70">3D Globe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export a dummy function to match your import
export function Globe({ globeConfig, data }: any) {
  return <World globeConfig={globeConfig} data={data} />;
}

// Dummy functions to prevent import errors
export function hexToRgb(hex: string) {
  return { r: 100, g: 200, b: 255 };
}

export function genRandomNumbers(min: number, max: number, count: number) {
  return [0, 1, 2];
}