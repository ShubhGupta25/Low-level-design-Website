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
          The <b>Mediator Pattern</b> defines an object that encapsulates how a
          set of objects interact. It promotes loose coupling by preventing
          objects from referring to each other directly, and lets you vary their
          interaction independently.
        </p>
        <p>
          Use it when you have a set of objects that communicate in complex
          ways, and you want to centralize the communication logic.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>1. Create a Mediator interface with methods for communication.</p>
        <p>
          2. Implement a concrete Mediator (e.g., Chatroom) that coordinates
          communication between Colleague objects (e.g., Users).
        </p>
        <p>3. Colleagues communicate only via the Mediator, not directly.</p>
      </>
    ),
  },
  {
    title: "Pros & Cons",
    content: (
      <>
        <h4>Advantages ✅</h4>
        <ul>
          <li>Centralizes complex communication logic.</li>
          <li>Promotes loose coupling between objects.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>Mediator can become complex if too much logic is centralized.</li>
        </ul>
      </>
    ),
  },
];

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
    maxWidth: "300px",
  },
  chatPanel: {
    backgroundColor: "#343434",
    padding: "1rem",
    borderRadius: "12px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1rem",
    marginTop: "1rem",
    width: "90vw",
    maxWidth: "318px",
    oveerflowY: "auto",
  },
  message: {
    background: "#181818",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    borderRadius: "8px",
    marginBottom: "0.3rem",
    fontSize: "1rem",
  },
  input: {
    padding: "0.7rem",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#181818",
    color: "#fff",
    marginRight: "0.5rem",
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
    marginLeft: "0.5rem",
  },
  userSelect: {
    padding: "0.5rem",
    borderRadius: "6px",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  codePanel: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "90vw",
    height: "420px",
    overflowY: "auto",
  },
};

// --- Mediator Implementation ---
class Chatroom {
  constructor() {
    this.users = {};
    this.messages = [];
  }
  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }
  send(message, from, to) {
    if (to) {
      this.messages.push({ from, to, message });
      this.users[to].receive(message, from);
    } else {
      this.messages.push({ from, to: "All", message });
      Object.values(this.users).forEach((user) => {
        if (user.name !== from) user.receive(message, from);
      });
    }
  }
  getMessages() {
    return this.messages;
  }
}
class User {
  constructor(name, onReceive) {
    this.name = name;
    this.chatroom = null;
    this.onReceive = onReceive;
  }
  send(message, to) {
    this.chatroom.send(message, this.name, to);
  }
  receive(message, from) {
    if (this.onReceive) this.onReceive(message, from);
  }
}

const code = `class Chatroom {
  register(user) { /* ... */ }
  send(message, from, to) { /* ... */ }
}
class User {
  send(message, to) { /* ... */ }
  receive(message, from) { /* ... */ }
}
// Usage:
// chatroom.register(user1); chatroom.register(user2);
// user1.send('Hello!', 'user2');
`;

const userNames = ["Alice", "Bob", "Charlie"];

const MediatorPattern = () => {
  const [chatroom] = useState(() => new Chatroom());
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(userNames[0]);
  const [input, setInput] = useState("");
  const [toUser, setToUser] = useState("");

  // Register users
  const [users] = useState(() =>
    userNames.map(
      (name) =>
        new User(name, (msg, from) => {
          setMessages((prev) => [...prev, { from, to: name, message: msg }]);
        })
    )
  );
  React.useEffect(() => {
    users.forEach((user) => chatroom.register(user));
  }, [chatroom, users]);

  const handleSend = () => {
    if (!input.trim()) return;
    const to = toUser || undefined;
    const user = users.find((u) => u.name === selectedUser);
    user.send(input, to);
    // Only add to messages if broadcasting (to all)
    if (!to) {
      setMessages((prev) => [
        ...prev,
        { from: selectedUser, to: "All", message: input },
      ]);
    }
    setInput("");
  };

  return (
    <VisualizerContainer
      title="Mediator Pattern"
      subtitle="Centralized communication via a mediator."
    >
      <div style={styles.mainLayout}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={styles.controlsPanel}>
            <h3>Chatroom</h3>
            <select
              style={styles.userSelect}
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              {userNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={styles.input}
            />
            <select
              style={styles.userSelect}
              value={toUser}
              onChange={(e) => setToUser(e.target.value)}
            >
              <option value="">Send to All</option>
              {userNames
                .filter((n) => n !== selectedUser)
                .map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
            </select>
            <button style={styles.button} onClick={handleSend}>
              Send
            </button>
          </div>
          <div style={styles.chatPanel}>
            {messages.map((msg, idx) => (
              <div key={idx} style={styles.message}>
                <b>{msg.from}</b> to <b>{msg.to}</b>: {msg.message}
              </div>
            ))}
            {messages.length === 0 && (
              <div style={{ color: "#aaa" }}>No messages yet.</div>
            )}
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
      <ExplanationSection content={explanationContent} />
    </VisualizerContainer>
  );
};

export default MediatorPattern;
