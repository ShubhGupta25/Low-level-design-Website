import React from "react";
import { Link } from "react-router-dom";
import { patterns, caseStudies } from "../App";

// Icons for case studies & patterns
const icons = {
  // Case studies
  NotifyMeButton: "🔔",
  PizzaBillingSystem: "🍕",
  ParkingLot: "🅿️",
  SnakenLadder: "🎲",
  ElevatorSystem: "🛗",
  CarRentalSystem: "🚗",
  LoggingSystem: "📝",
  TicTacToe: "❌⭕",
  BookMyShow: "🎬",
  VendingMachine: "🥤",
  ATM: "🏧",
  ChessGame: "♟️",
  FileSystem: "📁",
  Splitwise: "💸",
  TrueCaller: "📞",
  HotelBookingSystem: "🏨",
  LibraryManagementSystem: "📚",
  TrafficLightSystem: "🚦",
  CarBookingService: "🚙",
  AirlineManagementSystem: "✈️",
  Amazon: "🛒",
  RateLimiter: "⏱️",
  RestaurantManagementSystem: "🍽️",
  CommunityDiscussionPlatform: "💬",
  CalendarApplication: "📅",
  PaymentSystem: "💰",
  ChatBasedSystem: "💬",
  FoodDeliveryApp: "🍱",
  BowlingAlleyMachine: "🎳",
  LearningManagementSystem: "🎓",
  StockExchangeSystem: "📈",
  InventoryManagementSystem: "📦",
  OnlineVotingSystem: "🗳️",
  MeetingScheduler: "📌",
  CacheMechanism: "⚡",
  LinkedIn: "💼",

  // Patterns
  DecoratorPattern: "🎨",
  ChainOfResponsibilityPattern: "⛓️",
  ObserverPattern: "👀",
  FactoryPattern: "🏭",
  StatePattern: "🔄",
  SingletonPattern: "🔒",
  BuilderPattern: "🧱",
  CompositePattern: "🧩",
  AdapterPattern: "🔌",
  FacadePattern: "🏛️",
  ProxyPattern: "🛡️",
  ChainPattern: "⛓️",
  CommandPattern: "🎯",
  NullObjectPattern: "🚫",
  BridgePattern: "🌉",
  PrototypePattern: "🧬",
  FlyweightPattern: "🪶",
  InterpreterPattern: "📖",
  IteratorPattern: "🔁",
  MediatorPattern: "🤝",
  MementoPattern: "🗂️",
  TemplatePattern: "📐",
  VisitorPattern: "👤",
  AbstractFactoryPattern: "🏭",
};

// Styles
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Inter', sans-serif",
    color: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2rem",
  },
  listTitle: {
    fontSize: "1.6rem",
    marginBottom: "1rem",
    borderBottom: "1px solid #444",
    paddingBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  list: {
    listStyle: "none",
    padding: "1rem",
    margin: "0 0 2rem 0",
    background: "#1A1A1A",
    borderRadius: "10px",
    maxHeight: "350px",
    overflowY: "auto",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "6px 8px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  link: {
    color: "#5DADE2",
    textDecoration: "none",
    flex: 1,
    wordBreak: "break-word",
  },
  icon: { fontSize: "1.4rem" },
  innercontainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
};

// Responsive breakpoint arrays
const CREATIONAL = [
  "Factory",
  "AbstractFactory",
  "Singleton",
  "Builder",
  "Prototype",
];
const STRUCTURAL = [
  "Decorator",
  "Composite",
  "Adapter",
  "Facade",
  "Proxy",
  "Bridge",
  "Flyweight",
];
const BEHAVIORAL = [
  "Observer",
  "ChainOfResponsibility",
  "Command",
  "NullObject",
  "State",
  "Interpreter",
  "Iterator",
  "Mediator",
  "Memento",
  "Template Method",
  "Visitor",
];

