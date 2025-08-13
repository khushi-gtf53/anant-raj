import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogSlides = [
  {
    id: 1,
    image: "./assets/2blog.jpg",
    title:
      "Discover the Epitome of Luxury Living at The Estate Residences by Anant Raj Limited, Gurugram",
    para: "Experience the pinnacle of luxury living at The Estate Residences by Anant Raj Limited. Your dream home awaits in the heart of Gurugram.",
  },
  {
    id: 2,
    image: "./assets/1blog.jpg",
    title:
      "Why Investing in Gurgaon’s Luxury Flats is a Game Changer for Real Estate Investors",
    para: "If you're looking to diversify your portfolio or secure a high-value asset in India’s fastest-growing urban market, now is the time to explore Anant Raj’s premium offerings in Gurgaon.",
  },

  {
    id: 3,
    image: "./assets/3blog.webp",
    title:
      "Anant Raj Manesar: Pioneering Innovation at the Heart of IT Development",
    para: "Anant Raj Manesar is more than just an IT Park—it’s a blueprint for the future of enterprise infrastructure in India.",
  },
];

const Blogs = () => {
  const swiperRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to trigger animation
  const triggerImageAnimation = (index) => {
    const img = slideRefs.current[index]?.querySelector("img");
    if (img) {
      img.classList.remove("animate-zoom-fade"); // reset
      void img.offsetWidth; // trigger reflow to restart animation
      img.classList.add("animate-zoom-fade");
    }
  };

  // Run animation every time the slide changes
  useEffect(() => {
    triggerImageAnimation(activeIndex);
  }, [activeIndex]);

  return (
    <section className="px-[20px] lg:px-[100px] lg:pt-[80px] lg:pb-[40px] pt-[70px] bg-white">
      <h2 className="font-sangbleu text-primaryred mb-10 border-t-[1px] border-black border-solid pt-[90px] uppercase tracking-widest leading-[29px] lg:leading-[40px] text-[16px] lg:text-[20px] font-medium">
        Discover Insights. Ignite Imagination
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".swiper-next-custom",
            prevEl: ".swiper-prev-custom",
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {blogSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div ref={(el) => (slideRefs.current[index] = el)}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[240px] lg:h-[450px] object-cover rounded-sm"
                />

                <div className="lg:hidden flex mt-[16px]">
                  <button
                    aria-label="Previous"
                    className="p-2 swiper-prev-custom hover:bg-gray-200 rounded-full transition opacity-50 cursor-default"
                  >
                    <img
                      src="./assets/right-arrow.png"
                      alt="Previous"
                      className="h-5 w-5 rotate-180"
                    />
                  </button>
                  <button
                    aria-label="Next"
                    className="p-2 swiper-next-custom hover:bg-gray-200 rounded-full transition opacity-50 cursor-default"
                  >
                    <img
                      src="./assets/right-arrow.png"
                      alt="Next"
                      className="h-5 w-5"
                    />
                  </button>
                </div>

                <div className="flex lg:flex-row flex-col mt-[15px] lg:mt-[25px] justify-between lg:items-center">
                  <p className="text-[16px] font-semibold tracking-[1px]">
                    {slide.title}
                  </p>

                  <div className="lg:mt-0 mt-[40px]">
                    <button className="text-primaryblue font-semibold w-[90%] lg:w-auto text-sm border-t border-b border-primaryblue px-6 tracking-[2px] py-[10px] hover:bg-primaryblue hover:text-white transition">
                      EXPLORE BLOGS & NEWS
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="absolute top-1/2 left-[-20px] transform lg:-translate-y-[165%] -translate-y-[240%] z-10 w-8 h-8 bg-primaryblue cursor-pointer text-white rounded-full hidden lg:flex items-center justify-center swiper-prev-custom">
          <svg
            className="lg:w-4 lg:h-4 w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="absolute top-1/2 right-[-20px] transform lg:-translate-y-[165%] -translate-y-[240%] z-10 w-8 h-8 bg-primaryblue cursor-pointer text-white rounded-full hidden lg:flex items-center justify-center swiper-next-custom">
          <svg
            className="lg:w-4 lg:h-4 w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

      {/* Animation CSS */}
      <style jsx>{`
        .animate-zoom-fade {
          animation: zoomFadeIn 1.5s ease forwards;
        }

        @keyframes zoomFadeIn {
          0% {
            opacity: 0;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Blogs;
