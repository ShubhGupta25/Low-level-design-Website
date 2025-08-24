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
          onClick={() => {
            navigate(path);
            setIsExpanded(false); // close on mobile after navigation
          }}
          className="sidebar-item"
        >
          <span className="sidebar-icon">{icon}</span>
          <span className="sidebar-text">
            {name.replace(/([A-Z])/g, " $1").trim()}
          </span>
        </div>
      );
    });

  return (
    <>
      {/* Toggle is always visible; CSS positions it differently on mobile */}
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
        role="button"
      >
        ☰
      </div>

      <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
        {/* Search (hidden on mobile per requirements) */}
        {isExpanded && (
          <div className="sidebar-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {/* Items */}
        <div className="sidebar-items">
          {isExpanded && filteredCaseStudies.length > 0 && (
            <div className="sidebar-group-title">Case Studies</div>
          )}
          {renderItems(filteredCaseStudies, "case-studies")}

          {isExpanded && filteredPatterns.length > 0 && (
            <div className="sidebar-group-title">Patterns</div>
          )}
          {renderItems(filteredPatterns, "patterns")}
        </div>
      </div>

      {/* Overlay for mobile (click to close) */}
      {isExpanded && (
        <div className="sidebar-overlay" onClick={() => setIsExpanded(false)} />
      )}

      <style>
        {`
          /* --- Base / Desktop styles --- */
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 50px; /* collapsed width */
            background: linear-gradient(180deg, #1a1a1a, #111);
            color: #fff;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: width 0.25s ease;
            z-index: 1000;
            box-shadow: 2px 0 12px rgba(0,0,0,0.5);
          }
          .sidebar.expanded { width: 280px; }

          .sidebar-toggle {
            position: fixed; /* sits above content */
            top: 10px;
            left: 10px;
            padding: 10px 12px;
            cursor: pointer;
            text-align: center;
            font-size: 1.4rem;
            user-select: none;
            background: #111;
            border-radius: 8px;
            z-index: 1100;
            transition: box-shadow 0.2s ease, transform 0.1s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          }
          .sidebar-toggle:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.6); }
          .sidebar-toggle:active { transform: scale(0.96); }

          .sidebar-search { margin-top: 4rem; padding: 10px; border-bottom: 1px solid #222; }
          .sidebar-search input {
            width: 100%;
            padding: 6px 10px;
            border-radius: 8px;
            border: none;
            outline: none;
            background: #222;
            color: #fff;
          }

          .sidebar-items {
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 6px 0;
          }

          .sidebar-group-title {
            padding: 8px 12px;
            font-weight: bold;
            margin-top: 6px;
            color: #eee;
          }

          .sidebar-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 8px;
            transition: background 0.25s ease, transform 0.25s ease;
            white-space: nowrap;
          }
          .sidebar-item:hover { background: #222; transform: translateX(5px); }

          .sidebar-icon { font-size: 1.5rem; min-width: 24px; }
          /* 🔥 restore icon glow hover effect */
          .sidebar-item:hover .sidebar-icon {
            filter: drop-shadow(0 0 8px #FDE047) drop-shadow(0 0 4px #FFD600);
            transition: filter 0.25s ease;
          }

          .sidebar-text {
            opacity: 0;
            transition: opacity 0.25s ease, margin-left 0.25s ease;
            margin-left: 0;
          }
          /* Show text when expanded */
          .sidebar.expanded .sidebar-text { opacity: 1; margin-left: 5px; }
          /* Desktop: peek text on hover even when collapsed */
          .sidebar:hover:not(.expanded) .sidebar-text { opacity: 1; margin-left: 5px; }

          .sidebar::-webkit-scrollbar { display: none; }
          .sidebar { scrollbar-width: none; -ms-overflow-style: none; }

          /* --- Mobile styles --- */
          @media (max-width: 768px) {
            /* Sidebar becomes a sliding overlay (icons-only) */
            .sidebar {
              width: 60px;                /* target width when visible */
              transform: translateX(-100%); /* hidden by default */
              transition: transform 0.28s ease;
              box-shadow: none;
            }
            .sidebar.expanded {
              transform: translateX(0);   /* slide in */
              box-shadow: 2px 0 12px rgba(0,0,0,0.6);
            }

            /* Burger button pinned, always visible */
            .sidebar-toggle {
              top: 12px;
              left: 12px;
              background: #111;
              border-radius: 8px;
            }

            /* Hide text & group titles & search on mobile for icons-only panel */
            

            /* Overlay appears only on mobile */
            .sidebar-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0,0,0,0.4);
              z-index: 900;
            }
          }

          /* tiny phones */
          @media (max-width: 400px) {
            .sidebar { width: 56px; }
            .sidebar-icon { font-size: 1.4rem; }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
