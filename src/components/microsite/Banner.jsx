import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const Banner = ({ slides = [] }) => {
    return (
        <section className="microsite_banner relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".banner-button-next",
                    prevEl: ".banner-button-prev",
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="banner_slider overflow-hidden w-full h-[65vh]"
            >
                {slides.map((slideImages, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex h-full w-full justify-center items-center">
                            {slideImages.map((imgSrc, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={imgSrc}
                                    alt={`Slide ${index + 1} Image ${imgIndex + 1}`}
                                    className="object-cover h-auto w-full max-h-[65vh]"
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="banner_navigation bg-[#FBF6F6] w-full h-[5vh] px-5">
                <div className="opacity-70 flex gap-2 justify-end items-center h-full">
                    <div className="banner-button-prev cursor-pointer">
                        <IoIosArrowRoundBack size={40} />
                    </div>
                    <div className="banner-button-next cursor-pointer">
                        <IoIosArrowRoundForward size={40} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;