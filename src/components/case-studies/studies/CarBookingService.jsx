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
   3) RideHailing (Uber/Ola)
   Realistic LLD: matching, routing, surge pricing, tracking
   ============================ */
const rideExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Strategy</span> (pricing:
          surge/pool), <span style={{ color: "#10B981" }}>Observer</span>{" "}
          (driver location updates),{" "}
          <span style={{ color: "#F59E42" }}>Factory</span> (ride/vehicle
          objects),{" "}
          <span style={{ color: "#FDE047" }}>Singleton / Adapter</span> (map &
          routing).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Strategy:</b> Use different fare formulas and pooling
              heuristics.
            </li>
            <li>
              <b>Observer:</b> Stream driver GPS to match & track rides in real
              time.
            </li>
            <li>
              <b>Factory:</b> Normalize ride/vehicle types and capabilities.
            </li>
            <li>
              <b>Singleton/Adapter:</b> Wrap mapping/routing provider for
              consistency and caching.
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
            Flexible pricing and matching strategies; good for A/B testing.
          </li>
          <li>
            Real-time tracking with Observer enables ETA & safety features.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            High throughput of location events; needs efficient ingestion &
            downsampling.
          </li>
          <li>
            Routing cost and map dependency must be managed (caching, quotas).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
        >
          <div style={styles.car}></div>
          <span style={styles.arrow}>→</span>
          <div
            style={{
              ...styles.car,
              background: "linear-gradient(90deg,#f97316 0%,#fb923c 100%)",
            }}
          ></div>
          <span style={styles.arrow}>→</span>
          <div
            style={{
              ...styles.car,
              background: "linear-gradient(90deg,#22c55e 0%,#10b981 100%)",
            }}
          ></div>
        </div>
        <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
          Rider → Matching → Driver (tracking)
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Strategy (Pricing) | Observer (Location) | Routing
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
        {`// Matching pseudocode
class MatchingService {
  match(riderLocation, availableDrivers, strategy) {
    return strategy.selectDrivers(riderLocation, availableDrivers);
  }
}

// Strategy: choose driver(s)
class NearestDriverStrategy {
  selectDrivers(loc, drivers){ /* sort by ETA */ }
}

// Observer: driver updates
class LocationStream {
  subscribe(listener){/*...*/}
  publish(loc){/*...*/}
}`}
      </pre>
    ),
  },
];

export const CarBookingService = () => (
  <VisualizerContainer
    title="Ride Hailing (Uber/Ola)"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={rideExplanation} />
  </VisualizerContainer>
);

/* ============================
   Combined default export
   ============================ */
export default CarBookingService;
