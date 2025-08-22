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
          The <b>Facade Pattern</b> is a structural pattern that provides a
          simplified interface to a library, a framework, or any other complex
          set of classes.
        </p>
        <p>
          Use it when you need to provide a simple, limited interface to a
          complex subsystem. It helps to reduce complexity and decouple the
          client from the inner workings of a system.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Identify the complex subsystem of classes that needs a simpler
          interface.
        </p>
        <p>
          2. Create a **Facade** class that encapsulates the complexity of the
          subsystem.
        </p>
        <p>
          3. Implement methods in the Facade that delegate calls to the
          appropriate objects within the subsystem.
        </p>
        <p>
          4. The client code interacts only with the Facade, not the underlying
          subsystem classes.
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
            <b>Simplifies Interaction:</b> Provides a straightforward interface
            for complex operations.
          </li>
          <li>
            <b>Decouples Client:</b> Isolates your code from the complexity of a
            subsystem.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>God Object:</b> A facade can become a "god object" coupled to all
            classes of an app.
          </li>
          <li>
            <b>Hides Features:</b> The simplified interface may hide useful
            features of the underlying subsystem.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
// Complex Subsystem Classes
class LightSystem {
  setBrightness(level) {
    return `Lights dimmed to ${level}%`;
  }
}
class SoundSystem {
  setVolume(level) {
    return `Sound set to ${level}`;
  }
}
class ScreenSystem {
  lowerScreen() {
    return `Projector screen lowered`;
  }
}

// The Facade
class HomeTheaterFacade {
  constructor() {
    this.lights = new LightSystem();
    this.sound = new SoundSystem();
    this.screen = new ScreenSystem();
  }
  startMovie() {
    const actions = [];
    actions.push(this.lights.setBrightness(10));
    actions.push(this.sound.setVolume(25));
    actions.push(this.screen.lowerScreen());
    return actions;
  }
}

// --- Styles ---
const styles = {
  mainLayout: {
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    gap: "2rem",
  },
  controlsPanel: {
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
  },
  statusPanel: {
    backgroundColor: "#343434",
    padding: "1.5rem",
    borderRadius: "12px",
  },
  logItem: {
    padding: "0.5rem",
    borderBottom: "1px solid #555",
    fontFamily: "monospace",
  },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.2rem",
    color: "white",
    backgroundColor: "#A569BD",
  },
};

const FacadePattern = () => {
  const [logs, setLogs] = useState([]);

  const handleMovieNight = () => {
    const facade = new HomeTheaterFacade();
    const actions = facade.startMovie();
    setLogs(actions);
  };

  const code = `// Complex Subsystem
class InventoryService { checkStock() { /*...*/ } }
class PaymentService { processPayment() { /*...*/ } }
class ShippingService { arrangeShipping() { /*...*/ } }

// The Facade
class OrderFacade {
  constructor() {
    this.inventory = new InventoryService();
    this.payment = new PaymentService();
    this.shipping = new ShippingService();
  }
  
  placeOrder(product, paymentDetails) {
    if (this.inventory.checkStock(product)) {
      this.payment.processPayment(paymentDetails);
      this.shipping.arrangeShipping(product);
      return true; // Order successful
    }
    return false; // Out of stock
  }
}

// Client Code
const order = new OrderFacade();
order.placeOrder("Laptop", { card: "1234..." }); // Simple!
`;

  return (
    <VisualizerContainer
      title="Facade Pattern"
      subtitle="Providing a simplified interface to a complex system."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Smart Home Control</h3>
          <p>
            Click the button to activate "Movie Night" mode. The facade handles
            all the complex steps.
          </p>
          <button style={styles.button} onClick={handleMovieNight}>
            🎬 Start Movie Night
          </button>
        </div>
        <div style={styles.statusPanel}>
          <h3>Subsystem Actions Log</h3>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <div key={index} style={styles.logItem}>
                ✅ {log}
              </div>
            ))
          ) : (
            <p>Waiting for commands...</p>
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

export default FacadePattern;
