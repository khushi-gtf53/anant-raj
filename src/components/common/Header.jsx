import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Header = () => {
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user is at top
      setIsAtTop(currentScrollY === 0);

      // Show fixed header only when scrolling up and not at the top
      if (currentScrollY < lastScrollY && currentScrollY !== 0) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerContent = (
    <header
      className={`w-full transition-all duration-300 ease-in-out ${
        showFixedHeader ? "fixed top-0 z-[100]" : "relative"
      } flex justify-between items-center px-[20px] lg:px-[100px] py-3 ${
        isAtTop
          ? "bg-transparent text-white"
          : showFixedHeader
          ? "bg-white text-black shadow-md"
          : "text-white"
      }`}
    >
      <img
        src={
          isAtTop || !showFixedHeader
            ? "./assets/white-anant.png"
            : "./assets/footer-logo-1.png"
        }
        alt="Anant Raj Limited Logo"
        className={showFixedHeader ? "h-[55px]" : "h-[55px] lg:h-[75px]"}
      />
      <nav className="flex space-x-6">
        {["About Us", "Projects", "Investors", "CSR"].map((item) => (
          <a
            key={item}
            href="#"
            className={`hover:text-gray-300 lg:block hidden tracking-[1.2px] font-[400] ${
              !isAtTop && showFixedHeader ? "text-black text-[15px]" : ""
            }`}
          >
            {item}
          </a>
        ))}
        <button
          className={`relative w-6 h-6 hover:text-gray-300 ${
            !isAtTop && showFixedHeader ? "text-black text-[15px]" : ""
          }`}
        >
          <img
            src={
              isAtTop || !showFixedHeader
                ? "./assets/hamburger.png"
                : "./assets/black-hamburger.png"
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
