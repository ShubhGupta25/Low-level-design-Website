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
   2) Library Management System
   Realistic LLD: Catalog, reservations, fine strategy, notifications
   ============================ */
const libraryExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Repository / DAO</span> (catalog
          access), <span style={{ color: "#10B981" }}>Strategy</span> (fine &
          renewal policy), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
          (due-reminders / holds),{" "}
          <span style={{ color: "#FDE047" }}>Proxy</span> (access control /
          caching).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Repository:</b> Abstract persistence (SQL/NoSQL) for books and
              users.
            </li>
            <li>
              <b>Strategy:</b> Swap fine calculation (per-day, grace periods,
              caps) without changing service code.
            </li>
            <li>
              <b>Observer:</b> Notify patrons on holds available and overdue
              items.
            </li>
            <li>
              <b>Proxy:</b> Provide authorization (admin vs user) and cache hot
              catalog reads.
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
            Clear separation of persistence and business logic; pluggable fine
            policies.
          </li>
          <li>Efficient notifications and cache for frequent catalog reads.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            Reservation races require distributed locking if multiple branches
            share inventory.
          </li>
          <li>Proxy adds another layer to manage for cache invalidation.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div style={styles.smallCard}>
          <strong>Catalog Service</strong>
          <br />
          Repository → Search Index → Cache(Proxy)
        </div>
        <div style={{ fontSize: "1.05rem", color: "#FFD600", marginBottom: 6 }}>
          Catalog &nbsp;→&nbsp; Reservation &nbsp;→&nbsp; Notifications
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Repository | Strategy (Fines) | Observer (Due reminders)
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
        {`// Strategy: different fine policies
class FineStrategy {
  compute(daysLate) {}
}
class PerDayFine extends FineStrategy {
  compute(daysLate){ return daysLate * 1; }
}

// Repository example
class BookRepository {
  findByISBN(isbn) { /* DB or index */ }
}

// Observer: notify borrowers
class NotificationService {
  notify(user, message) { /* email/push */ }
}`}
      </pre>
    ),
  },
];

export const LibraryManagementSystem = () => (
  <VisualizerContainer
    title="Library Management System"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={libraryExplanation} />
  </VisualizerContainer>
);

/* ============================
   Combined default export
   ============================ */
export default LibraryManagementSystem;
