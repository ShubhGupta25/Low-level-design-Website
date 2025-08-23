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
   1) BookMyShow
   Realistic LLD: seat-locking concurrency, payment flow, caching/proxy
   ============================ */
const bookMyShowExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Observer</span> (live seat updates
          / push), <span style={{ color: "#10B981" }}>Factory</span> (ticket /
          reservation creation),{" "}
          <span style={{ color: "#F59E42" }}>Strategy</span> (pricing & promo
          selection), <span style={{ color: "#FDE047" }}>Proxy / Cache</span>{" "}
          (theatre & catalog caching).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Observer:</b> Push seat hold/release events to clients to avoid
              double-book.
            </li>
            <li>
              <b>Factory:</b> Enforce consistent ticket/reservation objects
              across seat types.
            </li>
            <li>
              <b>Strategy:</b> Switch pricing (normal, dynamic, promo) at
              runtime for experiments.
            </li>
            <li>
              <b>Proxy / Cache:</b> Cache show/screen layout for read-heavy
              traffic and as a facade to external theatre APIs.
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
          <li>Low-latency seat updates; reduces double-booking.</li>
          <li>Extensible pricing and ticket types via Strategy & Factory.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            Observer traffic spikes under load; requires backpressure and
            batching.
          </li>
          <li>
            Cache staleness must be managed carefully (TTL + invalidation).
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
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          <div style={styles.car}></div>
          <span style={styles.arrow}>→</span>
          <div
            style={{
              ...styles.car,
              background: "linear-gradient(90deg,#3b82f6 0%,#60a5fa 100%)",
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
        <div style={{ fontSize: "1.05rem", color: "#FFD600", marginBottom: 6 }}>
          <b>Client</b> → <b>Booking Service</b> → <b>Payment Gateway</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Seat Locking / Hold &nbsp;|&nbsp; Reservation &nbsp;|&nbsp; Payment &
          Confirmation
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
        {`// Seat hold (simplified)
// Observer: notify clients when hold expires
class SeatHold {
  constructor(seatId, userId, ttlMs, notifier) {
    this.seatId = seatId;
    this.userId = userId;
    this.expireAt = Date.now() + ttlMs;
    this.notifier = notifier;
  }
  release() { this.notifier.notifySeatReleased(this.seatId); }
}

// Strategy: dynamic pricing plugin
class PricingStrategy {
  getPrice(base, context) { /* e.g., surge, promo */ }
}

// Factory: ticket creation
class TicketFactory {
  create(type, metadata) { /* Standard/IMAX/3D */ }
}`}
      </pre>
    ),
  },
];

const BookMyShow = () => (
  <VisualizerContainer
    title="BookMyShow (Ticketing)"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={bookMyShowExplanation} />
  </VisualizerContainer>
);

/* ============================
   Combined default export
   ============================ */
export default BookMyShow;
