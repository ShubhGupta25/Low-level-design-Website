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
  pizza: {
    width: 80,
    height: 80,
    background: "radial-gradient(circle at 60% 40%, #FFD600 60%, #FF6F00 100%)",
    borderRadius: "50%",
    margin: "0 12px",
    display: "inline-block",
    boxShadow: "0 2px 12px #FFD60055",
    border: "2px solid #232946",
    position: "relative",
  },
  slice: {
    position: "absolute",
    width: 40,
    height: 40,
    background: "linear-gradient(135deg, #F59E42 60%, #FFD600 100%)",
    borderRadius: "0 0 40px 40px",
    left: 20,
    top: 40,
    transform: "rotate(-30deg)",
    boxShadow: "0 2px 8px #F59E4255",
  },
  bill: {
    width: 120,
    height: 40,
    background: "linear-gradient(90deg, #00FF87 0%, #00BFFF 100%)",
    borderRadius: 12,
    margin: "0 12px",
    display: "inline-block",
    boxShadow: "0 2px 12px #00FF8755",
    border: "2px solid #232946",
    color: "#232946",
    fontWeight: 700,
    fontSize: "1.1rem",
    textAlign: "center",
    lineHeight: "40px",
  },
};

const explanationContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#FFD600" }}>Decorator</span> (for pizza
          toppings), <span style={{ color: "#00BFFF" }}>Strategy</span> (for
          billing), <span style={{ color: "#F59E42" }}>Factory</span> (for pizza
          creation).
        </p>
        <p>
          <b>Why:</b> <br />
          <ul>
            <li>
              <b>Decorator:</b> To add toppings dynamically to pizzas.
            </li>
            <li>
              <b>Strategy:</b> To allow flexible billing and discount logic.
            </li>
            <li>
              <b>Factory:</b> To create different pizza types.
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
          <li>Flexible pizza customization.</li>
          <li>Extensible billing logic.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complexity for advanced billing features.</li>
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
          <div style={styles.pizza}>
            <div style={styles.slice}></div>
          </div>
          <span
            style={{ color: "#FFD600", fontSize: "2rem", margin: "0 12px" }}
          >
            +
          </span>
          <div style={styles.bill}>Bill</div>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>Decorator</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
          <b>Strategy</b> <span style={{ color: "#F59E42" }}>→</span>{" "}
          <b>Factory</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          <span>
            Pizza Customization &nbsp; | &nbsp; Billing &nbsp; | &nbsp; Creation
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
        {`// Decorator Pattern
class ToppingDecorator {
  constructor(pizza) { this.pizza = pizza; }
  getCost() { return this.pizza.getCost() + 20; }
}

// Strategy Pattern
class BillingStrategy {
  getBill(pizza) { /* ... */ }
}

// Factory Pattern
class PizzaFactory {
  createPizza(type) { /* ... */ }
}
`}
      </pre>
    ),
  },
];

const PizzaBillingSystem = () => (
  <VisualizerContainer
    title="Pizza Billing System"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={explanationContent} />
  </VisualizerContainer>
);

export default PizzaBillingSystem;
