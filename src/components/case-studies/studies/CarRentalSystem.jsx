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

const explanationContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (for car object
          creation), <span style={{ color: "#10B981" }}>Strategy</span> (for
          pricing algorithms),{" "}
          <span style={{ color: "#F59E42" }}>Observer</span> (for booking
          notifications), <span style={{ color: "#FDE047" }}>State</span> (for
          car availability/status).
        </p>
        <p>
          <b>Why:</b> <br />
          <ul>
            <li>
              <b>Factory:</b> To encapsulate car creation logic and support
              multiple car types.
            </li>
            <li>
              <b>Strategy:</b> To allow flexible pricing and discount
              algorithms.
            </li>
            <li>
              <b>Observer:</b> To notify users about booking status and updates.
            </li>
            <li>
              <b>State:</b> To manage car status (available, booked,
              maintenance).
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
          <li>Extensible for new car types and pricing models.</li>
          <li>Decoupled notification logic for bookings.</li>
          <li>Clear state management for car availability.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complexity increases with more features.</li>
          <li>Requires careful state synchronization.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        {/* Visualization: Car Factory, Pricing, Booking, State */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #FFD600 0%, #FF6F00 100%)",
            }}
          ></span>
          <span style={styles.arrow}>→</span>
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #00FF87 0%, #00BFFF 100%)",
            }}
          ></span>
          <span style={styles.arrow}>→</span>
          <span
            style={{
              ...styles.car,
              background: "linear-gradient(90deg, #A569BD 0%, #FDE047 100%)",
            }}
          ></span>
        </div>
        <div
          style={{
            fontSize: "1.1rem",
            color: "#FFD600",
            marginBottom: 8,
          }}
        >
          <b>Factory</b> <span style={{ color: "#00FF87" }}>→</span>{" "}
          <b>Strategy</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
          <b>Observer</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
          <b>State</b>
        </div>
        <div
          style={{
            fontSize: "0.95rem",
            color: "#F0F0F0",
          }}
        >
          <span>
            Car Creation &nbsp; | &nbsp; Pricing &nbsp; | &nbsp; Booking &nbsp;
            | &nbsp; Status
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
class CarFactory {
  createCar(type) {
    if (type === 'SUV') return new SUV();
    if (type === 'Sedan') return new Sedan();
    // ...
  }
}

// Strategy Pattern
class PricingStrategy {
  getPrice(car, days) {
    // ...
  }
}

// Observer Pattern
class BookingNotifier {
  subscribe(user) { /* ... */ }
  notifyAll() { /* ... */ }
}

// State Pattern
class Car {
  setState(state) { /* ... */ }
}
`}
      </pre>
    ),
  },
];

const CarRentalSystem = () => (
  <VisualizerContainer
    title="Car Rental System"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={explanationContent} />
  </VisualizerContainer>
);

export default CarRentalSystem;
