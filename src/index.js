import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 80,
  easing: "ease-in-out",
  disableMutationObserver: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
