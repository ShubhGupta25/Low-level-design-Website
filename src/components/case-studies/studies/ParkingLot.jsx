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
    color: "#00FF87",
    fontWeight: 600,
    fontSize: "1.2rem",
    boxShadow: "0 8px 32px #23294688",
    padding: "2.5rem 2rem",
    margin: "2.5rem auto",
    position: "relative",
    overflow: "hidden",
  },
  slot: {
    width: 80,
    height: 80,
    background: "linear-gradient(135deg, #FFD600 60%, #00BFFF 100%)",
    borderRadius: "50%",
    margin: "0 12px",
    display: "inline-block",
    boxShadow: "0 2px 12px #FFD60055",
    border: "2px solid #232946",
    position: "relative",
    color: "#232946",
    fontWeight: 700,
    fontSize: "1.1rem",
    textAlign: "center",
    lineHeight: "80px",
  },
  car: {
    width: 60,
    height: 30,
    background: "linear-gradient(90deg, #FFD600 0%, #FF6F00 100%)",
    borderRadius: 15,
    margin: "0 12px",
    display: "inline-block",
    boxShadow: "0 2px 12px #FFD60055",
    border: "2px solid #232946",
  },
};

const explanationContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#FFD600" }}>Strategy</span> (for slot
          allocation), <span style={{ color: "#00FF87" }}>Observer</span> (for
          notifications), <span style={{ color: "#00BFFF" }}>State</span> (for
          slot status).
        </p>
        <p>
          <b>Why:</b> <br />
          <ul>
            <li>
              <b>Strategy:</b> To allow flexible slot allocation algorithms.
            </li>
            <li>
              <b>Observer:</b> To notify users about slot availability.
            </li>
            <li>
              <b>State:</b> To manage slot status (free, occupied, reserved).
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
          <li>Flexible slot allocation and notification logic.</li>
          <li>Clear state management for slots.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complexity for large parking lots.</li>
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
          <div style={styles.slot}>Free</div>
          <div style={styles.slot}>Occupied</div>
          <div style={styles.slot}>Reserved</div>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>Strategy</b> <span style={{ color: "#00FF87" }}>→</span>{" "}
          <b>Observer</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
          <b>State</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          <span>
            Slot Allocation &nbsp; | &nbsp; Notifications &nbsp; | &nbsp; Status
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
        {`// Strategy Pattern
class SlotStrategy {
  allocateSlot(vehicle) { /* ... */ }
}

// Observer Pattern
class SlotNotifier {
  subscribe(user) { /* ... */ }
  notifyAll() { /* ... */ }
}

// State Pattern
class Slot {
  setState(state) { /* ... */ }
}
`}
      </pre>
    ),
  },
];

const ParkingLot = () => (
  <VisualizerContainer
    title="Parking Lot"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={explanationContent} />
  </VisualizerContainer>
);

export default ParkingLot;
