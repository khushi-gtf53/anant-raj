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
      <div className="px-[80px] py-[70px]">
        <div className="flex justify-between w-full max-w-6xl items-center mb-[35px]">
          <h2 className="text-primaryred font-sangbleu uppercase tracking-[2px] leading-[40px] text-[20px]">
            LUXURY PROPERTIES
          </h2>
          <div className="flex text-gray-800 font-lato tracking-[1px] text-[14px]">
            <p
              className={`hover:text-gray-600 mr-[2rem] cursor-pointer ${
                activeCategory === "RESIDENTIAL"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("RESIDENTIAL")}
            >
              RESIDENTIAL
            </p>
            <p
              className={`hover:text-gray-600 mr-[2rem] cursor-pointer ${
                activeCategory === "COMMERCIAL"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("COMMERCIAL")}
            >
              COMMERCIAL
            </p>
            <p
              className={`hover:text-gray-600 mr-[2rem] cursor-pointer ${
                activeCategory === "HOSPITALITY"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("HOSPITALITY")}
            >
              HOSPITALITY
            </p>
            <p
              className={`hover:text-gray-600 cursor-pointer ${
                activeCategory === "DATA CENTERS"
                  ? "text-primaryblue font-bold"
                  : ""
              }`}
              onClick={() => handleCategoryClick("DATA CENTERS")}
            >
              DATA CENTERS
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-6xl">
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
                  <p className="tracking-[1.2px] flex flex-col absolute left-[30px] text-white top-[30px]">
                    <span className="text-[32px] font-[500]">Joy Square </span>
                    <span className="text-[30px] font-[500] mb-[8px] mt-[4px]">
                      (JV with AIPL)
                    </span>

                    <span className="text-[15px] tracking-[1.5px]">
                      MAGARPATTA ROAD
                    </span>
                  </p>
                  <img
                    src={slide.src}
                    alt={`${slide.category} Project`}
                    className="w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center w-full mt-[2.5rem]">
          <button className="font-[600] w-[350px] text-[14px] text-primaryblue text-center  font-lato border-y-[1px] py-[9px] px-[25px] tracking-[1px] border-primaryblue border-y-solid">
            EXPLORE ALL PROJECTS
          </button>
          <div className="flex justify-end w-full max-w-6xl mt-2">
            <button className="w-8 h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-prev-custom">
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
            <button className="w-8 ml-[2rem] h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-next-custom">
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
