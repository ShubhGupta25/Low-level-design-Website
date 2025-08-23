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
  vizPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.08,
    pointerEvents: "none",
  },
  car: {
    width: 80,
    height: 40,
    background: "linear-gradient(90deg, #FFD600 0%, #00FF87 50%, #00BFFF 100%)",
    borderRadius: 20,
    margin: "0 12px",
    display: "inline-block",
    boxShadow: "0 2px 12px #FFD60055",
    border: "2px solid #232946",
  },
  arrow: {
    fontSize: "2.2rem",
    color: "#00BFFF",
    margin: "0 8px",
    verticalAlign: "middle",
  },
};

const trafficLightExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (for intersection
          controller creation),{" "}
          <span style={{ color: "#10B981" }}>Strategy</span> (timing & adaptive
          signal plans), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
          (sensor & emergency-vehicle events),{" "}
          <span style={{ color: "#FDE047" }}>State</span> (signal phases: Red →
          Green → Amber).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Factory:</b> Standardize creation of controllers for different
              junction types (T, 4-way, roundabout).
            </li>
            <li>
              <b>Strategy:</b> Swap between fixed, time-of-day, or AI/adaptive
              timing algorithms.
            </li>
            <li>
              <b>Observer:</b> React to detectors (loop, camera) and priority
              preemption (ambulance).
            </li>
            <li>
              <b>State:</b> Model safe transitions and inter-green intervals.
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
          <li>Pluggable timing algorithms for different traffic patterns.</li>
          <li>Real-time responsiveness to sensor inputs.</li>
          <li>Safe, explicit phase transitions via State.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complex to tune strategies across a network of intersections.</li>
          <li>Hardware integration and fault tolerance add overhead.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        {/* Visualization: Controller Factory → Timing Strategy → Sensor Observer → Phase State */}
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 24 }}
        >
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #e11d48 0%, #ef4444 100%)",
            }}
          />
          <span style={styles.arrow}>→</span>
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #10b981 0%, #22c55e 100%)",
            }}
          />
          <span style={styles.arrow}>→</span>
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #f59e0b 0%, #fde047 100%)",
            }}
          />
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>Factory</b> <span style={{ color: "#00FF87" }}>→</span>{" "}
          <b>Strategy</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
          <b>Observer</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
          <b>State</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          <span>
            Controller &nbsp;|&nbsp; Timing &nbsp;|&nbsp; Sensors &nbsp;|&nbsp;
            Phase
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
        {`// Factory Pattern
class IntersectionFactory {
  create(type) {
    if (type === 'FOUR_WAY') return new FourWayController();
    if (type === 'T_JUNCTION') return new TJunctionController();
  }
}

// Strategy Pattern
class TimingStrategy { computePhaseDurations(context) {/* ... */} }
class FixedTimeStrategy extends TimingStrategy {/* ... */}
class AdaptiveStrategy extends TimingStrategy {/* uses sensors to adapt */}

// Observer Pattern
class SensorBus { subscribe(listener) {/* ... */} publish(event) {/* ... */} }

// State Pattern
class SignalState { next() {/* ... */} }
class RedState extends SignalState {/* ... */}
class GreenState extends SignalState {/* ... */}
class AmberState extends SignalState {/* ... */}
`}
      </pre>
    ),
  },
];

const TrafficLightSystem = () => (
  <VisualizerContainer
    title="Traffic Light System"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={trafficLightExplanation} />
  </VisualizerContainer>
);

export default TrafficLightSystem;
