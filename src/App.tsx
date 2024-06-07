import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spices from "../components/spices";
import Seasoning from "../components/seasoning";
import HealthyMeal from "../components/healthymeals";
import PastryMix from "../components/pastrymix";
import Home from "./home";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spices" element={<Spices />} />
        <Route path="/seasoning" element={<Seasoning />} />
        <Route path="/pastrymix" element={<PastryMix />} />
        <Route path="/healthymeals" element={<HealthyMeal />} />
      </Routes>
    </Router>
  );
};

export default App;
