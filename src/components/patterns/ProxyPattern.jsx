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
          The <b>Proxy Pattern</b> is a structural pattern that lets you provide
          a substitute or placeholder for another object. A proxy controls
          access to the original object, allowing you to perform something
          either before or after the request gets to the original object.
        </p>
        <p>
          Use it for lazy initialization (virtual proxy), access control
          (protection proxy), logging requests (logging proxy), or caching
          (caching proxy).
        </p>
      </>
    ),
  },
  {
    title: "How to Use",
    content: (
      <>
        <p>
          1. Create a common **Subject** interface for both the Real Subject and
          the Proxy.
        </p>
        <p>
          2. Create the **Real Subject** class, which contains the core business
          logic.
        </p>
        <p>
          3. Create the **Proxy** class. It should have a reference to the Real
          Subject and implement the same interface.
        </p>
        <p>
          4. The Proxy can handle tasks (like lazy loading or access checks)
          before or after delegating the request to the Real Subject.
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
            <b>Controlled Access:</b> You can manage the lifecycle of the real
            subject without the client's knowledge.
          </li>
          <li>
            <b>Performance:</b> Can improve performance through lazy loading or
            caching.
          </li>
          <li>
            <b>Security:</b> Can add security checks before accessing a
            sensitive object.
          </li>
        </ul>
        <h4>Disadvantages ❌</h4>
        <ul>
          <li>
            <b>Complexity:</b> Introduces an extra layer of classes.
          </li>
          <li>
            <b>Delayed Response:</b> The response from the service might be
            delayed due to the proxy's overhead.
          </li>
        </ul>
      </>
    ),
  },
];

// --- Core Logic for Visualization ---
// Real Subject
class HighResolutionImage {
  constructor(url) {
    this.url = url;
  }
  display() {
    return (
      <img
        src={this.url}
        alt="High-Res"
        style={{ width: "100%", borderRadius: "8px" }}
      />
    );
  }
}

// The Proxy
class ImageProxy {
  constructor(url) {
    this.url = url;
    this.realImage = null; // Lazy load
  }
  display(loadCallback) {
    if (!this.realImage) {
      // Simulate network delay
      setTimeout(() => {
        this.realImage = new HighResolutionImage(this.url);
        loadCallback(this.realImage.display());
      }, 1000);
      return <p>Loading image...</p>;
    }
    return this.realImage.display();
  }
}

// --- Styles ---
const styles = {
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  },
  imageContainer: {
    backgroundColor: "#252525",
    padding: "1rem",
    borderRadius: "12px",
    textAlign: "center",
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
    color: "white",
    backgroundColor: "#3498DB",
    marginTop: "1rem",
  },
};

const ImageWithProxy = ({ imageUrl, id }) => {
  const [imageContent, setImageContent] = useState(null);
  const [proxy] = useState(() => new ImageProxy(imageUrl));

  const loadImage = () => {
    const initialContent = proxy.display((loadedImage) => {
      setImageContent(loadedImage);
    });
    setImageContent(initialContent);
  };

  return (
    <div style={styles.imageContainer}>
      <h4>Image {id}</h4>
      {imageContent || (
        <div
          style={{
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Click to load
        </div>
      )}
      {!imageContent && (
        <button onClick={loadImage} style={styles.button}>
          Load Image
        </button>
      )}
    </div>
  );
};

const ProxyPattern = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const code = `// The Subject Interface
class IServer {
  request() { /* ... */ }
}

// The Real Subject
class RealServer extends IServer {
  request() {
    console.log("Handling request on the real server.");
  }
}

// The Proxy
class ServerProxy extends IServer {
  constructor(realServer) {
    super();
    this.realServer = realServer;
  }
  
  request(userRole) {
    // Protection Proxy: Check access rights
    if (userRole === "admin") {
      this.realServer.request();
    } else {
      console.log("Access Denied.");
    }
  }
}

// Client Code
const server = new RealServer();
const proxy = new ServerProxy(server);
proxy.request("user");  // Access Denied.
proxy.request("admin"); // Handling request...
`;

  return (
    <VisualizerContainer
      title="Proxy Pattern"
      subtitle="Providing a placeholder to control access to another object."
    >
      <div style={styles.gallery}>
        {images.map((img) => (
          <ImageWithProxy key={img.id} imageUrl={img.url} id={img.id} />
        ))}
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

export default ProxyPattern;
