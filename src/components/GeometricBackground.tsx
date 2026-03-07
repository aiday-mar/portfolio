"use client";

import { useEffect, useState } from "react";

const shapes = [
  { type: "circle", size: 300, x: -5, y: 10, speed: 0.03, opacity: 0.06, color: "rgb(168,85,247)" },
  { type: "hexagon", size: 200, x: 80, y: 5, speed: 0.05, opacity: 0.05, color: "rgb(139,92,246)" },
  { type: "triangle", size: 250, x: 70, y: 40, speed: 0.02, opacity: 0.04, color: "rgb(192,132,252)" },
  { type: "circle", size: 150, x: 90, y: 70, speed: 0.06, opacity: 0.07, color: "rgb(168,85,247)" },
  { type: "diamond", size: 180, x: 15, y: 55, speed: 0.04, opacity: 0.05, color: "rgb(139,92,246)" },
  { type: "triangle", size: 120, x: 50, y: 80, speed: 0.07, opacity: 0.06, color: "rgb(192,132,252)" },
  { type: "hexagon", size: 350, x: 35, y: 25, speed: 0.015, opacity: 0.03, color: "rgb(168,85,247)" },
  { type: "circle", size: 100, x: 60, y: 60, speed: 0.08, opacity: 0.08, color: "rgb(139,92,246)" },
  { type: "diamond", size: 220, x: -2, y: 85, speed: 0.035, opacity: 0.04, color: "rgb(192,132,252)" },
  { type: "triangle", size: 160, x: 85, y: 90, speed: 0.045, opacity: 0.05, color: "rgb(168,85,247)" },
];

function ShapeSVG({ type, size, color }: { type: string; size: number; color: string }) {
  switch (type) {
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="1" />
        </svg>
      );
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <polygon points="50,5 95,95 5,95" fill="none" stroke={color} strokeWidth="1" />
        </svg>
      );
    case "hexagon":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" fill="none" stroke={color} strokeWidth="1" />
        </svg>
      );
    case "diamond":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke={color} strokeWidth="1" />
        </svg>
      );
    default:
      return null;
  }
}

export default function GeometricBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            transform: `translateY(${scrollY * shape.speed * (i % 2 === 0 ? -1 : 1)}px) rotate(${scrollY * shape.speed * 0.5 + i * 30}deg)`,
            transition: "transform 0.1s linear",
          }}
        >
          <ShapeSVG type={shape.type} size={shape.size} color={shape.color} />
        </div>
      ))}
    </div>
  );
}
