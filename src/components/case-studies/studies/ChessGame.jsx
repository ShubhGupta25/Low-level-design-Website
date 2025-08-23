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
   Chess Game
-------------------------- */
const chessContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#FFD600" }}>Factory</span> (for creating
          pieces), <span style={{ color: "#00BFFF" }}>Strategy</span> (for move
          rules), <span style={{ color: "#A569BD" }}>Observer</span> (for game
          events like check/checkmate).
        </p>
        <ul>
          <li>
            <b>Factory:</b> Encapsulates piece creation (Pawn, Rook, etc).
          </li>
          <li>
            <b>Strategy:</b> Defines movement behavior.
          </li>
          <li>
            <b>Observer:</b> Updates UI and players when game events occur.
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
          <li>Cleanly separates piece creation and movement logic.</li>
          <li>Easy to add new rules like castling or en-passant.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complex interactions between pieces add overhead.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div style={styles.board}>
          {[...Array(64)].map((_, i) => {
            const isDark = (Math.floor(i / 8) + i) % 2 === 1;
            return (
              <div key={i} style={styles.square(isDark)}>
                {i === 0 && "♖"}
                {i === 1 && "♘"}
                {i === 2 && "♗"}
                {i === 3 && "♕"}
                {i === 4 && "♔"}
                {i === 5 && "♗"}
                {i === 6 && "♘"}
                {i === 7 && "♖"}
                {i >= 8 && i < 16 && "♙"}
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600" }}>
          Factory → Strategy → Observer
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
        {`// Factory Pattern
class PieceFactory {
  createPiece(type, color) { /* ... */ }
}

// Strategy Pattern
class MoveStrategy {
  canMove(piece, from, to) { /* ... */ }
}

// Observer Pattern
class GameEvent {
  subscribe(listener) { /* ... */ }
  notifyAll() { /* ... */ }
}`}
      </pre>
    ),
  },
];

const ChessGame = () => (
  <VisualizerContainer
    title="Chess Game"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={chessContent} />
  </VisualizerContainer>
);

export default ChessGame;
