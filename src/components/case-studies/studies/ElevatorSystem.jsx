import React from "react";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";
import {elevatorExplanation} from "../../shared/database";

const styles = {
  visualizationBlock: {
    width: "100%",
    maxWidth: "700px",
    minHeight: "340px",
    background: "linear-gradient(135deg, #181a1b 70%, #232946 100%)",
    borderRadius: "22px",
    border: "4px solid #232946",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#FDE047",
    fontWeight: 600,
    fontSize: "1.2rem",
    boxShadow: "0 8px 32px #23294688",
    padding: "2.5rem 2rem",
    margin: "2.5rem auto",
    position: "relative",
    overflow: "hidden",
  },
  elevator: {
    width: 60,
    height: 120,
    background: "linear-gradient(135deg, #A569BD 60%, #00BFFF 100%)",
    borderRadius: 12,
    margin: "0 18px",
    display: "inline-block",
    boxShadow: "0 2px 12px #A569BD55",
    border: "2px solid #232946",
    position: "relative",
    color: "#F0F0F0",
    fontWeight: 700,
    fontSize: "1.1rem",
    textAlign: "center",
    lineHeight: "120px",
  },
  floor: {
    width: 40,
    height: 40,
    background: "linear-gradient(90deg, #FFD600 0%, #00FF87 100%)",
    borderRadius: 8,
    margin: "0 8px",
    display: "inline-block",
    boxShadow: "0 2px 12px #FFD60055",
    border: "2px solid #232946",
    color: "#232946",
    fontWeight: 700,
    fontSize: "1.1rem",
    textAlign: "center",
    lineHeight: "40px",
  },
};

const ElevatorSystem = () => (
  <VisualizerContainer
    title="Elevator System"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={elevatorExplanation} />
  </VisualizerContainer>
);

export default ElevatorSystem;
