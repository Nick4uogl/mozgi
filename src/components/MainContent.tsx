import React from "react";
import CircleText from "./CircleText";
import Title from "./Title";
import InfiniteText from "./InfiniteText";

const MainContent: React.FC = () => (
  <main className="main">
    <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden px-10 py-12 lg:px-20 lg:py-28">
      <Title />
      <div className="relative aspect-square max-h-[65vh] w-full max-w-[65vh]">
        <div className="absolute inset-0 rounded-full bg-yellow blur-[23px] md:blur-[38px] lg:blur-[40px]"></div>
        <CircleText />
      </div>
    </div>
    <InfiniteText />
  </main>
);

export default MainContent;
