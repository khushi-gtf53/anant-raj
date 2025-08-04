import React, { useState, useEffect, useRef } from "react";

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
      <div
        className={`${
          isExploreVisible ? "hidden" : "flex"
        }  justify-between text-[14px] tracking-[1px] px-[80px] py-3 fixed bottom-0  w-full z-[99] text-black bg-white`}
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
      </div>

      <div ref={exploreLinkRef} className="px-[80px] py-[70px]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="basis-[80%] border-b-[1px] border-solid border-black"></div>
          <button
            className="uppercase cursor-pointer basis-[20%] justify-end tracking-[1px] text-[14px] flex items-center"
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
          <ul className="flex flex-col lg:flex-row justify-between items-start lg:items-start space-y-6 lg:space-y-0">
            {/* Copyright Section */}
            <li className="flex flex-col space-y-1 text-sm ">
              <span>Copyright © 2025</span>
              <span className="mt-[6px]">Anant Raj Limited</span>
            </li>

            {/* Residential & Commercial */}
            <li className="flex flex-col space-y-2 text-sm ">
              <span className="hover:text-gray-800 mb-[10px] transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">></span>
                Residential
              </span>
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">></span>
                Commercial
              </span>
            </li>

            {/* Data Centers & Hospitality */}
            <li className="flex flex-col space-y-2 text-sm ">
              <span className="hover:text-gray-800 mb-[10px] transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">></span>
                Data Centers
              </span>
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">></span>
                Hospitality
              </span>
            </li>

            {/* About Us & Investors */}
            <li className="flex flex-col space-y-2 text-sm ">
              <span className="hover:text-gray-800 mb-[10px] transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">></span>
                About Us
              </span>
              <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                <span className="mr-2">></span>
                Investors
              </span>
            </li>
          </ul>
        </div>
        {isExploreOpen && (
          <div className="mt-[20px]">
            <ul className="flex flex-col lg:flex-row justify-between items-start lg:items-start space-y-6 lg:space-y-0">
              {/* Copyright Section */}
              <li className="flex flex-col space-y-1 text-sm ">
                <span>Copyright © 2025</span>
                <span className="mt-[6px]">Anant Raj Limited</span>
              </li>
              {/* Residential & Commercial */}
              <li className="flex flex-col space-y-2 text-sm ">
                <span className="hover:text-gray-800 mb-[10px] transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="mr-2">></span>
                  Residential
                </span>
                <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="mr-2">></span>
                  Commercial
                </span>
              </li>

              {/* Data Centers & Hospitality */}
              <li className="flex flex-col space-y-2 text-sm ">
                <span className="hover:text-gray-800 mb-[10px] transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="mr-2">></span>
                  Data Centers
                </span>
                <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="mr-2">></span>
                  Hospitality
                </span>
              </li>

              {/* About Us & Investors */}
              <li className="flex flex-col space-y-2 text-sm ">
                <span className="hover:text-gray-800 mb-[10px] transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="mr-2">></span>
                  About Us
                </span>
                <span className="hover:text-gray-800 transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="mr-2">></span>
                  Investors
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="bg-[#FBF6F6] px-[80px] py-12">
        {/* Main Content Section */}
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <img
                src="./assets/footer-logo.png"
                className="h-[100px] object-contain"
                alt="logo"
              />
            </div>

            {/* Center Section - Quote */}
            <div className="flex-1 text-center px-8">
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
              <div className="w-32 h-32 object-cover overflow-hidden bg-gray-200">
                <img
                  src="./assets/anant-raj.png"
                  alt="Portrait"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className=" mt-8 mb-8">
          <hr className="border-gray-300" />
        </div>

        {/* Bottom Section */}
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Left - Phone Number */}
            <div className="flex-shrink-0">
              <span className=" font-medium text-sm tracking-wide">
                +91-11-43034400
              </span>
            </div>

            {/* Center - Credits */}
            <div className="flex-1 text-center">
              <span className=" text-sm tracking-wide">
                CRAFTED BY GTF TECHNOLOGIES
              </span>
            </div>

            {/* Right - Social Media Icons */}
            <div className="flex space-x-3">
              {/* Facebook */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>

              {/* Instagram */}
              <img
                src="./assets/instagram.png"
                className="object-contain h-[33px]"
                alt="ig"
              />

              {/* Twitter/X */}
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* LinkedIn */}
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>

              {/* YouTube */}
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
