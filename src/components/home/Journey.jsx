import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Journey = () => {
  const [activeYear, setActiveYear] = useState("1969"); // Changed to first year
  const swiperRef = useRef(null);
  const yearRefs = useRef({});
  const yearContainerRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const hasMounted = useRef(false);
  const isUserInteraction = useRef(false); // Track user interactions

  const slides = [
    {
      year: "1969",
      image: "./assets/timeline-1.png",
      text: "Founded Anant Raj Limited, laying the foundation for real estate excellence.",
    },
    {
      year: "1985",
      image: "./assets/timeline-1.png",
      text: "Expanded into commercial real estate with innovative projects.",
    },
    {
      year: "1989",
      image: "./assets/timeline-1.png",
      text: "Ventured into hospitality, delivering world-class experiences.",
    },
    {
      year: "1993",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "1995",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "1997",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2005",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2006",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2007",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2010",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2011",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2012",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2013",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2014",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2016",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2017",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2019",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2020",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2022",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2024",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
    {
      year: "2025",
      image: "./assets/timeline-1.png",
      text: "Pioneered data center development, embracing future technologies.",
    },
  ];

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }

    // Add a delay before marking as mounted to prevent initial scroll
    const timer = setTimeout(() => {
      hasMounted.current = true;
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    const newYear = slides[currentIndex].year;
    setActiveYear(newYear);

    // Only scroll if it's a user interaction and component is fully mounted
    if (hasMounted.current && isUserInteraction.current) {
      const yearElement = yearRefs.current[newYear];
      if (yearElement && yearContainerRef.current) {
        yearElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }

    // Reset user interaction flag
    isUserInteraction.current = false;
  };

  const handleYearClick = (year) => {
    isUserInteraction.current = true; // Mark as user interaction
    const slideIndex = slides.findIndex((slide) => slide.year === year);
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideToLoop(slideIndex);
      setActiveYear(year);

      // Allow scrolling for year clicks
      if (hasMounted.current) {
        const yearElement = yearRefs.current[year];
        if (yearElement && yearContainerRef.current) {
          yearElement.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }
    }
  };

  const handleNextClick = () => {
    isUserInteraction.current = true; // Mark as user interaction
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    isUserInteraction.current = true; // Mark as user interaction
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="relative px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-white">
      <div className="relative z-[3] mx-auto">
        <h2
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.5"
          className="text-primaryred lg:text-left text-center font-sangbleu mb-[40px] uppercase tracking-[2px] leading-[29px] lg:leading-[40px] text-[13px] lg:text-[20px]"
        >
          Empowering Dreams: Our Journey to Success
        </h2>

        {/* Year Navigation */}
        <div
          className="flex flex-nowrap overflow-x-auto items-center text-[35px] lg:text-[40px] tracking-[1px] pt-5 mb-6 text-primaryblue font-sangbleu border-t border-black text-2xl font-medium whitespace-nowrap scrollbar-hide"
          ref={yearContainerRef}
        >
          {slides.map((slide) => (
            <span
              key={slide.year}
              className={`cursor-pointer lg:text-start text-center min-w-[50%] md:min-w-[25%] ${
                activeYear === slide.year ? "text-primaryblue" : "text-gray-400"
              }`}
              onClick={() => handleYearClick(slide.year)}
              ref={(el) => (yearRefs.current[slide.year] = el)}
            >
              {slide.year}
            </span>
          ))}
        </div>

        {/* Swiper */}
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            initialSlide={0} // Ensure it starts at first slide
            navigation={{
              prevEl: ".swiper-prev-timeline",
              nextEl: ".swiper-next-timeline",
            }}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
                  <div className="w-full lg:text-left text-center md:w-[30%] md:ml-[60px] font-lato">
                    <h3 className="text-xl md:text-2xl font-normal text-primaryblue mt-4 md:mt-0">
                      {slide.year}
                    </h3>
                    <p className="my-4 tracking-[1px] leading-[26px] text-sm md:text-base">
                      {slide.text}
                    </p>
                    <div className="flex lg:justify-start justify-center items-center gap-2 mt-4">
                      <button
                        onClick={handlePrevClick}
                        className="cursor-pointer swiper-prev-timeline rotate-180"
                        ref={prevRef}
                      >
                        <img
                          alt="Previous"
                          className="h-[20px] object-cover"
                          src="./assets/right-arrow.png"
                        />
                      </button>
                      <button
                        onClick={handleNextClick}
                        className="cursor-pointer swiper-next-timeline"
                        ref={nextRef}
                      >
                        <img
                          alt="Next"
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
      </div>
    </section>
  );
};

export default Journey;
