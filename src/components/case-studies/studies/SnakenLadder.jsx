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
  board: {
    width: "90%",
    height: "220px",
    background: "linear-gradient(135deg, #232946 60%, #FFD600 100%)",
    borderRadius: "18px",
    border: "2px solid #FFD600",
    margin: "0 auto 18px auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxShadow: "0 2px 16px #FFD60055",
  },
  cell: {
    width: 32,
    height: 32,
    background: "#181a1b",
    borderRadius: 8,
    border: "1px solid #FFD600",
    margin: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFD600",
    fontWeight: 700,
    fontSize: "1rem",
    position: "relative",
  },
  snake: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    color: "#A569BD",
    fontSize: "1.3rem",
    fontWeight: 900,
  },
  ladder: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    color: "#00FF87",
    fontSize: "1.3rem",
    fontWeight: 900,
  },
};

const explanationContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#FFD600" }}>State</span> (for player position),{" "}
          <span style={{ color: "#00BFFF" }}>Strategy</span> (for dice roll
          logic), <span style={{ color: "#A569BD" }}>Observer</span> (for game
          events).
        </p>
        <p>
          <b>Why:</b> <br />
          <ul>
            <li>
              <b>State:</b> To track player positions and game status.
            </li>
            <li>
              <b>Strategy:</b> To allow different dice roll algorithms.
            </li>
            <li>
              <b>Observer:</b> To notify players of game events (snake, ladder,
              win).
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
          <li>Clear separation of game logic and state.</li>
          <li>Easy to extend for new rules or events.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complexity for advanced features.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div style={styles.board}>
          {[...Array(25)].map((_, i) => (
            <div key={i} style={styles.cell}>
              {i + 1}
              {i === 5 && <span style={styles.snake}>🐍</span>}
              {i === 12 && <span style={styles.ladder}>🪜</span>}
              {i === 18 && <span style={styles.snake}>🐍</span>}
              {i === 22 && <span style={styles.ladder}>🪜</span>}
            </div>
          ))}
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>State</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
          <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
          <b>Observer</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          <span>
            Player Position &nbsp; | &nbsp; Dice Roll &nbsp; | &nbsp; Game
            Events
          </span>
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
class Player {
  setPosition(pos) { /* ... */ }
}

// Strategy Pattern
class DiceStrategy {
  roll() { /* ... */ }
}

// Observer Pattern
class GameEvent {
  subscribe(player) { /* ... */ }
  notifyAll() { /* ... */ }
}
`}
      </pre>
    ),
  },
];

const SnakenLadder = () => (
  <VisualizerContainer
    title="Snake n Ladder"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={explanationContent} />
  </VisualizerContainer>
);

export default SnakenLadder;
