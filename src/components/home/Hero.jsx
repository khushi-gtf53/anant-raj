const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.72) 1.05%, rgba(148, 147, 147, 0.00) 35.82%",
      }}
      className="h-screen  text-white flex flex-col justify-center relative"
    >
      <div className="relative w-full h-full">
        <div
          className="absolute z-[2] w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.72) 1.05%, rgba(148, 147, 147, 0.00) 35.82%)",
          }}
        ></div>
        <video
          src="./assets/bg.mp4"
          loop
          muted
          autoPlay
          className="absolute z-[1] object-cover w-full h-full"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
