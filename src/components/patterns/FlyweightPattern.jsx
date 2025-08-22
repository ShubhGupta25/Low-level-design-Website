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
          The <b>Flyweight Pattern</b> is a structural pattern that lets you fit
          more objects into the available amount of RAM by sharing parts of the
          state among multiple objects instead of keeping all of the data in
          each object.
        </p>
        <p>
          Use it when your application needs to create a large number of similar
          objects. The pattern separates an object's state into **intrinsic**
          (shared, immutable) and **extrinsic** (unique, mutable).
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>1. Separate an object's state into intrinsic and extrinsic parts.</p>
        <p>
          2. Create a **Flyweight** class to store the intrinsic (shared) state.
        </p>
        <p>
          3. Create a **Flyweight Factory** that manages and reuses the
          flyweight objects.
        </p>
        <p>
          4. The client code creates and uses flyweights by providing their
          extrinsic state.
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
            <b>Memory Savings:</b> Significantly reduces memory usage by sharing
            common data.
          </li>
          <li>
            <b>Scalability:</b> Allows the application to handle a much larger
            number of objects.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Complexity:</b> Introduces a layer of complexity with the factory
            and state separation.
          </li>
          <li>
            <b>Runtime Cost:</b> The initial setup and management of the
            flyweight objects can have a performance cost.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
// Intrinsic (shared) state
class TreeType {
  constructor(color, texture) {
    this.color = color;
    this.texture = texture;
  }
}
// Extrinsic (unique) state
class Tree {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
  render() {
    return (
      <span
        style={{
          position: "absolute",
          left: this.x,
          top: this.y,
          color: this.type.color,
          fontSize: "2rem",
        }}
      >
        🌳
      </span>
    );
  }
}
// Flyweight Factory
class TreeFactory {
  static treeTypes = {};
  static getTreeType(color, texture) {
    let type = TreeFactory.treeTypes[color + texture];
    if (!type) {
      type = new TreeType(color, texture);
      TreeFactory.treeTypes[color + texture] = type;
    }
    return type;
  }
}
// Client (Forest)
class Forest {
  constructor() {
    this.trees = [];
  }
  plantTree(x, y, color, texture) {
    const type = TreeFactory.getTreeType(color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }
}

// --- Styles ---
const styles = {
  forest: {
    position: "relative",
    width: "100%",
    minHeight: "300px",
    backgroundColor: "#556B2F",
    borderRadius: "12px",
    overflow: "hidden",
  },
  counter: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "8px",
    marginTop: "1rem",
  },
};

const FlyweightPattern = () => {
  const [forest, setForest] = useState(() => {
    const initialForest = new Forest();
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 95 + "%";
      const y = Math.random() * 95 + "%";
      const color = i % 2 === 0 ? "green" : "darkgreen";
      const texture = i % 2 === 0 ? "rough" : "smooth";
      initialForest.plantTree(x, y, color, texture);
    }
    return initialForest;
  });

  const uniqueTreeTypes = useMemo(
    () => Object.keys(TreeFactory.treeTypes).length,
    [forest]
  );

  const code = `// Intrinsic (shared) state
class CharacterStyle {
  constructor(font, size, color) { /*...*/ }
}
// Extrinsic (unique) state
class Character {
  constructor(char, x, y, style) {
    this.char = char;
    this.x = x;
    this.y = y;
    this.style = style; // The flyweight
  }
}
// Flyweight Factory
class StyleFactory {
  static styles = {};
  static getStyle(font, size, color) {
    const key = \`\${font}\${size}\${color}\`;
    if (!StyleFactory.styles[key]) {
      StyleFactory.styles[key] = new CharacterStyle(font, size, color);
    }
    return StyleFactory.styles[key];
  }
}
// Client
const styleA = StyleFactory.getStyle("Arial", 12, "black");
const styleB = StyleFactory.getStyle("Arial", 12, "black");
const char1 = new Character('H', 10, 10, styleA);
const char2 = new Character('E', 20, 10, styleB);
// char1.style === char2.style -> true, memory is saved
`;

  return (
    <VisualizerContainer
      title="Flyweight Pattern"
      subtitle="Sharing common object state to save memory."
    >
      <div style={styles.forest}>
        {forest.trees.map((tree, index) => (
          <div key={index}>{tree.render()}</div>
        ))}
      </div>
      <div style={styles.counter}>
        <p>
          <strong>Total Trees Planted:</strong> {forest.trees.length}
        </p>
        <p>
          <strong>Unique Tree Types Created:</strong> {uniqueTreeTypes}
        </p>
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

export default FlyweightPattern;
