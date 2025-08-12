import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true); // Controls header visibility
  const [isAtTop, setIsAtTop] = useState(true); // Tracks if at extreme top
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set if at extreme top (within 10px to prevent jitter)
      setIsAtTop(currentScrollY <= 10);

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowHeader(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setShowHeader(true); // Show on scroll up or at top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Find portal target with error handling
  const portalTarget =
    typeof document !== "undefined"
      ? document.getElementById("header-portal") || document.body
      : document.body;

  const headerContent = (
    <header
      className={`w-full transition-all duration-300 ease-in-out ${
        showHeader
          ? "fixed top-0 z-[100] translate-y-0"
          : "fixed top-0 z-[100] -translate-y-full"
      } flex justify-between items-center px-[20px] lg:px-[100px] py-3 ${
        isAtTop && showHeader
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <img
        src={
          isAtTop && showHeader
            ? "/assets/white-anant.png"
            : "/assets/footer-logo-1.png"
        }
        alt="Anant Raj Limited Logo"
        className={`h-[55px] ${isAtTop ? "lg:h-[75px]" : ""}`}
        onError={(e) => {
          console.error("Failed to load logo image");
          e.target.src = "/assets/fallback-logo.png";
        }}
      />
      <nav className="flex space-x-6 items-center">
        {["About Us", "Projects", "Investors", "CSR"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={`hover:text-gray-300 lg:block hidden tracking-[1.2px] font-[400] text-[15px] ${
              isAtTop && showHeader ? "text-white" : "text-black"
            }`}
          >
            {item}
          </a>
        ))}
        <button
          className={`relative w-6 h-6 hover:text-gray-300 ${
            isAtTop && showHeader ? "text-white" : "text-black"
          }`}
          aria-label="Menu"
        >
          <img
            src={
              isAtTop && showHeader
                ? "/assets/hamburger.png"
                : "/assets/black-hamburger.png"
            }
            alt="Menu"
            className="w-full h-full"
            onError={(e) => {
              console.error("Failed to load hamburger image");
              e.target.src = "/assets/fallback-hamburger.png";
            }}
          />
        </button>
      </nav>
    </header>
  );

  return portalTarget ? createPortal(headerContent, portalTarget) : null;
};

export default Header;
