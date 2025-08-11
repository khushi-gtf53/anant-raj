import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isExploreVisible, setIsExploreVisible] = useState(false);
  const exploreLinkRef = useRef(null);

  const handleClickOnExplore = () => {
    setIsExploreOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!exploreLinkRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setIsExploreVisible(() => entries[0].isIntersecting);
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px", // No extra margin
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(exploreLinkRef.current);

    return () => {
      if (exploreLinkRef.current) {
        observer.unobserve(exploreLinkRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log(isExploreVisible, "isExploreBisible state");
  }, [isExploreVisible]);

  return (
    <footer>
      {/* <div
        className={`${
          isExploreVisible ? "hidden" : "flex"
        }  justify-between  text-[14px] tracking-[1px] px-[100px] py-3 fixed bottom-0  w-full z-[99] text-black bg-white`}
      >
        <a href="#" className="hover:text-gray-600">
          RESIDENTIAL
        </a>
        <a href="#" className="hover:text-gray-600">
          COMMERCIAL
        </a>
        <a href="#" className="hover:text-gray-600">
          HOSPITALITY
        </a>
        <a href="#" className="hover:text-gray-600">
          DATA CENTERS
        </a>
      </div> */}

      <div ref={exploreLinkRef} className="px-[20px] lg:px-[100px] py-[70px]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="basis-[40%] lg:basis-[80%] border-b-[1px] border-solid border-black"></div>
          <button
            className="uppercase cursor-pointer basis-[60%] lg:basis-[20%] justify-end tracking-[1px] text-[13px] lg:text-[14px] flex items-center"
            onClick={handleClickOnExplore}
          >
            Explore More Links
            <img
              src="./assets/down-arrow.png"
              className={`h-[18px] ml-[6px] object-cover ${
                isExploreOpen ? "rotate-[180deg]" : ""
              }`}
              alt="down-arrow"
            />
          </button>
        </div>

        <div className="mt-[40px]">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-start">
            {/* Copyright Section */}
            <div className="hidden lg:flex flex-col space-y-1 text-[13px] lg:text-[16x]">
              <span>Copyright © 2025</span>
              <span>Anant Raj Limited</span>
            </div>

            {/* Residential & Commercial */}
            <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">&gt;</span>
                Residential
              </span>
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">&gt;</span>
                Commercial
              </span>
            </div>

            {/* Data Centers & Hospitality */}
            <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">&gt;</span>
                Data Centers
              </span>
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">&gt;</span>
                Hospitality
              </span>
            </div>

            {/* About Us & Investors */}
            <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">&gt;</span>
                About Us
              </span>
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">&gt;</span>
                Investors
              </span>
            </div>

            {isExploreOpen && (
              <>
                {/* Career & EMI Calculator */}
                <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    Career
                  </span>
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    EMI Calculator
                  </span>
                </div>

                {/* Blogs & Contact us */}
                <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    Blogs
                  </span>
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    Contact us
                  </span>
                </div>

                {/* Gallery & Testimonials */}
                <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    Gallery
                  </span>
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    Testimonials
                  </span>
                </div>

                {/* Home Loans & Tax Benefits */}
                <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    Home Loans
                  </span>
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    Tax Benefits
                  </span>
                </div>

                {/* NRI Corner & NRI Investors */}
                <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    NRI Corner
                  </span>
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    NRI Investors
                  </span>
                </div>

                {/* CSR & FAQ */}
                <div className="flex flex-col space-y-2 text-[13px] lg:text-[16x]">
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    CSR
                  </span>
                  <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                    <span className="mr-2">&gt;</span>
                    FAQ
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#FBF6F6] px-[20px] lg:px-[100px] pt-6 pb-6 lg:pb-6">
        {/* Main Content Section */}
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-[35px] lg:space-y-0">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <img
                src="./assets/footer-logo-1.png"
                className="h-[60px] lg:h-[100px] object-contain"
                alt="logo"
              />
            </div>

            {/* Center Section - Quote */}
            <div className="flex-1 text-center lg:px-8">
              <blockquote>
                <p className="text-[16px]  font-[400] tracking-wide leading-relaxed">
                  " WE PLEDGE TO UPHOLD AND CONTINUE
                </p>
                <p className="text-[16px] font-bold tracking-wide leading-relaxed mt-1">
                  YOUR LEGACY IN THE SAME SPIRIT "
                </p>
              </blockquote>
            </div>

            {/* Right Section - Portrait */}
            <div className="flex-shrink-0">
              <img
                src="./assets/img-1.png"
                alt="Portrait"
                className="w-full h-[130px] lg:h-[157px] object-contain filter grayscale"
              />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-5">
          <hr className="border-gray-300" />
        </div>

        {/* Bottom Section */}

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Left - Phone Number */}
          <div className="flex-shrink-0">
            <span className=" font-medium text-sm tracking-wide">
              <span>+91-11-43034400 </span>
              <span className="inline-block ml-[18px]">+91 89298 00666</span>
            </span>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex space-x-6">
            {/* Facebook */}
            <NavLink to="https://www.facebook.com/AnantRajLimited2020">
              {" "}
              <img
                src="./assets/facebook.png"
                className="object-contain h-[24px]"
                alt="facebook"
              />
            </NavLink>

            {/* Instagram */}
            <NavLink to="https://www.instagram.com/anantrajlimited/?hl=en">
              <img
                src="./assets/instagram.png"
                className="object-contain h-[24px]"
                alt="ig"
              />
            </NavLink>

            <NavLink to="https://x.com/anantrajlimited">
              {/* Twitter/X */}
              <img
                src="./assets/x.png"
                className="object-contain h-[24px]"
                alt="ig"
              />{" "}
            </NavLink>

            {/* LinkedIn */}
            <NavLink to="https://www.linkedin.com/company/anantrajltd/?originalSubdomain=in">
              {" "}
              <img
                src="./assets/linkedin.png"
                className="object-contain h-[24px]"
                alt="linkedin"
              />{" "}
            </NavLink>

            <NavLink to="https://www.youtube.com/@ARLGurugram">
              {" "}
              {/* YouTube */}
              <img
                src="./assets/youtube.png"
                className="object-contain h-[24px]"
                alt="linkedin"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex bg-white flex-col px-[20px] lg:px-[100px] text-[12px] space-y-3 lg:space-y-0 lg:flex-row justify-between items-center  py-[10px]">
        <p className="lg:hidden  text-[16px] tracking-[1px]">
          Copyright © 2025 Anant Raj Ltd
        </p>
        <p className="tracking-[1px] text-[12px]">
          Crafted by GTF Technologies
        </p>

        <div className="flex text-[12px]">
          <p>
            <span>Privacy Policy </span>
            <span className="mx-[4px]"> |</span>
            <span>Disclaimer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
