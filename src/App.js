// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Test from "./Components/Test.js";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact.js";
import Footer from "./Footer";

// Competitive Exam Pages
import GATECS from "./pages/exam/GATECSe.js";
import GATEDA from "./pages/exam/GATEDAe.js";
import UGENET from "./pages/exam/UGENETe.js";

// Training & Skills Pages (stubbed)
import AI from "./pages/training/AI";
import ML from "./pages/training/ML";
import DataAnalytics from "./pages/training/DataAnalytics";
import DataScience from "./pages/training/DataScience";
import DeepLearning from "./pages/training/DeepLearning";
import PowerBi from "./pages/training/PowerBi";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
           <Route path="/test" element={<Test />} />
          <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
         

          {/* Competitive Exam Pages */}
          <Route path="/exam/gatecs" element={<GATECS />} />
          <Route path="/exam/gateda" element={<GATEDA />} />
          <Route path="/exam/ugenet" element={<UGENET />} />

          {/* Training & Skills Pages */}
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
