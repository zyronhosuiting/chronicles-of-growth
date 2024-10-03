"use client";

import Image from "next/image";
import React, { useState } from "react";

const Slogan = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility when image is fully loaded
  const handleImageLoad = () => {
    setIsVisible(true);
  };

  return (
    <>
      <Image
        src="/home/slogan.png"
        alt="Slogan"
        width={700}
        height={355}
        onLoad={handleImageLoad}
        className={`transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <p
        className={`absolute text-white text-[13px] font-bold h-3 left-[80px] top-[247px] tracking-[5px] transition-all duration-1000 ease-in-out ${
          isVisible
            ? "opacity-100 translate-x-0 delay-1000"
            : "opacity-0 -translate-x-10"
        }`}
        style={{
          textShadow: "rgb(90, 153, 255) 0px 0px 4px",
        }}
      >
        Hope is the thing with feathers - Emily Dickinson
      </p>
    </>
  );
};

export default Slogan;
