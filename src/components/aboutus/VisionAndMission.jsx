export default function VisionAndMission() {
  return (
    <div className=" min-h-screen bg-[url(./assets/mission.png)] py-[50px] px-[100px] flex-wrap flex w-full overflow-hidden">
      {/* Mission Section - Left Side */}
      <div className="basis-[100%] flex items-center justify-start">
        <div className="max-w-md lg:max-w-lg xl:max-w-xl">
          <h2 className="text-6xl   font-[400] text-white mb-8 md:mb-10 lg:mb-12 tracking-[4px]">
            MISSION
          </h2>
          <p
            className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[32px]
          text-white"
          >
            To deliver world-class residential, commercial, hospitality, and
            infrastructure projects that exceed customer expectations,
            leveraging deep market insight, strategic foresight, and an
            unwavering commitment to excellence.
          </p>
        </div>
      </div>

      {/* Vision Section - Right Side */}
      <div className="basis-[100%] mt-[60px] flex items-center justify-end">
        <div className="max-w-md lg:max-w-lg xl:max-w-xl">
          <h2 className="text-6xl  uppercase font-[400] text-white mb-8 md:mb-10 lg:mb-12 tracking-[4px]">
            Vision
          </h2>
          <p
            className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[32px]
          text-white"
          >
            To be a trusted leader in real estate and infrastructure,
            consistently setting new benchmarks in quality, innovation, and
            modern amenities, while shaping the growth of the Delhi-NCR region.
          </p>
        </div>
      </div>
    </div>
  );
}
