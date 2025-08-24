const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#1A1A1A",
    color: "#F0F0F0",
    padding: "1.5rem 1rem",
    borderRadius: "1rem",
    maxWidth: "100%",
    border: "1px solid #333",
    boxSizing: "border-box",
    marginTop: "5rem",
  },

  header: {
    textAlign: "center",
    borderBottom: "1px solid #333",
    paddingBottom: "1rem",
  },

  title: {
    fontSize: "1.8rem",
    lineHeight: "1.2",
    background: "linear-gradient(90deg, #A569BD, #5DADE2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0",
  },

  subtitle: {
    fontSize: "0.95rem",
    color: "#999",
    fontWeight: "300",
    marginTop: "0.5rem",
  },

  // Tablet screens (≥600px)
  "@media (min-width: 600px)": {
    container: {
      padding: "2rem",
      borderRadius: "1.25rem",
    },
    title: {
      fontSize: "2.2rem",
    },
    subtitle: {
      fontSize: "1.05rem",
    },
  },

  // Small desktops (≥900px)
  "@media (min-width: 900px)": {
    container: {
      padding: "2rem 3rem",
      borderRadius: "1.5rem",
      maxWidth: "1100px",
      marginLeft: "80px",
      margin: "3rem 1rem 0rem 4rem",
    },
    title: {
      fontSize: "2.5rem",
    },
    subtitle: {
      fontSize: "1.1rem",
    },
  },

  // Large desktops (≥1200px)
  "@media (min-width: 1200px)": {
    container: {
      maxWidth: "1300px",
      margin: "3rem 1rem 0rem 4rem", // keep enough gap from fixed navbar
    },
    title: {
      fontSize: "2.8rem",
    },
    subtitle: {
      fontSize: "1.2rem",
    },
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
