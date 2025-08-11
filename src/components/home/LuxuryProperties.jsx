import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LuxuryProperties = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [activeCategory, setActiveCategory] = useState("RESIDENTIAL");
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Ref for the first slide image only
  const firstImageRef = useRef(null);

  useEffect(() => {
    if (firstImageRef.current) {
      gsap.fromTo(
        firstImageRef.current,
        { scale: 1.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: firstImageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      id: 1,
      mbImage: "./assets/luxury/villa-mb.jpg",
      src: "./assets/luxury/villa.jpg",
      category: "RESIDENTIAL",
    },
    {
      id: 2,
      mbImage: "./assets/luxury/commercial-mb.jpg",
      src: "./assets/luxury/commercial.jpg",
      category: "COMMERCIAL",
    },
    {
      id: 3,
      mbImage: "./assets/luxury/hospitality-mb.jpg",
      src: "./assets/luxury/hospitality.jpg",
      category: "HOSPITALITY",
    },
    {
      id: 4,
      mbImage: "./assets/luxury/cloud-mb.jpg",
      src: "./assets/luxury/cloud.jpg",
      category: "DATA CENTERS",
    },
  ];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveCategory(slides[currentIndex].category);
    // No animation for other slides
  };

  const handleCategoryClick = (category) => {
    const slideIndex = slides.findIndex((slide) => slide.category === category);
    if (slideIndex !== -1 && swiperInstance) {
      swiperInstance.slideToLoop(slideIndex);
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.navigation?.update();
    }
  }, [swiperInstance]);

  return (
    <section className="bg-[#FBF6F6] relative pb-[70px]">
      <div className="px-[20px] lg:px-[100px] py-[40px] lg:py-[100px]">
        <div className="flex flex-col lg:flex-nowrap flex-wrap lg:flex-row justify-between w-full items-start lg:items-center mb-[35px]">
          <h2 className="text-primaryred text-left basis-[100%] lg:mb-0 mb-[25px] font-sangbleu uppercase tracking-[2px] leading-[40px] text-[16px] lg:text-[20px]">
            LUXURY PROPERTIES
          </h2>
          <div className="flex text-gray-800 basis-[100%] lg:flex-nowrap flex-wrap font-lato tracking-[1px] text-[14px]">
            {["RESIDENTIAL", "COMMERCIAL", "HOSPITALITY", "DATA CENTERS"].map(
              (category) => (
                <p
                  key={category}
                  className={`hover:text-gray-600 relative basis-[50%] lg:text-end text-left mb-[17px] lg:mr-[0rem] cursor-pointer ${
                    activeCategory === category
                      ? "text-primaryblue font-bold"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="h-[80px] hidden lg:block absolute bottom-[-98px] left-[50%] bg-primaryblue w-[1px]"></span>
                  )}
                </p>
              )
            )}
          </div>
        </div>

        <div className="relative w-full">
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
            onSwiper={setSwiperInstance}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={slide.id}>
                <div className="relative">
                  <img
                    // Attach ref only to the first image
                    ref={idx === 0 ? firstImageRef : null}
                    src={!isMobile ? slide.src : slide.mbImage}
                    alt={`${slide.category} Project`}
                    className="w-full h-[350px] object-cover xl:h-[500px] lg:h-[400px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-start lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse w-full mt-[1.5rem] lg:mt-[2.5rem] ">
          <button className="font-[600] w-[70%] lg:w-[350px] text-[14px] text-primaryblue text-center lg:mt-0 mt-[2.5rem] font-lato border-y-[1px] py-[9px]  px-[21px] lg:px-[25px] tracking-[1px] border-primaryblue border-y-solid">
            EXPLORE ALL PROJECTS
          </button>
          <div className="lg:flex hidden justify-start lg:justify-end w-full mb-0 lg:mt-2">
            <button className="w-5 lg:w-8 h-5 lg:h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-prev-custom">
              <svg
                className="lg:w-4 lg:h-4 w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-5 lg:w-8 ml-[1rem] h-5 lg:h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-next-custom">
              <svg
                className="lg:w-4 lg:h-4 w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* mobile navigation */}
          <div className="lg:hidden flex">
            <button
              aria-label="Previous"
              className="p-2 hover:bg-gray-200 swiper-prev-custom rounded-full transition"
            >
              <img
                src="./assets/right-arrow.png"
                alt="Previous"
                className="h-5 w-5 rotate-180"
              />
            </button>
            <button
              aria-label="Next"
              className="p-2 hover:bg-gray-200 swiper-next-custom rounded-full transition"
            >
              <img
                src="./assets/right-arrow.png"
                alt="Next"
                className="h-5 w-5"
              />
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
