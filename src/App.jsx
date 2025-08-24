import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PatternComponents from "./components/patterns";
import CaseStudyComponents from "./components/case-studies";
import ScrollToTop from "./components/shared/ScrollToTop";
import Sidebar from "./components/shared/Sidebar";

const createRoutes = (componentObject, prefix) =>
  Object.entries(componentObject).map(([name, Component]) => {
    const routeName = name
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace(/^-/, "");
    const path = `/${prefix}/${routeName}`;
    return { path, name, Component };
  });

export const patterns = createRoutes(PatternComponents, "patterns");
export const caseStudies = createRoutes(CaseStudyComponents, "case-studies");

const App = () => {
  const navigate = useNavigate();
  document.body.classList.add("colorful-theme");

  // Shared button style
  const buttonStyle = {
    backgroundColor: "#000000b1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.6rem 1.2rem",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.5rem",
  };

  // Hover & click effects
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
      {/* Top Buttons - like browser tabs */}
      <div
        style={{
          position: "fixed",
          top: "1rem",
          left: "4rem",
          zIndex: 1000,
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={buttonStyle}
          {...hoverEffect}
        >
          ← Back
        </button>

        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          style={buttonStyle}
          {...hoverEffect}
        >
          🏠 Home
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Mobile optimization */}
      <style>
        {`
          @media (max-width: 768px) {
            button {
              padding: 0.5rem 1rem !important;
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default App;
