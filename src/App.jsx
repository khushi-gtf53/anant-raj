import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./page/Home";
import Aboutus from "./page/Aboutus";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.2, // Smoothness duration (seconds)
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
    <Router>
      <div className="App">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
