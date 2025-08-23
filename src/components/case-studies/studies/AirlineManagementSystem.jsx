import React from "react";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";
import { airlineExplanation } from "../../shared/database";

export const AirlineManagementSystem = () => (
  <VisualizerContainer
    title="Airline Management System"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={airlineExplanation} />
  </VisualizerContainer>
);

/* ============================
   Default export (optional)
   ============================ */
export default AirlineManagementSystem;
