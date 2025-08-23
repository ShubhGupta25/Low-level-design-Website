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

const trueCallerExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (caller profile &
          report creation), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
          (spam scoring & ranking),{" "}
          <span style={{ color: "#F59E42" }}>Observer</span> (reputation updates
          & crowdsourced signals),{" "}
          <span style={{ color: "#FDE047" }}>State</span> (Unknown → Verified →
          Spam states).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Factory:</b> Normalize creation of profiles, tags, and reports
              from diverse sources.
            </li>
            <li>
              <b>Strategy:</b> Swap scoring logic (Bayesian, ML model, heuristic
              blend).
            </li>
            <li>
              <b>Observer:</b> Real-time updates when users tag numbers or
              carriers push data.
            </li>
            <li>
              <b>State:</b> Manage transitions as evidence accumulates (e.g.,
              disputed → verified).
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
          <li>Modular risk scoring; easy to A/B test models.</li>
          <li>Community-driven updates via Observer pipeline.</li>
          <li>Clear caller trust states improve UX.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>False positives/negatives require careful thresholds.</li>
          <li>Privacy and compliance considerations add complexity.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        {/* Visualization: Profile Factory → Scoring Strategy → Reputation Observer → Trust State */}
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 24 }}
        >
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #64748b 0%, #94a3b8 100%)",
            }}
          />
          <span style={styles.arrow}>→</span>
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #22c55e 0%, #059669 100%)",
            }}
          />
          <span style={styles.arrow}>→</span>
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #f97316 0%, #ef4444 100%)",
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
            Profiles &nbsp;|&nbsp; Scoring &nbsp;|&nbsp; Reputation
            &nbsp;|&nbsp; Trust
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
        {`// Factory
class ProfileFactory { create(raw) { /* normalize into CallerProfile */ } }

// Strategy
class SpamScoreStrategy { score(profile, signals) { /* ... */ } }
class HeuristicScore extends SpamScoreStrategy {/* ... */}
class MLScore extends SpamScoreStrategy {/* ... */}

// Observer
class ReputationStream { subscribe(s) {/* ... */} push(event) {/* ... */} }

// State
class TrustState { transition(event) {/* ... */} }
class UnknownState extends TrustState {/* ... */}
class VerifiedState extends TrustState {/* ... */}
class SpamState extends TrustState {/* ... */}
`}
      </pre>
    ),
  },
];

const TrueCaller = () => (
  <VisualizerContainer
    title="TrueCaller"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={trueCallerExplanation} />
  </VisualizerContainer>
);

export default TrueCaller;