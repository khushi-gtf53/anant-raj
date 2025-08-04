import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurTeam = () => {
  const [activeRole, setActiveRole] = useState("Our Founder");
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    {
      id: 1,
      title: "Shri Ashok Sarin - our founder",
      text: "Shri Ashok Sarin was the visionary founder and Chairman of Anant Raj Limited, with over five decades of unparalleled expertise in real estate.",
      role: "Our Founder",
    },
    {
      id: 2,
      title: "Managing Director",
      text: "The Managing Director oversees strategic operations and growth initiatives at Anant Raj Limited...",
      role: "Managing Director",
    },
    {
      id: 3,
      title: "Director & CEO",
      text: "The Director & CEO leads the company's vision and executive decisions at Anant Raj Limited...",
      role: "Director & CEO",
    },
    {
      id: 4,
      title: "Director & COO",
      text: "The Director & COO manages operational excellence and coordination at Anant Raj Limited...",
      role: "Director & COO",
    },
  ];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveRole(slides[currentIndex].role);
  };

  const handleRoleClick = (role) => {
    const slideIndex = slides.findIndex((slide) => slide.role === role);
    if (slideIndex !== -1 && swiperInstance) {
      swiperInstance.slideToLoop(slideIndex);
      setActiveRole(role);
    }
  };

  return (
    <section className="px-[100px] py-[100px] bg-white">
      <h2 className="text-primaryred font-sangbleu mb-[40px] uppercase tracking-[2px] leading-[40px] text-[18px]">
        Meet our founder, whose visionary leadership drives creativity, growth,
        and excellence
      </h2>

      <div className="container mx-auto px-4">
        <div className="swiper-container-team overflow-x-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev-team",
              nextEl: ".swiper-next-team",
            }}
            loop={true}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex justify-between flex-wrap items-center">
                  <div className="basis-[40%]">
                    <img
                      className="h-[380px] object-cover"
                      src="./assets/anant-raj.png"
                      alt="anant-raj"
                    />
                  </div>
                  <div className="basis-[60%]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-primaryblue uppercase pb-[30px] tracking-[1px] font-[600]">
                        {slide.title}
                      </h3>
                      <div>
                        <button className="swiper-prev-team cursor-pointer rotate-[180deg] mr-[10px]">
                          <img
                            src="./assets/right-arrow.png"
                            alt="right"
                            className="h-[20px] object-cover"
                          />
                        </button>
                        <button className="swiper-next-team cursor-pointer">
                          <img
                            src="./assets/right-arrow.png"
                            alt="left"
                            className="h-[20px] object-cover"
                          />
                        </button>
                      </div>
                    </div>
                    <p className="border-y-[1px] leading-[25px] mb-[25px] border-solid border-black py-[30px] text-[14px] font-lato tracking-[1px]">
                      {slide.text}
                    </p>
                    <ul className="flex justify-between items-center my-[25px] tracking-[1px]">
                      <li
                        className={`cursor-pointer ${
                          activeRole === "Our Founder"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Our Founder")}
                      >
                        <span>Our Founder</span>
                      </li>
                      <li
                        className={`cursor-pointer ${
                          activeRole === "Managing Director"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Managing Director")}
                      >
                        <span>Managing Director</span>
                      </li>
                      <li
                        className={`cursor-pointer ${
                          activeRole === "Director & CEO"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Director & CEO")}
                      >
                        <span>Director & CEO</span>
                      </li>
                      <li
                        className={`cursor-pointer ${
                          activeRole === "Director & COO"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Director & COO")}
                      >
                        <span>Director & COO</span>
                      </li>
                    </ul>
                    <button className="font-[600] text-[14px] text-primaryblue text-center mt-[35px] font-lato border-y-[1px] py-[9px] px-[25px] tracking-[1px] border-primaryblue border-y-solid">
                      EXPLORE OUR TEAM
                    </button>
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

export default OurTeam;
