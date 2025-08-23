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
    color: "#F59E42",
    fontWeight: 600,
    fontSize: "1.2rem",
    boxShadow: "0 8px 32px #23294688",
    padding: "2.5rem 2rem",
    margin: "2.5rem auto",
    position: "relative",
    overflow: "hidden",
  },
  scoreCard: {
    background: "#232946",
    borderRadius: "14px",
    border: "2px solid #FFD600",
    padding: "1rem",
    color: "#FFD600",
    fontSize: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 10px #FFD60055",
    marginBottom: 16,
  },
};

const cricBuzzExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b>
          <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (Match, Player,
          Scorecard creation),{" "}
          <span style={{ color: "#10B981" }}>Observer</span> (live score &
          commentary updates),{" "}
          <span style={{ color: "#F59E42" }}>Strategy</span> (scoring
          algorithms: T20, ODI, Test),{" "}
          <span style={{ color: "#FDE047" }}>State</span> (Inning Progress:
          Start → Mid → Completed).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Factory:</b> Normalize cricket entities (players, matches).
            </li>
            <li>
              <b>Observer:</b> Real-time push of scores & events.
            </li>
            <li>
              <b>Strategy:</b> Switch between scoring rules for formats.
            </li>
            <li>
              <b>State:</b> Manage match lifecycle & inning transitions.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title: "Advantages & Disadvantages",
    content: (
      <>
        <h4>Advantages ✅</h4>
        <ul>
          <li>Supports multiple formats (ODI, T20, Test).</li>
          <li>Real-time updates for engaging UX.</li>
          <li>Extensible match & player entities.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Real-time infra scaling is costly.</li>
          <li>Edge cases (rain, DLS method) increase complexity.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div style={styles.scoreCard}>
          <h3>India 🇮🇳 245/6 (45.3)</h3>
          <p>Virat Kohli: 75*</p>
          <p>Last Ball: 4️⃣</p>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginTop: 8 }}>
          <b>Factory</b> → <b>Observer</b> → <b>Strategy</b> → <b>State</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Entities | Live Updates | Format Rules | Lifecycle
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
        {`// Factory
class MatchFactory { createMatch(type){/*...*/} createPlayer(name){/*...*/} }

// Observer
class LiveFeed {
  subscribe(user){/*...*/}
  notifyAll(update){/*...*/}
}

// Strategy
class ScoringStrategy { calculateRun(ball){/*...*/} }
class T20Scoring extends ScoringStrategy {/*...*/}
class TestScoring extends ScoringStrategy {/*...*/}

// State
class InningState { next(event){/*...*/} }`}
      </pre>
    ),
  },
];

export const CricBuzz = () => (
  <VisualizerContainer
    title="CricBuzz (Live Cricket Scores)"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={cricBuzzExplanation} />
  </VisualizerContainer>
);

export default CricBuzz;
