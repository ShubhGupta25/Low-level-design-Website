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
    color: "#A569BD",
    fontWeight: 600,
    fontSize: "1.2rem",
    boxShadow: "0 8px 32px #23294688",
    padding: "2.5rem 2rem",
    margin: "2.5rem auto",
    position: "relative",
    overflow: "hidden",
  },
  bell: {
    fontSize: "3rem",
    color: "#FFD600",
    margin: "0 18px",
  },
  button: {
    padding: "0.8rem 2.2rem",
    fontSize: "1.2rem",
    background: "linear-gradient(90deg, #FFD600 0%, #00FF87 100%)",
    color: "#232946",
    border: "none",
    borderRadius: "12px",
    fontWeight: 700,
    boxShadow: "0 2px 12px #FFD60055",
    margin: "0 12px",
    cursor: "pointer",
  },
};

const explanationContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#FFD600" }}>Observer</span> (for notification),{" "}
          <span style={{ color: "#A569BD" }}>State</span> (for button status),{" "}
          <span style={{ color: "#00FF87" }}>Strategy</span> (for notification
          logic).
        </p>
        <p>
          <b>Why:</b> <br />
          <ul>
            <li>
              <b>Observer:</b> To notify users when the button is pressed.
            </li>
            <li>
              <b>State:</b> To manage button status (enabled, disabled,
              loading).
            </li>
            <li>
              <b>Strategy:</b> To allow flexible notification logic.
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
          <li>Decoupled notification logic.</li>
          <li>Clear state management for button status.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complexity for advanced notification features.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 24 }}
        >
          <button style={styles.button}>Notify Me</button>
          <span style={styles.bell}>🔔</span>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>Observer</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
          <b>State</b> <span style={{ color: "#00FF87" }}>→</span>{" "}
          <b>Strategy</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          <span>
            Notification &nbsp; | &nbsp; Button Status &nbsp; | &nbsp; Logic
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
        {`// Observer Pattern
class NotifyObserver {
  subscribe(user) { /* ... */ }
  notifyAll() { /* ... */ }
}

// State Pattern
class Button {
  setState(state) { /* ... */ }
}

// Strategy Pattern
class NotificationStrategy {
  sendNotification(user) { /* ... */ }
}
`}
      </pre>
    ),
  },
];

const NotifyMeButton = () => (
  <VisualizerContainer
    title="Notify-Me Button"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={explanationContent} />
  </VisualizerContainer>
);

export default NotifyMeButton;
