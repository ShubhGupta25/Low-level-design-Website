import React, { useState } from "react";
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
          The <b>Null Object Pattern</b> is a behavioral pattern that provides
          an object with a default "do nothing" behavior to stand in for a
          `null` value. This helps in avoiding tedious `if (object != null)`
          checks and makes client code simpler.
        </p>
        <p>
          Use it when you frequently need to check for a `null` value before
          performing an action. The Null Object implements the same interface as
          the real object, so the client code can interact with both
          interchangeably.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Define a common **Interface** for the real object and the Null
          Object.
        </p>
        <p>
          2. Create a **Real Subject** that implements this interface and
          provides real behavior.
        </p>
        <p>
          3. Create a **Null Object** class that implements the same interface,
          but its methods have empty or "do nothing" implementations.
        </p>
        <p>
          4. Client code can now use the Null Object instead of `null` and avoid
          conditional checks.
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
            <b>Reduces Null Checks:</b> Eliminates repetitive `if (null)`
            checks, making code cleaner and more readable.
          </li>
          <li>
            <b>Centralized Behavior:</b> The "do nothing" behavior is
            encapsulated in a single place.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Can Hide Bugs:</b> A bug might be masked if a `null` value is
            replaced by a "silent" Null Object.
          </li>
          <li>
            <b>Added Complexity:</b> Might be overkill for simple cases and adds
            another class to the codebase.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
// Subject Interface
class User {
  getName() {
    throw new Error("Method must be implemented");
  }
  isLoggedIn() {
    throw new Error("Method must be implemented");
  }
}

// Real Subject
class RealUser extends User {
  constructor(name) {
    super();
    this.name = name;
  }
  getName() {
    return this.name;
  }
  isLoggedIn() {
    return true;
  }
}

// Null Object
class NullUser extends User {
  getName() {
    return "Guest";
  }
  isLoggedIn() {
    return false;
  }
}

// --- Styles ---
const styles = {
  mainLayout: {
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    gap: "2rem",
  },
  controlsPanel: {
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  profilePanel: {
    backgroundColor: "#343434",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
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

const NullObjectPattern = () => {
  const [user, setUser] = useState(new NullUser());

  const handleLogin = () => {
    setUser(new RealUser("Alice"));
  };

  const handleLogout = () => {
    setUser(new NullUser());
  };

  const code = `// The Service Interface
class LoggingService {
  log(message) { /*...*/ }
}

// The Null Object
class NullLoggingService extends LoggingService {
  log(message) {
    // Do nothing. This object is "silent".
  }
}

// The Client Code (without null checks)
function processData(service, data) {
  // We don't need to check 'if (service != null)'
  // as the Null Object provides a safe, no-op behavior.
  service.log(\`Processing data: \${data}\`);
}

// Usage
const realService = new LoggingService();
const nullService = new NullLoggingService();

processData(realService, "Important info"); // Logs message
processData(nullService, "Unimportant info"); // Does nothing
`;

  return (
    <VisualizerContainer
      title="Null Object Pattern"
      subtitle="Replacing null values with a 'do nothing' object."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>User Authentication</h3>
          <p>
            Login and logout to see how the user profile component handles both
            real and null objects seamlessly.
          </p>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={handleLogin}
          >
            Log In
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#E74C3C" }}
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
        <div style={styles.profilePanel}>
          <h3>User Profile</h3>
          <p>
            Welcome, <strong>{user.getName()}</strong>!
          </p>
          <p>
            {user.isLoggedIn() ? "Status: Logged In" : "Status: Not Logged In"}
          </p>
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

export default NullObjectPattern;
