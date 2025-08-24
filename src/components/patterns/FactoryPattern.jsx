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
          The <b>Factory Method Pattern</b> is a creational pattern that
          provides an interface for creating objects in a superclass, but lets
          subclasses alter the type of objects that will be created.
        </p>
        <p>
          Use it when you don't know beforehand the exact types of objects your
          code will be working with. It decouples the client code that uses the
          object from the code that creates it.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Create a common <b>Product</b> interface that all concrete products
          will implement.
        </p>
        <p>
          2. Create <b>Concrete Products</b> that are different implementations
          of the Product interface.
        </p>
        <p>
          3. Declare the <b>Creator</b> (Factory) class with a `factoryMethod`
          that returns new product objects.
        </p>
        <p>
          4. The client code works with an instance of a concrete creator, via
          its base interface. As long as the client works with the product via
          the base interface, you can pass it any creator's subclass.
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
            <b>Avoids Tight Coupling:</b> The client code is not tightly coupled
            to concrete product classes.
          </li>
          <li>
            <b>Single Responsibility Principle:</b> You can move the product
            creation code into one place.
          </li>
          <li>
            <b>Open/Closed Principle:</b> You can introduce new types of
            products without breaking existing client code.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Increased Complexity:</b> The code can become more complicated
            since you need to introduce a lot of new subclasses to implement the
            pattern.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
const SuccessNotification = ({ message }) => (
  <div
    style={{ backgroundColor: "#2ECC71", padding: "1rem", borderRadius: "8px" }}
  >
    ✅ {message}
  </div>
);
const ErrorNotification = ({ message }) => (
  <div
    style={{ backgroundColor: "#E74C3C", padding: "1rem", borderRadius: "8px" }}
  >
    ❌ {message}
  </div>
);
const InfoNotification = ({ message }) => (
  <div
    style={{ backgroundColor: "#3498DB", padding: "1rem", borderRadius: "8px" }}
  >
    ℹ️ {message}
  </div>
);

const notificationFactory = (type, message) => {
  const props = { message };
  switch (type) {
    case "success":
      return <SuccessNotification {...props} />;
    case "error":
      return <ErrorNotification {...props} />;
    case "info":
      return <InfoNotification {...props} />;
    default:
      throw new Error("Unknown notification type");
  }
};

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
    maxWidth: "450px",
    width: "90vw",
  },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "white",
  },
  displayPanel: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#343434",
    padding: "1rem",
    borderRadius: "12px",
    maxWidth: "450px",
    width: "90vw",
    height: "335px",
    overflowY: "auto",
  },
};

const FactoryPattern = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type) => {
    const message = `This is a ${type} message generated at ${new Date().toLocaleTimeString()}`;
    const newNotification = notificationFactory(type, message);
    setNotifications((prev) => [...prev, newNotification]);
  };

  const code = `// The Factory Function
function createDocument(type) {
  if (type === 'pdf') {
    return new PDFDocument();
  } else if (type === 'word') {
    return new WordDocument();
  }
  throw new Error('Unsupported document type');
}

// Product Interfaces/Classes
class PDFDocument {
  // ... PDF specific implementation
  display() { console.log("Displaying PDF"); }
}
class WordDocument {
  // ... Word specific implementation
  display() { console.log("Displaying Word doc"); }
}

// Client Code
const myDoc = createDocument('pdf');
myDoc.display(); // Client doesn't need to know about PDFDocument class
`;

  return (
    <VisualizerContainer
      title="Factory Pattern"
      subtitle="Creating objects without specifying the exact class."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Notification Factory</h3>
          <p>Click to create different types of notification components.</p>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={() => addNotification("success")}
          >
            Create Success
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#E74C3C" }}
            onClick={() => addNotification("error")}
          >
            Create Error
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#3498DB" }}
            onClick={() => addNotification("info")}
          >
            Create Info
          </button>
        </div>
        <div style={styles.displayPanel}>
          <h3>Generated Components</h3>
          {notifications.map((notif, index) => (
            <div key={index}>{notif}</div>
          ))}
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

export default FactoryPattern;
