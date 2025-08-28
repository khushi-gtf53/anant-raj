import HeroAboutus from "../components/aboutus/HeroAboutus";
import VisionAndMission from "../components/aboutus/VisionAndMission";
import Brands from "../components/aboutus/Brands";
import AboutusTeam from "../components/aboutus/AboutusTeam";
import OurStory from "../components/aboutus/OurStory";
import AboutTestimonials from "../components/aboutus/AboutTestimonials";
import DiscoverContent from "../components/aboutus/DiscoverContent";

const Aboutus = () => {
  return (
    <>
      <HeroAboutus />
      <DiscoverContent />
      <VisionAndMission />
      <OurStory/>
      <Brands />
      <AboutusTeam />
      <AboutTestimonials/>
    </>
  );
};

export default Aboutus;
