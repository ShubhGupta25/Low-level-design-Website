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
          The <b>Bridge Pattern</b> is a structural pattern that lets you split
          a large class or a set of closely related classes into two separate
          hierarchies—**abstraction** and **implementation**—which can be
          developed independently of each other.
        </p>
        <p>
          Use it when you have an object that can have many different variations
          and behaviors. By separating the two, you avoid a "class explosion"
          problem, where you would have to create a new class for every
          combination of abstraction and implementation.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>1. Identify the core abstraction and its various implementations.</p>
        <p>2. Define the **Implementation** interface with basic operations.</p>
        <p>
          3. Create a class for the **Abstraction**. It should contain a
          reference to an object that implements the Implementation interface.
        </p>
        <p>
          4. Implement **Refined Abstractions** (e.g., `AdvancedRemote`) and
          **Concrete Implementations** (e.g., `TV`, `Radio`).
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
            <b>Decoupling:</b> Abstraction and implementation can be changed and
            extended independently.
          </li>
          <li>
            <b>Open/Closed Principle:</b> You can introduce new abstractions or
            implementations without changing existing code.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Complexity:</b> Adds a layer of indirection and can make the code
            more difficult to understand initially.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
// Implementation Interface
class Device {
  turnOn() {}
  turnOff() {}
  setVolume(percent) {}
}

// Concrete Implementations
class TV extends Device {
  constructor() {
    super();
    this.name = "TV";
    this.isOn = false;
    this.volume = 50;
  }
  turnOn() {
    this.isOn = true;
    return `${this.name} is now ON.`;
  }
  turnOff() {
    this.isOn = false;
    return `${this.name} is now OFF.`;
  }
  setVolume(percent) {
    this.volume = percent;
    return `${this.name} volume set to ${this.volume}%.`;
  }
}
class Radio extends Device {
  constructor() {
    super();
    this.name = "Radio";
    this.isOn = false;
    this.volume = 30;
  }
  turnOn() {
    this.isOn = true;
    return `${this.name} is now ON.`;
  }
  turnOff() {
    this.isOn = false;
    return `${this.name} is now OFF.`;
  }
  setVolume(percent) {
    this.volume = percent;
    return `${this.name} volume set to ${this.volume}%.`;
  }
}

// Abstraction
class Remote {
  constructor(device) {
    this.device = device;
  }
  togglePower() {
    return this.device.isOn ? this.device.turnOff() : this.device.turnOn();
  }
  volumeUp() {
    return this.device.setVolume(this.device.volume + 10);
  }
  volumeDown() {
    return this.device.setVolume(this.device.volume - 10);
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
  panel: {
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
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
    width: "100%",
    marginBottom: "0.5rem",
  },
  deviceInfo: {
    backgroundColor: "#343434",
    padding: "1rem",
    borderRadius: "8px",
    marginTop: "1rem",
    fontFamily: "monospace",
    maxWidth: "470px",
    width: "80vw",
    height: "100px",
    overflowY: "auto",
  },
};

const BridgePattern = () => {
  const [currentDevice, setCurrentDevice] = useState(new TV());
  const [remote, setRemote] = useState(() => new Remote(new TV()));
  const [log, setLog] = useState("");

  const changeDevice = (device) => {
    const newRemote = new Remote(device);
    setRemote(newRemote);
    setCurrentDevice(device);
    setLog(`Remote now controlling the ${device.name}.`);
  };

  const handleAction = (action) => {
    const message = remote[action]();
    setLog(message);
    setRemote(Object.create(remote)); // Force re-render to update UI
  };

  const code = `// Abstraction Interface
class Shape { constructor(renderer) { this.renderer = renderer; } draw() { /*...*/ } }
// Implementation Interface
class Renderer { renderCircle(radius) { /*...*/ } }

// Refined Abstractions
class Circle extends Shape {
  constructor(renderer, radius) { super(renderer); this.radius = radius; }
  draw() { this.renderer.renderCircle(this.radius); }
}
class Square extends Shape { /*...*/ }

// Concrete Implementations
class VectorRenderer extends Renderer {
  renderCircle(radius) { console.log(\`Drawing a circle with vector graphics...\`); }
}
class RasterRenderer extends Renderer {
  renderCircle(radius) { console.log(\`Drawing a circle with pixels...\`); }
}

// Usage
const vectorCircle = new Circle(new VectorRenderer(), 10);
vectorCircle.draw(); // Abstraction (Circle) and Implementation (VectorRenderer) are decoupled
`;

  return (
    <VisualizerContainer
      title="Bridge Pattern"
      subtitle="Splitting a class into two independent hierarchies."
    >
      <div style={styles.mainLayout}>
        <div style={styles.panel}>
          <h3>Device Selection</h3>
          <button
            style={{ ...styles.button, backgroundColor: "#3498DB" }}
            onClick={() => changeDevice(new TV())}
          >
            Control TV
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={() => changeDevice(new Radio())}
          >
            Control Radio
          </button>
          <div style={styles.deviceInfo}>
            Controlling: <strong>{currentDevice.name}</strong>
            <br />
            Status: {currentDevice.isOn ? "ON" : "OFF"}
            <br />
            Volume: {currentDevice.volume}
          </div>
        </div>
        <div style={styles.panel}>
          <h3>Universal Remote</h3>
          <button
            style={{ ...styles.button, backgroundColor: "#E74C3C" }}
            onClick={() => handleAction("togglePower")}
          >
            Power
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#F39C12" }}
            onClick={() => handleAction("volumeUp")}
          >
            Volume Up
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#A569BD" }}
            onClick={() => handleAction("volumeDown")}
          >
            Volume Down
          </button>
          <div style={styles.deviceInfo}>
            <strong>Remote Log:</strong>
            <br />
            {log || "Click a button to start..."}
          </div>
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

export default BridgePattern;
