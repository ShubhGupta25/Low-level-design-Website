import React from "react";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";
import { amazonExplanation } from "../../shared/database";

export const Amazon = () => (
  <VisualizerContainer
    title="E-Commerce (Amazon/Flipkart)"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={amazonExplanation} />
  </VisualizerContainer>
);

/* ============================
   Combined default export
   ============================ */
export default Amazon;
