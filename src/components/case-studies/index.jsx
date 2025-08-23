import React from "react";
import NotifyMeButton from "./studies/NotifyMeButton";
import PizzaBillingSystem from "./studies/PizzaBillingSystem";
import ParkingLot from "./studies/ParkingLot";
import SnakenLadder from "./studies/SnakenLadder";
import ElevatorSystem from "./studies/ElevatorSystem";
import CarRentalSystem from "./studies/CarRentalSystem";
import CaseStudyTemplate from "./studies/CaseStudyTemplate";
import TrueCaller from "./studies/TrueCaller";
import HotelBookingSystem from "./studies/HotelBookingSystem";
import ATMSystem from "./studies/ATM";
import VendingMachine from "./studies/VendingMachine";
import OnlineFoodDeliverySystem from "./studies/FoodDeliveryApp";
import TrafficLightSystem from "./studies/TrafficLightSystem";
import ChatMessagingApp from "./studies/ChatBasedSystem";
import BookMyShow from "./studies/BookMyShow";
import LibraryManagementSystem from "./studies/LibraryManagementSystem";
import TicTacToe from "./studies/TicTacToe";
import ChessGame from "./studies/ChessGame";
import BowlingAlleyMachine from "./studies/BowlingAlleyMachine";
import CricBuzz from "./studies/CricBuzz";
import AirlineManagementSystem from "./studies/AirlineManagementSystem";
import Amazon from "./studies/Amazon";
import CarBookingService from "./studies/CarBookingService";

const caseStudyList = [
  "NotifyMeButton",
  "PizzaBillingSystem",
  "ParkingLot",
  "SnakenLadder",
  "ElevatorSystem",
  "CarRentalSystem",
  "LoggingSystem",
  "TicTacToe",
  "BookMyShow",
  "VendingMachine",
  "ATM",
  "ChessGame",
  "FileSystem",
  "Splitwise",
  "SplitwiseSimplifyAlgorithm",
  "CricBuzz",
  "TrueCaller",
  "CarBookingService",
  "HotelBookingSystem",
  "LibraryManagementSystem",
  "TrafficLightSystem",
  "MeetingScheduler",
  "OnlineVotingSystem",
  "InventoryManagementSystem",
  "CacheMechanism",
  "LinkedIn",
  "Amazon",
  "AirlineManagementSystem",
  "StockExchangeSystem",
  "LearningManagementSystem",
  "CalendarApplication",
  "PaymentSystem",
  "ChatBasedSystem",
  "FoodDeliveryApp",
  "CommunityDiscussionPlatform",
  "RestaurantManagementSystem",
  "BowlingAlleyMachine",
  "RateLimiter",
];

const caseStudies = {};

caseStudies.NotifyMeButton = NotifyMeButton;
caseStudies.PizzaBillingSystem = PizzaBillingSystem;
caseStudies.ParkingLot = ParkingLot;
caseStudies.SnakenLadder = SnakenLadder;
caseStudies.ElevatorSystem = ElevatorSystem;
caseStudies.CarRentalSystem = CarRentalSystem;
caseStudies.TrueCaller = TrueCaller;
caseStudies.HotelBookingSystem = HotelBookingSystem;
caseStudies.ATMSystem = ATMSystem;
caseStudies.TrueCaller = TrueCaller;
caseStudies.VendingMachine = VendingMachine;
caseStudies.TrafficLightSystem = TrafficLightSystem;
caseStudies.OnlineFoodDeliverySystem = OnlineFoodDeliverySystem;
caseStudies.ChatMessagingApp = ChatMessagingApp;
caseStudies.BookMyShow = BookMyShow;
caseStudies.LibraryManagementSystem = LibraryManagementSystem;
caseStudies.ChessGame = ChessGame;
caseStudies.TicTacToe = TicTacToe;
caseStudies.BowlingAlleyMachine = BowlingAlleyMachine;
caseStudies.CricBuzz = CricBuzz;
caseStudies.AirlineManagementSystem = AirlineManagementSystem;
caseStudies.Amazon = Amazon;
caseStudies.CarBookingService = CarBookingService;

caseStudyList.forEach((name) => {
  if (!caseStudies[name]) {
    caseStudies[name] = () => (
      <CaseStudyTemplate
        title={`Design ${name.replace(/([A-Z])/g, " $1").trim()}`}
      />
    );
  }
});

export default caseStudies;
