import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./website/WebsiteRoutes";
import AdminRoutes from "./admin/AdminRoutes";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
