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
import RateLimiter from "./studies/RateLimiter";
import RestaurantManagementSystem from "./studies/RestaurantManagementSystem";
import CommunityDiscussionPlatform from "./studies/CommunityDiscussionPlatform";
import PaymentSystem from "./studies/PaymentSystem";
import CalendarApplication from "./studies/CalendarApplication";
import StockExchangeSystem from "./studies/StockExchangeSystem";
import LearningManagementSystem from "./studies/LearningManagementSystem";
import LinkedIn from "./studies/LinkedIn";
import CacheMechanism from "./studies/CacheMechanism";
import InventoryManagementSystem from "./studies/InventoryManagementSystem";
import OnlineVotingSystem from "./studies/OnlineVotingSystem";
import MeetingScheduler from "./studies/MeetingScheduler";
import SplitwiseSimplifyAlgorithm from "./studies/SplitwiseSimplifyAlgorithm";
import Splitwise from "./studies/Splitwise";
import FileSystem from "./studies/FileSystem";
import LoggingSystem from "./studies/LoggingSystem";

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

const caseStudies = {
  NotifyMeButton: NotifyMeButton,
  PizzaBillingSystem: PizzaBillingSystem,
  ParkingLot: ParkingLot,
  SnakenLadder: SnakenLadder,
  ElevatorSystem: ElevatorSystem,
  CarRentalSystem: CarRentalSystem,
  LoggingSystem: LoggingSystem,
  TicTacToe: TicTacToe,
  BookMyShow: BookMyShow,
  VendingMachine: VendingMachine,
  ATM: ATMSystem,
  ChessGame: ChessGame,
  FileSystem: FileSystem,
  Splitwise: Splitwise,
  SplitwiseSimplifyAlgorithm: SplitwiseSimplifyAlgorithm,
  CricBuzz: CricBuzz,
  TrueCaller: TrueCaller,
  CarBookingService: CarBookingService,
  HotelBookingSystem: HotelBookingSystem,
  LibraryManagementSystem: LibraryManagementSystem,
  TrafficLightSystem: TrafficLightSystem,
  MeetingScheduler: MeetingScheduler,
  OnlineVotingSystem: OnlineVotingSystem,
  InventoryManagementSystem: InventoryManagementSystem,
  CacheMechanism: CacheMechanism,
  LinkedIn: LinkedIn,
  Amazon: Amazon,
  AirlineManagementSystem: AirlineManagementSystem,
  StockExchangeSystem: StockExchangeSystem,
  LearningManagementSystem: LearningManagementSystem,
  CalendarApplication: CalendarApplication,
  PaymentSystem: PaymentSystem,
  ChatBasedSystem: ChatMessagingApp,
  FoodDeliveryApp: OnlineFoodDeliverySystem,
  CommunityDiscussionPlatform: CommunityDiscussionPlatform,
  RestaurantManagementSystem: RestaurantManagementSystem,
  BowlingAlleyMachine: BowlingAlleyMachine,
  RateLimiter: RateLimiter,
};

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
