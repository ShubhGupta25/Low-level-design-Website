import React from "react";
import VisualizerContainer from "../../shared/VisualizerContainer";
import ExplanationSection from "../../shared/ExplanationSection";

const styles = {
  visualizationBlock: {
    width: "100%",
    maxWidth: "700px",
    minHeight: "340px",
    background: "linear-gradient(135deg, #181a1b 70%, #232946 100%)",
    borderRadius: "22px",
    border: "4px solid #232946",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#F59E42",
    fontWeight: 600,
    fontSize: "1.2rem",
    boxShadow: "0 8px 32px #23294688",
    padding: "2.5rem 2rem",
    margin: "2.5rem auto",
    position: "relative",
    overflow: "hidden",
  },
  bubble: {
    padding: "8px 14px",
    borderRadius: "16px",
    margin: "6px",
    fontSize: "0.95rem",
    maxWidth: "60%",
    boxShadow: "0 2px 8px #00000055",
  },
  sender: {
    background: "linear-gradient(90deg, #22c55e, #16a34a)",
    color: "#fff",
    alignSelf: "flex-end",
  },
  receiver: {
    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
    color: "#fff",
    alignSelf: "flex-start",
  },
};

const chatAppExplanation = [
  {
    title: "Low-Level Pattern(s) Used & Why",
    content: (
      <>
        <p>
          <b>Patterns Used:</b>
          <br />
          <span style={{ color: "#22D3EE" }}>Factory</span> (Message & ChatRoom
          creation), <span style={{ color: "#10B981" }}>Observer</span>{" "}
          (real-time delivery & typing indicators),{" "}
          <span style={{ color: "#F59E42" }}>Strategy</span> (encryption &
          message routing), <span style={{ color: "#FDE047" }}>State</span>{" "}
          (Message lifecycle: Draft → Sent → Delivered → Read).
        </p>
        <p>
          <b>Why:</b>
          <ul>
            <li>
              <b>Factory:</b> Encapsulate message & room creation logic.
            </li>
            <li>
              <b>Observer:</b> Push live updates (new message, typing).
            </li>
            <li>
              <b>Strategy:</b> Pluggable encryption or routing methods.
            </li>
            <li>
              <b>State:</b> Model message journey from draft to read.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title: "Advantages & Disadvantages",
    content: (
      <>
        <h4>Advantages ✅</h4>
        <ul>
          <li>Scalable to group chats & multiple chatrooms.</li>
          <li>Flexible with encryption/routing strategies.</li>
          <li>Great UX with live updates and delivery states.</li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>High infra cost for scaling real-time delivery.</li>
          <li>Edge cases: message ordering, offline sync.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Design Visualization",
    content: (
      <div style={styles.visualizationBlock}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div style={{ ...styles.bubble, ...styles.sender }}>Hello 👋</div>
          <div style={{ ...styles.bubble, ...styles.receiver }}>
            Hi! How are you?
          </div>
          <div style={{ ...styles.bubble, ...styles.sender }}>All good 🚀</div>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#FFD600", marginTop: 16 }}>
          <b>Factory</b> → <b>Observer</b> → <b>Strategy</b> → <b>State</b>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
          Message | Updates | Routing | Lifecycle
        </div>
      </div>
    ),
  },
  {
    title: "Code Example",
    content: (
      <pre
        style={{
          background: "#181a1b",
          color: "#FFD600",
          fontSize: "0.95rem",
          borderRadius: 12,
          padding: "1.2rem",
          marginTop: 16,
        }}
      >
        {`// Factory
class MessageFactory {
  createMessage(text, sender) { return new Message(text, sender); }
}

// Observer
class ChatRoom {
  subscribe(user){/*...*/}
  notifyAll(message){/*...*/}
}

// Strategy
class EncryptionStrategy { encrypt(msg){/*...*/} }
class AESEncryption extends EncryptionStrategy {/*...*/}

// State
class Message {
  setState(state){/*...*/}
}`}
      </pre>
    ),
  },
];

export const ChatMessagingApp = () => (
  <VisualizerContainer
    title="Chat Messaging App"
    subtitle="A low-level system design exploration."
  >
    <ExplanationSection content={chatAppExplanation} />
  </VisualizerContainer>
);

export default ChatMessagingApp;
