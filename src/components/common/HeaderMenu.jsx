import { useState } from "react";
import { SlArrowDown, SlArrowUp, SlClose } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

const HeaderMenu = ({ isOpen, onClose }) => {
    const [activeNav, setActiveNav] = useState("residential");
    const [showFooterNav, setShowFooterNav] = useState(false);


    // Don't render if not open
    if (!isOpen) return null;


    const navItems = [
        {
            nav: "residential",
            navLink: "#",
            img: "/assets/headermenu/4.jpg",
        },
        {
            nav: "commercial",
            navLink: "#",
            img: "/assets/headermenu/2.jpg",
        },
        {
            nav: "data centers",
            navLink: "#",
            img: "/assets/headermenu/3.jpg",
        },
        {
            nav: "hospitality",
            navLink: "#",
            img: "/assets/headermenu/1.jpg",
        },
    ];

    const footerNavItems = [
        [
            { label: "About Us", link: "#" },
            { label: "CSR", link: "#" },
            { label: "Tax Benefits", link: "#" },
        ],
        [
            { label: "Career", link: "#" },
            { label: "Testimonials", link: "#" },
            { label: "Property Investment", link: "#" },
        ],
        [
            { label: "Blogs", link: "#" },
            { label: "Gallery", link: "#" },
        ],
        [
            { label: "EMI calculator", link: "#" },
            { label: "investors", link: "#" },
        ],
        [
            { label: "NRI corner", link: "#" },
            { label: "home loans", link: "#" },
        ],
    ];

    return (
        <div className={`headermenu fixed top-0 left-0 w-full h-screen z-[99999] bg-[#FBF6F6] transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
            <div className="max-w-[90%] sm:max-w-[80%] mx-auto w-full h-full">
                {/* Top Nav */}
                <div className="top-nav border-b border-black py-5 flex justify-between items-center">
                    <img
                        src="/assets/footer-logo-1.png"
                        alt="logo"
                        className="h-[70px] lg:h-[75px]"
                    />
                    <div
                        className="close tracking-widest  flex justify-between items-center gap-3 cursor-pointer"
                        onClick={onClose}
                    >
                        Close Menu <SlClose size={20} />
                    </div>
                </div>

                {/* Middle Nav */}
                {!showFooterNav && (
                    <div className="middelnav py-5 sm:border-b  border-black">
                        <div className="grid sm:grid-cols-2">
                            <div className="navItems flex flex-col justify-evenly items-start font-sangbleu space-y-6 sm:space-y-0">
                                {navItems.map((nav, i) => (
                                    <ul key={i} className="relative flex justify-between items-center w-full">
                                        <li
                                            className="uppercase text-primaryblue text-xl py-3 sm:py-0 sm:text-2xl cursor-pointer"
                                            onMouseEnter={() => setActiveNav(nav.nav)}
                                        >
                                            <Link to={nav.navLink}>{nav.nav}</Link>
                                        </li>


                                        {activeNav === nav.nav && (
                                            <div className="hidden sm:flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-black "></span>
                                                <span className="h-[1px] w-[300px] bg-black"></span>
                                            </div>
                                        )}
                                    </ul>
                                ))}
                            </div>

                            <div className="hidden navImages sm:flex justify-center items-center">
                                <img
                                    src={navItems.find((item) => item.nav === activeNav)?.img}
                                    alt="img"
                                    className="w-[600px] h-[350px] object-cover transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="divider sm:hidden my-4">
                    <div className="flex justify-between items-center">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setShowFooterNav((prev) => !prev)}
                        >
                            <div className="w-9 h-9 border flex justify-center items-center border-black rounded-full bg-transparent">
                                {showFooterNav ? <SlArrowDown size={14} /> : <SlArrowUp size={14} />}
                            </div>
                            <div className="h-[1px] w-[100px] bg-black"></div>
                        </div>
                        <span className="font-sangbleu uppercase text-primaryblue tracking-[0.2rem]">
                            {showFooterNav ? "close" : "explore more"}
                        </span>
                    </div>
                </div>


                {/* Footer Nav */}
                {showFooterNav && (
                    <div className="footernav block sm:hidden py-5">
                        <div className="grid grid-cols-2 w-full justify-items-stretch">
                            {footerNavItems.map((column, i) => (
                                <ul
                                    key={i}
                                    className={`mt-3 text-[15px] text-left`}
                                >
                                    {column.map((item, j) => (
                                        <li
                                            key={j}
                                            className="tracking-widest py-2 capitalize cursor-pointer"
                                        >
                                            <Link to={item.link}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                )}

                <div className="footernav hidden sm:block sm:py-5">
                    <div className="grid sm:grid-cols-5 w-full justify-items-stretch">
                        {footerNavItems.map((column, i) => (
                            <ul
                                key={i}
                                className={`mt-3 text-[15px] sm:text-[16px] ${i === 0 ? "text-left" : i === 4 ? "text-right" : "text-left sm:ps-12"}`}
                            >
                                {column.map((item, j) => (
                                    <li
                                        key={j}
                                        className="tracking-widest py-2 capitalize cursor-pointer"
                                    >
                                        <Link to={item.link}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>


                <div className="contact_details sm:hidden">
                    <div className="phone space-y-4 my-7 text-[14px]">
                        <div>
                            <a href="tel:">+91-11-43034400</a>
                        </div>
                        <div>
                            <a href="tel:">+91 8929800666</a>
                        </div>
                    </div>

                    <div className="socialLinks ">
                        <div className="flex space-x-6">
                            {/* Facebook */}
                            <NavLink to="https://www.facebook.com/AnantRajLimited2020">
                                <img
                                    src="./assets/facebook.png"
                                    className="object-contain h-[20px]"
                                    alt="facebook"
                                />
                            </NavLink>

                            {/* Instagram */}
                            <NavLink to="https://www.instagram.com/anantrajlimited/?hl=en">
                                <img
                                    src="./assets/instagram.png"
                                    className="object-contain h-[20px]"
                                    alt="ig"
                                />
                            </NavLink>

                            <NavLink to="https://x.com/anantrajlimited">
                                {/* Twitter/X */}
                                <img
                                    src="./assets/x.png"
                                    className="object-contain h-[20px]"
                                    alt="ig"
                                />
                            </NavLink>

                            {/* LinkedIn */}
                            <NavLink to="https://www.linkedin.com/company/anantrajltd/?originalSubdomain=in">
                                <img
                                    src="./assets/linkedin.png"
                                    className="object-contain h-[20px]"
                                    alt="linkedin"
                                />
                            </NavLink>

                            <NavLink to="https://www.youtube.com/@ARLGurugram">
                                {/* YouTube */}
                                <img
                                    src="./assets/youtube.png"
                                    className="object-contain h-[20px]"
                                    alt="linkedin"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeaderMenu;
