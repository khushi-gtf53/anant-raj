import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const amenitiesData = [
  {
    icon: "1.png",
    title: "Leisure All Weather Swimming Pool",
    description:
      "The Estate Residences by Anant Raj Limited is a unique condominium complex, offering apartments designed with Indian values in mind and boasting unobstructed views of the protected Aravalli Range.",
    image: "/assets/microsites/estate-residences/amenities/swimming-pool.png",
  },
  {
    icon: "2.png",
    title: "Modern Gymnasium",
    description: "Enjoy a state-of-the-art gym with cutting-edge equipment.",
    image: "/assets/microsites/estate-residences/amenities/gym.png",
  },
  {
    icon: "3.png",
    title: "Clubhouse with Lounge",
    description: "Relax and unwind in our exclusive resident clubhouse.",
    image: "/assets/microsites/estate-residences/amenities/clubhouse.png",
  },
  {
    icon: "4.png",
    title: "Landscaped Gardens",
    description: "Beautifully curated outdoor spaces for peace and leisure.",
    image: "/assets/microsites/estate-residences/amenities/garden.png",
  },
  {
    icon: "5.png",
    title: "Children’s Play Area",
    description: "Safe and fun space for kids to enjoy.",
    image: "/assets/microsites/estate-residences/amenities/play-area.png",
  },
];

const Amenities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAmenity = amenitiesData[activeIndex];

  return (
    <section className="amenities relative w-full h-screen px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-[#FBF6F6]">
      {/* Heading */}
      <div className="heading">
        <h2 className="text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[40px] text-[13px] lg:text-[20px]">
          Stunning Luxury Prime Residences, Designed For Life
        </h2>
      </div>

      {/* Icons Row */}
      <div className="grid grid-cols-12 py-10">
        <div className="col-span-6 border-r pr-10">
          <div className="flex gap-6 flex-wrap">
            {amenitiesData.map((item, index) => {
              const isActive = index === activeIndex;
              const basePath = "/assets/microsites/estate-residences/amenities";
              const iconPath = isActive
                ? `${basePath}/white/${item.icon}`
                : `${basePath}/black/${item.icon}`;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`amenity border rounded-full p-5 transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-[#b3162f] border-transparent" : "bg-transparent hover:bg-[#b3162f]"
                  }`}
                >
                  <img
                    src={iconPath}
                    alt={`amenity-icon-${index}`}
                    className="w-[50px] h-[50px]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows + Counter */}
        <div className="col-span-6">
          <div className="flex gap-10 items-center ps-20">
            <div className="opacity-70 flex gap-2 justify-end items-center h-full">
              <div
                className="cursor-pointer"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + amenitiesData.length) % amenitiesData.length)
                }
              >
                <IoIosArrowRoundBack size={40} />
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % amenitiesData.length)
                }
              >
                <IoIosArrowRoundForward size={40} />
              </div>
            </div>
            <div className="amenities-counter font-sangbleu">
              <div className="counter text-4xl mb-3">
                {String(activeIndex + 1).padStart(2, "0")}-
                <span className="text-xl">{amenitiesData.length}</span>
              </div>
              <div className="title uppercase tracking-wide text-xl">
                exclusive amenities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image + Description */}
      <div className="grid grid-cols-12 py-10">
        <div className="col-span-5">
          <div className="amenityImg">
            <img src={activeAmenity.image} alt="amenity" />
          </div>
        </div>
        <div className="col-span-7">
          <div className="amenity_about px-10 lg:px-20 flex flex-col w-full h-full justify-center">
            <div className="title font-sangbleu mb-5 text-[13px] lg:text-[20px] leading-[35px]">
              {activeAmenity.title}
            </div>
            <div className="description leading-[30px]">
              {activeAmenity.description}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <img
        src="/assets/pattern-bg.png"
        alt="pattern-bg"
        className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
      />
    </section>
  );
};

export default Amenities;
