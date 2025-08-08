import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SetupGsapAnimations from "./utils/animation.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SetupGsapAnimations>
      <App />
    </SetupGsapAnimations>
  </StrictMode>
);
