const HeroAboutus = () => {
  return (
    <section>
      <div className="bg-[#FBF6F6] mt-[40px] px-[20px] lg:p-[100px]  py-[40px] ">
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
        <div className="flex mt-[55px] flex-col md:flex-row items-center justify-between">
          <h1 className="text-6xl  font-light text-primaryblue font-sangbleu">
            Our Group
          </h1>

          <p className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">
            Founded in 1969, Anant Raj Limited established itself as a symbol of
            <br /> unparalleled quality and ethical business practices...
          </p>
        </div>

        {/* Discover More */}
        <div className="mt-10 flex items-center space-x-2 text-primaryblue cursor-pointer hover:underline">
          <span className="uppercase tracking-wider text-sm font-medium">
            Discover More
          </span>
          <img
            src="/assets/down-arrow-1.png"
            className="h-[20px] object-contain"
            alt="arrow"
          />
        </div>
      </div>
      <img src="/assets/hero-aboutus.png" alt="aboutus" />
      <div className=" px-[20px] lg:p-[100px]  py-[40px]">
        <h3 className="text-primaryred font-sangbleu mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px]  text-[12.5px] lg:text-[20px]">
          <span> Anant Raj Limited: Elevating Lifestyles</span>
          <span className="block"> Through Timeless Spaces</span>{" "}
        </h3>

        <p className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]">
          Founded in 1969, Anant Raj Limited established itself as a symbol of
          unparalleled quality and ethical business practices, earning
          recognition as one of the foremost construction and development firms
          of the 1970s and 1980s. During this time, the Anant Raj Limited
          successfully built nearly 30,000 homes across Delhi and the NCR
          region.
        </p>

        <p className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">
          Our portfolio boasts several prestigious projects, including major
          housing complexes at Rohini, East of Kailash, Sheikh Sarai, Madangir,
          Katwaria Sarai, and the Asiad Village Complex, among others. Renowned
          for our expertise and reliability, Anant Raj Limited was a key
          contractor for prominent government agencies, including the DDA, MES,
          PWD, and CPWD, maintaining a long-standing partnership with the DDA
          from 1969 to 1990. Its Businesses include:
        </p>
      </div>
    </section>
  );
};
export default HeroAboutus;
