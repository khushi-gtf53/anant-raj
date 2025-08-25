import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

const Gallery = ({
  title = "Once In A Lifetime Experience",
  galleryPairs = [], 
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="gallery_section mb-20 relative w-full h-screen px-5 lg:px-[100px] py-[40px] lg:py-[100px] bg-[#FBF6F6]">
      <div className="heading flex items-center justify-between mb-10">
        <h2 className="text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[40px] text-[13px] lg:text-[20px]">
          {title}
        </h2>

        <div className="opacity-70 flex gap-2 items-center">
          <div ref={prevRef} className="gallery-button-prev cursor-pointer">
            <IoIosArrowRoundBack size={40} />
          </div>
          <div ref={nextRef} className="gallery-button-next cursor-pointer">
            <IoIosArrowRoundForward size={40} />
          </div>
        </div>
      </div>

      <div className="gallery">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          slidesPerView={1}
          spaceBetween={50}
          className="!overflow-hidden"
        >
          {galleryPairs.map(([leftImage, rightImage], idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-9">
                  <img
                    src={leftImage}
                    alt={`gallery-left-${idx}`}
                    className="w-full h-[60vh] object-cover "
                  />
                </div>
                <div className="col-span-3">
                  <img
                    src={rightImage}
                    alt={`gallery-right-${idx}`}
                    className="w-full h-[60vh] object-cover "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
