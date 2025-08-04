import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogSlides = [
  {
    id: 1,
    image: "./assets/blog-1.png",
    title:
      "The Role of Smart Cities in Shaping the Future of Urban Development",
  },
  {
    id: 2,
    image: "./assets/blog-1.png",
    title: "Green Buildings: Paving the Way to a Sustainable Tomorrow",
  },
  {
    id: 3,
    image: "./assets/blog-1.png",
    title: "Top Real Estate Trends to Watch in 2025",
  },
];

const Blogs = () => {
  const swiperRef = useRef(null);

  return (
    <section className="px-[80px] pt-[70px]  bg-white">
      <h2 className="font-sangbleu text-primaryred mb-10 border-t-[1px] border-black border-solid pt-[60px] uppercase tracking-widest text-[20px] leading-[40px] font-medium">
        Discover Insights. Ignite Imagination.
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".swiper-next-custom",
            prevEl: ".swiper-prev-custom",
          }}
        >
          {blogSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[360px] object-cover rounded-sm"
                />
                <div className="flex mt-[25px] justify-between items-center">
                  <p className=" text-[16px] font-semibold tracking-[1px] ">
                    {slide.title}
                  </p>
                  <div>
                    <button className="text-primaryblue font-semibold text-sm border-t border-b border-primaryblue px-6 py-2 hover:bg-primaryblue hover:text-white transition">
                      EXPLORE BLOGS & NEWS
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button
          class="absolute top-1/2 left-[-20px] transform -translate-y-[165%] z-10  w-8 h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-prev-custom swiper-button-disabled"
          disabled=""
        >
          <svg
            class="w-4 h-4"
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

        <button
          class="absolute top-1/2 rotate-[180deg] right-[-20px] transform -translate-y-[165%] z-10  w-8 h-8 bg-primaryblue cursor-pointer text-white rounded-full flex items-center justify-center swiper-prev-custom swiper-button-disabled"
          disabled=""
        >
          <svg
            class="w-4 h-4"
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
      </div>
    </section>
  );
};

export default Blogs;
