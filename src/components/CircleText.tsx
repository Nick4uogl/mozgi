import React from "react";
import showReels from "../assets/icons/showreels.svg";
const CircleText: React.FC = () => {
  return (
    <div className="group absolute bottom-1 right-1 z-40 flex h-[90px] w-[90px] cursor-pointer items-center justify-center md:h-[112px] md:w-[112px] lg:h-[116px] lg:w-[116px]">
      <img
        className="absolute z-50 animate-rotate-reverse [animation-play-state:paused] group-hover:[animation-play-state:running]"
        src={showReels}
        alt="showreels"
      />
      <div className="h-[6px] w-[6px] rounded-full bg-black md:h-[8px] md:w-[8px] lg:h-[10px] lg:w-[10px]"></div>
    </div>
  );
};

export default CircleText;
