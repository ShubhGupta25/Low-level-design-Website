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
          The <b>Prototype Pattern</b> is a creational pattern that lets you
          copy existing objects without making your code dependent on their
          concrete classes.
        </p>
        <p>
          Use it when you need to create new objects based on an existing
          object, especially when object creation is expensive or you want to
          hide the complexity of object creation from the client.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Ensure your object has a `clone` method (or similar) that performs
          a deep copy of itself.
        </p>
        <p>
          2. The client code can now create new objects by calling the `clone`
          method on an existing prototype instance.
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
            <b>Performance:</b> Cloning an object can be faster than creating a
            new one from scratch.
          </li>
          <li>
            <b>Reduced Complexity:</b> Avoids the need for a complex factory or
            builder to create new objects.
          </li>
          <li>
            <b>Decoupling:</b> The client doesn't need to know the concrete
            class of the object being copied.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Complex Cloning:</b> Cloning complex objects with circular
            references can be difficult to implement correctly.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
class Shape {
  constructor(color) {
    this.color = color;
  }
  clone() {
    // This should be overridden by subclasses
    return new Shape(this.color);
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  clone() {
    return new Circle(this.color, this.radius);
  }
  render() {
    return (
      <div
        style={{
          width: this.radius * 2,
          height: this.radius * 2,
          borderRadius: "50%",
          backgroundColor: this.color,
          margin: "1rem",
          border: "2px solid white",
        }}
      />
    );
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
  canvas: {
    flex: 1,
    backgroundColor: "#343434",
    padding: "1rem",
    borderRadius: "12px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
    maxWidth: "500px",
    width: "90vw",
    height: "350px",
    overflowY: "auto",
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

const PrototypePattern = () => {
  const [prototypes, setPrototypes] = useState([]);
  const [clonedShapes, setClonedShapes] = useState([]);

  const createBaseCircle = () => {
    setPrototypes([new Circle("#3498DB", 40)]);
    setClonedShapes([]);
  };

  const cloneShape = () => {
    if (prototypes.length === 0) return;
    const newShape = prototypes[0].clone();
    const randomSize = Math.floor(Math.random() * 30) + 20;
    newShape.radius = randomSize;
    newShape.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setClonedShapes([...clonedShapes, newShape]);
  };

  const code = `// The Prototype
class Document {
  constructor(content, permissions) {
    this.content = content;
    this.permissions = permissions;
  }
  clone() {
    const cloned = Object.create(this);
    // Deep copy arrays/objects
    cloned.permissions = [...this.permissions]; 
    return cloned;
  }
}

// Usage
const prototypeDoc = new Document("Initial text", ["read", "write"]);
const newDoc = prototypeDoc.clone(); // No 'new' keyword!

// Modify the clone without affecting the original
newDoc.content = "New content";
newDoc.permissions.push("delete");
`;

  return (
    <VisualizerContainer
      title="Prototype Pattern"
      subtitle="Creating new objects by cloning an existing one."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Shape Creator</h3>
          <p>1. Create a prototype shape.</p>
          <button
            style={{ ...styles.button, backgroundColor: "#3498DB" }}
            onClick={createBaseCircle}
          >
            Create Prototype
          </button>
          <p>2. Clone it multiple times.</p>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={cloneShape}
            disabled={prototypes.length === 0}
          >
            Clone Shape
          </button>
        </div>
        <div style={styles.canvas}>
          {clonedShapes.length > 0 ? (
            clonedShapes.map((shape, index) => (
              <div key={index}>{shape.render()}</div>
            ))
          ) : (
            <p>No shapes to display yet.</p>
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

export default PrototypePattern;
