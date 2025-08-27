import { useRef, useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { gsap } from "gsap";

const Gallery = ({ title = "Once In A Lifetime Experience", images = [] }) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const gap = 30;

  useEffect(() => {
    if (imagesRef.current.length && containerRef.current) {
      const updateImages = () => {
        const containerWidth = containerRef.current.offsetWidth;
        const totalWidth = containerWidth - gap; 
        const firstWidth = totalWidth * 0.7;
        const secondWidth = totalWidth * 0.3; 

        imagesRef.current.forEach((img, index) => {
          if (index === currentIndex) {
            gsap.to(img, {
              width: firstWidth,
              x: 0,
              duration: 1,
              ease: "power2.inOut",
            });
          } else if (index === (currentIndex + 1) % images.length) {
            gsap.to(img, {
              width: secondWidth,
              x: firstWidth + gap,
              duration:1,
              ease: "power2.inOut",
            });
          } else {
            gsap.to(img, {
              width: 0,
              x: containerWidth, 
              duration: 1,
              ease: "power2.inOut",
            });
          }
        });
      };

      updateImages();
      window.addEventListener("resize", updateImages);

      return () => window.removeEventListener("resize", updateImages);
    }
  }, [currentIndex, images]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery_section mb-20 relative w-full h-screen px-5 lg:px-[100px] py-[40px] lg:py-[100px] bg-[#FBF6F6]">
      <div className="heading flex items-center justify-between mb-10">
        <h2 className="text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[40px] text-[13px] lg:text-[20px]">
          {title}
        </h2>

        <div className="opacity-70 flex gap-2 items-center">
          <div onClick={handlePrev} className="gallery-button-prev cursor-pointer">
            <IoIosArrowRoundBack size={40} />
          </div>
          <div onClick={handleNext} className="gallery-button-next cursor-pointer">
            <IoIosArrowRoundForward size={40} />
          </div>
        </div>
      </div>

      <div className="gallery relative overflow-hidden h-[60vh]">
        <div
          ref={containerRef}
          className="image-container relative h-full"
          style={{ width: "100%" }}
        >
          {images.map((image, idx) => (
            <img
              key={idx}
              ref={(el) => (imagesRef.current[idx] = el)}
              src={image}
              alt={`gallery-image-${idx}`}
              className="h-full object-cover absolute top-0"
              style={{ width: 0 }} // Initial state
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;