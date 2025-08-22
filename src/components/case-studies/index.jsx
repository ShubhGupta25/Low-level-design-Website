import React from "react";
import CaseStudyTemplate from "./CaseStudyTemplate";

const caseStudyList = [
  "Notify-Me Button",
  "Pizza Billing System",
  "Parking Lot",
  "Snake n Ladder",
  "Elevator System",
  "Car Rental System",
  "Logging System",
  "Tic-Tac-Toe",
  "BookMyShow",
  "Vending Machine",
  "ATM",
  "Chess game",
  "File System",
  "Splitwise",
  "Splitwise Simplify Algorithm",
  "CricBuzz",
  "True Caller",
  "Car Booking Service",
  "Hotel Booking System",
  "Library Management System",
  "Traffic Light System",
  "Meeting Scheduler",
  "Online Voting System",
  "Inventory Management System",
  "Cache Mechanism",
  "LinkedIn",
  "Amazon",
  "Airline Management System",
  "Stock Exchange System",
  "Learning Management System",
  "Calendar Application",
  "Payment System",
  "Chat based system",
  "Food delivery app",
  "Community Discussion Platform",
  "Restaurant Management System",
  "Bowling Alley Machine",
  "Rate Limiter",
];

const caseStudies = {};

caseStudyList.forEach((name) => {
  const componentName = name.replace(/[^a-zA-Z0-9]/g, "");
  caseStudies[componentName] = () => (
    <CaseStudyTemplate title={`Design ${name}`} />
  );
});

export default caseStudies;
