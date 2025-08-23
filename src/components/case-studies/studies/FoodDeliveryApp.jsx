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
  smallCard: {
    background: "#232946",
    borderRadius: 12,
    padding: "12px 16px",
    color: "#FFD600",
    marginBottom: 12,
    boxShadow: "0 2px 12px #00000066",
  },
};

/* ============================
   5) Food Delivery (Swiggy/Zomato)
   Realistic LLD: order flow, batching, ETA, driver assignment
   ============================ */
const foodExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Observer</span> (order & ETA
          updates), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
          (assignment & ETA calculation),{" "}
          <span style={{ color: "#F59E42" }}>Factory</span> (order / courier
          objects),{" "}
          <span style={{ color: "#FDE047" }}>Circuit Breaker / Retry</span>{" "}
          (third-party APIs).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Observer:</b> Real-time push to customer & restaurant about
              order status and ETA.
            </li>
            <li>
              <b>Strategy:</b> Assign deliveries by nearest, batching
              (multi-order), or time-based SLA.
            </li>
            <li>
              <b>Factory:</b> Normalize order payloads from multiple restaurant
              integrations.
            </li>
            <li>
              <b>Circuit Breaker:</b> Stabilize calls to payment, map, or
              partner APIs.
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
          <li>
            Flexible assignment & ETA tuning; good user experience with live
            updates.
          </li>
          <li>Resilient third-party handling via Circuit Breaker.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Order batching and multi-restaurant routing are complex.</li>
          <li>High need for telemetry and monitoring.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div style={styles.smallCard}>
          <strong>Order Service</strong>
          <br />
          Restaurant → Rider Assignment → Delivery
        </div>
        <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
          Factory → Strategy → Observer → CircuitBreaker
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Order | Assignment | ETA | Third-party stability
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
        {`// Assignment Strategy
class AssignmentStrategy {
  assign(order, riders) { /* nearest / batch / earliest */ }
}

// Observer: ETA updates
class ETAStream {
  subscribe(client){/*...*/} publish(update){/*...*/} }
}`}
      </pre>
    ),
  },
];

export const FoodDeliveryApp = () => (
  <VisualizerContainer
    title="Food Delivery (Swiggy/Zomato)"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={foodExplanation} />
  </VisualizerContainer>
);

/* ============================
   Combined default export
   ============================ */
export default FoodDeliveryApp;
