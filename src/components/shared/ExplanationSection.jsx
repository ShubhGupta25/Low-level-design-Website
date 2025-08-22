import React from "react";

const styles = {
  section: {
    marginTop: "3rem",
    paddingTop: "2rem",
    borderTop: "1px solid #333",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  column: {
    lineHeight: "1.7",
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
};

const ExplanationSection = ({ content }) => {
  return (
    <section style={styles.section}>
      <div style={styles.layout}>
        {content.map((col, index) => (
          <div key={index} style={styles.column}>
            <h2 style={styles.title}>{col.title}</h2>
            <div style={styles.text}>{col.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExplanationSection;
