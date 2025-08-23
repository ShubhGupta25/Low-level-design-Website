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

const vendingExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (product & coin handler creation), {" "}
          <span style={{ color: "#10B981" }}>Strategy</span> (change-making & pricing), {" "}
          <span style={{ color: "#F59E42" }}>Observer</span> (inventory/coin hopper alerts), {" "}
          <span style={{ color: "#FDE047" }}>State</span> (Idle → HasCredit → Dispensing → OutOfStock).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li><b>Factory:</b> Support multiple product lines and coin/bill/UPI modules.</li>
            <li><b>Strategy:</b> Plug different change algorithms and promotions.</li>
            <li><b>Observer:</b> Notify maintenance when stock is low or jams occur.</li>
            <li><b>State:</b> Enforce valid transitions for user actions.</li>
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
          <li>Handles diverse payment hardware/software.</li>
          <li>Clear UX via explicit machine states.</li>
          <li>Real-time telemetry for ops using Observer.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Edge cases: partial refunds, coin jams, double-vends.</li>
          <li>Security considerations for firmware & payments.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        {/* Visualization: Product Factory → Pricing/Change Strategy → Telemetry Observer → Machine State */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
          <span style={{ ...styles.car, background: "linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%)" }} />
          <span style={styles.arrow}>→</span>
          <span style={{ ...styles.car, background: "linear-gradient(90deg, #22c55e 0%, #84cc16 100%)" }} />
          <span style={styles.arrow}>→</span>
          <span style={{ ...styles.car, background: "linear-gradient(90deg, #f59e0b 0%, #eab308 100%)" }} />
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>Factory</b> <span style={{ color: "#00FF87" }}>→</span> <b>Strategy</b> <span style={{ color: "#00BFFF" }}>→</span> <b>Observer</b> <span style={{ color: "#A569BD" }}>→</span> <b>State</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          <span>Products &nbsp;|&nbsp; Pricing/Change &nbsp;|&nbsp; Telemetry &nbsp;|&nbsp; Machine</span>
        </div>
      </div>
    ),
  },
  {
    title: "Code Example",
    content: (
      <pre style={{ background: "#181a1b", color: "#FFD600", fontSize: "0.95rem", borderRadius: 12, padding: "1.2rem", marginTop: 16 }}>
{`// Factory
class ModuleFactory { createPayment(type) {/* coin, bill, UPI */} createProduct(sku) {/* ... */} }

// Strategy
class ChangeStrategy { makeChange(amount, hoppers) {/* ... */} }
class GreedyChange extends ChangeStrategy {/* ... */}
class OptimizedChange extends ChangeStrategy {/* ... */}

// Observer
class Telemetry { subscribe(l){/* ... */} notify(evt){/* ... */} }

// State
class VMState { insertCoin(){} select(){} dispense(){} }
class Idle extends VMState {/* ... */}
class HasCredit extends VMState {/* ... */}
class Dispensing extends VMState {/* ... */}
class OutOfStock extends VMState {/* ... */}
`}
      </pre>
    ),
  },
];

const VendingMachine = () => (
  <VisualizerContainer title="Vending Machine" subtitle="A low-level system design exploration.">
    <ExplanationSection content={vendingExplanation} />
  </VisualizerContainer>
);

export default VendingMachine;
