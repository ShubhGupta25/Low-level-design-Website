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
          The <b>State Pattern</b> is a behavioral design pattern that lets an
          object alter its behavior when its internal state changes. It appears
          as if the object changed its class.
        </p>
        <p>
          Use this pattern to avoid massive `if/else` or `switch` statements
          that control an object's behavior based on its state. It helps
          organize state-specific code into separate classes.
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Define a <b>Context</b> class which will hold a reference to a
          state object and delegate behavior to it.
        </p>
        <p>
          2. Create a common <b>State</b> interface that declares the methods
          the context will use.
        </p>
        <p>
          3. Implement <b>Concrete State</b> classes for each possible state,
          providing state-specific behavior for the interface's methods.
        </p>
        <p>
          4. The context object can transition between states by changing its
          state object reference.
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
            <b>Single Responsibility Principle:</b> Organizes the code related
            to particular states into separate classes.
          </li>
          <li>
            <b>Open/Closed Principle:</b> You can introduce new states without
            changing existing state classes or the context.
          </li>
          <li>
            <b>Cleaner Code:</b> Eliminates large conditional statements in the
            context's methods.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Increased Complexity:</b> Can be overkill if you only have a few
            states or if the state logic is simple.
          </li>
          <li>
            <b>State Proliferation:</b> The pattern requires creating many new
            classes, which can clutter the codebase.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization (State Machine) ---
class PlayerContext {
  constructor() {
    this.state = new StoppedState(this);
  }
  transitionTo(state) {
    this.state = state;
  }
  play() {
    this.state.play();
  }
  pause() {
    this.state.pause();
  }
  stop() {
    this.state.stop();
  }
}

class State {
  constructor(player) {
    this.player = player;
  }
  play() {}
  pause() {}
  stop() {}
}

class PlayingState extends State {
  pause() {
    this.player.transitionTo(new PausedState(this.player));
  }
  stop() {
    this.player.transitionTo(new StoppedState(this.player));
  }
}

class PausedState extends State {
  play() {
    this.player.transitionTo(new PlayingState(this.player));
  }
  stop() {
    this.player.transitionTo(new StoppedState(this.player));
  }
}

class StoppedState extends State {
  play() {
    this.player.transitionTo(new PlayingState(this.player));
  }
}

// --- Styles ---
const styles = {
  player: {
    backgroundColor: "#252525",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
  },
  status: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "1rem 0",
    height: "40px",
  },
  controls: { display: "flex", justifyContent: "center", gap: "1rem" },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "white",
  },
};

const StatePattern = () => {
  const [player, setPlayer] = useState(() => new PlayerContext());

  // By using the state's constructor name, we force a re-render when the state object changes
  const currentStateName = player.state.constructor.name;

  const handlePlay = () => {
    player.play();
    setPlayer(Object.create(player));
  };
  const handlePause = () => {
    player.pause();
    setPlayer(Object.create(player));
  };
  const handleStop = () => {
    player.stop();
    setPlayer(Object.create(player));
  };

  const { statusText, statusColor } = useMemo(() => {
    switch (currentStateName) {
      case "PlayingState":
        return { statusText: "▶️ Playing", statusColor: "#2ECC71" };
      case "PausedState":
        return { statusText: "⏸️ Paused", statusColor: "#F39C12" };
      case "StoppedState":
        return { statusText: "⏹️ Stopped", statusColor: "#E74C3C" };
      default:
        return { statusText: "Unknown", statusColor: "#95A5A6" };
    }
  }, [currentStateName]);

  const code = `// The Context
class TrafficLight {
  constructor() {
    this.state = new RedState(this);
  }
  changeState(state) {
    this.state = state;
  }
  handleRequest() {
    this.state.handle();
  }
}

// The State Interface
class LightState {
  constructor(light) { this.light = light; }
  handle() { throw new Error("This method must be overridden!"); }
}

// Concrete States
class RedState extends LightState {
  handle() {
    console.log("Red -> Green");
    this.light.changeState(new GreenState(this.light));
  }
}

class GreenState extends LightState {
  handle() {
    console.log("Green -> Yellow");
    this.light.changeState(new YellowState(this.light));
  }
} // ... and so on
`;

  return (
    <VisualizerContainer
      title="State Pattern"
      subtitle="Letting an object change its behavior when its state changes."
    >
      <div style={styles.player}>
        <h3>Media Player</h3>
        <div style={{ ...styles.status, color: statusColor }}>{statusText}</div>
        <div style={styles.controls}>
          <button
            style={{ ...styles.button, backgroundColor: "#2ECC71" }}
            onClick={handlePlay}
            disabled={currentStateName === "PlayingState"}
          >
            Play
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#F39C12" }}
            onClick={handlePause}
            disabled={currentStateName !== "PlayingState"}
          >
            Pause
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#E74C3C" }}
            onClick={handleStop}
            disabled={currentStateName === "StoppedState"}
          >
            Stop
          </button>
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

export default StatePattern;
