import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(1969);
  const swiperRef = useRef(null);

  const slides = [
    {
      year: 1969,
      image: "./assets/timeline-1.png", // Replace with actual image URL
      text: "Anant Raj Was Founded In New Delhi. Establishing A Legacy Of Quality And Ethical Business Practices.",
    },
    {
      year: 1979,
      image: "./assets/timeline-1.png",
      text: "Anant Raj was founded in New Delhi, establishing a legacy of quality and ethical business practices.",
    },
    {
      year: 1989,
      image: "./assets/timeline-1.png",
      text: "Anant Raj was founded in New Delhi, establishing a legacy of quality and ethical business practices.",
    },
    {
      year: 1999,
      image: "./assets/timeline-1.png",
      text: "Anant Raj was founded in New Delhi, establishing a legacy of quality and ethical business practices.",
    },
    {
      year: 2000,
      image: "./assets/timeline-1.png",
      text: "Anant Raj was founded in New Delhi, establishing a legacy of quality and ethical business practices.",
    },
  ];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveYear(slides[currentIndex].year);
  };

  const handleYearClick = (year) => {
    const index = slides.findIndex((slide) => slide.year === year);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index, 500); // Smooth transition
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(500); // Smooth transition to previous slide
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(500); // Smooth transition to next slide
    }
  };

  return (
    <section className="px-[80px] py-[70px]  bg-white">
      {/* <h2 className="text-primaryred font-sangbleu mb-[40px] uppercase tracking-[2px] leading-[40px] text-[20px]">
        <span>Empowering Dreams, Our Journey to </span>
        <span className="block"> Success Early 90’s - The Beginning</span>
      </h2> */}
      <h2 className="text-primaryred font-sangbleu mb-[40px] uppercase tracking-[2px] leading-[40px] text-[20px]">
        Empowering Dreams: Our Journey to Success
      </h2>
      <div className="flex justify-between items-center text-[40px] tracking-[1px] pt-[20px] mb-6 text-primaryblue font-sangbleu border-t-[1px] border-t-solid border-solid border-black text-2xl font-[500]">
        {slides.map((slide) => (
          <span
            key={slide.year}
            className={`cursor-pointer ${
              activeYear === slide.year ? "text-primaryblue" : "text-gray-400"
            }`}
            onClick={() => handleYearClick(slide.year)}
          >
            {slide.year}
          </span>
        ))}
      </div>
      <div className="relative mt-[40px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false} // Disable default navigation to use custom buttons
          loop={true}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.year}>
              <div className="flex items-center flex-wrap space-x-6">
                <div className="basis-[55%]">
                  <img
                    src={slide.image}
                    alt={`Timeline ${slide.year}`}
                    className="object-cover w-full h-[300px]" // Adjusted for consistent height
                  />
                </div>
                <div className="basis-[30%] font-lato ml-[60px]">
                  <h3 className="text-2xl font-[400] text-primaryblue">
                    {slide.year}
                  </h3>
                  <p className="my-[20px] text-[15px] font-lato">
                    {slide.text}
                  </p>
                  <div className="mt-[20px]">
                    <button
                      className="swiper-prev-journey cursor-pointer rotate-[180deg] mr-[10px]"
                      onClick={handlePrevClick}
                    >
                      <img
                        alt="right"
                        className="h-[20px] object-cover"
                        src="./assets/right-arrow.png"
                      />
                    </button>
                    <button
                      className="swiper-next-journey cursor-pointer"
                      onClick={handleNextClick}
                    >
                      <img
                        alt="left"
                        className="h-[20px] object-cover"
                        src="./assets/right-arrow.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Timeline;
