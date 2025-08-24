import React, { useState, useMemo } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisualizerContainer from "../shared/VisualizerContainer";
import ExplanationSection from "../shared/ExplanationSection";

// --- Explanation Content ---
const explanationContent = [
  {
    title: "What & Why?",
    content: (
      <>
        <p>
          The <b>Adapter Pattern</b> is a structural pattern that allows objects
          with incompatible interfaces to collaborate. It acts as a wrapper
          between two objects, catching calls for one object and transforming
          them into a format that the other object can understand.
        </p>
        <p>
          Use it when you want to use an existing class, but its interface is
          not compatible with the rest of your code, and you cannot change the
          original class.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Identify the client's target interface and the adaptee's (the class
          you want to use) interface.
        </p>
        <p>
          2. Create an **Adapter** class that implements the client's target
          interface.
        </p>
        <p>
          3. The adapter class should hold a reference to the adaptee object.
        </p>
        <p>
          4. In the adapter's methods, translate the incoming request from the
          client into calls on the adaptee object.
        </p>
      </>
    ),
  },
  {
    title: "Pros & Cons",
    content: (
      <>
        <h4>Advantages ✅</h4>
        <ul>
          <li>
            <b>Single Responsibility Principle:</b> You can separate the
            interface conversion logic from the business logic.
          </li>
          <li>
            <b>Open/Closed Principle:</b> You can introduce new adapters without
            changing existing client or adaptee code.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Increased Complexity:</b> The codebase can become more complex as
            you introduce a new set of interfaces and classes.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
// Incompatible "Legacy" Service
class OldUserService {
  getUsers() {
    return [
      { userName: "jdoe", fullName: "John Doe", userAge: 32 },
      { userName: "asmith", fullName: "Alice Smith", userAge: 28 },
    ];
  }
}

// Modern Service (Target Interface)
class NewUserService {
  getUsers() {
    return [
      { id: 101, name: "Bob Johnson", email: "bob@example.com" },
      { id: 102, name: "Charlie Brown", email: "charlie@example.com" },
    ];
  }
}

// The Adapter
class UserAdapter {
  constructor(legacyService) {
    this.legacyService = legacyService;
  }
  getUsers() {
    const legacyUsers = this.legacyService.getUsers();
    // Adapt legacy data to the modern format
    return legacyUsers.map((user) => ({
      id: user.userName,
      name: user.fullName,
      email: `${user.userName}@legacy.com`,
    }));
  }
}

// --- Styles ---
const styles = {
  mainLayout: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "2rem",
  },
  dataPanel: {
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "90vw",
    height: "305px",
    overflowY: "auto",
  },
  userCard: {
    backgroundColor: "#444",
    padding: "1rem",
    borderRadius: "8px",
    margin: "0.5rem 0",
  },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "white",
  },
};

const AdapterPattern = () => {
  const [users, setUsers] = useState([]);

  const fetchModernData = () => {
    const modernService = new NewUserService();
    setUsers(modernService.getUsers());
  };

  const fetchAdaptedData = () => {
    const legacyService = new OldUserService();
    const adapter = new UserAdapter(legacyService);
    setUsers(adapter.getUsers());
  };

  const code = `// The Adaptee (Incompatible interface)
class OldPaymentGateway {
  makeOldPayment(details) {
    console.log(\`Processing payment for \${details.amount} via Old Gateway\`);
  }
}

// The Target Interface (what the client expects)
class NewPaymentProcessor {
  processPayment(amount) { /* ... */ }
}

// The Adapter
class PaymentAdapter extends NewPaymentProcessor {
  constructor(oldGateway) {
    super();
    this.oldGateway = oldGateway;
  }

  processPayment(amount) {
    // Adapt the new call to the old method
    this.oldGateway.makeOldPayment({ amount: amount });
  }
}

// Client Code
const oldGateway = new OldPaymentGateway();
const adapter = new PaymentAdapter(oldGateway);
adapter.processPayment(100); // Client uses the new interface
`;

  return (
    <VisualizerContainer
      title="Adapter Pattern"
      subtitle="Making incompatible interfaces work together."
    >
      <div style={styles.mainLayout}>
        <div style={styles.dataPanel}>
          <h3>Data Sources</h3>
          <p>Click to fetch data from different sources.</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{ ...styles.button, backgroundColor: "#3498DB" }}
              onClick={fetchModernData}
            >
              Fetch Modern Data
            </button>
            <button
              style={{ ...styles.button, backgroundColor: "#E67E22" }}
              onClick={fetchAdaptedData}
            >
              Fetch Adapted Legacy Data
            </button>
          </div>
        </div>
        <div style={styles.dataPanel}>
          <h3>Unified User List</h3>
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} style={styles.userCard}>
                <strong>{user.name}</strong> (ID: {user.id})<br />
                <span>Email: {user.email}</span>
              </div>
            ))
          ) : (
            <p>No data loaded.</p>
          )}
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={githubGist}
          customStyle={{
            background: "transparent",
            color: "smokewhite",
            fontSize: "0.9rem",
            borderRadius: "8px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <ExplanationSection content={explanationContent} />
    </VisualizerContainer>
  );
};

export default AdapterPattern;
