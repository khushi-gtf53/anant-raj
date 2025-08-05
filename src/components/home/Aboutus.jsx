const Aboutus = () => {
  return (
    <section className="px-[20px] lg:px-[100px] bg-white py-[40px] lg:py-[100px]">
      <div className="flex justify-between flex-wrap font-sangbleu">
        <div className="flex basis-[100%] lg:basis-[70%] flex-col">
          <h2 className="text-primaryred mb-[40px] uppercase tracking-[2px] leading-[40px] font-[200] text-[20px]">
            <span>We develop quality infrastructure</span>
            <span className="block">and real estate projects</span>
          </h2>

          <div className="flex flex-wrap">
            <span className="basis-[100%] lg:basis-[20%] leading-[150px] text-[190px] text-primaryblue font-lato">
              A
            </span>
            <p className="basis-[100%] lg:basis-[65%] lg:ml-[10px] text-justify text-[15px] leading-[32px] tracking-[1.5px] font-lato">
              nant Raj Limited has been a leader in India's real estate
              landscape since 1969, delivering landmark developments across
              residential, commercial, and IT infrastructure sectors. With a
              commitment to innovation, luxury, and sustainability, we craft
              future-ready spaces that elevate lifestyles and redefine urban
              living.
            </p>
          </div>
        </div>

        <p className="basis-[100%] lg:basis-[25%] lg:text-end">
          <span className="block leading-[100px] text-[95px] text-end w-full text-primaryblue">
            1969
          </span>
          <span className="text-end w-full block mt-[5px] tracking-[1.5px] text-[20px] font-[100]">
            Founded in
          </span>
          <button className="border-primaryblue mt-[80px] font-[200] text-[12px] tracking-[1.5px] border-solid border-[1px] text-primaryblue px-8 py-[14px]">
            EXPLORE MORE
          </button>
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
