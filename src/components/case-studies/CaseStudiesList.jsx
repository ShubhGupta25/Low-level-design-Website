import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudies";

const CaseStudyList = () => {
  return (
    <div className="p-6">
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={index} study={study} />
      ))}
    </div>
  );
};

export default CaseStudyList;
