import React, { Suspense, useEffect, useRef } from 'react'
// import Header from '../component/headerFooter/header'
// import Footer from '../component/headerFooter/footer'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Outlet } from 'react-router';
// import ScrollToTop from '../hooks/ScrollToTop';
// import Loader from '../component/common/loader';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTop from '../utils/ScrollToTop';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout() {
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
        <>
        <ScrollToTop/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div id="main-content">
                        {/* <Suspense fallback={<Loader/>}> */}
                        <Header />
                        <Outlet />
                        <Footer />
                        {/* </Suspense> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;