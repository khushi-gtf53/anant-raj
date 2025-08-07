import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LuxuryProperties = () => {
  const [activeCategory, setActiveCategory] = useState("RESIDENTIAL");
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    { id: 1, src: "./assets/luxury-1.png", category: "RESIDENTIAL" },
    { id: 2, src: "./assets/luxury-1.png", category: "COMMERCIAL" },
    { id: 3, src: "./assets/luxury-1.png", category: "HOSPITALITY" },
    { id: 4, src: "./assets/luxury-1.png", category: "DATA CENTERS" },
  ];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveCategory(slides[currentIndex].category);
  };

  const handleCategoryClick = (category) => {
    const slideIndex = slides.findIndex((slide) => slide.category === category);
    if (slideIndex !== -1 && swiperInstance) {
      swiperInstance.slideToLoop(slideIndex);
      setActiveCategory(category);
    }
  };

  return (
    <section className="bg-[#FBF6F6] relative pb-[70px]">
      <div className="px-[20px]  lg:px-[100px] py-[40px] lg:py-[100px]">
        <div className="flex flex-col lg:flex-nowrap flex-wrap lg:flex-row justify-between w-full items-start lg:items-center mb-[35px]">
          <h2 className="text-primaryred text-left basis-[100%] lg:mb-0 mb-[25px] font-sangbleu uppercase tracking-[2px] leading-[40px] text-[16px] lg:text-[20px]">
            LUXURY PROPERTIES
          </h2>
          <div className="flex text-gray-800 basis-[100%] lg:flex-nowrap flex-wrap font-lato tracking-[1px] text-[14px]">
            <p
              className={`hover:text-gray-600 relative basis-[50%] lg:text-end text-left mb-[17px] lg:mr-[2rem] cursor-pointer ${
                activeCategory === "RESIDENTIAL"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("RESIDENTIAL")}
            >
              RESIDENTIAL
              {activeCategory === "RESIDENTIAL" && (
                <span className="h-[80px] hidden lg:block absolute bottom-[-98px] left-[50%] bg-primaryblue w-[1px]"></span>
              )}{" "}
            </p>
            <p
              className={`hover:text-gray-600 relative basis-[50%] lg:text-end text-left mb-[17px] lg:mr-[2rem] cursor-pointer ${
                activeCategory === "COMMERCIAL"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("COMMERCIAL")}
            >
              COMMERCIAL
              {activeCategory === "COMMERCIAL" && (
                <span className="h-[80px] hidden lg:block absolute bottom-[-98px] left-[50%] bg-primaryblue w-[1px]"></span>
              )}
            </p>
            <p
              className={`hover:text-gray-600 relative basis-[50%] lg:text-end text-left lg:mr-[2rem] cursor-pointer ${
                activeCategory === "HOSPITALITY"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("HOSPITALITY")}
            >
              HOSPITALITY
              {activeCategory === "HOSPITALITY" && (
                <span className="h-[80px] hidden lg:block absolute bottom-[-80px] left-[50%] bg-primaryblue w-[1.5px]"></span>
              )}
            </p>
            <p
              className={`hover:text-gray-600 relative lg:basis-[60%] basis-[50%] lg:text-end text-left  cursor-pointer ${
                activeCategory === "DATA CENTERS"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("DATA CENTERS")}
            >
              DATA CENTERS
              {activeCategory === "DATA CENTERS" && (
                <span className="h-[80px] hidden lg:block absolute bottom-[-80px] left-[50%] bg-primaryblue w-[1.5px]"></span>
              )}{" "}
            </p>
          </div>
        </div>

        <div className="relative w-full ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev-custom",
              nextEl: ".swiper-next-custom",
            }}
            loop={true}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance} // Store Swiper instance
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative">
                  <p className="tracking-[1.2px] flex flex-col absolute left-[14px] lg:left-[80px] text-white top-[20px] lg:top-[40px]">
                    <span className="text-[18px] lg:text-[32px] font-[600]">
                      Joy Square{" "}
                    </span>
                    <span className="text-[16px] lg:text-[30px] font-[600] mb-[6px] mt-[4px]">
                      (JV with AIPL)
                    </span>

                    <span className="text-[12px] lg:text-[15px] tracking-[1.5px]">
                      MAGARPATTA ROAD
                    </span>
                  </p>
                  <img
                    src={slide.src}
                    alt={`${slide.category} Project`}
                    className="w-full h-[350px] object-cover lg:h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-start lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse w-full mt-[1.5rem] lg:mt-[2.5rem]">
          <button className="font-[600]  w-[70%] lg:w-[350px] text-[14px] text-primaryblue text-center lg:mt-0 mt-[2.5rem]  font-lato border-y-[1px] py-[9px] px-[25px] tracking-[1px] border-primaryblue border-y-solid">
            EXPLORE ALL PROJECTS
          </button>
          <div className="flex justify-start lg:justify-end w-full mb-0  lg:mt-2">
            <button className="w-6 lg:w-8 h-6 lg:h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-prev-custom">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button className="w-6 lg:w-8 ml-[1rem] h-6 lg:h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-next-custom">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <img
        src="./assets/pattern-bg.png"
        alt="pattern-bg"
        className="h-[70px] bg-[#FBF6F6] absolute bottom-0 w-full object-cover"
      />
    </section>
  );
};

export default LuxuryProperties;
