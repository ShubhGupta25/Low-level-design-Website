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
          The <b>Command Pattern</b> is a behavioral design pattern that turns a
          request into a stand-alone object containing all information about the
          request. This transformation lets you parameterize methods with
          different requests, delay or queue a request's execution, and support
          undoable operations.
        </p>
        <p>
          Use it when you want to queue operations, schedule their execution, or
          make them reversible.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Create a **Command** interface with a single `execute` method (and
          optionally an `undo` method).
        </p>
        <p>
          2. Create **Concrete Commands** that implement the interface and store
          the receiver (the object that does the work) and the parameters.
        </p>
        <p>
          3. The **Receiver** is the object that performs the actual business
          logic.
        </p>
        <p>
          4. The **Invoker** (e.g., a button) holds a command and calls its
          `execute` method when triggered.
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
            <b>Decouples Invoker and Receiver:</b> The object that invokes an
            operation doesn't need to know how to perform it.
          </li>
          <li>
            <b>Undo/Redo:</b> Commands can be easily stored to implement
            undo/redo functionality.
          </li>
          <li>
            <b>Queuing:</b> You can assemble a sequence of commands to be
            executed later.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Complexity:</b> Introduces many new classes, making the code more
            complex.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
// Receiver
class Calculator {
  constructor() {
    this.value = 0;
  }
  add(amount) {
    this.value += amount;
  }
  subtract(amount) {
    this.value -= amount;
  }
}
// Command Interface
class Command {
  execute() {}
  undo() {}
}
// Concrete Commands
class AddCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }
  execute() {
    this.calculator.add(this.value);
  }
  undo() {
    this.calculator.subtract(this.value);
  }
}
class SubtractCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }
  execute() {
    this.calculator.subtract(this.value);
  }
  undo() {
    this.calculator.add(this.value);
  }
}
// Invoker (will be the React component state)

// --- Styles ---
const styles = {
  calculator: {
    backgroundColor: "#252525",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
  },
  display: {
    backgroundColor: "#111",
    color: "white",
    fontSize: "2.5rem",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  buttons: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  button: {
    padding: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
};

const CommandPattern = () => {
  const [calculator] = useState(() => new Calculator());
  const [currentValue, setCurrentValue] = useState(0);
  const [history, setHistory] = useState([]);

  const executeCommand = (command) => {
    command.execute();
    setCurrentValue(calculator.value);
    setHistory([...history, command]);
  };

  const undo = () => {
    if (history.length === 0) return;
    const lastCommand = history.pop();
    lastCommand.undo();
    setCurrentValue(calculator.value);
    setHistory([...history]);
  };

  const code = `// Receiver
class Light {
  turnOn() { console.log("Light is ON"); }
  turnOff() { console.log("Light is OFF"); }
}

// Command Interface
class Command { execute() {} }

// Concrete Commands
class TurnOnCommand extends Command {
  constructor(light) { super(); this.light = light; }
  execute() { this.light.turnOn(); }
}

class TurnOffCommand extends Command {
  constructor(light) { super(); this.light = light; }
  execute() { this.light.turnOff(); }
}

// Invoker
class RemoteControl {
  setCommand(command) { this.command = command; }
  pressButton() { this.command.execute(); }
}

// Client Code
const light = new Light();
const remote = new RemoteControl();
remote.setCommand(new TurnOnCommand(light));
remote.pressButton(); // Light is ON
`;

  return (
    <VisualizerContainer
      title="Command Pattern"
      subtitle="Encapsulating a request as an object."
    >
      <div style={styles.calculator}>
        <div style={styles.display}>{currentValue}</div>
        <div style={styles.buttons}>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={() => executeCommand(new AddCommand(calculator, 10))}
          >
            + 10
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#E74C3C" }}
            onClick={() => executeCommand(new SubtractCommand(calculator, 5))}
          >
            - 5
          </button>
          <button
            style={{
              ...styles.button,
              backgroundColor: "#F39C12",
              gridColumn: "1 / -1",
            }}
            onClick={undo}
            disabled={history.length === 0}
          >
            Undo
          </button>
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

export default CommandPattern;
