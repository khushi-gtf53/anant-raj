import React, { useState, useEffect, useRef } from "react";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaVolumeMute } from "react-icons/fa";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [isMuted, setIsMuted] = useState(true); // Start muted, as per original video
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Sync video muted property with isMuted state
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="h-[100vh] hero text-white flex flex-col justify-center relative">
      <video
        ref={videoRef}
        src={isMobile ? "./assets/mb-bg.mp4" : "./assets/bg.mp4"}
        loop
        autoPlay
        className="absolute object-cover w-full h-[100vh]"
      ></video>
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {!isMuted ? <IoMdVolumeHigh /> : <FaVolumeMute />}
      </button>
    </div>
  );
};

export default Hero;
