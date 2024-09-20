import React, { CSSProperties } from "react";
import useWindowDimensions from "../hooks/useWindowResize";

const InfiniteText: React.FC = () => {
  const dimensions = useWindowDimensions();

  const diagonalLength = Math.sqrt(
    dimensions.width ** 2 + dimensions.height ** 2,
  );
  const angle = Math.atan2(dimensions.height, dimensions.width);
  const containerStyle: CSSProperties = {
    width: `${diagonalLength}px`,
    transform: `rotate(-${angle}rad) translateY(-50%)`,
  };
  const text = "FULL-CYCLE EVENT AGENCY";
  const repeatCount = Math.ceil(diagonalLength / (text.length * 14));
  const repeatedText = new Array(repeatCount * 4).fill(text).join(" ");
  return (
    <div
      className="@apply bg-transparent; fixed left-0 top-full flex h-[150px] origin-top-left flex-col items-center justify-center gap-3 overflow-hidden whitespace-nowrap"
      style={containerStyle}
    >
      <div className="infinite-text animate-scroll-right bg-clip-text text-[28px] font-bold uppercase italic leading-[110%] text-transparent md:text-[42px] lg:text-[52px]">
        {repeatedText}
      </div>
      <div className="infinite-text animate-scroll-left bg-clip-text text-[28px] font-bold uppercase italic leading-[110%] text-transparent md:text-[42px] lg:text-[52px]">
        {repeatedText}
      </div>
    </div>
  );
};

export default InfiniteText;
