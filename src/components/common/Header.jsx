const Header = () => {
  return (
    <header className="flex absolute z-[100] top-0 w-full text-white justify-between items-center px-[20px] lg:px-[100px] py-3">
      <img
        src="./assets/white-anant.png"
        alt="Anant Raj Limited Logo"
        className="h-[75px]"
      />
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-gray-300 tracking-[1.2px] font-[400]">
          About Us
        </a>
        <a href="#" className="hover:text-gray-300 tracking-[1.2px] font-[400]">
          Careers
        </a>
        <a href="#" className="hover:text-gray-300 tracking-[1.2px] font-[400]">
          Investors
        </a>
        <a href="#" className="hover:text-gray-300 tracking-[1.2px] font-[400]">
          CSR
        </a>
        <button className="relative w-6 h-6 hover:text-gray-300">
          <img src="./assets/hamburger.png" alt="hamburger" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
