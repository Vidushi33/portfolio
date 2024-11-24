import React from "react";
import { range } from "@/utils/range";

export default function BackgroundBubble() {
  const getBubbleStyles = () => ({
    bottom: `${Math.random() * 100}%`,
    left: Math.random() * 100 + "%",
    animation: `animate ${Math.random() * 15 + 5}s linear infinite`,
  });

  return (
    <div className=" absolute inset-0 overflow-hidden ">
      {[...range(100)].map((index) => (
        <div
          key={index}
          style={getBubbleStyles()}
          className="absolute h-[60px] w-[60px] border-2 border-[#ffffffb3] rounded-full shadow-bubbleShadow"
        >
          <div className="h-[10px] w-[10px] rounded-full bg-[#ffffff80] absolute top-[20%] right-[20%]"></div>
        </div>
      ))}
    </div>
  );
}
