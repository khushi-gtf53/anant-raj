import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen hero text-white flex flex-col justify-center relative">
      <video
        src={isMobile ? "./assets/mb-bg.mp4" : "./assets/bg.mp4"}
        loop
        muted
        autoPlay
        className="absolute  object-cover w-full h-full"
      ></video>
    </div>
  );
};

export default Hero;
