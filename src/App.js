// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Test from "./Components/Test";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Footer";

// Competitive Exam Pages
import GATECS from "./pages/exam/GATECSe";
import GATEDA from "./pages/exam/GATEDAe";
import UGENET from "./pages/exam/UGENETe";

// Training & Skills Pages
import AI from "./pages/training/AI";
import ML from "./pages/training/ML";
import DataAnalytics from "./pages/training/DataAnalytics";
import DataScience from "./pages/training/DataScience";
import DeepLearning from "./pages/training/DeepLearning";
import PowerBi from "./pages/training/PowerBi";

/* 🔥 AOS REFRESH ON ROUTE CHANGE */
function ScrollAOS() {
  const location = useLocation();

  useEffect(() => {
    AOS.refreshHard();   // 👈 THIS IS THE MAGIC
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAOS />   {/* 🔥 very important */}
      <Navbar />

      <main style={{ minHeight: "70vh" }}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* Competitive Exams */}
          <Route path="/exam/gatecs" element={<GATECS />} />
          <Route path="/exam/gateda" element={<GATEDA />} />
          <Route path="/exam/ugenet" element={<UGENET />} />

          {/* Training */}
          <Route path="/training/ai" element={<AI />} />
          <Route path="/training/ml" element={<ML />} />
          <Route path="/training/dataanalytics" element={<DataAnalytics />} />
          <Route path="/training/datascience" element={<DataScience />} />
          <Route path="/training/deeplearning" element={<DeepLearning />} />
          <Route path="/training/powerbi" element={<PowerBi />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
