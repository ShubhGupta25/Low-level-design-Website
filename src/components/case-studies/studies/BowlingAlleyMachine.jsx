import React from "react";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";

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

/* -------------------------
   Bowling Alley Machine
-------------------------- */
const bowlingContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#FFD600" }}>State</span> (for frame/game
          progress), <span style={{ color: "#00BFFF" }}>Strategy</span> (for
          scoring logic), <span style={{ color: "#A569BD" }}>Observer</span> (to
          update scoreboard).
        </p>
        <ul>
          <li>
            <b>State:</b> Manage frames, strikes, spares.
          </li>
          <li>
            <b>Strategy:</b> Support different scoring variants.
          </li>
          <li>
            <b>Observer:</b> Notify scoreboard and players in real time.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Advantages & Disadvantages",
    content: (
      <>
        <h4>Advantages ✅</h4>
        <ul>
          <li>Handles multiple players and score updates cleanly.</li>
          <li>Supports rule extensions easily.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Scoring strategies can get complex.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div style={styles.lane}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={styles.pin}></div>
          ))}
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600" }}>
          State → Strategy → Observer
        </div>
      </div>
    ),
  },
  {
    title: "Code Example",
    content: (
      <pre
        style={{
          background: "#181a1b",
          color: "#FFD600",
          fontSize: "0.95rem",
          borderRadius: 12,
          padding: "1.2rem",
          marginTop: 16,
        }}
      >
        {`// State Pattern
class Frame {
  setScore(pins) { /* ... */ }
}

// Strategy Pattern
class ScoringStrategy {
  calculateScore(frames) { /* ... */ }
}

// Observer Pattern
class Scoreboard {
  subscribe(player) { /* ... */ }
  notifyAll() { /* ... */ }
}`}
      </pre>
    ),
  },
];

const BowlingAlleyMachine = () => (
  <VisualizerContainer
    title="Bowling Alley Machine"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={bowlingContent} />
  </VisualizerContainer>
);

export default BowlingAlleyMachine;
