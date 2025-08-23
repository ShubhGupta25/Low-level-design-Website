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
    padding: "2rem",
    fontFamily: "'Inter', sans-serif",
    color: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "2rem",
  },
  listTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    borderBottom: "1px solid #444",
    paddingBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
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
  },
  icon: {
    fontSize: "1.4rem",
  },
  innercontainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  },
};

// Grouping Functions
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

// Component
const HomePage = () => {
  const groupedPatterns = groupPatterns(patterns);
  const groupedStudies = groupCaseStudies(caseStudies);

  const renderItems = (items, isPattern = false) =>
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
      <div style={styles.innercontainer}>
        <div>
          <h2 style={styles.listTitle}>📜 Creational Patterns</h2>
          <ul style={styles.list}>{renderItems(groupedPatterns.Creational)}</ul>

          <h2 style={styles.listTitle}>🏗️ Structural Patterns</h2>
          <ul style={styles.list}>{renderItems(groupedPatterns.Structural)}</ul>

          <h2 style={styles.listTitle}>🔄 Behavioral Patterns</h2>
          <ul style={styles.list}>{renderItems(groupedPatterns.Behavioral)}</ul>
        </div>
        <div>
          {" "}
          {Object.entries(groupedStudies).map(([group, studies]) => (
            <div key={group}>
              <h2 style={styles.listTitle}>
                {icons[group] || "📁"} {group} Case Studies
              </h2>
              <ul style={styles.list}>{renderItems(studies)}</ul>
            </div>
          ))}{" "}
        </div>
      </div>

      <style>
        {`
          .hover-item:hover { background: #222; transform: translateX(5px); transition: all 0.2s; }
          .hover-item:hover span { filter: drop-shadow(0 0 6px #FDE047); }
          ul::-webkit-scrollbar { width: 6px; }
          ul::-webkit-scrollbar-thumb { background: #444; border-radius: 3px; }
          ul { scrollbar-width: thin; scrollbar-color: #444 transparent; }
        `}
      </style>
    </div>
  );
};

export default HomePage;
