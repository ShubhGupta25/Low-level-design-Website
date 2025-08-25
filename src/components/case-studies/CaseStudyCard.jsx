import React, { useState } from "react";
import { caseStudies } from "./caseStudies";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";

const styles = {
  section: {
    borderTop: "1px solid #333",
  },
  layout: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    justifyItems: "center",
    gap: "2rem",
  },
  column: {
    lineHeight: "1.7",
    width: "30%",
    minWidth: "300px",
  },
  title: {
    color: "#A569BD",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  text: {
    color: "#ccc",
  },
  list: {
    paddingLeft: "20px",
    color: "#ccc",
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#2c2c2c",
    padding: "0.2rem 0.4rem",
    borderRadius: "4px",
    fontSize: "0.9em",
  },
  // Tabs container
  tabs: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "12px",
    margin: "24px 0",
    flexWrap: "wrap",
  },

  // Base tab style
  tabBase: {
    padding: "10px 20px",
    borderRadius: "12px",
    fontWeight: "500",
    fontSize: "14px",
    cursor: "pointer",
    border: "1px solid #2d2d2d",
    transition: "all 0.3s ease",
    backgroundColor: "#1f2937", // gray-800
    color: "#d1d5db", // gray-300
  },

  // Active tab
  tabActive: {
    backgroundColor: "#facc15", // yellow-500
    color: "#000",
    borderColor: "#ca8a04", // yellow-600
    boxShadow: "0 4px 10px rgba(250, 204, 21, 0.4)",
    transform: "scale(1.05)",
  },

  // Inactive tab (hover effect included)
  tabInactive: {
    backgroundColor: "#000409ff", // gray-800
    color: "#d1d5db", // gray-300
    borderDown: "#374151", // gray-700
  },
};

const getSection = (title, list, content, code) => {
  return (
    <div style={styles.column}>
      <h2 style={styles.title}>{title}</h2>
      {list && (
        <ul>
          {list.map((item, index) => (
            <li key={index} style={styles.text}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {content && <div style={styles.text}>{content}</div>}
      {code && (
        <div style={{ marginTop: "2rem" }}>
          <SyntaxHighlighter
            language="javascript"
            style={githubGist}
            customStyle={{
              background: "transparent",
              color: "smokewhite",
              fontSize: "0.9rem",
              borderRadius: "8px",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

const CaseStudyCard = ({ study }) => {
  const [tab, setTab] = useState("overview");

  return (
    <div style={styles.container}>
      {/* Tabs */}
      <div style={styles.tabs}>
        {["overview", "hld", "lld", "extensions"].map((t) => (
          <button
            key={t}
            style={{
              ...styles.tabBase,
              ...(tab === t ? styles.tabActive : styles.tabInactive),
            }}
            onClick={() => setTab(t)}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <main className="text-gray-200">
        {tab === "overview" && (
          <section style={styles.section}>
            <div style={styles.layout}>
              {getSection("Problem Statement", null, study.overview.problem)}

              {getSection(
                "Functional Requirements",
                study.overview.functionalReq,
                null
              )}

              {getSection(
                "Non-Functional Requirements",
                study.overview.nonFunctionalReq,
                null
              )}
            </div>
          </section>
        )}

        {tab === "hld" && (
          <section style={styles.section}>
            <div style={styles.layout}>
              {getSection("APIs", study.hld.apis, null)}

              {getSection(
                "Database Schema",
                null,
                null,
                study.hld.databaseSchema
              )}

              {getSection(
                "Architecture Notes",
                null,
                study.hld.architectureNotes,
                null
              )}
            </div>
          </section>
        )}

        {tab === "lld" && (
          <section style={styles.section}>
            <div style={styles.layout}>
              {getSection(
                "Classes & Relationships",
                null,
                null,
                study.lld.classDiagram
              )}

              {getSection("Design Patterns", study.lld.patterns, null)}
            </div>
          </section>
        )}

        {tab === "extensions" && (
          <section style={styles.section}>
            <div style={styles.layout}>
              {getSection("Possible Extensions", study.extensions, null)}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default CaseStudyCard;
