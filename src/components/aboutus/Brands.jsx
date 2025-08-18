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
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Side - Main Pillar and Text */}
            <div className="flex-1 lg:max-w-md">
              {/* Dynamic Header */}
              <div className="mb-8">
                <h3 className="text-xs md:text-sm font-medium text-gray-600 tracking-wider mb-2">
                  {sections[activeSection].title}
                </h3>
                <h2 className="text-xs md:text-sm font-medium text-gray-600 tracking-wider">
                  {sections[activeSection].subtitle}
                </h2>
              </div>

              {/* Large Pillar */}
              <div className="mb-8 lg:mb-12">
                <img src="/assets/pillar.png" alt="pillar" />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden lg:flex items-center gap-4 self-center">
              <button
                onClick={prevSection}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={nextSection}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Right Side - Description and Three Pillars */}
            <div className="flex-1 lg:max-w-2xl">
              {/* Description Text */}
              <div className="mb-12 lg:mb-16">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {sections[activeSection].description}
                </p>
              </div>

              {/* Three Pillars with Labels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                {sections.slice(1).map((section, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4">
                      <img src="/assets/pillar.png" alt="pillar" />
                    </div>
                    <h4 className="text-xs font-medium text-gray-600 tracking-wider mb-1">
                      {section.title}
                    </h4>
                    <h4 className="text-xs font-medium text-gray-600 tracking-wider">
                      {section.subtitle}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex lg:hidden justify-center mt-8 gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
