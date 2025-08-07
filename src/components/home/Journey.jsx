import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Journey = () => {
  const [activeYear, setActiveYear] = useState("1992");
  const swiperRef = useRef(null);
  const yearRefs = useRef({}); // Store refs for each year
  const yearContainerRef = useRef(null); // Ref for the year navigation container

  const slides = [
    {
      year: "1992",
      image: "./assets/timeline-1.png",
      text: "Founded Anant Raj Limited, laying the foundation for real estate excellence.",
    },
    {
      year: "2000",
      image: "./assets/timeline-1.png",
      text: "Expanded into commercial real estate with innovative projects.",
    },
    {
      year: "2010",
      image: "./assets/timeline-1.png",
      text: "Ventured into hospitality, delivering world-class experiences.",
    },
    {
      year: "2020",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2030",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2040",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2050",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
  ];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveYear(slides[currentIndex].year);
    // Scroll the year into view when the slide changes
    const yearElement = yearRefs.current[slides[currentIndex].year];
    if (yearElement && yearContainerRef.current) {
      yearElement.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleYearClick = (year) => {
    const slideIndex = slides.findIndex((slide) => slide.year === year);
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(slideIndex);
      setActiveYear(year);
      // Scroll the clicked year into view
      const yearElement = yearRefs.current[year];
      if (yearElement && yearContainerRef.current) {
        yearElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="relative px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-white">
      <div className="relative z-[3] max-w-6xl mx-auto">
        <h2 className="text-primaryred font-sangbleu mb-[40px] uppercase tracking-[2px] leading-[29px] lg:leading-[40px] text-[16px] lg:text-[20px]">
          Empowering Dreams: Our Journey to Success
        </h2>
        <div
          className="flex flex-nowrap overflow-x-auto items-center text-[35px] lg:text-[40px] tracking-[1px] pt-5 mb-6 text-primaryblue font-sangbleu border-t border-black text-2xl font-medium whitespace-nowrap scrollbar-hide"
          ref={yearContainerRef}
        >
          {slides.map((slide) => (
            <span
              key={slide.year}
              className={`cursor-pointer min-w-[50%] md:min-w-[25%] ${
                activeYear === slide.year ? "text-primaryblue" : "text-gray-400"
              }`}
              onClick={() => handleYearClick(slide.year)}
              ref={(el) => (yearRefs.current[slide.year] = el)}
            >
              {slide.year}
            </span>
          ))}
        </div>
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={false}
            loop={true}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.year}>
                <div className="flex flex-col md:flex-row items-start md:items-center flex-wrap gap-6">
                  <div className="w-full md:w-[55%]">
                    <img
                      src={slide.image}
                      alt={`Timeline ${slide.year}`}
                      className="object-cover w-full h-[200px] md:h-[350px]"
                    />
                  </div>
                  <div className="w-full md:w-[30%] md:ml-[60px] font-lato">
                    <h3 className="text-xl md:text-2xl font-normal text-primaryblue mt-4 md:mt-0">
                      {slide.year}
                    </h3>
                    <p className="my-4 tracking-[1px] leading-[26px] text-sm md:text-base">
                      {slide.text}
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <button
                        className="swiper-prev-journey cursor-pointer rotate-180"
                        onClick={handlePrevClick}
                      >
                        <img
                          alt="Previous"
                          className="h-[20px] object-cover"
                          src={"./assets/right-arrow.png"}
                        />
                      </button>
                      <button
                        className="swiper-next-journey cursor-pointer"
                        onClick={handleNextClick}
                      >
                        <img
                          alt="Next"
                          className="h-[20px] object-cover"
                          src={"./assets/right-arrow.png"}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Journey;
