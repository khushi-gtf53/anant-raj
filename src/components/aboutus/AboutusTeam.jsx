import { useState } from "react";

const AboutusTeam = () => {
  const [activeTab, setActiveTab] = useState("BOARD OF DIRECTORS");
  const [activePersonIndex, setActivePersonIndex] = useState(0);

  const tabs = [
    "BOARD OF DIRECTORS",
    "OUR LEADERSHIP TEAM",
    "DATA CENTER TEAM",
  ];

  // Sample team data - you can replace with actual data
  const teamData = {
    "BOARD OF DIRECTORS": [
      {
        name: "Amit Sarin",
        position: "Managing Director",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      },
      {
        name: "Rajesh Kumar",
        position: "Executive Director",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      },
      {
        name: "Priya Sharma",
        position: "Independent Director",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=400&fit=crop&crop=face",
      },
      {
        name: "Vikram Singh",
        position: "Non-Executive Director",
        image:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=400&fit=crop&crop=face",
      },
      {
        name: "Anita Gupta",
        position: "Independent Director",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
      },
    ],
    "OUR LEADERSHIP TEAM": [
      {
        name: "Sarah Johnson",
        position: "Chief Executive Officer",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&crop=face",
      },
      {
        name: "Michael Chen",
        position: "Chief Technology Officer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      },
      {
        name: "Lisa Rodriguez",
        position: "Chief Financial Officer",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=400&fit=crop&crop=face",
      },
    ],
    "DATA CENTER TEAM": [
      {
        name: "David Kim",
        position: "Data Center Manager",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      },
      {
        name: "Emily Watson",
        position: "Infrastructure Lead",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
      },
    ],
  };

  const currentTeam = teamData[activeTab] || [];
  const activePerson = currentTeam[activePersonIndex] || {};

  const nextPerson = () => {
    setActivePersonIndex((prev) => (prev + 1) % currentTeam.length);
  };

  const prevPerson = () => {
    setActivePersonIndex(
      (prev) => (prev - 1 + currentTeam.length) % currentTeam.length
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActivePersonIndex(0); // Reset to first person when changing tabs
  };
  return (
    <section className="px-[20px] bg-[#FBF6F6] py-[40px] lg:p-[100px]">
      <h2 className="text-primaryred mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] font-sangbleu  text-[12.5px] lg:text-[20px]">
        Driven by Passion. United by Purpose.
      </h2>{" "}
      <div className="">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`text-left transition-colors duration-200 ${
                    activeTab === tab
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span className="text-xs md:text-sm font-medium tracking-wider">
                    {tab}
                  </span>
                  {/* Active Tab Underline */}
                  {activeTab === tab && (
                    <div className="mt-2 h-0.5 bg-gray-400 w-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Full Width Underline */}
            <div className="mt-8 h-px bg-gray-300 w-full" />
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Side - Main Person */}
            <div className="flex-1 lg:max-w-md">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={activePerson.image}
                  alt={activePerson.name}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>

              {/* Person Info */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {activePerson.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {activePerson.position}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden lg:flex flex-col items-center gap-4 self-center">
              <button
                onClick={prevPerson}
                className="p-3 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentTeam.length <= 1}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={nextPerson}
                className="p-3 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentTeam.length <= 1}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Right Side - Team Grid */}
            <div className="flex-1 lg:max-w-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {currentTeam.map((person, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePersonIndex(index)}
                    className={`relative group transition-all duration-200 ${
                      index === activePersonIndex
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2"
                    }`}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>

                    {/* Overlay for non-active images */}
                    {index !== activePersonIndex && (
                      <div className="absolute inset-0 bg-gray-400/30 rounded-lg group-hover:bg-gray-400/20 transition-colors duration-200" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center mt-8 gap-4">
            <button
              onClick={prevPerson}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentTeam.length <= 1}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextPerson}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentTeam.length <= 1}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2 ml-4">
              {currentTeam.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePersonIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activePersonIndex ? "bg-gray-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusTeam;
