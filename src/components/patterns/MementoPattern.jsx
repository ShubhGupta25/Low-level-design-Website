import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisualizerContainer from "../shared/VisualizerContainer";
import ExplanationSection from "../shared/ExplanationSection";

const explanationContent = [
  {
    title: "What & Why?",
    content: (
      <>
        <p>
          The <b>Memento Pattern</b> allows you to capture and restore an
          object's state without exposing its internal details. It's useful for
          implementing undo/redo functionality.
        </p>
        <p>
          Use it when you need to save and restore previous states of an object,
          such as in text editors, games, or configuration management.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>1. Create a Memento class to store the state.</p>
        <p>2. Originator creates and restores mementos.</p>
        <p>3. Caretaker manages mementos and requests state changes.</p>
      </>
    ),
  },
  {
    title: "Pros & Cons",
    content: (
      <>
        <h4>Advantages ✅</h4>
        <ul>
          <li>Encapsulates state without violating encapsulation.</li>
          <li>Enables undo/redo functionality.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Can consume a lot of memory if states are large or frequent.</li>
        </ul>
      </>
    ),
  },
];

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
    maxWidth: "300px",
  },
  statePanel: {
    backgroundColor: "#343434",
    padding: "1rem",
    borderRadius: "12px",
    minHeight: "120px",
    marginBottom: "1rem",
    color: "#fff",
    fontSize: "1.1rem",
    marginTop: "1rem",
    width: "90vw",
    maxWidth: "300px",
  },
  input: {
    padding: "0.7rem",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#181818",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  button: {
    padding: "0.7rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    background: "#A569BD",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  },
  codePanel: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "90vw",
    height: "420px",
    overflowY: "auto",
  },
};

// --- Memento Implementation ---
class Memento {
  constructor(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}
class Originator {
  constructor() {
    this.state = "";
  }
  setState(state) {
    this.state = state;
  }
  createMemento() {
    return new Memento(this.state);
  }
  restore(memento) {
    this.state = memento.getState();
  }
  getState() {
    return this.state;
  }
}
class Caretaker {
  constructor(originator) {
    this.originator = originator;
    this.mementos = [];
    this.current = -1;
  }
  save() {
    // Remove redo history
    this.mementos = this.mementos.slice(0, this.current + 1);
    this.mementos.push(this.originator.createMemento());
    this.current++;
  }
  undo() {
    if (this.current > 0) {
      this.current--;
      this.originator.restore(this.mementos[this.current]);
    }
  }
  redo() {
    if (this.current < this.mementos.length - 1) {
      this.current++;
      this.originator.restore(this.mementos[this.current]);
    }
  }
}

const code = `class Memento {
  constructor(state) { this.state = state; }
  getState() { return this.state; }
}
class Originator {
  setState(state) { this.state = state; }
  createMemento() { return new Memento(this.state); }
  restore(memento) { this.state = memento.getState(); }
}
class Caretaker {
  save() { /* ... */ }
  undo() { /* ... */ }
  redo() { /* ... */ }
}
// Usage:
// originator.setState('A'); caretaker.save();
// originator.setState('B'); caretaker.save();
// caretaker.undo(); caretaker.redo();
`;

const MementoPattern = () => {
  const [originator] = useState(() => new Originator());
  const [caretaker] = useState(() => new Caretaker(originator));
  const [input, setInput] = useState("");
  const [state, setState] = useState("");

  const handleSetState = () => {
    originator.setState(input);
    caretaker.save();
    setState(originator.getState());
  };
  const handleUndo = () => {
    caretaker.undo();
    setState(originator.getState());
  };
  const handleRedo = () => {
    caretaker.redo();
    setState(originator.getState());
  };

  return (
    <VisualizerContainer
      title="Memento Pattern"
      subtitle="Save and restore object state (undo/redo)"
    >
      <div style={styles.mainLayout}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={styles.controlsPanel}>
            <h3>State Manager</h3>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter new state..."
              style={styles.input}
            />
            <button style={styles.button} onClick={handleSetState}>
              Set State
            </button>
            <button style={styles.button} onClick={handleUndo}>
              Undo
            </button>
            <button style={styles.button} onClick={handleRedo}>
              Redo
            </button>
          </div>
          <div style={styles.statePanel}>
            <b>Current State:</b>{" "}
            {state || <span style={{ color: "#aaa" }}>No state set.</span>}
          </div>
        </div>
        <div style={styles.codePanel}>
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
      </div>
      <ExplanationSection content={explanationContent} />
    </VisualizerContainer>
  );
};

export default MementoPattern;
