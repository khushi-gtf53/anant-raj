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

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Aboutus />
      <LuxuryProperties />
      <OurTeam />
      <DevelopmentExperience />
      <OurJourney />
      <Achievements />
      <Media />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
