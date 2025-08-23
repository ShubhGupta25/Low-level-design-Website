import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";
import { CacheMechanism as data } from "../../shared/database";

const CacheMechanism = () => (
  <VisualizerContainer
    title={data.title}
    subtitle="A low-level system design exploration."
  >
    {data.visualization}
    <div style={{ marginTop: "2rem" }}>
      <SyntaxHighlighter
        language="javascript"
        style={githubGist}
        customStyle={{
          background: "transparent",
          color: "smokewhite",
          fontSize: "0.9rem",
          borderRadius: "8px",
        }}
      >
        {data.code}
      </SyntaxHighlighter>
    </div>
    <ExplanationSection content={data.explanations} />
  </VisualizerContainer>
);

export default CacheMechanism;
