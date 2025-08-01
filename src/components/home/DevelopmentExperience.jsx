const DevelopmentExperience = () => {
  return (
    <section className="bg-white">
      <img
        src="./assets/residential.png"
        className="h-full w-full"
        alt="residential"
      />
      <div className="bg-[#FBF6F6] relative">
        <div className="px-[65px] flex flex-wrap justify-between space-y-[40px] py-[70px]">
          <p className="flex flex-wrap justify-center items-center basis-[50%]">
            <span className="font-sangbleu text-primaryblue text-[90px]">
              50+
            </span>
            <span className="font-lato text-[14px] ml-[40px] font-[400] leading-[28px] uppercase">
              of Real Estate
              <span className="block">Development Experience</span>
            </span>
          </p>
          <p className="flex flex-wrap justify-center items-center basis-[50%]">
            <span className="font-sangbleu text-primaryblue text-[90px]">
              40K+
            </span>
            <span className="font-lato text-[14px] ml-[40px] font-[400] leading-[28px] uppercase">
              units Developed/
              <span className="block">Developing</span>
            </span>
          </p>
          <p className="flex flex-wrap justify-center items-center basis-[50%]">
            <span className="font-sangbleu text-primaryblue text-[90px]">
              20+
            </span>
            <span className="font-lato text-[14px] ml-[40px] font-[400] leading-[28px] uppercase">
              MSF Real Estate
              <span className="block">Projects Developed</span>
            </span>
          </p>
          <p className="flex flex-wrap justify-center items-center basis-[50%]">
            <span className="font-sangbleu text-primaryblue text-[90px]">
              300+
            </span>
            <span className="font-lato text-[14px] ml-[40px] font-[400] leading-[28px] uppercase">
              MW Data Centers
              <span className="block">Developed/</span>
              <span className="block">Upcoming</span>
            </span>
          </p>
        </div>

        <img
          src="./assets/pattern-bg.png"
          alt="pattern-bg"
          className="h-[70px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default DevelopmentExperience;
