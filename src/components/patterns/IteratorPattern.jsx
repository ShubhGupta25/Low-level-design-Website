import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
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
          The <b>Iterator Pattern</b> provides a way to access the elements of a
          collection sequentially without exposing its underlying
          representation.
        </p>
        <p>
          Use it when you need to traverse a collection (array, list, set) in a
          consistent way, regardless of its internal structure.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Create an Iterator interface with <code>next()</code>,{" "}
          <code>hasNext()</code>, and <code>current()</code> methods.
        </p>
        <p>2. Implement a concrete Iterator for your collection.</p>
        <p>
          3. Use the Iterator to traverse the collection without exposing its
          internals.
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
          <li>Decouples traversal logic from collection structure.</li>
          <li>
            Multiple iterators can traverse the same collection independently.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>May add complexity for simple collections.</li>
        </ul>
      </>
    ),
  },
];

// --- Styles ---
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
  button: {
    padding: "0.7rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    background: "#A569BD",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "0.5rem 0",
  },
  itemBox: {
    background: "#181818",
    color: "#fff",
    padding: "1.2rem 2rem",
    borderRadius: "10px",
    fontSize: "1.2rem",
    margin: "1rem auto",
    textAlign: "center",
    minWidth: "200px",
    border: "2px solid #A569BD",
  },
  codePanel: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    marginTop: "2rem",
  },
};

// --- Iterator Implementation ---
class ArrayIterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }
  next() {
    if (this.hasNext()) {
      this.index++;
    }
  }
  previous() {
    if (this.index > 0) {
      this.index--;
    }
  }
  current() {
    return this.items[this.index];
  }
  hasNext() {
    return this.index < this.items.length - 1;
  }
  hasPrevious() {
    return this.index > 0;
  }
}

const sampleData = [
  { name: "Apple", type: "Fruit" },
  { name: "Carrot", type: "Vegetable" },
  { name: "Banana", type: "Fruit" },
  { name: "Broccoli", type: "Vegetable" },
  { name: "Strawberry", type: "Fruit" },
];

const code = `// Iterator Interface
class Iterator {
  next() {}
  previous() {}
  current() {}
  hasNext() {}
  hasPrevious() {}
}
class ArrayIterator extends Iterator {
  constructor(items) { this.items = items; this.index = 0; }
  next() { if (this.hasNext()) this.index++; }
  previous() { if (this.index > 0) this.index--; }
  current() { return this.items[this.index]; }
  hasNext() { return this.index < this.items.length - 1; }
  hasPrevious() { return this.index > 0; }
}
`;

const IteratorPattern = () => {
  const [iterator] = useState(() => new ArrayIterator(sampleData));
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    iterator.next();
    setCurrentIdx(iterator.index);
  };
  const handlePrevious = () => {
    iterator.previous();
    setCurrentIdx(iterator.index);
  };

  const currentItem = sampleData[currentIdx];

  return (
    <VisualizerContainer
      title="Iterator Pattern"
      subtitle="Traverse a collection with an iterator."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Custom Collection</h3>
          <div style={styles.itemBox}>
            <div>
              <b>Name:</b> {currentItem.name}
            </div>
            <div>
              <b>Type:</b> {currentItem.type}
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#A569BD",
                marginTop: "0.5rem",
              }}
            >
              Item {currentIdx + 1} of {sampleData.length}
            </div>
          </div>
          <button
            style={styles.button}
            onClick={handlePrevious}
            disabled={!iterator.hasPrevious()}
          >
            Previous
          </button>
          <button
            style={styles.button}
            onClick={handleNext}
            disabled={!iterator.hasNext()}
          >
            Next
          </button>
        </div>
        <div style={{ flex: 1 }}>
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

export default IteratorPattern;
