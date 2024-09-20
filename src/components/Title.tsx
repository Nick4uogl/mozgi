import React, { useEffect, useState } from "react";

const Title: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 65;
      const moveY = (clientY - window.innerHeight / 2) / 65;
      setPosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <h1
      style={{
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
      className="absolute left-1/2 top-1/2 z-10 w-full text-center text-[34px] font-bold leading-110 text-dark-primary md:text-[58px] lg:px-20"
    >
      FULL-CYCLE <br /> EVENT AGENCY
    </h1>
  );
};

export default Title;
