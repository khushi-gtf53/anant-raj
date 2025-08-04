const Hero = () => {
  return (
    <div className="h-screen text-white flex flex-col justify-center relative">
      <video
        src="./assets/bg.mp4"
        loop
        muted
        autoPlay
        className="absolute object-cover w-full h-full z-[-1]"
      ></video>

      <h1 className="text-7xl tracking-[10px] px-[80px] text-center font-sangbleu mb-[85px] font-[400]">
        ANANT RAJ LIMITED
      </h1>
    </div>
  );
};

export default Hero;
