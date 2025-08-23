import React from "react";

const styles = {
  section: {
    borderTop: "1px solid #333",
  },
  layout: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    justifyItems: "center",
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
};

const getStyle = (index) => {
  if (index === 5) {
    return {
      ...styles.column,
      width: "70%", // added width for index 0 or 3
    };
  }
  return styles.column; // default style for other indices
};

const ExplanationSection = ({ content }) => {
  return (
    <section style={styles.section}>
      <div style={styles.layout}>
        {content.map((col, index) => (
          <div key={index} style={getStyle(index)}>
            <h2 style={styles.title}>{col.title}</h2>
            <div style={styles.text}>{col.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExplanationSection;
