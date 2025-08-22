import React from "react";
import VisualizerContainer from "../shared/VisualizerContainer";

const styles = {
  placeholder: {
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252525",
    borderRadius: "12px",
    border: "2px dashed #444",
    color: "#777",
    fontSize: "1.5rem",
    textAlign: "center",
  },
};

const CaseStudyTemplate = ({ title }) => {
  return (
    <VisualizerContainer
      title={title}
      subtitle="A low-level system design exploration."
    >
      <div style={styles.placeholder}>
        System Design Explanation & Diagrams Coming Soon!
      </div>
    </VisualizerContainer>
  );
};

export default CaseStudyTemplate;
