import { useState } from "react";
import { Link } from "react-scroll";

const CommonHeroSec = ({ ObjData }) => {
  const [activeTab, setActiveTab] = useState("group");
  const [visibleTabs, setVisibleTabs] = useState([0, 1, 2]);
  const { title, heading, subtitle, imgUrl, linkTo, tabs } = ObjData;

  const handleSlider = (direction) => {
    const totalTabs = tabs.length;
    setVisibleTabs((prevState) => {
      const newVisibleTabs = direction === "next"
        ? [
            (prevState[0] + 1) % totalTabs,
            (prevState[1] + 1) % totalTabs,
            (prevState[2] + 1) % totalTabs,
          ]
        : [
            (prevState[0] - 1 + totalTabs) % totalTabs,
            (prevState[1] - 1 + totalTabs) % totalTabs,
            (prevState[2] - 1 + totalTabs) % totalTabs,
          ];
      return newVisibleTabs;
    });
  };

  const isPrevDisabled = visibleTabs[0] === 0;
  const isNextDisabled = visibleTabs[2] === tabs?.length - 1;

  return (
    <section id="group">
      <div className="bg-[#FBF6F6] mt-[40px] px-[20px] lg:p-[100px] pt-[100px] pb-[40px]">
        <div className="sm:hidden mb-4 items-center">
          <h3 className="text-black uppercase tracking-wider basis-[10%]">{title}</h3>
          <div className="h-[0.1px] hidden sm:block bg-black basis-[90%]"></div>
        </div>

        <nav className="hidden sm:flex space-x-8 justify-end">
          {tabs?.map((tab, i) => (
            <Link
              key={i}
              to={tab.tablink}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveTab(tab.tablink)}
            >
              <button
                className={`${
                  activeTab === tab.tablink
                    ? "text-primaryblue font-semibold opacity-100"
                    : "opacity-[0.4]"
                } capitalize cursor-pointer`}
              >
                {tab.tabname}
              </button>
            </Link>
          ))}
        </nav>

        <nav className="flex sm:hidden border-y py-2 sm:py-0 sm:border-0 border-black space-x-10 sm:space-x-8 sm:justify-end sm:order-1">
          {tabs?.slice(visibleTabs[0], visibleTabs[2] + 1).map((tab, i) => (
            <Link
              key={i}
              to={tab.tablink}
              smooth={true}
              duration={500}
              spy={true}
              className="whitespace-nowrap flex-1"
              onSetActive={() => setActiveTab(tab.tablink)}
            >
              <button
                className={`${
                i==tabs.length-1?"text-right":""}
                  ${
                  activeTab === tab.tablink
                    ? "text-primaryblue font-semibold opacity-100"
                    : "opacity-[0.4]"
                } capitalize cursor-pointer lg:text-[16px] text-[14px] `}
              >
                {tab.tabname}
              </button>
            </Link>
          ))}
        </nav>

      {tabs.length>3&&  <div className="nav_buttons sm:hidden mt-4 flex justify-between">
          <button
            className={`w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !isPrevDisabled && handleSlider("prev")}
            disabled={isPrevDisabled}
          >
            <img src="./assets/right-arrow.png" alt="Previous" className="h-5 w-5 rotate-180" />
          </button>
          <button
            className={`w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !isNextDisabled && handleSlider("next")}
            disabled={isNextDisabled}
          >
            <img src="./assets/right-arrow.png" alt="Next" className="h-5 w-5" />
          </button>
        </div>}

        <div className="sm:flex hidden justify-between sm:flex-wrap items-center">
          <h3 className="text-black uppercase tracking-wider basis-[10%]">{title}</h3>
          <div className="h-[0.1px] hidden sm:block bg-black basis-[90%]"></div>
        </div>

        <div className="flex mt-[30px] lg:mt-[55px] flex-col md:flex-row sm:items-end justify-between">
          <h1 className="text-3xl sm:text-6xl mb-3 sm:mb-0 font-light text-primaryblue font-sangbleu">{heading}</h1>
          <p className="font-lato text-[14px] text-justify font-[400] tracking-[1px] leading-[27px] max-w-[45%]">{subtitle}</p>
        </div>

        <Link to={linkTo} smooth={true} duration={500}>
          <div className="mt-10 flex items-center space-x-2 text-primaryblue cursor-pointer hover:underline">
            <span className="uppercase tracking-wider text-sm font-medium">Discover More</span>
            <img src="/assets/down-arrow-1.png" className="h-[20px] object-contain" alt="arrow" />
          </div>
        </Link>
      </div>
      <img src={imgUrl} alt="aboutus" />
    </section>
  );
};

export default CommonHeroSec;