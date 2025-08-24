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
          The <b>Singleton Pattern</b> is a creational pattern that ensures a
          class has only one instance and provides a global point of access to
          that instance.
        </p>
        <p>
          Use it when you need a single, shared resource that should be
          accessible from anywhere in the application, such as a database
          connection pool, a configuration manager, or a logging service.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Make the class constructor private or protected to prevent direct
          instantiation.
        </p>
        <p>
          2. Create a static method (e.g., `getInstance`) that acts as the
          constructor.
        </p>
        <p>
          3. Inside `getInstance`, create the object only if it doesn't already
          exist. Otherwise, return the existing instance.
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
            <b>Controlled Access:</b> Provides a single, globally managed access
            point to a resource.
          </li>
          <li>
            <b>Resource Saving:</b> Prevents multiple, expensive instances of an
            object from being created.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Global State:</b> Can introduce global state into the
            application, making it difficult to test and leading to tightly
            coupled code.
          </li>
          <li>
            <b>Hidden Dependencies:</b> It can be unclear that a component
            relies on a shared singleton.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
class Logger {
  static instance = null;
  static logs = [];

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  addLog(message) {
    Logger.logs.push(`[${new Date().toLocaleTimeString()}] ${message}`);
  }

  getLogs() {
    return Logger.logs;
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
  controlsPanel: {
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "90vw",
    maxWidth: "500px",
  },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "white",
  },
  logPanel: {
    flex: 1,
    backgroundColor: "#343434",
    padding: "1rem",
    borderRadius: "12px",
    overflowY: "auto",
    maxWidth: "500px",
    width: "90vw",
    height: "305px",
    overflowY: "auto",
  },
  logItem: {
    padding: "0.5rem",
    borderBottom: "1px solid #555",
    color: "white",
    fontFamily: "monospace",
  },
  heading: { color: "#FFD700" },
};

const SingletonPattern = () => {
  const [forceUpdate, setForceUpdate] = useState(0);
  const log = Logger.getInstance();

  const addLogMessage = (message) => {
    log.addLog(message);
    setForceUpdate((prev) => prev + 1); // Force re-render
  };

  const componentOneLog = () => addLogMessage(`Component 1 logged a message.`);
  const componentTwoLog = () => addLogMessage(`Component 2 logged a message.`);

  const code = `// The Singleton Class
class Database {
  static instance;
  static getInstance() {
    if (!Database.instance) {
      // Create the single instance only if it doesn't exist
      Database.instance = new Database();
    }
    return Database.instance;
  }
  
  // Private constructor
  constructor() {
    if (Database.instance) {
      throw new Error("Use Database.getInstance() instead of new.");
    }
    // ... connect to database ...
  }
}

// Client Code
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true
`;

  return (
    <VisualizerContainer
      title="Singleton Pattern"
      subtitle="Ensuring a class has only one instance."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Log Messages from Components</h3>
          <p>
            Each button logs a message, but all are managed by the same logger
            instance.
          </p>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={componentOneLog}
          >
            Log from Component 1
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#3498DB" }}
            onClick={componentTwoLog}
          >
            Log from Component 2
          </button>
        </div>
        <div style={styles.logPanel}>
          <h3 style={styles.heading}>Logger Console</h3>
          {log
            .getLogs()
            .slice()
            .reverse()
            .map((message, index) => (
              <div key={index} style={styles.logItem}>
                {message}
              </div>
            ))}
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

export default SingletonPattern;
