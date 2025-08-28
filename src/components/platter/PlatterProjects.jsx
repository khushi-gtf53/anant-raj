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
        <div className="">
            <div >
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={ 'auto'}

                    speed={600}
                    spaceBetween={100}
                    centeredSlides={false}
                    allowTouchMove={true}
                    className="platter_slider overflow-hidden w-full"
                    navigation={{
                        nextEl: ".banner-button-next",
                        prevEl: ".banner-button-prev",
                    }}
                >
                    {project.slides.map((imgSrc, index) => (
                        <SwiperSlide
                            key={index}
                            className="project_img swiper_slide_container"
                           
                        >
                            <div className="flex gap-[30px]">
                            <img
                                src={imgSrc}
                                alt={`Slide ${index + 1}`}
                                className=" flex-1  object-cover w-[100%] cursor-pointer"
                            />
                <div className="project_info flex flex-col justify-between items-end">
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
                 </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-end mt-[10px]">
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
            <div className="mb-10" id={tab.key} key={tab.key}>
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
                <div
                    ref={contentRef}
                    style={{ overflow: "hidden", height: 0, opacity: 0 }}
                    className="highlights_section w-full pt-10 relative"
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
