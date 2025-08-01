import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurTeam = () => {
  const [activeRole, setActiveRole] = useState("Our Founder");

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

  return (
    <section className="px-[65px] py-[70px] bg-white">
      <h2 className="text-primaryred font-sangbleu mb-[40px] uppercase tracking-[2px] leading-[40px] text-[20px]">
        <span>
          Meet our founder, whose visionary leadership drives creativity,
        </span>
        <span className="block"> growth, and excellence.</span>
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
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex justify-between flex-wrap">
                  <div className="basis-[40%]">
                    <img
                      className="h-[300px] object-cover"
                      src="./assets/anant-raj.png"
                      alt="anant-raj"
                    />
                  </div>
                  <div className="basis-[60%]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-primaryblue uppercase pb-[15px] tracking-[1px] font-[600]">
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
                    <p className="border-y-[1px] leading-[33px] mb-[25px] border-solid border-black py-[20px] text-[14px] font-lato tracking-[1px]">
                      {slide.text}
                    </p>
                    <ul className="flex justify-between items-center my-[25px] tracking-[1px]">
                      <li
                        className={
                          activeRole === "Our Founder"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }
                      >
                        <span>Our Founder</span>
                      </li>
                      <li
                        className={
                          activeRole === "Managing Director"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }
                      >
                        <span>Managing Director</span>
                      </li>
                      <li
                        className={
                          activeRole === "Director & CEO"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }
                      >
                        <span>Director & CEO</span>
                      </li>
                      <li
                        className={
                          activeRole === "Director & COO"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }
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
