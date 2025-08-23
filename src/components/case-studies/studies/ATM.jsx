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

const atmExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (Account, CardSession, Transaction creation), {" "}
          <span style={{ color: "#10B981" }}>Strategy</span> (cash-dispense denomination, fee calculation), {" "}
          <span style={{ color: "#F59E42" }}>Observer</span> (audit/alerts for suspicious activity), {" "}
          <span style={{ color: "#FDE047" }}>State</span> (Ready → Authenticated → Selecting → Processing → Eject/OutOfService).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li><b>Factory:</b> Create transaction objects consistently (withdraw, deposit, transfer).</li>
            <li><b>Strategy:</b> Optimize note combinations and regional fee rules.</li>
            <li><b>Observer:</b> Stream events for audit trails and fraud detection.</li>
            <li><b>State:</b> Rigid flow to protect hardware and user funds.</li>
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
          <li>Strong separation of concerns with clear states.</li>
          <li>Easy to plug regional rules and currencies.</li>
          <li>Real-time monitoring via Observer for security.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Hardware errors (cash cassette, card reader) complicate flows.</li>
          <li>High compliance & certification burden.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        {/* Visualization: Transaction Factory → Fee/Dispense Strategy → Audit Observer → Session State */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
          <span style={{ ...styles.car, background: "linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)" }} />
          <span style={styles.arrow}>→</span>
          <span style={{ ...styles.car, background: "linear-gradient(90deg, #16a34a 0%, #84cc16 100%)" }} />
          <span style={styles.arrow}>→</span>
          <span style={{ ...styles.car, background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }} />
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>Factory</b> <span style={{ color: "#00FF87" }}>→</span> <b>Strategy</b> <span style={{ color: "#00BFFF" }}>→</span> <b>Observer</b> <span style={{ color: "#A569BD" }}>→</span> <b>State</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          <span>Transactions &nbsp;|&nbsp; Dispense/Fee &nbsp;|&nbsp; Audit &nbsp;|&nbsp; Session</span>
        </div>
      </div>
    ),
  },
  {
    title: "Code Example",
    content: (
      <pre style={{ background: "#181a1b", color: "#FFD600", fontSize: "0.95rem", borderRadius: 12, padding: "1.2rem", marginTop: 16 }}>
{`// Factory
class TransactionFactory { withdraw(a){/* ... */} deposit(a){/* ... */} transfer(a){/* ... */} }

// Strategy
class DispenseStrategy { combine(amount, cassettes){/* ... */} }
class MinimalNotes extends DispenseStrategy {/* ... */}
class BalancedWear extends DispenseStrategy {/* ... */}

// Observer
class AuditStream { subscribe(h){/* ... */} emit(event){/* ... */} }

// State
class ATMState { handle(event){/* ... */} }
class Ready extends ATMState {/* ... */}
class Authenticated extends ATMState {/* ... */}
class Selecting extends ATMState {/* ... */}
class Processing extends ATMState {/* ... */}
class Eject extends ATMState {/* ... */}
class OutOfService extends ATMState {/* ... */}
`}
      </pre>
    ),
  },
];

export const ATMSystem = () => (
  <VisualizerContainer title="ATM System" subtitle="A low-level system design exploration.">
    <ExplanationSection content={atmExplanation} />
  </VisualizerContainer>
);

export default ATMSystem;
