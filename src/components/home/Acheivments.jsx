import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const achievementsData = [
  {
    id: 1,
    image: "./assets/award-1.png",
    title: "Data Center Innovation Excellence Awards 2024",
    text: "Anant Raj Cloud Wins Prestigious Award for 'Best Innovation in Data Center Design and Infrastructure' at Data Center Innovation Excellence Awards 2024",
  },
  {
    id: 2,
    image: "./assets/award-1.png",
    title: "Real Estate Excellence Award 2023",
    text: "Recognized for outstanding contributions to sustainable real estate development in 2023.",
  },
  {
    id: 3,
    image: "./assets/award-1.png",
    title: "Best Commercial Project Award 2022",
    text: "Honored for the innovative design of our commercial properties in 2022.",
  },
];

const Achievements = () => {
  const [activeAchievement, setActiveAchievement] = useState(
    achievementsData[0]
  );
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper) => {
    setActiveAchievement(achievementsData[swiper.realIndex]);
  };

  return (
    <section className="bg-[#FBF6F6] px-[20px] lg:px-[100px] lg:py-[90px]  py-14">
      <h2 className="font-sangbleu text-primaryred mb-10 uppercase tracking-widest text-[16px] lg:text-[20px] leading-[28px] lg:leading-[40px] font-medium">
        Award-Winning Milestones in Real Estate.
      </h2>

      <div className="flex justify-between flex-wrap  items-center ">
        {/* Image Carousel */}
        <div className="basis-[100%] lg:basis-[55%] overflow-x-hidden">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {achievementsData.map((achievement) => (
              <SwiperSlide key={achievement.id}>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-[250px] lg:mb-0 mb-[30px] lg:h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="basis-[100%] lg:basis-[38%] font-lato">
          <h3 className="text-lg  font-semibold text-gray-800 mb-6">
            {activeAchievement.title}
          </h3>
          <p className="text-base leading-relaxed  mb-8">
            {activeAchievement.text}
          </p>

          {/* Navigation Arrows */}
          <div className="flex items-center  mb-8">
            <button
              aria-label="Previous Achievement"
              onClick={handlePrevClick}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <img
                src="./assets/right-arrow.png"
                alt="Previous"
                className="h-5 w-5 rotate-180"
              />
            </button>
            <button
              aria-label="Next Achievement"
              onClick={handleNextClick}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <img
                src="./assets/right-arrow.png"
                alt="Next"
                className="h-5 w-5"
              />
            </button>
          </div>

          <button className="flex  lg:inline-block uppercase font-semibold text-sm text-primaryblue border-y border-primaryblue py-[10px] px-6 tracking-[2px] transition hover:bg-primaryblue hover:text-white">
            EXPLORE MORE Awards
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
