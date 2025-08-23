import React from "react";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";

const styles = {
  placeholder: {
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%)",
    borderRadius: "18px",
    border: "2px solid #444",
    color: "#FFD600", // punchy yellow
    fontSize: "1.7rem",
    textAlign: "center",
    padding: "2.5rem",
    boxShadow: "0 4px 32px 0 rgba(0,0,0,0.7)",
    position: "relative",
    overflow: "hidden",
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "8px",
    background:
      "linear-gradient(90deg, #FFD600 0%, #00FF87 25%, #00BFFF 50%, #A569BD 75%, #FF6F00 100%)",
    borderTopLeftRadius: "18px",
    borderTopRightRadius: "18px",
  },
};

const getCaseStudyContent = (title) => [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <p>
        Explanation of which design pattern(s) are used in {title} and why. (To
        be filled for each case study)
      </p>
    ),
  },
  {
    title: "Advantages & Disadvantages",
    content: (
      <>
        <h4>Advantages ✅</h4>
        <p>List of advantages for {title} (To be filled for each case study)</p>
        <h4>Disadvantages ❌</h4>
        <p>
          List of disadvantages for {title} (To be filled for each case study)
        </p>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.placeholder}>
        <div style={styles.accentBar}></div>
        Interactive Visualization & System Diagram for {title} Coming Soon!
      </div>
    ),
  },
];

const CaseStudyTemplate = ({ title }) => {
  return (
    <VisualizerContainer
      title={title}
      subtitle="A low-level system design exploration."
    >
      <ExplanationSection content={getCaseStudyContent(title)} />
    </VisualizerContainer>
  );
};

export default CaseStudyTemplate;
