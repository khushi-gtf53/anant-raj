import { useState, useRef, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Lightbox } from "yet-another-react-lightbox";
import gsap from "gsap";
import "yet-another-react-lightbox/styles.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/**

 * @param {Array} tabs - 

 */
const PlatterProjects = ({ tabs = [] }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);
    const prev = useRef(null);
    const next = useRef(null);

    const renderProject = (project) => (
        <div className="grid grid-cols-12 gap-4">
            {/* Left: Big Slider */}
            <div className="col-span-7">
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    speed={600}
                    centeredSlides={false}
                    allowTouchMove={true}
                    className="platter_slider overflow-hidden w-full h-[65vh]"
                    navigation={{
                        nextEl: ".banner-button-next",
                        prevEl: ".banner-button-prev",
                    }}
                >
                    {project.slides.map((imgSrc, index) => (
                        <SwiperSlide
                            key={index}
                            className="project_img !w-[720px] !h-[450px]"
                            onClick={() => {
                                setLightboxSlides(
                                    project.slides.map((src) => ({ src }))
                                );
                                setOpenIndex(index);
                                setLightboxOpen(true);
                            }}
                        >
                            <img
                                src={imgSrc}
                                alt={`Slide ${index + 1}`}
                                className="w-[720px] h-[450px] object-cover cursor-pointer"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="viewall uppercase tracking-wider cursor-pointer -mt-10">
                    View All List And Search
                </div>
            </div>

            {/* Middle: Project Info */}
            <div className="col-span-3">
                <div className="project_info w-full h-[450px] flex flex-col justify-between items-end">
                    <div className="flex flex-col items-end gap-2">
                        <div className="project_name uppercase font-sangbleu tracking-wider">
                            {project.name}
                        </div>
                        <div className="project_location uppercase">
                            {project.location}
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="project_typology tracking-wider uppercase">
                            {project.typology}
                        </div>
                        <div className="project_status tracking-wider uppercase">
                            {project.status}
                        </div>
                        <div className="download py-2 mt-5 border-y text-center uppercase text-primaryblue font-bold">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Explore Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Thumbnail Slider */}
            <div className="col-span-2">
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    speed={600}
                    centeredSlides={false}
                    allowTouchMove={true}
                    initialSlide={1}
                    className="project_img"
                    navigation={{
                        nextEl: ".banner-button-next",
                        prevEl: ".banner-button-prev",
                    }}
                >
                    {project.slides.map((imgSrc, index) => (
                        <SwiperSlide
                            key={index}
                            className="project_img !flex !justify-end w-full"
                            onClick={() => {
                                setLightboxSlides(
                                    project.slides.map((src) => ({ src }))
                                );
                                setOpenIndex(index);
                                setLightboxOpen(true);
                            }}
                        >
                            <img
                                src={imgSrc}
                                alt={`Thumb ${index + 1}`}
                                className="w-[140px] h-[450px] object-cover cursor-pointer"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="navigation mt-2 relative z-30">
                    <div className="opacity-70 flex gap-2 justify-end items-center">
                        <div ref={prev} className="banner-button-prev cursor-pointer">
                            <IoIosArrowRoundBack size={40} />
                        </div>
                        <div ref={next} className="banner-button-next cursor-pointer">
                            <IoIosArrowRoundForward size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTab = (tab) => {
        const isOpen = activeTab === tab.key;
        const contentRef = useRef(null);

        useEffect(() => {
            if (contentRef.current) {
                if (isOpen) {
                    gsap.fromTo(
                        contentRef.current,
                        { height: 0, autoAlpha: 0 },
                        {
                            height: "auto",
                            autoAlpha: 1,
                            duration: 0.6,
                            ease: "power2.out",
                            clearProps: "height",
                        }
                    );
                } else {
                    gsap.to(contentRef.current, {
                        height: 0,
                        autoAlpha: 0,
                        duration: 0.4,
                        ease: "power2.in",
                    });
                }
            }
        }, [isOpen]);

        return (
            <div className="mb-10" key={tab.key}>
                {/* Tab Header */}
                <div
                    className="top_nav cursor-pointer py-5 flex items-center font-sangbleu uppercase"
                    onClick={() => setActiveTab(isOpen ? "" : tab.key)}
                >
                    <div className="w-[25%]">
                        <h3 className="text-lg tracking-wider">{tab.label}</h3>
                    </div>
                    <div className="w-[65%] h-[1px] bg-black" />
                    <div className="w-[10%] flex justify-center">
                        {isOpen ? <SlArrowUp size={30} /> : <SlArrowDown size={30} />}
                    </div>
                </div>

                {/* Tab Content */}
                <div
                    ref={contentRef}
                    style={{ overflow: "hidden", height: 0, opacity: 0 }}
                    className="highlights_section w-full p-10 relative"
                >
                    {tab.projects.map((project, i) => (
                        <div key={i} className="mb-16">
                            {renderProject(project)}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <section id="projects" className="platter_projects relative w-full px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-[#FBF6F6]">
                {tabs.map((tab) => renderTab(tab))}
            </section>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxSlides}
                index={openIndex}
            />
        </>
    );
};

export default PlatterProjects;
