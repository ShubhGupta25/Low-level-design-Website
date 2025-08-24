import React from "react";
import styles from "../shared/Styles";
const icons = {
  // Case studies
  "Notify Me Button System": "🔔",
  "Pizza Billing System": "🍕",
  "Parking Lot System": "🅿️",
  "Snaken Ladder": "🎲",
  "Elevator System": "🛗",
  "Car Rental System": "🚗",
  "Logging System": "📝",
  "Tic Tac Toe Game": "❌⭕",
  "BookMyShow (Ticket Booking)": "🎬",
  "Vending Machine": "🥤",
  "ATM System": "🏧",
  "Chess Game": "♟️",
  "File System": "📁",
  "Splitwise (Expense Sharing)": "💸",
  "Splitwise Simplify Algorithm": "💸",
  "TrueCaller (Caller Identification & Spam Detection)": "📞",
  "Hotel Booking System": "🏨",
  "Library Management System": "📚",
  "Traffic Light System": "🚦",
  "Car Booking Service (Uber/Ola-like)": "🚙",
  "Airline Management System": "✈️",
  "Amazon E-Commerce System": "🛒",
  "Rate Limiter System": "⏱️",
  "Restaurant Management System": "🍽️",
  "Community Discussion Platform": "💬",
  "Calendar Application": "📅",
  "Payment System": "💰",
  "Chat-Based System": "💬",
  "Food Delivery App": "🍱",
  "Bowling Alley Machine": "🎳",
  "Learning Management System": "🎓",
  "Stock Exchange System": "📈",
  "Inventory Management System": "📦",
  "Online Voting System": "🗳️",
  "Meeting Scheduler": "📌",
  "Cache Mechanism": "⚡",
  "LinkedIn System": "💼",

  // Patterns
  "Decorator Pattern": "🎨",
  "Chain of Responsibility Pattern": "⛓️",
  "Observer Pattern": "👀",
  "Factory Pattern": "🏭",
  "State Pattern": "🔄",
  "Singleton Pattern": "🔒",
  "Builder Pattern": "🧱",
  "Composite Pattern": "🧩",
  "Adapter Pattern": "🔌",
  "Facade Pattern": "🏛️",
  "Proxy Pattern": "🛡️",
  "Chain Pattern": "⛓️",
  "Command Pattern": "🎯",
  "Null Object Pattern": "🚫",
  "Bridge Pattern": "🌉",
  "Prototype Pattern": "🧬",
  "Flyweight Pattern": "🪶",
  "Interpreter Pattern": "📖",
  "Iterator Pattern": "🔁",
  "Mediator Pattern": "🤝",
  "Memento Pattern": "🗂️",
  "Template Method Pattern": "📐",
  "Visitor Pattern": "👤",
  "Abstract Factory Pattern": "🏭",
};

const VisualizerContainer = ({ title, subtitle, children }) => {
  return (
    <>
      <style>{`
        .vc-container {
          font-family: 'Inter', sans-serif;
          background-color: #1A1A1A;
          color: #F0F0F0;
          padding: 1.5rem 1rem;
          border-radius: 1rem;
          max-width: 100%;
          border: 1px solid #333;
          box-sizing: border-box;
          margin-top: 4rem;
        }

        .vc-header {
          text-align: center;
          border-bottom: 1px solid #333;
          padding-bottom: 1rem;
        }

        .vc-title {
          font-size: 1.8rem;
          line-height: 1.2;    
          background: linear-gradient(90deg, #A569BD, #5DADE2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .vc-subtitle {
          font-size: 0.95rem;
          color: #999;
          font-weight: 300;
          margin-top: 0.5rem;
        }

        .hover-item {
          cursor: pointer; 
          filter: drop-shadow(0 0 8px #FDE047) drop-shadow(0 0 4px #FFD600);
          transition: filter 0.25s ease;
        }

        /* Tablet screens (≥600px) */
        @media (min-width: 600px) {
          .vc-container {
            padding: 2rem;
            border-radius: 1.25rem;
          }
          .vc-title {
            font-size: 2.2rem;
          }
          .vc-subtitle {
            font-size: 1.05rem;
          }
        }

        /* Small desktops (≥900px) */
        @media (min-width: 900px) {
          .vc-container {
            padding: 2rem 3rem;
            border-radius: 1.5rem;
            max-width: 95vw;
            margin: 3rem 1rem 0rem 4rem;
          }
          .vc-title {
            font-size: 2.5rem;
          }
          .vc-subtitle {
            font-size: 1.1rem;
          }
        }

        /* Large desktops (≥1200px) */
        @media (min-width: 1200px) {
          .vc-container {
            max-width: 95vw;
            margin: 3rem 1rem 0rem 4rem;
          }
          .vc-title {
            font-size: 2.8rem;
          }
          .vc-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="vc-container">
        <header className="vc-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <h1 className="hover-item"> {icons[title] || "📌"} </h1>
            <h1 className="vc-title">{title}</h1>
          </div>
          {subtitle && <p className="vc-subtitle">{subtitle}</p>}
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default VisualizerContainer;
