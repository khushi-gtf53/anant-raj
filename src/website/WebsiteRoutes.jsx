import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import ComingSoon from "./page/ComingSoon";
import ThankYou from "./page/ThankYou";
import ContactUs from "./page/Contactus";
import EstateResidences from "./page/microsites/EstateResidences";
import AboutUs from "./page/Aboutus";

export default function WebsiteRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="estate-residences" element={<EstateResidences />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Outside layout */}
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
