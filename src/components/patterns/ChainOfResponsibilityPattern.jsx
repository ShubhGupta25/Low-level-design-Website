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
          The <b>Chain of Responsibility Pattern</b> is a behavioral pattern
          that lets you pass requests along a chain of handlers. Upon receiving
          a request, each handler decides either to process the request or to
          pass it to the next handler in the chain.
        </p>
        <p>
          Use it when your program is expected to process different kinds of
          requests in various ways, but you don't know the exact types of
          requests and their sequences beforehand.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Create a common **Handler** interface with a method to handle a
          request and a method to set the next handler in the chain.
        </p>
        <p>
          2. Create **Concrete Handlers** that implement the handler interface.
          Each handler decides if it can process the request; if not, it passes
          the request to the next handler.
        </p>
        <p>
          3. The client creates the chain of handlers and sends a request to the
          first handler in the chain.
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
            <b>Decouples Sender and Receiver:</b> The sender of a request
            doesn't need to know which object will handle it.
          </li>
          <li>
            <b>Flexible:</b> You can add or remove handlers from the chain at
            runtime.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>No Guarantee of Handling:</b> A request might not be handled if
            it reaches the end of the chain.
          </li>
          <li>
            <b>Hard to Debug:</b> It can be difficult to observe the runtime
            characteristics and debug the chain.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
class Handler {
  constructor() {
    this.next = null;
  }
  setNext(handler) {
    this.next = handler;
    return handler;
  }
  handle(request, logs) {
    if (this.next) {
      return this.next.handle(request, logs);
    }
    logs.push(`🚫 No handler could process the ${request.method} payment.`);
    return logs;
  }
}
class PayPalHandler extends Handler {
  handle(request, logs) {
    logs.push("Checking PayPal Handler...");
    if (request.method === "PayPal") {
      logs.push(`✅ Processing $${request.amount} with PayPal.`);
      return logs;
    }
    return super.handle(request, logs);
  }
}
class StripeHandler extends Handler {
  handle(request, logs) {
    logs.push("Checking Stripe Handler...");
    if (request.method === "Stripe") {
      logs.push(`✅ Processing $${request.amount} with Stripe.`);
      return logs;
    }
    return super.handle(request, logs);
  }
}
class BankHandler extends Handler {
  handle(request, logs) {
    logs.push("Checking Bank Handler...");
    if (request.method === "Bank" && request.amount < 1000) {
      logs.push(`✅ Processing $${request.amount} via Bank Transfer.`);
      return logs;
    }
    return super.handle(request, logs);
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
    width: "90vw",
    maxWidth: "500px",
  },
  logPanel: {
    backgroundColor: "#343434",
    maxWidth: "500px",
    width: "90vw",
    padding: "1.5rem",
    borderRadius: "12px",
    minHeight: "370px",
  },
  logItem: {
    padding: "0.5rem",
    borderBottom: "1px solid #555",
    fontFamily: "monospace",
  },
  button: {
    padding: "0.75rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "white",
    width: "100%",
    marginTop: "0.5rem",
  },
};

const ChainOfResponsibilityPattern = () => {
  const [logs, setLogs] = useState([]);

  const processPayment = (method, amount) => {
    const paymentChain = new PayPalHandler();
    paymentChain.setNext(new StripeHandler()).setNext(new BankHandler());
    const newLogs = paymentChain.handle({ method, amount }, []);
    setLogs([...newLogs]);
  };

  const code = `// The Handler interface
class Approver {
  setNext(approver) { this.next = approver; }
  processRequest(request) {
    if (this.next) { this.next.processRequest(request); }
  }
}

// Concrete Handlers
class Manager extends Approver {
  processRequest(request) {
    if (request.amount < 1000) {
      console.log("Manager approved the request.");
    } else { super.processRequest(request); }
  }
}

class Director extends Approver {
  processRequest(request) {
    if (request.amount < 5000) {
      console.log("Director approved the request.");
    } else { super.processRequest(request); }
  }
}

// Client Code
const manager = new Manager();
const director = new Director();
manager.setNext(director);

manager.processRequest({ amount: 900 });   // Manager handles
manager.processRequest({ amount: 4500 });  // Director handles
`;

  return (
    <VisualizerContainer
      title="Chain of Responsibility Pattern"
      subtitle="Passing a request along a chain of handlers."
    >
      <div style={styles.mainLayout}>
        <div style={styles.controlsPanel}>
          <h3>Payment Processor</h3>
          <p>
            Submit a payment request. It will travel down the chain of handlers
            until one can process it.
          </p>
          <button
            style={{ ...styles.button, backgroundColor: "#3498DB" }}
            onClick={() => processPayment("PayPal", 50)}
          >
            Pay $50 via PayPal
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#A569BD" }}
            onClick={() => processPayment("Stripe", 200)}
          >
            Pay $200 via Stripe
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={() => processPayment("Bank", 500)}
          >
            Pay $500 via Bank
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#E74C3C" }}
            onClick={() => processPayment("Crypto", 150)}
          >
            Pay $150 via Crypto
          </button>
        </div>
        <div style={styles.logPanel}>
          <h3>Processing Log</h3>
          {logs.map((log, index) => (
            <div key={index} style={styles.logItem}>
              {log}
            </div>
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

export default ChainOfResponsibilityPattern;
