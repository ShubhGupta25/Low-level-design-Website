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
          The <b>Visitor Pattern</b> lets you add further operations to objects
          without having to modify them. It separates an algorithm from the
          objects on which it operates.
        </p>
        <p>
          Use it when you need to perform operations across a set of objects
          with different types, and you want to keep those operations separate
          from the object structure.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Define a Visitor interface with visit methods for each type of
          element.
        </p>
        <p>2. Each Element class implements an accept(visitor) method.</p>
        <p>
          3. The Visitor is passed to each element, which calls the appropriate
          visit method.
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
          <li>Adds new operations without modifying object structure.</li>
          <li>Centralizes related operations.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Breaks encapsulation by exposing internals to the visitor.</li>
          <li>Adding new element types requires changing all visitors.</li>
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
  codePanel: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    marginTop: "2rem",
  },
};

// --- Visitor Implementation ---
class NumberElement {
  constructor(value) {
    this.value = value;
  }
  accept(visitor) {
    return visitor.visitNumber(this);
  }
}
class StringElement {
  constructor(value) {
    this.value = value;
  }
  accept(visitor) {
    return visitor.visitString(this);
  }
}
class Visitor {
  visitNumber(element) {
    return `Number: ${element.value}, squared: ${
      element.value * element.value
    }`;
  }
  visitString(element) {
    return `String: '${element.value}', length: ${element.value.length}`;
  }
}

const code = `class Visitor {
  visitNumber(element) { /* ... */ }
  visitString(element) { /* ... */ }
}
class NumberElement {
  accept(visitor) { visitor.visitNumber(this); }
}
class StringElement {
  accept(visitor) { visitor.visitString(this); }
}
// Usage:
// const visitor = new Visitor();
// new NumberElement(5).accept(visitor);
// new StringElement('hello').accept(visitor);
`;

const VisitorPattern = () => {
  const [elements, setElements] = useState([
    new NumberElement(5),
    new StringElement("hello"),
    new NumberElement(12),
    new StringElement("world"),
  ]);
  const [results, setResults] = useState([]);

  const handleVisit = () => {
    const visitor = new Visitor();
    setResults(elements.map((el) => el.accept(visitor)));
  };

  return (
    <VisualizerContainer
      title="Visitor Pattern"
      subtitle="Add operations to objects without modifying them"
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Element Visitor</h3>
          <button style={styles.button} onClick={handleVisit}>
            Visit All Elements
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <div style={styles.resultPanel}>
            <b>Results:</b>
            <ul>
              {results.length === 0 ? (
                <li>No results yet.</li>
              ) : (
                results.map((r, i) => <li key={i}>{r}</li>)
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

export default VisitorPattern;
