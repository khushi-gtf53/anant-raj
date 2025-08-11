import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerContent = (
    <header
      className={`flex fixed z-[100] top-0 w-full text-white justify-between items-center px-[20px] lg:px-[100px] py-3 ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <img
        src={
          isScrolled ? "./assets/footer-logo-1.png" : "./assets/white-anant.png"
        }
        alt="Anant Raj Limited Logo"
        className={isScrolled ? "h-[55px]" : "h-[55px] lg:h-[75px]"}
      />
      <nav className="flex space-x-6">
        <a
          href="#"
          className={`hover:text-gray-300 lg:block hidden tracking-[1.2px] font-[400] ${
            isScrolled ? "text-black text-[15px]" : ""
          }`}
        >
          About Us
        </a>
        <a
          href="#"
          className={`hover:text-gray-300 lg:block hidden tracking-[1.2px] font-[400] ${
            isScrolled ? "text-black text-[15px]" : ""
          }`}
        >
          Careers
        </a>
        <a
          href="#"
          className={`hover:text-gray-300 lg:block hidden tracking-[1.2px] font-[400] ${
            isScrolled ? "text-black text-[15px]" : ""
          }`}
        >
          Investors
        </a>
        <a
          href="#"
          className={`hover:text-gray-300 lg:block hidden tracking-[1.2px] font-[400] ${
            isScrolled ? "text-black text-[15px]" : ""
          }`}
        >
          CSR
        </a>
        <button
          className={`relative w-6 h-6 hover:text-gray-300 ${
            isScrolled ? "text-black text-[15px]" : ""
          }`}
        >
          <img
            src={
              isScrolled
                ? "./assets/black-hamburger.png"
                : "./assets/hamburger.png"
            }
            alt="hamburger"
          />
        </button>
      </nav>
    </header>
  );

  return createPortal(
    headerContent,
    document.getElementById("header-portal") || document.body
  );
};

export default Header;
