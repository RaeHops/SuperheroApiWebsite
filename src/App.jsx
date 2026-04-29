// Main app with routing between pages
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Compare from "./pages/Compare";

export default function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Superhero Search</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/compare">Compare</Link>
        </div>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Router>
  );
}