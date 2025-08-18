const HeroAboutus = () => {
  return (
    <section className="bg-[#FBF6F6] mt-[40px] px-[20px] lg:px-[100px]  py-[40px] lg:py-[100px]">
      {/* Top Navigation Tabs */}
      <nav className="flex  space-x-8 justify-end">
        <button className="text-primaryblue font-semibold">Our Group</button>
        <button className="opacity-[0.4]">Mission & Vision</button>
        <button className="opacity-[0.4]">Brand Pillars</button>
        <button className="opacity-[0.4]">Team</button>
        <button className="opacity-[0.4]">Testimonials</button>
      </nav>

      <div className="flex justify-between flex-wrap items-center">
        <h3 className="text-black basis-[10%]">About Us</h3>

        <div className="h-[0.1px] bg-black basis-[90%]"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="mb-8 md:mb-0">
          <h1 className="text-5xl font-light text-[#1a2e6c]">Our Group</h1>
        </div>
        <div className="max-w-xl text-sm text-gray-800">
          <p>
            Founded in <strong>1969</strong>, Anant Raj Limited established
            itself as a symbol of unparalleled quality and ethical business
            practices...
          </p>
        </div>
      </div>

      {/* Discover More */}
      <div className="mt-10 flex items-center space-x-2 text-[#1a2e6c] cursor-pointer hover:underline">
        <span className="uppercase tracking-wider text-sm font-medium">
          Discover More
        </span>
        <span className="text-xl">⌄</span>
      </div>
    </section>
  );
};
export default HeroAboutus;
