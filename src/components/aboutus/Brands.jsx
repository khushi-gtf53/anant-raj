import gsap from "gsap/all";
import { useEffect, useRef, useState } from "react";

const Brands = () => {
  const [activeSection, setActiveSection] = useState(0);
  const pillarRef = useRef(null);
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const headerRef = useRef(null); // Add this for dynamic header animation

  const sections = [
    {
      title: "LINEAGE-LED",
      subtitle: "CREDIBILITY",
      description:
        "Anant Raj stands on decades of trust, stewardship, and deep-rooted land ownership — offering not just projects, but peace of mind built over generations.",
      image: "/assets/pillar.png",
    },
    {
      title: "CULTURALLY",
      subtitle: "INTELLIGENT CRAFT",
      description:
        "Every community is imagined with the Indian ethos at heart — blending architectural sensitivity with modern sensibilities for today's evolved buyer.",
      image: "/assets/pillar.png",
    },
    {
      title: "FUTURE-FIRST",
      subtitle: "THINKING",
      description:
        "From smart townships to ESG-conscious designs, Anant Raj creates spaces that anticipate tomorrow — not just adapt to it.",
      image: "/assets/pillar.png",
    },
    {
      title: "SCALE WITH",
      subtitle: "INTEGRITY",
      description:
        "Townships designed with long-term human value in mind — low density, high livability, integrated wellness, and an innate respect for the land itself.",
      image: "/assets/pillar.png",
    },
  ];

  useEffect(() => {
    if (pillarRef.current) {
      gsap.set(pillarRef.current, { height: "150px" });
      gsap.to(pillarRef.current, {
        height: "400px",
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1); // Mobile
      } else if (width < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(3); // Desktop
      }
    };

    updateSlidesToShow(); // Set on mount

    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);


  const changeSection = (direction) => {
    if (!sliderRef.current || !headerRef.current) return;

    // Animate slider fade out & slide
    gsap.to(sliderRef.current, {
      opacity: 0,
      x: direction === "next" ? -50 : 50,
      duration: 0.7,
      ease: "power1.in",
    });

    // Animate header fade out & slide
    gsap.to(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power1.in",
      onComplete: () => {
        // Update activeSection after fade out
        setActiveSection((prev) => {
          if (direction === "next") {
            return (prev + 1) % sections.length;
          } else {
            return (prev - 1 + sections.length) % sections.length;
          }
        });

        // Animate slider fade in & slide back
        gsap.fromTo(
          sliderRef.current,
          { opacity: 0, x: direction === "next" ? 50 : -50 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power1.out" }
        );

        // Animate header fade in & slide up
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power1.out" }
        );
      },
    });
  };

  return (
    <section id="brandpillars" className="px-[20px] py-[40px] sm:p-[100px]">
      <h2 className="text-primaryred mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] font-sangbleu text-[12px] lg:text-[20px]">
        <span>Our Brand Pillars: The Foundation of</span>
        <span className="block"> Everything We Build</span>
      </h2>
      <div className="">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Row */}
          <div className="flex flex-wrap ">
            {/* Dynamic Header with ref */}
            <div
              ref={headerRef}
              className="mb-8 sm:flex items-center basis-[100%] justify-between flex-wrap min-h-[200px]"
            >
              <div className="basis-[10%] sm:text-center">
                <h3 className="text-sm font-medium text-primaryblue tracking-[1.5px] ">
                  {sections[activeSection].title}
                </h3>
                <h2 className="text-sm font-medium text-primaryblue mb-4 sm:mb-0 tracking-[1.5px]">
                  {sections[activeSection].subtitle}
                </h2>
              </div>
              <div className="basis-[20%] bg-black hidden sm:block h-[0.5px]"></div>
              <p className="basis-[60%] font-lato text-[14px] font-[400] tracking-[1px]  leading-[27px]">
                {sections[activeSection].description}
              </p>
            </div>

            <div className="grid grid-cols-12 h-[400px] w-full">
              {/* Large Pillar */}
              <div className="col-span-4 sm:col-span-2 flex items-end">
                <img
                  ref={pillarRef}
                  src={sections[activeSection].image}
                  className="object-contain"
                  alt="pillar"
                />
              </div>

              {/* Navigation Arrows */}
              <div className="col-span-3 flex items-center gap-4">
                <button
                  onClick={() => changeSection("prev")}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="right"
                    className="h-[17px] lg:h-[20px] rotate-[180deg] object-cover"
                  />
                </button>
                <button
                  onClick={() => changeSection("next")}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="right"
                    className="h-[17px] lg:h-[20px] object-cover"
                  />
                </button>
              </div>

              {/* Three Pillars with Labels */}
              <div
                className="col-span-5 sm:col-span-7 flex items-center sm:items-end sm:pb-5"
                ref={sliderRef}
                style={{ opacity: 1, transition: "none" }}
              >
                <div className="flex justify-between items-end w-full">
                  {Array.from({ length: slidesToShow }).map((_, offset) => {
                    const index = (activeSection + offset + 1) % sections.length;
                    const section = sections[index];
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-end px-2"
                      >
                        <h4 className="text-[15px] font-medium text-[#263A7F80] tracking-[1.5px] mb-1">
                          {section.title}
                        </h4>
                        <h4 className="text-[15px] font-medium text-[#263A7F80] tracking-[1.5px]">
                          {section.subtitle}
                        </h4>
                        <div className="pt-7 h-[150px]">
                          <img
                            src={section.image}
                            className="h-[100%]"
                            alt="pillar"
                          />
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
