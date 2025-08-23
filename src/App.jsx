import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PatternComponents from "./components/patterns";
import CaseStudyComponents from "./components/case-studies";

const createRoutes = (componentObject, prefix) => {
  return Object.entries(componentObject).map(([name, Component]) => {
    // Route: /case-studies/car-rental-system
    // Key: CarRentalSystem
    // Map kebab-case route to PascalCase key
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
  // Read theme from localStorage or default to false
  const [isColorfulTheme, setIsColorfulTheme] = useState(() => {
    const stored = localStorage.getItem("colorfulTheme");
    return stored === "true";
  });

  useEffect(() => {
    if (isColorfulTheme) {
      document.body.classList.add("colorful-theme");
    } else {
      document.body.classList.remove("colorful-theme");
    }
    localStorage.setItem("colorfulTheme", isColorfulTheme);
  }, [isColorfulTheme]);

  return (
    <>
      <div style={{ position: "fixed", top: 20, right: 30, zIndex: 1000 }}>
        <button
          onClick={() => setIsColorfulTheme((t) => !t)}
          style={{
            background: isColorfulTheme
              ? "linear-gradient(90deg, #22D3EE 0%, #F59E42 33%, #10B981 66%, #FDE047 100%)"
              : "#222",
            color: isColorfulTheme ? "#181a1b" : "#e0e0e0",
            border: "none",
            borderRadius: "20px",
            padding: "0.6rem 1.4rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: isColorfulTheme ? "0 2px 8px #0004" : "0 1px 4px #0002",
            transition: "all 0.2s",
          }}
        >
          {isColorfulTheme ? "🌈 Colorful Theme" : "🌑 Default Theme"}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {patterns.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {caseStudies.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default App;
