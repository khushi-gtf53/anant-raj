export default function VisionAndMission() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          background: `url('./assets/mission.png'}`,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Mission Section - Left Side */}
        <div className="flex-1 flex items-center justify-start px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20">
          <div className="max-w-md lg:max-w-lg xl:max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 lg:mb-12 tracking-wide">
              MISSION
            </h2>
            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-loose font-light">
              To deliver world-class residential, commercial, hospitality, and
              infrastructure projects that exceed customer expectations,
              leveraging deep market insight, strategic foresight, and an
              unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Vision Section - Right Side */}
        <div className="flex-1 flex items-center justify-end px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20">
          <div className="max-w-md lg:max-w-lg xl:max-w-xl text-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 lg:mb-12 tracking-wide">
              VISION
            </h2>
            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-loose font-light">
              To be a trusted leader in real estate and infrastructure,
              consistently setting new benchmarks in quality, innovation, and
              modern amenities, while shaping the growth of the Delhi-NCR
              region.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked vertically on small screens */}
      <div className="md:hidden relative z-10 min-h-screen flex flex-col">
        {/* Mission Section - Mobile */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center max-w-sm">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
              MISSION
            </h2>
            <p className="text-white/90 text-sm leading-relaxed font-light">
              To deliver world-class residential, commercial, hospitality, and
              infrastructure projects that exceed customer expectations,
              leveraging deep market insight, strategic foresight, and an
              unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Vision Section - Mobile */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center max-w-sm">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
              VISION
            </h2>
            <p className="text-white/90 text-sm leading-relaxed font-light">
              To be a trusted leader in real estate and infrastructure,
              consistently setting new benchmarks in quality, innovation, and
              modern amenities, while shaping the growth of the Delhi-NCR
              region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
