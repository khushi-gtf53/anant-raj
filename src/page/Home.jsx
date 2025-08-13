import React, { useEffect } from "react";
import DevelopmentExperience from "../components/home/DevelopmentExperience";
import OurJourney from "../components/home/Journey";
import LuxuryProperties from "../components/home/LuxuryProperties";
import OurTeam from "../components/home/OurTeam";
import Hero from "../components/home/Hero";
import Aboutus from "../components/home/Aboutus";
import Footer from "../components/common/Footer";
import Media from "../components/home/Media";
import Achievements from "../components/home/Acheivments";
import Blogs from "../components/home/Blogs";
import Header from "../components/common/Header";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const Home = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Smoothness duration (seconds)
      effects: true, // Enable data-speed and data-lag effects if used in components
      normalizeScroll: true, // Helps with mobile scroll consistency
    });

    return () => {
      smoother.kill(); // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <Hero />
        <Aboutus />
        <LuxuryProperties />
        {/* <OurTeam /> */}
        <DevelopmentExperience />
        <OurJourney />
        <Achievements />
        <Media />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
