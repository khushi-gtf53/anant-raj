import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Header = () => {
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowFixedHeader(true);
      } else {
        // Scrolling down
        setShowFixedHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerContent = (
    <header
      className={`w-full text-white transition-all duration-300 ease-in-out ${
        showFixedHeader ? "fixed top-0 z-[100]" : "relative"
      } flex justify-between items-center px-[20px] lg:px-[100px] py-3 ${
        showFixedHeader ? "bg-white shadow-md" : ""
      }`}
    >
      <img
        src={
          showFixedHeader
            ? "./assets/footer-logo-1.png"
            : "./assets/white-anant.png"
        }
        alt="Anant Raj Limited Logo"
        className={showFixedHeader ? "h-[55px]" : "h-[55px] lg:h-[75px]"}
      />
      <nav className="flex space-x-6">
        {["About Us", "Careers", "Investors", "CSR"].map((item) => (
          <a
            key={item}
            href="#"
            className={`hover:text-gray-300 lg:block hidden tracking-[1.2px] font-[400] ${
              showFixedHeader ? "text-black text-[15px]" : ""
            }`}
          >
            {item}
          </a>
        ))}
        <button
          className={`relative w-6 h-6 hover:text-gray-300 ${
            showFixedHeader ? "text-black text-[15px]" : ""
          }`}
        >
          <img
            src={
              showFixedHeader
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
