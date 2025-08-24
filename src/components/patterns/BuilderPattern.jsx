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
          The <b>Builder Pattern</b> is a creational pattern that lets you
          construct complex objects step-by-step. The pattern separates the
          construction of an object from its representation, so the same
          construction process can create different representations.
        </p>
        <p>
          Use it when an object's constructor has many parameters, or when the
          object requires a large number of optional steps to be assembled. It
          avoids a "telescopic constructor" problem.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>1. Create a **Product** class (the complex object to be built).</p>
        <p>
          2. Create a **Builder** interface with methods for each step of the
          object's construction.
        </p>
        <p>
          3. Create a **Concrete Builder** that implements the builder interface
          and holds a reference to the product it's building.
        </p>
        <p>
          4. Implement a **Director** (optional) to manage the builder and
          execute common construction sequences.
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
            <b>Clean Code:</b> You can build objects without a long list of
            constructor parameters.
          </li>
          <li>
            <b>Fine-Grained Control:</b> The client controls which parts of the
            object are built.
          </li>
          <li>
            <b>Single Responsibility Principle:</b> The builder handles the
            construction logic, while the product class remains simple.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Complexity:</b> Introduces new classes for the builder and
            director, increasing the code's overall complexity.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
class Computer {
  constructor() {
    this.parts = {};
  }
  listParts() {
    return Object.entries(this.parts).map(([key, value]) => `${key}: ${value}`);
  }
}

class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }
  setCPU(cpu) {
    this.computer.parts.CPU = cpu;
    return this;
  }
  setRAM(ram) {
    this.computer.parts.RAM = ram;
    return this;
  }
  setGPU(gpu) {
    this.computer.parts.GPU = gpu;
    return this;
  }
  setStorage(storage) {
    this.computer.parts.Storage = storage;
    return this;
  }
  build() {
    return this.computer;
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
  builderPanel: {
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "90vw",
    maxWidth: "500px",
  },
  productPanel: {
    backgroundColor: "#343434",
    padding: "1.5rem",
    borderRadius: "12px",
    overflowY: "auto",
    maxWidth: "500px",
    width: "90vw",
    height: "305px",
    overflowY: "auto",
  },
  productDisplay: {
    padding: "1rem",
    border: "2px dashed #999",
    borderRadius: "8px",
  },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "white",
  },
  partList: { listStyleType: "none", padding: 0 },
};

const BuilderPattern = () => {
  const [computer, setComputer] = useState(null);
  const builder = new ComputerBuilder();

  const buildGamingPC = () => {
    const pc = builder
      .setCPU("Intel i9")
      .setRAM("32GB DDR5")
      .setGPU("NVIDIA RTX 4080")
      .setStorage("1TB NVMe SSD")
      .build();
    setComputer(pc);
  };

  const buildOfficePC = () => {
    const pc = builder
      .setCPU("Intel i5")
      .setRAM("16GB DDR4")
      .setStorage("512GB SSD")
      .build();
    setComputer(pc);
  };

  const code = `// The Product
class Car {
  constructor(engine, seats, gps) {
    // ... many parameters
  }
}

// The Builder
class CarBuilder {
  setEngine(engine) { this.engine = engine; return this; }
  setSeats(count) { this.seats = count; return this; }
  setGPS() { this.gps = true; return this; }
  build() {
    return new Car(this.engine, this.seats, this.gps);
  }
}

// Client Code (Director)
const car = new CarBuilder()
  .setEngine('V8')
  .setSeats(4)
  .setGPS()
  .build();
`;

  return (
    <VisualizerContainer
      title="Builder Pattern"
      subtitle="Constructing a complex object step-by-step."
    >
      <div style={styles.mainLayout}>
        <div style={styles.builderPanel}>
          <h3>Computer Builder</h3>
          <p>
            Build a computer by selecting a configuration. The builder handles
            the construction details behind the scenes.
          </p>
          <button
            style={{ ...styles.button, backgroundColor: "#A569BD" }}
            onClick={buildGamingPC}
          >
            Build Gaming PC
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={buildOfficePC}
          >
            Build Office PC
          </button>
        </div>
        <div style={styles.productPanel}>
          <h3>Built Computer</h3>
          {computer ? (
            <div style={styles.productDisplay}>
              <h4 style={{ color: "#FFD700" }}>Product Details:</h4>
              <ul style={styles.partList}>
                {computer.listParts().map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Click a button to build a computer!</p>
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

export default BuilderPattern;
