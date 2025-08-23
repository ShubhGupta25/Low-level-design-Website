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
};

const explanationContent = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> Factory (room creation), Strategy (pricing),
          Observer (booking updates), State (room status).
        </p>
        <p>
          <b>Why:</b> To encapsulate room creation, allow dynamic pricing,
          notify users, and manage room states.
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
          <li>Flexible room types & pricing.</li>
          <li>Real-time booking updates.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complex state handling with many rooms.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        🏨 Room Factory → 💰 Strategy → 📢 Observer → 📦 State
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
          padding: "1.2rem",
          borderRadius: 12,
        }}
      >
        {`class RoomFactory { createRoom(type) { /*...*/ } }
class PricingStrategy { getPrice(room, nights) { /*...*/ } }
class BookingNotifier { subscribe(){} notifyAll(){} }
class Room { setState(state){ /*...*/ } }`}
      </pre>
    ),
  },
];

const HotelBookingSystem = () => (
  <VisualizerContainer
    title="Hotel Booking System"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={explanationContent} />
  </VisualizerContainer>
);

export default HotelBookingSystem;
