import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import HeaderMenu from "./HeaderMenu";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true); // Controls header visibility
  const [isAtTop, setIsAtTop] = useState(true); // Tracks if at extreme top
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current location from React Router
  const [isAboutUs, setIsAboutUs] = useState(false);


  useEffect(() => {
    if (typeof window === "undefined") return;

    // Set true if NOT on home page ("/")
    const isNonHomePage = location.pathname !== "/";

    setIsAboutUs(isNonHomePage);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY <= 10);

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);




  // Find portal target with error handling
  const portalTarget =
    typeof document !== "undefined"
      ? document.getElementById("header-portal") || document.body
      : document.body;

  const headerContent = (
    <header
      className={`w-full transition-all duration-300 ease-in-out ${showHeader
        ? "fixed top-0 z-[100] translate-y-0"
        : "fixed top-0 z-[100] -translate-y-full"
        } flex justify-between items-center px-[20px] lg:px-[100px] py-3 ${isAboutUs || (!isAtTop && showHeader)
          ? "bg-[#FBF6F6] text-black"
          : isAtTop && showHeader
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-md"
        }`}
    >
      <NavLink to="/">
        {" "}
        <img
          src={
            isAboutUs || !isAtTop || !showHeader
              ? "/assets/footer-logo-1.png"
              : "/assets/white-anant.png"
          }
          alt="Anant Raj Limited Logo"
          className={`h-[70px] ${isAtTop ? "lg:h-[75px]" : ""}`}
          onError={(e) => {
            console.error("Failed to load logo image");
            e.target.src = "/assets/fallback-logo.png";
          }}
        />
      </NavLink>

      <nav className="flex space-x-6 items-center">
        {["About Us", "Projects", "Investors", "CSR", "Contact Us"].map(
          (item) => (
            <NavLink
              key={item}
              to={`${item.toLowerCase().replace(/\s+/g, "")}`}
              className={` lg:block hidden tracking-[1.2px] font-[400] text-[15px] ${isAboutUs || (!isAtTop && showHeader)
                ? "text-black"
                : isAtTop && showHeader && !isAboutUs
                  ? "text-white"
                  : "text-black"
                }`}
            >
              {item}
            </NavLink>
          )
        )}
        <button
          className={`relative w-6 h-6 hover:text-gray-300 ${isAboutUs || (!isAtTop && showHeader)
            ? "text-black"
            : isAtTop && showHeader && !isAboutUs
              ? "text-white"
              : "text-black"
            }`}
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={
              isAboutUs || !isAtTop || !showHeader
                ? "/assets/black-hamburger.png"
                : "/assets/hamburger.png"
            }
            alt="Menu"
            className="w-full h-full cursor-pointer"
            onError={(e) => {
              console.error("Failed to load hamburger image");
              e.target.src = "/assets/fallback-hamburger.png";
            }}
          />
        </button>
      </nav>
    </header>
  );
  return portalTarget ? (
    <>
      {createPortal(headerContent, portalTarget)}
      {createPortal(
        <HeaderMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />,
        portalTarget
      )}
    </>
  ) : null;
};

export default Header;
