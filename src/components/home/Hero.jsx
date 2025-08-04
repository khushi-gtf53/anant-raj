const Hero = () => {
  return (
    <div className="h-screen hero text-white flex flex-col justify-center relative">
      <video
        src="./assets/bg.mp4"
        loop
        muted
        autoPlay
        className="absolute  object-cover w-full h-full"
      ></video>
    </div>
  );
};

export default Hero;
