import React, { useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {Lightbox} from "yet-another-react-lightbox";

import 'swiper/css';
import 'swiper/css/navigation';
import "yet-another-react-lightbox/styles.css";

const FloorPlan = ({ heading, floorPlans, masterPlan }) => {
  const tabs = Object.keys(floorPlans);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const slides = floorPlans[activeTab];

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="floor_plan w-full px-5 lg:px-[100px] py-[40px] lg:py-[100px] bg-[#FBF6F6] relative">

      {/* Heading */}
      <div className="heading mb-10">
        <h2 className="text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[40px] text-[13px] lg:text-[20px]">
          {heading}
        </h2>
      </div>

      {/* Top nav: Tabs + Fixed Right Nav */}
      <div className="top_nav flex pb-5 border-b justify-between items-center">
        {/* Tabs */}
        <div className="tabs uppercase flex gap-6 font-sangbleu tracking-wider text-xl">
          {tabs.map(tab => (
            <div
              key={tab}
              onClick={() => { setActiveTab(tab); setSlideIndex(0); }}
              className={`tab cursor-pointer ${activeTab === tab ? 'text-primaryblue' : ''}`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Fixed Right Nav */}
        <div className="right_nav flex gap-8 font-sangbleu tracking-wider text-xl capitalize items-center">
          <h3 className="cursor-pointer" onClick={() => setLightboxOpen(true)}>View Master Plan</h3>
          <div className="h-auto w-[1px] bg-black"></div>
          {slides[0]?.brochure && (
            <a href={slides[0].brochure} download>
              <h3 className="cursor-pointer">Download Brochure</h3>
            </a>
          )}
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-12 mt-10 gap-10 pb-[20px] lg:pb-[80px]">
        {/* Left Side - Main Floorplan Image + Title */}
        <div className="col-span-8 flex items-ceter gap-10">
          <div className="floorplan w-1/2">
            <img src={slides[slideIndex].src} alt={slides[slideIndex].title} className="w-full h-auto object-contain" />
          </div>
          <div className="plan_detail uppercase font-sangbleu text-xl leading-[30px] max-w-[300px]">
            {slides[slideIndex].title}
          </div>
        </div>

        {/* Right Side - One Slide Only + Prev/Next Nav */}
        <div className="col-span-4 flex flex-col items-center">
          <div className="opacity-70 flex gap-4 items-center mb-6">
            <div onClick={handlePrev} className="cursor-pointer amenities-button-prev">
              <IoIosArrowRoundBack size={40} />
            </div>
            <div onClick={handleNext} className="cursor-pointer amenities-button-next">
              <IoIosArrowRoundForward size={40} />
            </div>
          </div>

          <div className="floorplan w-[60%]">
            <img src={slides[slideIndex].src} alt={`Slide ${slideIndex}`} className="w-full object-contain" />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={[{ src: masterPlan.src }]}
        />
      )}

      {/* Background Pattern */}
      <img
        src="./assets/pattern-bg.png"
        alt="pattern-bg"
        className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
      />
    </section>
  );
};

export default FloorPlan;
