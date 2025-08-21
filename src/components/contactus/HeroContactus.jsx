const HeroContactus = () => {
  return (
    <section>
      <div className="bg-[#FBF6F6]  px-[20px] lg:p-[100px]  py-[40px] ">
        {/* Top Navigation Tabs */}
        <nav className="flex  space-x-8 justify-end">
          <button className="text-primaryblue font-semibold">
            Contact Details
          </button>
          <button className="opacity-[0.4]">Query Form</button>
          <button className="opacity-[0.4]">Address</button>
        </nav>

        <div className="flex justify-between flex-wrap items-center">
          <h3 className="text-black basis-[10%]"> CONTACT US</h3>

          <div className="h-[0.1px] bg-black basis-[90%]"></div>
        </div>

        {/* Main Content */}
        <div className="flex mt-[55px] flex-col md:flex-row items-center justify-between">
          <h1 className="text-6xl  font-light text-primaryblue font-sangbleu">
            Contact us
          </h1>

          <p className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">
            We’re here to connect—reach out to Anant Raj Limited for inquiries,
            <br /> collaborations, or project details.
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
      <img src="/assets/contact-us.png" alt="aboutus" />
    </section>
  );
};
export default HeroContactus;
