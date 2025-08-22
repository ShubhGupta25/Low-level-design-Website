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
          The <b>Template Method Pattern</b> defines the skeleton of an
          algorithm in a base class, allowing subclasses to override specific
          steps without changing the overall structure.
        </p>
        <p>
          Use it when you want to define the outline of an operation, but let
          subclasses customize certain steps.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Create a base class with a template method that defines the
          algorithm structure.
        </p>
        <p>2. Implement concrete subclasses that override specific steps.</p>
        <p>
          3. The template method calls the steps, some of which are implemented
          by subclasses.
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
          <li>Promotes code reuse and enforces algorithm structure.</li>
          <li>Allows subclasses to customize behavior.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Inheritance can make code harder to understand and maintain.</li>
        </ul>
      </>
    ),
  },
];

const styles = {
  mainLayout: {
    display: "grid",
    gridTemplateColumns: "320px 1fr",
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
  resultPanel: {
    backgroundColor: "#343434",
    padding: "1rem",
    borderRadius: "12px",
    minHeight: "120px",
    marginBottom: "1rem",
    color: "#fff",
    fontSize: "1.1rem",
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
    marginBottom: "0.5rem",
  },
  select: {
    padding: "0.5rem",
    borderRadius: "6px",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  codePanel: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    marginTop: "2rem",
  },
};

// --- Template Method Implementation ---
class Beverage {
  prepare() {
    let steps = [];
    steps.push(this.boilWater());
    steps.push(this.brew());
    steps.push(this.pourInCup());
    steps.push(this.addCondiments());
    return steps.filter(Boolean).join("\n");
  }
  boilWater() {
    return "Boiling water";
  }
  brew() {
    throw new Error("brew() must be implemented");
  }
  pourInCup() {
    return "Pouring into cup";
  }
  addCondiments() {
    throw new Error("addCondiments() must be implemented");
  }
}
class Tea extends Beverage {
  brew() {
    return "Steeping the tea";
  }
  addCondiments() {
    return "Adding lemon";
  }
}
class Coffee extends Beverage {
  brew() {
    return "Dripping coffee through filter";
  }
  addCondiments() {
    return "Adding sugar and milk";
  }
}

const code = `class Beverage {
  prepare() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
  boilWater() { /* ... */ }
  brew() { throw "Must implement"; }
  pourInCup() { /* ... */ }
  addCondiments() { throw "Must implement"; }
}
class Tea extends Beverage {
  brew() { /* ... */ }
  addCondiments() { /* ... */ }
}
class Coffee extends Beverage {
  brew() { /* ... */ }
  addCondiments() { /* ... */ }
}
// Usage:
// new Tea().prepare(); new Coffee().prepare();
`;

const TemplateMethodPattern = () => {
  const [selected, setSelected] = useState("Tea");
  const [result, setResult] = useState("");

  const handlePrepare = () => {
    let beverage;
    if (selected === "Tea") beverage = new Tea();
    else beverage = new Coffee();
    setResult(beverage.prepare());
  };

  return (
    <VisualizerContainer
      title="Template Method Pattern"
      subtitle="Algorithm skeleton with customizable steps"
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Beverage Maker</h3>
          <select
            style={styles.select}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="Tea">Tea</option>
            <option value="Coffee">Coffee</option>
          </select>
          <button style={styles.button} onClick={handlePrepare}>
            Prepare
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <div style={styles.resultPanel}>
            <b>Steps:</b>
            <pre style={{ margin: 0 }}>
              {result || "No beverage prepared yet."}
            </pre>
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
      </div>
      <ExplanationSection content={explanationContent} />
    </VisualizerContainer>
  );
};

export default TemplateMethodPattern;
