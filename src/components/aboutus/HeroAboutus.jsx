import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const HeroAboutus = () => {
  const [activeTab, setActiveTab] = useState("group");
  const [visibleTabs, setVisibleTabs] = useState([0, 1, 2]); 
  
  const tabs = [
    { tabname: "our group", tablink: "group" },
    { tabname: "mission & vision", tablink: "missionvision" },
    { tabname: "our story", tablink: "story" },
    { tabname: "brand pillars", tablink: "brandpillars" },
    { tabname: "team", tablink: "team" },
    { tabname: "testimonials", tablink: "testimonials" },
  ];

  const handleSlider = (direction) => {
    const totalTabs = tabs.length;
    setVisibleTabs((prevState) => {
      let newVisibleTabs;
      if (direction === "next") {
        newVisibleTabs = [
          (prevState[0] + 1) % totalTabs,
          (prevState[1] + 1) % totalTabs,
          (prevState[2] + 1) % totalTabs,
        ];
      } else {
        newVisibleTabs = [
          (prevState[0] - 1 + totalTabs) % totalTabs,
          (prevState[1] - 1 + totalTabs) % totalTabs,
          (prevState[2] - 1 + totalTabs) % totalTabs,
        ];
      }
      return newVisibleTabs;
    });
  };

  const isPrevDisabled = visibleTabs[0] === 0; 
  const isNextDisabled = visibleTabs[2] === tabs.length - 1; 

  return (
    <section id="group">
      <div className="bg-[#FBF6F6] mt-[40px] px-[20px] lg:p-[100px] pt-[100px] pb-[40px]">
        {/* About Us Section (For Mobile First) */}
        <div className="sm:hidden mb-4 items-center">
          <h3 className="text-black uppercase tracking-wider basis-[10%]">About Us</h3>
          <div className="h-[0.1px] hidden sm:block bg-black basis-[90%]"></div>
        </div>

         <nav className="hidden sm:flex space-x-8 justify-end">
            {tabs.map((tab, i) => (
              <Link
                key={i}
                to={tab.tablink}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => setActiveTab(tab.tablink)}
              >
                <button
                  className={`${activeTab === tab.tablink
                    ? "text-primaryblue font-semibold opacity-100"
                    : "opacity-[0.4]"
                    } capitalize cursor-pointer`}
                >
                  {tab.tabname}
                </button>
              </Link>
            ))}
          </nav>

        <nav className="flex sm:hidden  border-y py-2 sm:py-0 sm:border-0 border-black space-x-10 sm:space-x-8 sm:justify-end sm:order-1">
          {tabs.slice(visibleTabs[0], visibleTabs[2] + 1).map((tab, i) => (
            <Link
              key={i}
              to={tab.tablink}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveTab(tab.tablink)}
            >
              <button
                className={`${activeTab === tab.tablink
                  ? "text-primaryblue font-semibold opacity-100"
                  : "opacity-[0.4]"
                  } capitalize cursor-pointer`}
              >
                {tab.tabname}
              </button>
            </Link>
          ))}
        </nav>

        {/* Prev and Next Buttons (For Mobile View Only) */}
        <div className="nav_buttons sm:hidden mt-4 flex justify-between">
          <button
            className={`w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => !isPrevDisabled && handleSlider("prev")}
            disabled={isPrevDisabled}
          >
            <img
              src="./assets/right-arrow.png"
              alt="Previous"
              className="h-5 w-5 rotate-180"
            />
          </button>

          <button
            className={`w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => !isNextDisabled && handleSlider("next")}
            disabled={isNextDisabled}
          >
            <img
              src="./assets/right-arrow.png"
              alt="Next"
              className="h-5 w-5"
            />
          </button>
        </div>

        {/* Desktop Navigation (No Slider, Just Display All Tabs) */}
        <div className="sm:flex hidden justify-between sm:flex-wrap items-center">
          <h3 className="text-black uppercase tracking-wider basis-[10%]">About Us</h3>
          <div className="h-[0.1px] hidden sm:block bg-black basis-[90%]"></div>
        </div>

         

        {/* Main Content */}
        <div className="flex mt-[55px] flex-col md:flex-row sm:items-center justify-between">
          <h1 className="text-3xl sm:text-6xl mb-3 sm:mb-0 font-light text-primaryblue font-sangbleu">
            Our Group
          </h1>
          <p className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">
            Founded in 1969, Anant Raj Limited carries a lineage that predates the  <br />
            formal birth of India’s real estate industry...
          </p>
        </div>

        {/* Discover More */}
        <Link to="discover" smooth={true} duration={500}>
          <div className="mt-10 flex items-center space-x-2 text-primaryblue cursor-pointer hover:underline">
            <span className="uppercase tracking-wider text-sm font-medium">
              Discover More
            </span>
            <img
              src="/assets/down-arrow-1.png"
              className="h-[20px] object-contain"
              alt="arrow"
            />
          </div>
        </Link>
      </div>

      <img src="/assets/about/hero/1.webp" alt="aboutus" />

      <div id="discover" className="px-[20px] lg:p-[100px] py-[40px]">
        <h3 className="text-primaryred font-sangbleu mb-[40px] uppercase text-left  tracking-[2px] leading-[30px] lg:leading-[40px] text-[12.5px] lg:text-[20px]">
          <span> Anant Raj Limited: Elevating Lifestyles</span>
          <span className="block"> Through Timeless Spaces</span>
        </h3>

        <p className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]">
         Founded in 1969, Anant Raj Limited carries a lineage that predates the formal birth of India’s real estate industry. Its name itself is a tribute to the founders’ parents, embedding respect, resilience, and responsibility into the very core of the brand. From early stewardship of land to decades of construction, Anant Raj has grown into a symbol of permanence and credibility, with over 21 million sq. ft. delivered across 300+ acres of owned land.
        </p>

        <p className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">
         Even as the world has changed, the essence of Anant Raj has remained untouched — a family institution that has passed down values and vision across four generations. More than a builder of structures, it has become a custodian of legacy, where heritage meets progress and every home reflects dignity, continuity, and timeless pride.

        </p>
      </div>
    </section>
  );
};

export default HeroAboutus;
