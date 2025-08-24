import React, { useState, useMemo, useCallback, useEffect } from "react";
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
          The <b>Observer Pattern</b> is a behavioral pattern that defines a
          one-to-many dependency between objects. When one object (the "subject"
          or "publisher") changes its state, all its dependents ("observers" or
          "subscribers") are notified and updated automatically.
        </p>
        <p>
          Use it when a change to one object requires changing others, but you
          don't know how many objects need to be changed. It promotes loose
          coupling between the subject and its observers.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Create a <b>Subject</b> (Publisher) interface with methods to
          subscribe, unsubscribe, and notify observers.
        </p>
        <p>
          2. Create an <b>Observer</b> (Subscriber) interface with an `update`
          method that the subject will call.
        </p>
        <p>
          3. Implement a <b>Concrete Subject</b> that maintains a list of
          observers and notifies them when its state changes.
        </p>
        <p>
          4. Implement <b>Concrete Observers</b> that react to the notifications
          from the subject.
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
            <b>Open/Closed Principle:</b> You can introduce new observer types
            without changing the subject's code.
          </li>
          <li>
            <b>Loose Coupling:</b> The subject only knows that observers
            implement the observer interface, not what they are or what they do.
          </li>
          <li>
            <b>Runtime Relationships:</b> You can add or remove observers at any
            time.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Unexpected Updates:</b> Observers can be notified in a random
            order, which might lead to unpredictable update sequences.
          </li>
          <li>
            <b>Memory Leaks:</b> If observers are not properly unsubscribed,
            they can cause memory leaks (the "lapsed listener" problem).
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
class NotificationCenter {
  constructor() {
    this.observers = new Set();
  }
  subscribe(observer) {
    this.observers.add(observer);
  }
  unsubscribe(observer) {
    this.observers.delete(observer);
  }
  notify(message) {
    this.observers.forEach((observer) => observer(message));
  }
}

const subject = new NotificationCenter();

// --- Styles ---
const styles = {
  mainLayout: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  subjectPanel: {
    width: "90vw",
    maxWidth: "500px",
    backgroundColor: "#252525",
    padding: "1.5rem",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  observersPanel: {
    maxWidth: "500px",
    width: "90vw",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  notificationBox: {
    padding: "1rem",
    borderRadius: "8px",
    border: "2px solid #555",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#A569BD",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

// --- Observer Components ---
const EmailNotifier = ({ id }) => {
  const [message, setMessage] = useState("Awaiting notifications...");
  const handleUpdate = useCallback(
    (msg) => setMessage(`📧 New Email: "${msg}"`),
    []
  );

  useEffect(() => {
    subject.subscribe(handleUpdate);
    return () => subject.unsubscribe(handleUpdate);
  }, [handleUpdate]);

  return (
    <div style={{ ...styles.notificationBox, borderColor: "#3498DB" }}>
      <b>Email Service #{id}</b>
      <p>{message}</p>
    </div>
  );
};

const SMSNotifier = ({ id }) => {
  const [message, setMessage] = useState("Awaiting notifications...");
  const handleUpdate = useCallback(
    (msg) => setMessage(`📱 New SMS: "${msg}"`),
    []
  );

  useEffect(() => {
    subject.subscribe(handleUpdate);
    return () => subject.unsubscribe(handleUpdate);
  }, [handleUpdate]);

  return (
    <div style={{ ...styles.notificationBox, borderColor: "#2ECC71" }}>
      <b>SMS Service #{id}</b>
      <p>{message}</p>
    </div>
  );
};

const ObserverPattern = () => {
  const [observers, setObservers] = useState([
    { id: 1, type: "email" },
    { id: 2, type: "sms" },
  ]);

  const addObserver = (type) => {
    const newId = (observers[observers.length - 1]?.id || 0) + 1;
    setObservers([...observers, { id: newId, type }]);
  };

  const code = `// Subject (or Publisher)
class NewsAgency {
  constructor() { this.subscribers = []; }
  subscribe(subscriber) { this.subscribers.push(subscriber); }
  unsubscribe(subscriber) { /* filter logic */ }
  notify(news) {
    this.subscribers.forEach(sub => sub.update(news));
  }
}

// Observer (or Subscriber)
class NewsChannel {
  update(news) {
    console.log(\`Broadcasting news: \${news}\`);
  }
}

// Usage
const agency = new NewsAgency();
const bbc = new NewsChannel();
agency.subscribe(bbc);

agency.notify("The world is round!"); // bbc receives the update
`;

  return (
    <VisualizerContainer
      title="Observer Pattern"
      subtitle="Notifying multiple objects about state changes."
    >
      <div style={styles.mainLayout}>
        <div style={styles.subjectPanel}>
          <h3>📢 Subject</h3>
          <p>This central component sends notifications to all subscribers.</p>
          <button
            style={styles.button}
            onClick={() => subject.notify("New Sale!")}
          >
            Send "New Sale!"
          </button>
          <button
            style={styles.button}
            onClick={() => subject.notify("Item Restocked")}
          >
            Send "Item Restocked"
          </button>
          <hr />
          <h4>Manage Observers</h4>
          <button
            style={{ ...styles.button, backgroundColor: "#3498DB" }}
            onClick={() => addObserver("email")}
          >
            Add Email Observer
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={() => addObserver("sms")}
          >
            Add SMS Observer
          </button>
        </div>
        <div style={styles.observersPanel}>
          <h3>📡 Observers</h3>
          {observers.map((obs) =>
            obs.type === "email" ? (
              <EmailNotifier key={obs.id} id={obs.id} />
            ) : (
              <SMSNotifier key={obs.id} id={obs.id} />
            )
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

export default ObserverPattern;
