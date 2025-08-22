import React, { useState, useMemo } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisualizerContainer from "../shared/VisualizerContainer";
import ExplanationSection from "../shared/ExplanationSection"; // Import the new component

// --- Explanation Content ---
const explanationContent = [
  {
    title: "What & Why?",
    content: (
      <>
        <p>
          The <b>Decorator Pattern</b> is a structural pattern that lets you
          attach new behaviors to objects by placing them inside special
          "wrapper" objects that contain the behaviors.
        </p>
        <p>
          Use it to add responsibilities to objects dynamically without
          affecting other objects, or when subclassing is impractical due to a
          large number of independent extensions.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Ensure your business domain can be represented as a primary
          component with optional layers or additions.
        </p>
        <p>
          2. Create a component interface that is shared by the base component
          and all decorators.
        </p>
        <p>3. Create a concrete base component class.</p>
        <p>
          4. Create a base decorator class that implements the component
          interface and contains a reference to a wrapped object.
        </p>
        <p>
          5. Create concrete decorator classes that add their own behavior
          before or after delegating to the wrapped object.
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
            <b>Open/Closed Principle:</b> You can introduce new decorators
            without changing existing code.
          </li>
          <li>
            <b>Runtime Flexibility:</b> Add or remove responsibilities from an
            object at runtime.
          </li>
          <li>
            <b>Composition over Inheritance:</b> Avoids a "class explosion"
            problem from having too many subclasses.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Complexity:</b> Can be hard to remove a specific wrapper from the
            middle of the stack.
          </li>
          <li>
            <b>Many Small Objects:</b> Can complicate the codebase with lots of
            small, similar-looking decorator classes.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Styles (condensed for brevity) ---
const styles = {
  mainLayout: {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
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
  controlGroup: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  label: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
  },
  slider: { width: "100%", cursor: "pointer" },
  visualizationPanel: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  imageStage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    backgroundColor: "#252525",
    padding: "2rem",
    borderRadius: "12px",
  },
  imageWrapper: { textAlign: "center" },
  image: {
    width: "280px",
    height: "280px",
    objectFit: "cover",
    borderRadius: "8px",
    transition: "filter 0.4s ease-in-out",
  },
  decoratorStack: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "200px",
  },
  decoratorNode: {
    backgroundColor: "#A569BD",
    color: "#FFF",
    textAlign: "center",
    padding: "0.75rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  codePanel: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    overflow: "hidden",
  },
};

// --- Available Filters ---
const FILTERS = {
  brightness: {
    name: "Brightness",
    defaultValue: 100,
    min: 50,
    max: 200,
    unit: "%",
  },
  sepia: { name: "Sepia", defaultValue: 0, min: 0, max: 100, unit: "%" },
  grayscale: {
    name: "Grayscale",
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};

const DecoratorPattern = () => {
  const [filters, setFilters] = useState({
    brightness: 100,
    sepia: 0,
    grayscale: 0,
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: Number(value) }));
  };

  const activeDecorators = useMemo(() => {
    const decorators = [];
    if (filters.brightness !== FILTERS.brightness.defaultValue)
      decorators.push({
        name: `Brightness(${filters.brightness}%)`,
        css: `brightness(${filters.brightness}%)`,
      });
    if (filters.sepia > FILTERS.sepia.defaultValue)
      decorators.push({
        name: `Sepia(${filters.sepia}%)`,
        css: `sepia(${filters.sepia}%)`,
      });
    if (filters.grayscale > FILTERS.grayscale.defaultValue)
      decorators.push({
        name: `Grayscale(${filters.grayscale}%)`,
        css: `grayscale(${filters.grayscale}%)`,
      });
    return decorators;
  }, [filters]);

  const finalCssFilter = useMemo(
    () => activeDecorators.map((d) => d.css).join(" "),
    [activeDecorators]
  );

  const code = `// Base Component: An Image
class Image {
  applyFilters() { return ""; }
}

// Decorator Functions
const brightnessDecorator = (image, value) => {
  const prev = image.applyFilters();
  image.applyFilters = () => \`\${prev} brightness(\${value}%)\`;
  return image;
};

// ... other decorators (sepia, grayscale)

// Applying the Decorators
let imageComponent = new Image();
imageComponent = brightnessDecorator(imageComponent, 150);
imageComponent = sepiaDecorator(imageComponent, 50);`;

  return (
    <VisualizerContainer
      title="Decorator Pattern"
      subtitle="Dynamically adding functionality with wrappers."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>🎨 Filters</h3>
          {Object.entries(FILTERS).map(([key, config]) => (
            <div key={key} style={styles.controlGroup}>
              <label htmlFor={key} style={styles.label}>
                <span>{config.name}</span>
                <span>
                  {filters[key]}
                  {config.unit}
                </span>
              </label>
              <input
                type="range"
                id={key}
                min={config.min}
                max={config.max}
                value={filters[key]}
                onChange={(e) => handleFilterChange(key, e.target.value)}
                style={styles.slider}
              />
            </div>
          ))}
        </div>
        <div style={styles.visualizationPanel}>
          <div style={styles.imageStage}>
            <div style={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Original"
                style={styles.image}
              />
              <strong>Original</strong>
            </div>
            <div style={styles.decoratorStack}>
              <div
                style={{ ...styles.decoratorNode, backgroundColor: "#4CAF50" }}
              >
                Base Image
              </div>
              {activeDecorators.map((deco, index) => (
                <div key={index} style={styles.decoratorNode}>
                  {deco.name}
                </div>
              ))}
            </div>
            <div style={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Decorated"
                style={{ ...styles.image, filter: finalCssFilter }}
              />
              <strong>Decorated</strong>
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
      </div>
      <ExplanationSection content={explanationContent} />
    </VisualizerContainer>
  );
};

export default DecoratorPattern;
