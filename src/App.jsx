// src/App.jsx

import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Compare from "./pages/Compare";
import Search from "./pages/Search";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
        border: "2px solid green",
        borderRadius: "4px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      Go to Home
    </button>
  );
};

const App = () => (
  <div style={{ textAlign: "center" }}>
    <Header />
    <Button />
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </div>
);

export default App;