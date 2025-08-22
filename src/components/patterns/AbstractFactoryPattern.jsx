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
          The <b>Abstract Factory Pattern</b> provides an interface for creating
          families of related or dependent objects without specifying their
          concrete classes. It helps ensure that products created by a factory
          are compatible with each other.
        </p>
        <p>
          Use it when your code needs to work with various families of related
          products, but you don't want it to depend on the concrete classes of
          those products.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>1. Define abstract factory and product interfaces.</p>
        <p>2. Implement concrete factories and products for each family.</p>
        <p>
          3. Client code uses the abstract factory to create products, ensuring
          compatibility.
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
          <li>Ensures product compatibility.</li>
          <li>Supports open/closed principle for product families.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Can introduce complexity with many interfaces/classes.</li>
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

// --- Abstract Factory Implementation ---
class Button {
  render() {
    throw new Error("render() must be implemented");
  }
}
class WinButton extends Button {
  render() {
    return "Windows Button";
  }
}
class MacButton extends Button {
  render() {
    return "Mac Button";
  }
}
class Checkbox {
  render() {
    throw new Error("render() must be implemented");
  }
}
class WinCheckbox extends Checkbox {
  render() {
    return "Windows Checkbox";
  }
}
class MacCheckbox extends Checkbox {
  render() {
    return "Mac Checkbox";
  }
}
class GUIFactory {
  createButton() {
    throw new Error("createButton() must be implemented");
  }
  createCheckbox() {
    throw new Error("createCheckbox() must be implemented");
  }
}
class WinFactory extends GUIFactory {
  createButton() {
    return new WinButton();
  }
  createCheckbox() {
    return new WinCheckbox();
  }
}
class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

const code = `class GUIFactory {
  createButton() { /* ... */ }
  createCheckbox() { /* ... */ }
}
class WinFactory extends GUIFactory {
  createButton() { return new WinButton(); }
  createCheckbox() { return new WinCheckbox(); }
}
class MacFactory extends GUIFactory {
  createButton() { return new MacButton(); }
  createCheckbox() { return new MacCheckbox(); }
}
// Usage:
// const factory = new WinFactory();
// const button = factory.createButton();
// button.render();
`;

const AbstractFactoryPattern = () => {
  const [selected, setSelected] = useState("Windows");
  const [result, setResult] = useState([]);

  const handleCreate = () => {
    let factory;
    if (selected === "Windows") factory = new WinFactory();
    else factory = new MacFactory();
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    setResult([button.render(), checkbox.render()]);
  };

  return (
    <VisualizerContainer
      title="Abstract Factory Pattern"
      subtitle="Create families of related objects"
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>GUI Factory</h3>
          <select
            style={styles.select}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="Windows">Windows</option>
            <option value="Mac">Mac</option>
          </select>
          <button style={styles.button} onClick={handleCreate}>
            Create GUI
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <div style={styles.resultPanel}>
            <b>Created Components:</b>
            <ul>
              {result.length === 0 ? (
                <li>No components created yet.</li>
              ) : (
                result.map((r, i) => <li key={i}>{r}</li>)
              )}
            </ul>
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

export default AbstractFactoryPattern;
