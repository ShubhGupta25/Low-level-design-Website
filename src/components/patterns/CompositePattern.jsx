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
          The <b>Composite Pattern</b> is a structural pattern that lets you
          compose objects into tree structures and then work with these
          structures as if they were individual objects.
        </p>
        <p>
          Use it when you have objects organized in a tree hierarchy and need to
          treat both individual objects and groups of objects in a uniform way.
          A common example is a file system, where a file and a folder (which
          contains other files and folders) are both "files" from the client's
          perspective.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Define a common **Component** interface for both simple and complex
          objects.
        </p>
        <p>
          2. Create a **Leaf** class for the simple, individual objects (e.g., a
          file).
        </p>
        <p>
          3. Create a **Composite** class that represents a container (e.g., a
          folder). It should hold a collection of other components and implement
          the same interface.
        </p>
        <p>
          4. The composite class's methods should delegate the work to its
          children, allowing recursive traversal.
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
            <b>Uniformity:</b> You can treat composites and leaves identically,
            simplifying client code.
          </li>
          <li>
            <b>Flexibility:</b> It's easy to add new types of components without
            changing existing code.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Overly General:</b> It may be difficult to restrict which
            components can be added to a composite.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
class FileSystemComponent {
  constructor(name) {
    this.name = name;
  }
  getSize() {
    throw new Error("Method must be implemented");
  }
  render() {
    throw new Error("Method must be implemented");
  }
}

class File extends FileSystemComponent {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  getSize() {
    return this.size;
  }
  render() {
    return (
      <li key={this.name}>
        📄 {this.name} ({this.getSize()}KB)
      </li>
    );
  }
}

class Folder extends FileSystemComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }
  add(component) {
    this.children.push(component);
  }
  getSize() {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }
  render() {
    return (
      <li key={this.name}>
        📁 {this.name} ({this.getSize()}KB)
        <ul>{this.children.map((child) => child.render())}</ul>
      </li>
    );
  }
}

// Build the file system tree
const documents = new Folder("Documents");
documents.add(new File("resume.pdf", 128));
documents.add(new File("notes.txt", 10));

const photos = new Folder("Photos");
photos.add(new File("vacation.jpg", 5120));
photos.add(new File("profile.png", 2048));

const root = new Folder("Root");
root.add(documents);
root.add(photos);
root.add(new File("config.json", 2));

// --- Styles ---
const styles = {
  fileSystemPanel: {
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    minHeight: "300px",
  },
  fileList: { color: "white", listStyleType: "none", padding: 0 },
};

const CompositePattern = () => {
  const code = `// Component Interface
class Employee {
  constructor(name, salary) { this.name = name; this.salary = salary; }
  getSalary() { return this.salary; }
}

// Leaf Class
class Developer extends Employee {}

// Composite Class
class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.subordinates = [];
  }
  add(employee) { this.subordinates.push(employee); }
  getSalary() {
    // A manager's total salary includes all subordinates
    return this.salary + this.subordinates.reduce((sum, sub) => sum + sub.getSalary(), 0);
  }
}

// Client Code
const manager = new Manager("Alice", 100000);
manager.add(new Developer("Bob", 80000));
manager.add(new Developer("Charlie", 85000));

console.log(manager.getSalary()); // Outputs: 265000
`;

  return (
    <VisualizerContainer
      title="Composite Pattern"
      subtitle="Treating a group of objects as a single object."
    >
      <div style={styles.fileSystemPanel}>
        <h3>File System Tree</h3>
        <p>
          A folder (composite) and a file (leaf) are both treated as
          'components'.
        </p>
        <ul style={styles.fileList}>{root.render()}</ul>
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

export default CompositePattern;
