const Hero = () => {
  return (
    <div className="h-screen text-white flex flex-col justify-between i relative">
      <video
        src="./assets/bg.mp4"
        className="absolute object-cover w-full h-full z-[-1]"
      ></video>
      <header className="flex justify-between items-center px-[65px] py-3">
        <img
          src="./assets/logo.png"
          alt="Anant Raj Limited Logo"
          className="h-[65px]"
        />
        <nav className="flex space-x-6">
          <a
            href="#"
            className="hover:text-gray-300 tracking-[1.2px] font-[400]"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-gray-300 tracking-[1.2px] font-[400]"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-gray-300 tracking-[1.2px] font-[400]"
          >
            Investors
          </a>
          <a
            href="#"
            className="hover:text-gray-300 tracking-[1.2px] font-[400]"
          >
            CSR
          </a>
          <button className="relative w-6 h-6 hover:text-gray-300">
            <img src="./assets/hamburger.png" alt="hamburger" />
          </button>
        </nav>
      </header>

      <h1 className="text-7xl tracking-[10px] px-[65px] text-center font-sangbleu mb-[85px] font-[400]">
        ANANT RAJ LIMITED
      </h1>

      <div className="flex justify-between text-[14px] tracking-[1px] px-[65px] py-3 mb-[15px] text-black bg-white">
        <a href="#" className="hover:text-gray-600">
          RESIDENTIAL
        </a>
        <a href="#" className="hover:text-gray-600">
          COMMERCIAL
        </a>
        <a href="#" className="hover:text-gray-600">
          HOSPITALITY
        </a>
        <a href="#" className="hover:text-gray-600">
          DATA CENTERS
        </a>
      </div>
    </div>
  );
};

export default Hero;
