import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import caseStudies from "../case-studies";
import patterns from "../patterns";

const icons = {
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
  ObserverPattern: "👀",
  FactoryPattern: "🏭",
  StatePattern: "🔄",
  SingletonPattern: "🔒",
  BuilderPattern: "🧱",
  CompositePattern: "🧩",
  AdapterPattern: "🔌",
  FacadePattern: "🏛️",
  ProxyPattern: "🛡️",
  ChainOfResponsibilityPattern: "⛓️",
  CommandPattern: "🎯",
  NullObjectPattern: "🚫",
  BridgePattern: "🌉",
  PrototypePattern: "🧬",
  FlyweightPattern: "🪶",
  InterpreterPattern: "📖",
  IteratorPattern: "🔁",
  MediatorPattern: "🤝",
  MementoPattern: "🗂️",
  TemplateMethodPattern: "📐",
  VisitorPattern: "👤",
  AbstractFactoryPattern: "🏭",
};

const Sidebar = () => {
  const navigate = useNavigate();
  const caseStudyKeys = Object.keys(caseStudies);
  const patternKeys = Object.keys(patterns);

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCaseStudies = caseStudyKeys.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPatterns = patternKeys.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItems = (keys, basePath) =>
    keys.map((name) => {
      const path =
        basePath === "case-studies"
          ? `/case-studies/${name
              .replace(/([A-Z])/g, "-$1")
              .toLowerCase()
              .replace(/^-/, "")}`
          : `/patterns/${name
              .replace(/([A-Z])/g, "-$1")
              .toLowerCase()
              .replace(/^-/, "")}`;
      const icon = icons[name] || "📌";

      return (
        <div
          key={name}
          onClick={() => navigate(path)}
          className="sidebar-item"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            cursor: "pointer",
            borderRadius: "8px",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="sidebar-icon"
            style={{ fontSize: "1.6rem", minWidth: "24px" }}
          >
            {icon}
          </span>
          <span className="sidebar-text">
            {name.replace(/([A-Z])/g, " $1").trim()}
          </span>
        </div>
      );
    });

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: isExpanded ? "220px" : "60px",
        background: "linear-gradient(180deg, #1a1a1a, #111)",
        color: "#fff",
        overflow: "hidden",
        transition: "width 0.4s ease",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 0 12px rgba(0,0,0,0.5)",
      }}
    >
      {/* Collapse/Expand Button */}
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        style={{
          padding: "10px",
          cursor: "pointer",
          textAlign: "center",
          borderBottom: "1px solid #333",
          fontSize: "1.4rem",
          userSelect: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#222")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        ☰
      </div>

      {/* Search Input */}
      {isExpanded && (
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              background: "#222",
              color: "#fff",
            }}
          />
        </div>
      )}

      {/* Sidebar items */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {isExpanded && filteredCaseStudies.length > 0 && (
          <div
            style={{ padding: "0 12px", fontWeight: "bold", marginTop: "6px" }}
          >
            Case Studies
          </div>
        )}
        {renderItems(filteredCaseStudies, "case-studies")}

        {isExpanded && filteredPatterns.length > 0 && (
          <div
            style={{ padding: "0 12px", fontWeight: "bold", marginTop: "12px" }}
          >
            Patterns
          </div>
        )}
        {renderItems(filteredPatterns, "patterns")}
      </div>

      <style>
        {`
          .sidebar:not(.expanded) { width: 60px; }
          .sidebar.expanded { width: 300px !important; }
          .sidebar-text { opacity: 0; transition: opacity 0.3s, margin-left 0.3s; margin-left: 0; }
          .sidebar.expanded .sidebar-text, .sidebar:hover:not(.expanded) .sidebar-text {
            opacity: 1; margin-left: 5px;
          }
          .sidebar-item:hover { background: #222; transform: translateX(5px); }
          .sidebar-item:hover .sidebar-icon {
            filter: drop-shadow(0 0 8px #FDE047) drop-shadow(0 0 4px #FFD600); transition: filter 0.3s;
          }
          .sidebar::-webkit-scrollbar { width: 0 !important; background: transparent; }
          .sidebar { scrollbar-width: none; -ms-overflow-style: none; }
          @media (max-width: 768px) {
            .sidebar:not(.expanded) { width: 50px; }
            .sidebar.expanded { width: 180px !important; }
          }
            .sidebar::-webkit-scrollbar {display: none !important; color : transparent; !important;}
        `}
      </style>
    </div>
  );
};

export default Sidebar;
