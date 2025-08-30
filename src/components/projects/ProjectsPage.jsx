import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const projectsData = {
    residential: [
        {
            title: "Explore all Residential projects",
            description: "Anant Raj Limited specializes in high-end apartments and luxury residences, offering meticulously designed homes that blend elegance with functionality.",
            mainImage: "/assets/projects/1.webp",
            otherImages: ["/assets/projects/2.webp", "/assets/projects/3.webp", "/assets/projects/4.webp"],
            link : "/residential"
        },       
    ],
    commercial: [
        {
            title: "Business Hubs",
            description: "Tailored spaces for companies.",
            mainImage: "/assets/projects/commercial1.webp",
            otherImages: ["/assets/projects/commercial2.webp", "/assets/projects/commercial3.webp", "/assets/projects/commercial4.webp"],
        },
    ],
    hospitality: [
        {
            title: "Resorts & Stays",
            description: "Luxury hospitality offerings.",
            mainImage: "/assets/projects/hospitality1.webp",
            otherImages: ["/assets/projects/hospitality2.webp", "/assets/projects/hospitality3.webp", "/assets/projects/hospitality4.webp"],
        },
    ],
    "data centers": [
        {
            title: "Data Infrastructure",
            description: "Secure and scalable data centers.",
            mainImage: "/assets/projects/datacenter1.webp",
            otherImages: ["/assets/projects/datacenter2.webp", "/assets/projects/datacenter3.webp", "/assets/projects/datacenter4.webp"],
        },
    ],
};

const ProjectsPage = () => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const categoryList = ["residential", "commercial", "hospitality", "data centers"];
    const [activeCategory, setActiveCategory] = useState("residential");


    const categories = Object.keys(projectsData);
    const flatSlides = categories.flatMap((category) =>
        projectsData[category].map((project, index) => ({
            ...project,
            category,
            originalIndex: index,
        }))
    );

    const categoryStartIndex = {};
    let slideCounter = 0;
    categories.forEach((cat) => {
        categoryStartIndex[cat] = slideCounter;
        slideCounter += projectsData[cat].length;
    });

    const handleTabClick = (cat) => {
        setActiveCategory(cat);
        swiperRef.current?.slideTo(categoryStartIndex[cat], 1000);
    };


    const handleImageClick = (slideIndex, imageIndex) => {
        const updatedSlides = [...flatSlides];
        const selected = { ...updatedSlides[slideIndex] };

        const clickedImage = selected.otherImages[imageIndex];
        selected.otherImages.splice(imageIndex, 1);
        selected.otherImages.push(selected.mainImage);
        selected.mainImage = clickedImage;

        updatedSlides[slideIndex] = selected;
    };

    return (
        <section className="w-full bg-[#FBF6F6] py-10 lg:py-20 px-5 lg:px-[100px]">
            <div className="heading flex items-center justify-between mb-10">
                <h2 className="text-primaryred font-sangbleu uppercase tracking-[2px] leading-[30px] lg:leading-[40px] text-[13px] lg:text-[20px]">
                    Creating landmark spaces that inspire living, working, and beyond.
                </h2>
                {/* <div className="opacity-70 flex gap-2 items-center">
                    <div className="gallery-button-prev cursor-pointer">
                        <IoIosArrowRoundBack size={40} />
                    </div>
                    <div className="gallery-button-next cursor-pointer">
                        <IoIosArrowRoundForward size={40} />
                    </div>
                </div> */}
            </div>

            <Swiper
                modules={[Navigation]}
                loop={false}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={30}
                speed={1000}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.realIndex);

                    for (const cat of categoryList) {
                        const start = categoryStartIndex[cat];
                        const end = start + projectsData[cat].length;
                        if (swiper.realIndex >= start && swiper.realIndex < end) {
                            setActiveCategory(cat);
                            break;
                        }
                    }
                }}

                navigation={{
                    nextEl: ".gallery-button-next",
                    prevEl: ".gallery-button-prev",
                }}
            >
                {flatSlides.map((project, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="grid grid-cols-12">
                            <div className="col-span-7">
                                <Link to={project.link}>
                                <div className="flex gap-10 items-center">
                                    <img
                                        src={project.mainImage}
                                        className="w-[500px] h-[400px] object-cover"
                                        alt=""
                                    />
                                    <div className="max-w-[30%]">
                                        <div className="font-sangbleu uppercase tracking-wider leading-[30px] lg:leading-[35px]">
                                            {project.title}
                                        </div>
                                        <p className="mt-4 text-[15px] leading-[28px] lg:leading-[32px] font-lato">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-span-5">
                                <div className="flex gap-5 justify-end">
                                    {project.otherImages.map((img, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={img}
                                            onClick={() => handleImageClick(idx, imgIndex)}
                                            className="w-[100px] h-[400px] object-cover cursor-pointer hover:scale-105 transition-transform"
                                            alt=""
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Tabs */}
            <div className="project_tabs mt-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-8">
                        <div className="flex items-center">
                            <div
                                className={`project_tab capitalize tracking-wider cursor-pointer font-bold transition-all duration-300`}
                                onClick={() => handleTabClick(activeCategory)}
                            >
                                {activeCategory}
                            </div>
                            <div className="w-full h-[1px] bg-black mx-10" />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex justify-between items-center">
                            {categoryList
                                .filter((cat) => cat !== activeCategory)
                                .map((cat) => (
                                    <div
                                        key={cat}
                                        className="project_tab capitalize tracking-wider cursor-pointer transition-all duration-300 hover:font-bold"
                                        onClick={() => handleTabClick(cat)}
                                    >
                                        {cat}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProjectsPage;