const groupPatterns = (patterns) => {
  const groups = { Creational: [], Structural: [], Behavioral: [] };
  patterns.forEach((p) => {
    const name = p.name.replace(/ Pattern$/, "").trim();
    if (CREATIONAL.some((c) => name.includes(c))) groups.Creational.push(p);
    else if (STRUCTURAL.some((s) => name.includes(s)))
      groups.Structural.push(p);
    else if (BEHAVIORAL.some((b) => name.includes(b)))
      groups.Behavioral.push(p);
  });
  return groups;
};

const CASE_STUDY_GROUPS = {
  Games: [
    "Snake n Ladder",
    "Tic-Tac-Toe",
    "Chess Game",
    "Bowling Alley Machine",
  ],
  "Booking & Rental": [
    "Car Rental System",
    "Car Booking Service",
    "Hotel Booking System",
    "BookMyShow",
    "Restaurant Management System",
    "Food Delivery App",
    "Calendar Application",
  ],
  "Finance & Payment": [
    "Splitwise",
    "Splitwise Simplify Algorithm",
    "Payment System",
    "Stock Exchange System",
    "Inventory Management System",
    "ATM",
    "Cache Mechanism",
    "Rate Limiter",
  ],
  "Social & Community": [
    "LinkedIn",
    "Chat Based System",
    "Community Discussion Platform",
    "Online Voting System",
    "True Caller",
  ],
  "System & Infra": [
    "Parking Lot",
    "Elevator System",
    "Traffic Light System",
    "File System",
    "Logging System",
    "Amazon",
    "Airline Management System",
    "Learning Management System",
    "Meeting Scheduler",
  ],
  Miscellaneous: ["Notify-Me Button", "Pizza Billing System"],
  Others: ["CricBuzz", "Hotel Booking System", "Library Management System"],
};

const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

const groupCaseStudies = (caseStudies) => {
  const groups = {};
  Object.entries(CASE_STUDY_GROUPS).forEach(([group, names]) => {
    groups[group] = caseStudies.filter((cs) =>
      names.some((n) => normalize(n) === normalize(cs.name))
    );
  });
  return groups;
};

const HomePage = () => {
  const groupedPatterns = groupPatterns(patterns);
  const groupedStudies = groupCaseStudies(caseStudies);

  const renderItems = (items) =>
    items.map((item) => (
      <li key={item.path} style={styles.listItem} className="hover-item">
        <Link to={item.path} style={styles.link}>
          <span style={styles.icon}>{icons[item.name] || "📌"}</span>
          {item.name}
        </Link>
      </li>
    ));

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Low Level Design Patterns & Case Studies</h1>
      <div style={styles.innercontainer} className="home-grid">
        <div>
          <h2 style={styles.listTitle}>📜 Creational Patterns</h2>
          <ul style={styles.list}>{renderItems(groupedPatterns.Creational)}</ul>

          <h2 style={styles.listTitle}>🏗️ Structural Patterns</h2>
          <ul style={styles.list}>{renderItems(groupedPatterns.Structural)}</ul>

          <h2 style={styles.listTitle}>🔄 Behavioral Patterns</h2>
          <ul style={styles.list}>{renderItems(groupedPatterns.Behavioral)}</ul>
        </div>

        <div>
          {Object.entries(groupedStudies).map(([group, studies]) => (
            <div key={group}>
              <h2 style={styles.listTitle}>
                {icons[group] || "📁"} {group} Case Studies
              </h2>
              <ul style={styles.list}>{renderItems(studies)}</ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Responsive Grid */
        @media (min-width: 768px) {
          .home-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1200px) {
          .home-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        /* Hover effects */
        .hover-item:hover {
          background: #333;
          transform: translateX(5px);
        }

        .hover-item span {
          transition: all 0.3s ease;
        }

        .hover-item:hover span {
          filter: drop-shadow(0 0 8px #FDE047) drop-shadow(0 0 4px #FFD600);
          transform: scale(1.2);
        }

        /* Make lists wrap on small screens */
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        li {
          flex: 1 1 100%; /* full width mobile, auto for larger screens */
        }

        @media (min-width: 600px) {
          li {
            flex: 1 1 48%;
          }
        }

        @media (min-width: 900px) {
          li {
            flex: 1 1 32%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
