import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Sidebar from "./component/sidebar";
import Section from "./component/section";
import College from "./component/college";
import Rose from "./component/Rose";
import White from "./component/white";
import Footer from "./component/Footer";
import Pge from "./component/pages/Pge";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Pge />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/section" element={<Section />} />
          <Route path="/college" element={<College />} />
          <Route path="/rose" element={<Rose />} />
          <Route path="/white" element={<White />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
