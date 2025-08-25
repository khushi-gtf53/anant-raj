import { useState, useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const LocationAdvantages = ({ tabsData, title, locationMap, onDownload }) => {
  const tabKeys = Object.keys(tabsData || {});
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const barRef = useRef(null);

  const slides = tabsData[activeTab] || [];
  const totalSlides = slides.length;
  const progressPerSlide = 100 / totalSlides;
  const scrollProgress = currentSlide * progressPerSlide;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleProgressClick = (e) => {
    const bar = barRef.current;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = offsetX / rect.width;
    const newSlide = Math.floor(percent * totalSlides);
    setCurrentSlide(newSlide);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentSlide(0);
  };

  return (
    <section className="w-full px-5 lg:px-[100px] py-[40px] lg:py-[100px] bg-white relative">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-primaryred font-sangbleu uppercase tracking-[2px] text-[13px] lg:text-[20px] leading-[40px]">
          {title}
        </h2>
        {onDownload && (
          <div
            onClick={onDownload}
            className="capitalize font-sangbleu tracking-wide text-lg cursor-pointer"
          >
            download location map
          </div>
        )}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-10">
        {/* Left: Floorplan */}
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-8">
            <div className="floorplan w-[60%]">
              <img
                src={slides[currentSlide]?.image}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-10 w-[40%]">
              <div className="plan_detail uppercase font-sangbleu text-xl leading-[35px]">
                {slides[currentSlide]?.description}
              </div>
              <div className="opacity-70 flex gap-2 items-center">
                <div onClick={prevSlide} className="cursor-pointer">
                  <IoIosArrowRoundBack size={40} />
                </div>
                <div onClick={nextSlide} className="cursor-pointer">
                  <IoIosArrowRoundForward size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Location Map */}
        <div className="col-span-12 lg:col-span-4">
          {locationMap && (
            <img src={locationMap} alt="location map" className="w-full h-auto" />
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full flex gap-6 items-center uppercase tracking-wider pt-20 overflow-x-auto scrollbar-hide">
        {tabKeys.map((tab, index) => (
          <div key={tab} className="flex items-center gap-6">
            <div
              className={`tab cursor-pointer whitespace-nowrap ${
                activeTab === tab ? "text-primaryred font-semibold" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </div>
            {index < tabKeys.length - 1 && (
              <div className="w-10 h-[1px] bg-black min-w-[40px]" />
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div
        className="mt-10 w-full h-[5px] bg-[#b3162f]/30 rounded-2xl relative cursor-pointer"
        ref={barRef}
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-[#b3162f] rounded-2xl transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2  bg-[#b3162f]  transition-all duration-300"
          style={{ left: `calc(${scrollProgress}% - 6px)` }}
        />
      </div>
    </section>
  );
};

export default LocationAdvantages;
