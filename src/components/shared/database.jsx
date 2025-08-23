import styles from "./Styles";

/* ============================
   1) AirlineManagementSystem
   ============================ */
const airlineExplanation = [
  // Airline Management System
  {
    title: "",
    content: (
      <div style={styles.visualizationBlock}>
        <div
          style={{ display: "flex", alignItems: "flex-end", marginBottom: 24 }}
        >
          <div style={styles.floor}>Flight Factory</div>
          <div style={styles.floor}>Booking Strategy</div>
          <div style={styles.floor}>Notifier Observer</div>
          <div style={styles.floor}>Booking State</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "1.1rem",
            color: "#FFD600",
            marginBottom: 8,
          }}
        >
          <b style={styles.flow}>Factory</b>{" "}
          <span style={{ ...styles.flow, color: "#00BFFF" }}>→</span>{" "}
          <b style={styles.flow}>Strategy</b>{" "}
          <span style={{ ...styles.flow, color: "#A569BD" }}>→</span>{" "}
          <b style={styles.flow}>Observer</b>{" "}
          <span style={{ ...styles.flow, color: "#F59E42" }}>→</span>{" "}
          <b style={styles.flow}>State</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Flight creation &nbsp;|&nbsp; Pricing & Booking &nbsp;|&nbsp;
          Notifications &nbsp;|&nbsp; Booking Status
        </div>
      </div>
    ),
  },
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (Flights, Bookings),{" "}
          <span style={{ color: "#10B981" }}>Strategy</span> (Pricing &
          Discounts), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
          (Booking Notifications),{" "}
          <span style={{ color: "#FDE047" }}>State</span> (Booking Status).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Factory:</b> Encapsulate creation of flight & booking objects.
            </li>
            <li>
              <b>Strategy:</b> Dynamic pricing & discount policies.
            </li>
            <li>
              <b>Observer:</b> Notify passengers for booking changes & updates.
            </li>
            <li>
              <b>State:</b> Track booking stages: Reserved → Confirmed →
              Cancelled.
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
          <li>Flexible pricing & notification system.</li>
          <li>Easy to extend for new booking types.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complexity increases with multi-flight itineraries.</li>
        </ul>
      </>
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
class FlightFactory { createFlight(details){ /*...*/ } createBooking(details){ /*...*/ } }
// Strategy
class PricingStrategy { calculatePrice(flight){ /*...*/ } }
// Observer
class BookingNotifier { subscribe(user){/*...*/} notifyAll(){/*...*/} }
// State
class Booking { setState(state){/*...*/} }`}
      </pre>
    ),
  },
];

/* ============================
   4) E-commerce (Amazon/Flipkart)
   Realistic LLD: catalog, search, orders, recommendations
   ============================ */
// ============================
// 2) Amazon / E-commerce System
// ============================
const amazonExplanation = [
  {
    title: "",
    content: (
      <div style={styles.visualizationBlock}>
        <div
          style={{ display: "flex", alignItems: "flex-end", marginBottom: 24 }}
        >
          <div style={styles.floor}>Product Factory</div>
          <div style={styles.floor}>Checkout Strategy</div>
          <div style={styles.floor}>Inventory Observer</div>
          <div style={styles.floor}>Cache Proxy</div>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
          <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
          <b>Observer</b> <span style={{ color: "#F59E42" }}>→</span>{" "}
          <b>Proxy</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Product creation &nbsp;|&nbsp; Checkout & Promotions &nbsp;|&nbsp;
          Inventory Updates &nbsp;|&nbsp; Cached Access
        </div>
      </div>
    ),
  },
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (Products & Orders),{" "}
          <span style={{ color: "#10B981" }}>Strategy</span>{" "}
          (Checkout/Discounts),{" "}
          <span style={{ color: "#F59E42" }}>Observer</span> (Inventory &
          Shipment), <span style={{ color: "#FDE047" }}>Proxy</span> (Caching &
          Access Control).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Factory:</b> Abstract product & order creation.
            </li>
            <li>
              <b>Strategy:</b> Swap pricing & promotion algorithms.
            </li>
            <li>
              <b>Observer:</b> Live inventory & shipment updates.
            </li>
            <li>
              <b>Proxy:</b> Cache frequent reads, enforce access control.
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
          <li>Flexible pricing & inventory updates.</li>
          <li>Cache improves performance.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Proxy cache invalidation can be complex.</li>
        </ul>
      </>
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
class ProductFactory { createProduct(details){/*...*/} createOrder(details){/*...*/} }
// Strategy
class CheckoutStrategy { applyDiscount(cart){/*...*/} }
// Observer
class InventoryNotifier { subscribe(user){/*...*/} notifyAll(){/*...*/} }
// Proxy
class CacheProxy { get(entity){/*...*/} }`}
      </pre>
    ),
  },
];

const elevatorExplanation = [
  {
    title: "",
    content: (
      <div style={styles.visualizationBlock}>
        <div
          style={{ display: "flex", alignItems: "flex-end", marginBottom: 24 }}
        >
          <div style={styles.floor}>Idle State</div>
          <div style={styles.floor}>Move Strategy</div>
          <div style={styles.floor}>Notifier Observer</div>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
          <b>State</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
          <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
          <b>Observer</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Elevator Status &nbsp;|&nbsp; Movement Logic &nbsp;|&nbsp; Floor
          Notifications
        </div>
      </div>
    ),
  },
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b> <br />
          <span style={{ color: "#A569BD" }}>State</span> (for elevator status),{" "}
          <span style={{ color: "#00BFFF" }}>Strategy</span> (for movement
          logic), <span style={{ color: "#FFD600" }}>Observer</span> (for floor
          notifications).
        </p>
        <p>
          <b>Why:</b> <br />
          <ul>
            <li>
              <b>State:</b> To manage elevator status (idle, moving,
              maintenance).
            </li>
            <li>
              <b>Strategy:</b> To allow flexible movement algorithms.
            </li>
            <li>
              <b>Observer:</b> To notify floors/users of elevator arrival.
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
          <li>Flexible movement and notification logic.</li>
          <li>Clear state management for elevator status.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Complexity for advanced scheduling features.</li>
        </ul>
      </>
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
        {`// State Pattern
class Elevator {
  setState(state) { /* ... */ }
}

// Strategy Pattern
class MovementStrategy {
  move(elevator, floor) { /* ... */ }
}

// Observer Pattern
class FloorNotifier {
  subscribe(floor) { /* ... */ }
  notifyAll() { /* ... */ }
}
`}
      </pre>
    ),
  },
];

export { airlineExplanation, amazonExplanation, elevatorExplanation };
