import DevelopmentExperience from "../components/home/DevelopmentExperience";
import OurJourney from "../components/home/Journey";
import LuxuryProperties from "../components/home/LuxuryProperties";
import OurTeam from "../components/home/OurTeam";
import Hero from "../components/home/Hero";
import Aboutus from "../components/home/Aboutus";
import Media from "../components/home/Media";
import Achievements from "../components/home/Acheivments";
import Blogs from "../components/home/Blogs";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <LuxuryProperties />
      <OurTeam />
      <DevelopmentExperience />
      <OurJourney />
      <Achievements />
      <Media />
      <Blogs />
    </>
  );
};

export default Home;
