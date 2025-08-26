import { useState, useRef, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Lightbox } from "yet-another-react-lightbox";
import gsap from "gsap";
import "yet-another-react-lightbox/styles.css";
import "./style.css"

const HighlightsSpecifications = ({ sectionTitle, highlights = [], specifications = [] }) => {
  const [activeTab, setActiveTab] = useState("highlights");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0); // Scroll progress as a percentage

  const totalContentLength = useRef(0); // Total content length
  const visibleContentLength = useRef(0); // Visible content length

  // Function to calculate the scroll progress
  const calculateScrollProgress = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const { scrollWidth, clientWidth } = scrollRef.current;
    totalContentLength.current = scrollWidth - clientWidth; // Total scrollable length
    visibleContentLength.current = clientWidth; // Visible content length
    calculateScrollProgress(); // Initial progress calculation

    const handleScroll = () => {
      calculateScrollProgress();
    };

    const curr = scrollRef.current;
    curr?.addEventListener("scroll", handleScroll);
    return () => curr?.removeEventListener("scroll", handleScroll); // Cleanup the event listener
  }, [activeTab]);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    scrollRef.current.scrollLeft = scrollStart.current - (e.clientX - startX.current); // Move the content horizontally
  };

  const handleMouseUp = () => (isDragging.current = false);

  const renderItems = (items) => (
    <div
      className="flex gap-5 overflow-x-auto scroll-smooth scrollable-content" // Apply scrollable-content class here
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="highlight mb-5 min-w-[350px] border-r border-black/30 p-10 flex flex-col justify-between cursor-pointer"
          onClick={() => {
            setLightboxSlides(items.map((i) => ({ src: i.imgSrc })));
            setOpenIndex(idx);
            setLightboxOpen(true);
          }}
        >
          <div className="title font-sangbleu capitalize text-[13px] lg:text-[20px]">
            {item.title}
          </div>
          <div className="view uppercase tracking-wider mt-10 text-[14px]">
            view image
          </div>
        </div>
      ))}
    </div>
  );

  const renderTab = (key, label, items) => {
    const isOpen = activeTab === key;
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
      <div className="mb-10">
        <div
          className="top_nav cursor-pointer py-5 flex items-center text-primaryred font-sangbleu uppercase"
          onClick={() => {
            if (!isOpen) {
              setActiveTab(key); // Only change tab if it's not already open
            } else {
              setActiveTab(key === "highlights" ? "specs" : "highlights");
            }
          }}
        >
          <div className="basis-1/5">
            <h3>{label}</h3>
          </div>
          <div className="basis-1/4 h-[1px] bg-[#b3162f]" />
          <div className="basis-1/10 flex justify-center">
            {isOpen ? <SlArrowUp size={30} /> : <SlArrowDown size={30} />}
          </div>
          <div className="basis-1/4 h-[1px] bg-[#b3162f]" />
          <div className="basis-1/5 text-end cursor-pointer">
            <h3>{isOpen ? "close" : "explore more"}</h3>
          </div>
        </div>

        {/* collapsible container */}
        <div
          ref={contentRef}
          style={{ overflow: "hidden", height: 0, opacity: 0 }}
          className="highlights_section w-full p-10 bg-[#FBF6F6] relative"
        >
          {renderItems(items)}
          {/* <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#b3162f]/30 rounded-2xl overflow-hidden">
            <div
              className="h-full bg-[#b3162f] rounded-2xl"
              style={{ width: `${scrollProgress}%` }} // Set scroll progress width
            />
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="highlights_specifications w-full px-5 lg:px-[100px] py-[40px] lg:py-[100px] bg-white">
        <div className="heading mb-10">
          <h2 className="text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[40px] text-[13px] lg:text-[20px]">
            {sectionTitle}
          </h2>
        </div>
        {renderTab("highlights", "highlights", highlights)}
        {renderTab("specs", "specifications", specifications)}
      </section>

      {/* Lightbox Popup */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={openIndex}
      />
    </>
  );
};

export default HighlightsSpecifications;
