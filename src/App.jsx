import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PatternComponents from "./components/patterns";
import CaseStudyComponents from "./components/case-studies";
import ScrollToTop from "./components/shared/ScrollToTop";
import Sidebar from "./components/shared/Sidebar";

const createRoutes = (componentObject, prefix) => {
  return Object.entries(componentObject).map(([name, Component]) => {
    const routeName = name
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace(/^-/, "");
    const path = `/${prefix}/${routeName}`;
    return { path, name, Component };
  });
};

export const patterns = createRoutes(PatternComponents, "patterns");
export const caseStudies = createRoutes(CaseStudyComponents, "case-studies");

const App = () => {
  const navigate = useNavigate();

  document.body.classList.add("colorful-theme");

  // Shared button style for Back and Theme
  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "0.6rem 1.4rem",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    transition: "all 0.2s",
  };

  // Hover and press effects
  const hoverEffect = {
    onMouseEnter: (e) =>
      (e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)"),
    onMouseLeave: (e) =>
      (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)"),
    onMouseDown: (e) => (e.currentTarget.style.transform = "scale(0.95)"),
    onMouseUp: (e) => (e.currentTarget.style.transform = "scale(1)"),
  };

  return (
    <>
      {/* Back Button - Top Left */}
      <div style={{ position: "fixed", top: 20, left: 80, zIndex: 1000 }}>
        <button
          onClick={() => navigate(-1)}
          style={buttonStyle}
          {...hoverEffect}
        >
          ← Back
        </button>
      </div>

      {/* Floating Home Button - Bottom Right */}
      <div style={{ position: "fixed", bottom: 30, right: 30, zIndex: 1000 }}>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "1.5rem",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            transition: "all 0.2s",
          }}
          {...hoverEffect}
        >
          🏠
        </button>
      </div>

      <ScrollToTop />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {patterns.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {caseStudies.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        {/* Fallback route - redirect to home if path not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
