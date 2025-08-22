import React from "react";

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#1A1A1A",
    color: "#F0F0F0",
    padding: "2rem 3rem",
    borderRadius: "20px",
    maxWidth: "1200px",
    margin: "2rem auto",
    border: "1px solid #333",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
    borderBottom: "1px solid #333",
    paddingBottom: "1.5rem",
  },
  title: {
    fontSize: "2.8rem",
    background: "linear-gradient(90deg, #A569BD, #5DADE2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#999",
    fontWeight: "300",
    marginTop: "0.5rem",
  },
};

const VisualizerContainer = ({ title, subtitle, children }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
        {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default VisualizerContainer;
