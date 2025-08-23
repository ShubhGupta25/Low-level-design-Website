import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";
import { BowlingAlleyMachine as data } from "../../shared/database";

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
    color: "#00BFFF",
    fontWeight: 600,
    fontSize: "1.2rem",
    boxShadow: "0 8px 32px #23294688",
    padding: "2.5rem 2rem",
    margin: "2.5rem auto",
    position: "relative",
    overflow: "hidden",
  },
  lane: {
    width: "90%",
    height: "220px",
    background: "linear-gradient(135deg, #232946 60%, #FFD600 100%)",
    borderRadius: "18px",
    border: "2px solid #FFD600",
    margin: "0 auto 18px auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
    boxShadow: "0 2px 16px #FFD60055",
    padding: "1rem",
  },
  pin: {
    width: 20,
    height: 50,
    background: "#fff",
    border: "2px solid #FFD600",
    borderRadius: "50% 50% 20% 20%",
    margin: "4px",
  },
  board: {
    width: "90%",
    height: "220px",
    background: "linear-gradient(135deg, #232946 60%, #FFD600 100%)",
    borderRadius: "18px",
    border: "2px solid #FFD600",
    margin: "0 auto 18px auto",
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",
    overflow: "hidden",
  },
  square: (isDark) => ({
    width: "100%",
    height: "100%",
    background: isDark ? "#181a1b" : "#FFD600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: "bold",
  }),
  ticBoard: {
    width: "200px",
    height: "200px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    border: "3px solid #FFD600",
    borderRadius: "12px",
    overflow: "hidden",
  },
  ticCell: {
    border: "1px solid #FFD600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#FFD600",
  },
};

const BowlingAlleyMachine = () => (
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

export default BowlingAlleyMachine;
