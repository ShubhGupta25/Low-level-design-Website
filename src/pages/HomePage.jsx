import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { patterns, caseStudies } from "../App";

const styles = {
  homeContainer: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    textAlign: "center",
    fontSize: "3rem",
    color: "#fff",
    marginBottom: "3rem",
  },
  listsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
  },
  list: {
    listStyle: "none",
    padding: "1.5rem",
    margin: 0,
    backgroundColor: "#1A1A1A",
    borderRadius: "12px",
    border: "1px solid #333",
  },
  listTitle: {
    fontSize: "1.8rem",
    color: "#A569BD",
    marginBottom: "1.5rem",
    borderBottom: "1px solid #444",
    paddingBottom: "1rem",
  },
  listItem: {
    marginBottom: "0.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#5DADE2",
    fontSize: "1.1rem",
    transition: "color 0.2s ease-in-out",
  },
};

const CREATIONAL = [
  "Factory",
  "Abstract Factory",
  "Singleton",
  "Builder",
  "Prototype",
];
const STRUCTURAL = [
  "Decorator",
  "Composite",
  "Adapter",
  "Facade",
  "Proxy",
  "Bridge",
  "Flyweight",
];
const BEHAVIORAL = [
  "Observer",
  "Chain Of Responsibility",
  "Command",
  "Null Object",
  "State",
  "Interpreter",
  "Iterator",
  "Mediator",
  "Memento",
  "Template Method",
  "Visitor",
];

const CASE_STUDY_GROUPS = {
  Games: [
    "Snake n Ladder",
    "Tic-Tac-Toe",
    "Chess game",
    "Bowling Alley Machine",
  ],
  "Booking & Rental": [
    "Car Rental System",
    "Car Booking Service",
    "Hotel Booking System",
    "BookMyShow",
    "Restaurant Management System",
    "Food delivery app",
    "Calendar Application",
  ],
  "Finance & Payment": [
    "Splitwise",
    "Splitwise Simplify Algorithm",
    "Payment System",
    "Stock Exchange System",
    "Inventory Management System",
    "ATM",
    "Cache Mechanism",
    "Rate Limiter",
  ],
  "Social & Community": [
    "LinkedIn",
    "Chat based system",
    "Community Discussion Platform",
    "Online Voting System",
    "True Caller",
  ],
  "System & Infra": [
    "Parking Lot",
    "Elevator System",
    "Traffic Light System",
    "File System",
    "Logging System",
    "Amazon",
    "Airline Management System",
    "Learning Management System",
    "Meeting Scheduler",
  ],
  Miscellaneous: ["Notify-Me Button", "Pizza Billing System"],
};

const CASE_STUDY_ICONS = {
  Games: "🎮",
  "Booking & Rental": "🚗",
  "Finance & Payment": "💸",
  "Social & Community": "👥",
  "System & Infra": "🖥️",
  Miscellaneous: "🧩",
  Other: "📁",
};

const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");
const groupCaseStudies = (caseStudies) => {
  const groups = {};
  const allNames = Object.values(CASE_STUDY_GROUPS).flat();
  Object.entries(CASE_STUDY_GROUPS).forEach(([group, names]) => {
    groups[group] = caseStudies
      .filter((cs) => names.some((n) => normalize(cs.name) === normalize(n)))
      .sort((a, b) => a.name.localeCompare(b.name));
  });
  // Add uncategorized case studies
  const categorizedPaths = Object.values(groups)
    .flat()
    .map((cs) => cs.path);
  const uncategorized = caseStudies.filter(
    (cs) => !categorizedPaths.includes(cs.path)
  );
  if (uncategorized.length > 0) {
    groups["Other"] = uncategorized.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
  return groups;
};

const groupPatterns = (patterns) => {
  const groups = { Creational: [], Structural: [], Behavioral: [] };
  patterns.forEach((p) => {
    const name = p.name
      .replace(/ Pattern$/, "")
      .replace(/-/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (CREATIONAL.some((c) => name.toLowerCase().includes(c.toLowerCase())))
      groups.Creational.push(p);
    else if (
      STRUCTURAL.some((s) => name.toLowerCase().includes(s.toLowerCase()))
    )
      groups.Structural.push(p);
    else if (
      BEHAVIORAL.some((b) => name.toLowerCase().includes(b.toLowerCase()))
    )
      groups.Behavioral.push(p);
  });
  groups.Creational.sort((a, b) => a.name.localeCompare(b.name));
  groups.Structural.sort((a, b) => a.name.localeCompare(b.name));
  groups.Behavioral.sort((a, b) => a.name.localeCompare(b.name));
  return groups;
};

const HomePage = () => {
  const grouped = groupPatterns(patterns);
  const caseGrouped = groupCaseStudies(caseStudies);
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.header}>React Design Patterns & Case Studies</h1>
      <div style={styles.listsContainer}>
        <div>
          <h2 style={styles.listTitle}>📜 Creational Patterns</h2>
          <ul style={styles.list}>
            {grouped.Creational.map((p) => (
              <li key={p.path} style={styles.listItem}>
                <Link to={p.path} style={styles.link}>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 style={styles.listTitle}>🏗️ Structural Patterns</h2>
          <ul style={styles.list}>
            {grouped.Structural.map((p) => (
              <li key={p.path} style={styles.listItem}>
                <Link to={p.path} style={styles.link}>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 style={styles.listTitle}>🔄 Behavioral Patterns</h2>
          <ul style={styles.list}>
            {grouped.Behavioral.map((p) => (
              <li key={p.path} style={styles.listItem}>
                <Link to={p.path} style={styles.link}>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {Object.entries(caseGrouped).map(([group, studies]) => (
            <React.Fragment key={group}>
              <h2 style={styles.listTitle}>
                {CASE_STUDY_ICONS[group] || "📁"} {group} Case Studies
              </h2>
              <ul style={styles.list}>
                {studies.map((cs) => (
                  <li key={cs.path} style={styles.listItem}>
                    <Link to={cs.path} style={styles.link}>
                      {cs.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
