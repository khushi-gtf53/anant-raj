import { useState, useRef, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Lightbox } from "yet-another-react-lightbox";
import gsap from "gsap";
import "yet-another-react-lightbox/styles.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CommonHeroSec from "../CommonHeroSec";
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
        <div className="">
            <div  className="flex flex-col">
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={ 'auto'}

                    speed={600}
                    spaceBetween={100}
                    centeredSlides={false}
                    allowTouchMove={true}
                    className="platter_slider overflow-hidden lg:order-[0] order-[1] w-full"
                    navigation={{
                        nextEl: ".banner-button-next",
                        prevEl: ".banner-button-prev",
                    }}
                     breakpoints= {{
                            320: {
                            slidesPerView: 1,
                            spaceBetween: 0
                            },
                             768: {
                            slidesPerView:'auto',
                            // spaceBetween: 20
                            },
                     }}
                >
                    {project.slides.map((imgSrc, index) => (
                        <SwiperSlide
                            key={index}
                            className="project_img swiper_slide_container"
                           
                        >
                            <div className="lg:flex gap-[30px]">
                            <img
                                src={imgSrc}
                                alt={`Slide ${index + 1}`}
                                className=" flex-1 lg:mb-[0] mb-[20px]  object-cover w-[100%] cursor-pointer"
                            />
                <div className="project_info flex  lg:gap-0 gap-[20px] flex-col justify-between lg:items-end">
                    <div className="flex flex-col lg:items-end gap-2">
                        <div className="project_name uppercase font-sangbleu tracking-wider">
                            {project.name}
                        </div>
                        <div className="project_location uppercase">
                            {project.location}
                        </div>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
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
                 </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-end lg:mt-[10px] lg:mb-0 mb-[10px]">
               <IoIosArrowRoundBack className="cursor-pointer banner-button-next text-[#8e8d8d]"  size={30} />
               <IoIosArrowRoundForward className="cursor-pointer banner-button-prev text-[#8e8d8d]"  size={30} />
               </div>
            </div>
 {/* <div className="viewall uppercase tracking-wider cursor-pointer -mt-10">
                    View All List And Search
                </div> */}
            {/* Right: Thumbnail Slider */}
           
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
            <div className="lg:mb-10 mb-[30px]" id={tab.key} key={tab.key}>
                {/* Tab Header */}
                <div
                    className="top_nav cursor-pointer py-[00px] lg:py-5 flex lg:gap-[0] gap-[15px]  font-sangbleu uppercase"
                    onClick={() => setActiveTab(isOpen ? "" : tab.key)}
                >
                    <div className="lg:w-[25%]">
                        <h3 className="lg:text-lg text-[14px] tracking-wider">{tab.label}</h3>
                    </div>
                    <div className="w-[65%] h-[1px] bg-black mt-[10px]" />
                    <div className="w-[10%] flex justify-center lg:mb-0 mb-[20px]">
                        {isOpen ? <SlArrowUp  className="lg:text-[30px] text-[20px]"  /> : <SlArrowDown className="lg:text-[30px] text-[20px]" />}
                    </div>
                </div>
                <div
                    ref={contentRef}
                    style={{ overflow: "hidden", height: 0, opacity: 0 }}
                    className="highlights_section w-full  lg:pt-10 relative"
                >
                    {tab.projects.map((project, i) => (
                        <div key={i}>
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
