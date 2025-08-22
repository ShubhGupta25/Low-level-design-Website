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
          The <b>Interpreter Pattern</b> defines a way to evaluate language
          grammar or expressions. It is useful for parsing and executing
          commands in a custom language.
        </p>
        <p>
          Use it when you need to interpret sentences in a language, such as
          math expressions, filters, or commands.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Define an abstract Expression interface with an{" "}
          <code>interpret</code> method.
        </p>
        <p>
          2. Implement concrete Expression classes for each grammar rule (e.g.,
          AddExpression, NumberExpression).
        </p>
        <p>
          3. Build a parser that converts user input into an Expression tree.
        </p>
        <p>
          4. Call <code>interpret()</code> on the root expression to evaluate.
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
          <li>Easy to extend grammar by adding new Expression classes.</li>
          <li>Good for simple languages and DSLs.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Not efficient for complex grammars or large languages.</li>
          <li>Can lead to many small classes.</li>
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
  input: {
    padding: "0.7rem",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "1px solid #444",
    marginBottom: "1rem",
    background: "#181818",
    color: "#fff",
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
    marginBottom: "1rem",
  },
  result: {
    fontSize: "1.5rem",
    color: "#2ECC71",
    marginBottom: "1rem",
  },
  error: {
    color: "#E74C3C",
    marginBottom: "1rem",
  },
  codePanel: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    marginTop: "2rem",
  },
};

// --- Interpreter Classes ---
class NumberExpression {
  constructor(value) {
    this.value = value;
  }
  interpret() {
    return this.value;
  }
}
class AddExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}
class SubtractExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}

function parseCommand(command) {
  // Supported: "add X to Y", "subtract X from Y"
  const addMatch = command.match(/add (\d+) to (\d+)/i);
  if (addMatch) {
    const left = new NumberExpression(Number(addMatch[1]));
    const right = new NumberExpression(Number(addMatch[2]));
    return new AddExpression(left, right);
  }
  const subMatch = command.match(/subtract (\d+) from (\d+)/i);
  if (subMatch) {
    const left = new NumberExpression(Number(subMatch[2]));
    const right = new NumberExpression(Number(subMatch[1]));
    return new SubtractExpression(left, right);
  }
  return null;
}

const code = `// Expression Interface
class Expression {
  interpret() {}
}
class NumberExpression extends Expression {
  constructor(value) { this.value = value; }
  interpret() { return this.value; }
}
class AddExpression extends Expression {
  constructor(left, right) { this.left = left; this.right = right; }
  interpret() { return this.left.interpret() + this.right.interpret(); }
}
class SubtractExpression extends Expression {
  constructor(left, right) { this.left = left; this.right = right; }
  interpret() { return this.left.interpret() - this.right.interpret(); }
}
// Usage:
// "add 10 to 5" => new AddExpression(new NumberExpression(10), new NumberExpression(5))
// "subtract 3 from 8" => new SubtractExpression(new NumberExpression(8), new NumberExpression(3))
`;

const InterpreterPattern = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleRun = () => {
    const expr = parseCommand(input);
    if (!expr) {
      setError("Invalid command. Try 'add 10 to 5' or 'subtract 3 from 8'.");
      setResult(null);
      return;
    }
    setError("");
    setResult(expr.interpret());
  };

  return (
    <VisualizerContainer
      title="Interpreter Pattern"
      subtitle="Parse and execute simple commands."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Command Line Interpreter</h3>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type: add 10 to 5"
            style={styles.input}
          />
          <button onClick={handleRun} style={styles.button}>
            Run
          </button>
          {error && <div style={styles.error}>{error}</div>}
          {result !== null && <div style={styles.result}>Result: {result}</div>}
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

export default InterpreterPattern;
