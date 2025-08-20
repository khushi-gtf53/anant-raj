import { useState } from "react";

const Brands = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "LINEAGE-LED",
      subtitle: "CREDIBILITY",
      description:
        "Anant Raj stands on decades of trust, stewardship, and deep-rooted land ownership — offering not just projects, but peace of mind built over generations.",
    },
    {
      title: "CULTURALLY",
      subtitle: "INTELLIGENT CRAFT",
      description:
        "Every community is imagined with the Indian ethos at heart — blending architectural sensitivity with modern sensibilities for today's evolved buyer.",
    },
    {
      title: "FUTURE-FIRST",
      subtitle: "THINKING",
      description:
        "From smart townships to ESG-conscious designs, Anant Raj creates spaces that anticipate tomorrow — not just adapt to it.",
    },
    {
      title: "SCALE WITH",
      subtitle: "INTEGRITY",
      description:
        "Townships designed with long-term human value in mind — low density, high livability, integrated wellness, and an innate respect for the land itself.",
    },
  ];

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <section className="p-[100px]">
      <h2 className="text-primaryred mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] font-sangbleu text-[12.5px] lg:text-[20px]">
        <span>Our Brand Pillars: The Foundation of</span>
        <span className="block"> Everything We Build</span>
      </h2>
      <div className="">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Row */}
          <div className="flex flex-wrap ">
            {/* Left Side - Main Pillar and Text */}

            {/* Dynamic Header */}
            <div className="mb-8 flex items-center basis-[100%] justify-between flex-wrap">
              <div className="basis-[10%] text-center">
                <h3 className="text-sm font-medium text-primaryblue tracking-[1.5px] mb-2">
                  {sections[activeSection].title}
                </h3>
                <h2 className="text-sm font-medium text-primaryblue tracking-[1.5px]">
                  {sections[activeSection].subtitle}
                </h2>
              </div>
              <div className="basis-[20%] bg-black h-[0.5px]"></div>
              <p className="basis-[60%] font-lato text-[14px] font-[400] tracking-[1px]  leading-[27px]">
                {sections[activeSection].description}
              </p>
            </div>

            <div className="flex basis-[100%] flex-wrap">
              {/* Large Pillar */}
              <div className="basis-[20%] h-[360px]">
                <img
                  src="/assets/pillar.png"
                  className="h-[100%]"
                  alt="pillar"
                />
              </div>
              {/* Navigation Arrows */}
              <div className=" basis-[20%] flex items-center gap-4 self-center">
                <button
                  onClick={prevSection}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="right"
                    className="h-[17px] lg:h-[20px] rotate-[180deg] object-cover"
                  />
                </button>
                <button
                  onClick={nextSection}
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
              <div className="grid basis-[60%]  grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                {sections.slice(1).map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-end"
                  >
                    <h4 className="text-[15px]  font-medium text-[#263A7F80] tracking-[1.5px] mb-1">
                      {section.title}
                    </h4>
                    <h4 className="text-[15px]  font-medium text-[#263A7F80] tracking-[1.5px]">
                      {section.subtitle}
                    </h4>{" "}
                    <div className="pt-7 h-[150px]">
                      <img
                        src="/assets/pillar.png"
                        className="h-[100%]"
                        alt="pillar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
