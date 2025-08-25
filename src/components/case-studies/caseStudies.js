export const caseStudies = {
  NotifyMeButton: {
    title: "Notify Me Button System",
    description:
      "Design a service where users can subscribe for notifications when an out-of-stock product is available.",
    overview: {
      problem: "Enable users to request alerts for product availability.",
      functionalReq: [
        "Allow user subscription to product alerts",
        "Trigger notification when product restocks",
        "Support multiple channels (email, SMS, push)",
      ],
      nonFunctionalReq: [
        "Handle millions of subscriptions",
        "Low latency notifications",
        "Reliable delivery",
      ],
    },
    hld: {
      apis: [
        "POST /subscribe/{productId}",
        "DELETE /unsubscribe/{productId}",
        "POST /notify/{productId}",
      ],
      databaseSchema: `
        Subscription(subscriptionId, userId, productId, channel)
        Product(productId, name, stock)
      `,
      architectureNotes:
        "Use Pub/Sub or Kafka for event-driven notifications. Notification service consumes product restock events.",
    },
    lld: {
      classDiagram: `
        class Subscription {
          int id;
          int userId;
          int productId;
          Channel channel;
        }

        class NotificationService {
          void sendNotification(User u, Product p);
        }
      `,
      patterns: ["Observer for subscribers", "Publisher-Subscriber for events"],
    },
    extensions: [
      "Allow scheduling notification times",
      "AI-based channel preference",
      "Bulk notification throttling",
    ],
  },

  PizzaBillingSystem: {
    title: "Pizza Billing System",
    description:
      "Design a pizza ordering and billing system with toppings, sizes, and multiple payment options.",
    overview: {
      problem: "Automate pizza ordering with customizable options and billing.",
      functionalReq: [
        "Add/remove toppings",
        "Calculate total with tax/discounts",
        "Multiple payment methods",
        "Generate invoice",
      ],
      nonFunctionalReq: [
        "Accurate billing",
        "Scalable to multiple outlets",
        "Responsive UI for POS system",
      ],
    },
    hld: {
      apis: ["POST /order", "GET /order/{id}", "POST /payment"],
      databaseSchema: `
        Order(orderId, userId, totalAmount, status)
        Pizza(pizzaId, size, crust)
        Topping(toppingId, name, price)
      `,
      architectureNotes: "Microservices for Order, Payment, and Inventory.",
    },
    lld: {
      classDiagram: `
        class Pizza {
          Size size;
          Crust crust;
          List<Topping> toppings;
        }

        class Order {
          int id;
          List<Pizza> pizzas;
          double totalAmount;
        }
      `,
      patterns: ["Factory for Pizza creation", "Decorator for toppings"],
    },
    extensions: [
      "Dynamic pricing based on demand",
      "Subscription-based meal plans",
      "Integration with delivery apps",
    ],
  },

  ParkingLot: {
    title: "Parking Lot System",
    description:
      "Design a parking lot system supporting multiple vehicles, tickets, and payments.",
    overview: {
      problem:
        "We need to design a parking lot that supports multiple vehicles.",
      functionalReq: [
        "Park/unpark a vehicle",
        "Issue tickets",
        "Calculate parking fees",
        "Support multiple floors and gates",
      ],
      nonFunctionalReq: [
        "Scalable to handle large traffic",
        "Concurrency control",
        "Extensible for new vehicle types",
      ],
    },
    hld: {
      apis: ["POST /parkVehicle", "POST /unparkVehicle", "GET /availableSpots"],
      databaseSchema: `
        Vehicle(vehicleId, number, type)
        ParkingSpot(spotId, type, isFree)
        Ticket(ticketId, vehicleId, spotId, entryTime, exitTime)
      `,
      architectureNotes:
        "Centralized ParkingLot Manager with DB transactions to avoid race conditions.",
    },
    lld: {
      classDiagram: `
        class Vehicle {
          String number;
          VehicleType type;
        }

        class ParkingSpot {
          int id;
          VehicleType type;
          boolean isFree;
        }

        class Ticket {
          int id;
          Date entryTime;
          Date exitTime;
        }

        class ParkingLot {
          List<ParkingFloor> floors;
          Ticket park(Vehicle v);
        }
      `,
      patterns: ["Singleton for ParkingLot", "Strategy for fee calculation"],
    },
    extensions: [
      "EV charging spots",
      "Reservation of spots",
      "Dynamic pricing",
    ],
  },

  SnakenLadder: {
    title: "Snake and Ladder Game",
    description: "Design a multiplayer Snake and Ladder game system.",
    overview: {
      problem: "Enable multiple players to play Snake & Ladder digitally.",
      functionalReq: [
        "Initialize board with snakes and ladders",
        "Roll dice",
        "Track player positions",
        "Detect winner",
      ],
      nonFunctionalReq: [
        "Concurrency for multiple players",
        "Save game state",
        "Cross-platform UI",
      ],
    },
    hld: {
      apis: ["POST /startGame", "POST /rollDice", "GET /gameStatus/{id}"],
      databaseSchema: `
        Game(gameId, status)
        Player(playerId, name, position)
      `,
      architectureNotes: "Turn-based system, WebSockets for real-time play.",
    },
    lld: {
      classDiagram: `
        class Player {
          int id;
          String name;
          int position;
        }

        class Game {
          List<Player> players;
          void start();
          void rollDice(Player p);
        }
      `,
      patterns: [
        "Observer for player updates",
        "State pattern for game states",
      ],
    },
    extensions: [
      "Support online multiplayer",
      "AI bot opponents",
      "Custom board sizes",
    ],
  },

  ElevatorSystem: {
    title: "Elevator System",
    description:
      "Design an elevator control system supporting multiple floors and elevators.",
    overview: {
      problem:
        "We need to design an elevator system that optimizes elevator allocation.",
      functionalReq: [
        "Handle multiple elevators",
        "Service requests (up/down)",
        "Optimize based on current position/load",
      ],
      nonFunctionalReq: [
        "Low latency request servicing",
        "Scalable to large buildings",
        "Energy efficient scheduling",
      ],
    },
    hld: {
      apis: ["POST /requestElevator", "GET /elevatorStatus/{id}"],
      databaseSchema: `
        Elevator(elevatorId, currentFloor, direction, status)
        Request(requestId, floor, direction)
      `,
      architectureNotes:
        "Scheduler decides which elevator handles which request. Use priority queues for requests.",
    },
    lld: {
      classDiagram: `
        class Elevator {
          int id;
          int currentFloor;
          Direction direction;
          Status status;
        }

        class Request {
          int id;
          int floor;
          Direction direction;
        }

        class ElevatorController {
          List<Elevator> elevators;
          void schedule(Request r);
        }
      `,
      patterns: ["Strategy for scheduling", "Observer for status updates"],
    },
    extensions: [
      "Smart energy-saving mode",
      "AI prediction of peak usage",
      "Emergency/fire handling",
    ],
  },

  ChessGame: {
    title: "Chess Game System",
    description:
      "Design an online chess platform where two players can play, track moves, and validate rules.",
    overview: {
      problem:
        "We need to create an interactive chess game with rule validation, timers, and move history.",
      functionalReq: [
        "Create/join a chess match",
        "Move validation based on chess rules",
        "Track move history",
        "Support timers per player",
      ],
      nonFunctionalReq: [
        "Low latency updates",
        "Support multiplayer mode",
        "Scalable to thousands of matches",
      ],
    },
    hld: {
      apis: ["POST /createGame", "POST /move", "GET /gameState"],
      databaseSchema: `
        Game(gameId, player1Id, player2Id, status, winnerId)
        Move(moveId, gameId, playerId, moveNotation, timestamp)
      `,
      architectureNotes:
        "Real-time WebSocket communication for moves. Game state stored in-memory with persistence for replay.",
    },
    lld: {
      classDiagram: `
        class Game {
          int gameId;
          Player player1;
          Player player2;
          Board board;
          List<Move> moves;
        }

        class Board {
          Piece[][] grid;
          boolean validateMove(Move m);
        }

        class Piece {
          String type;
          boolean isValidMove(Position from, Position to);
        }
      `,
      patterns: ["Factory for creating pieces", "Observer for move updates"],
    },
    extensions: [
      "Add AI opponent with difficulty levels",
      "Spectator mode with move replays",
      "Tournament and leaderboard system",
    ],
  },

  FileSystem: {
    title: "File System Design",
    description:
      "Design a file system supporting files, directories, and operations like create, delete, and search.",
    overview: {
      problem:
        "We need a hierarchical file system to manage files and directories.",
      functionalReq: [
        "Create, read, update, and delete files",
        "Create and delete directories",
        "Search files by name",
        "Support file metadata",
      ],
      nonFunctionalReq: [
        "Efficient directory traversal",
        "Handle large storage capacity",
        "Concurrency for multiple operations",
      ],
    },
    hld: {
      apis: ["POST /createFile", "GET /readFile", "DELETE /deleteFile"],
      databaseSchema: `
        File(fileId, name, size, type, createdAt, directoryId)
        Directory(dirId, name, parentId)
      `,
      architectureNotes:
        "Use a tree-like directory structure. Metadata stored in DB, file content in blob storage.",
    },
    lld: {
      classDiagram: `
        class File {
          int id;
          String name;
          int size;
        }

        class Directory {
          int id;
          String name;
          List<File> files;
          List<Directory> subDirectories;
        }

        class FileSystem {
          Directory root;
          void createFile(String path);
        }
      `,
      patterns: [
        "Composite pattern for directory-tree",
        "Singleton for root FileSystem",
      ],
    },
    extensions: [
      "Support symbolic links",
      "Implement file versioning",
      "Introduce permissions and access control",
    ],
  },

  Splitwise: {
    title: "Splitwise Expense Sharing System",
    description:
      "Design a system to track shared expenses among friends and settle balances.",
    overview: {
      problem:
        "We need a system to manage group expenses and track who owes whom.",
      functionalReq: [
        "Add expenses",
        "Split expenses equally or by percentage",
        "Track balances between users",
        "Settle debts",
      ],
      nonFunctionalReq: [
        "Handle large groups",
        "Low latency updates",
        "Support offline sync",
      ],
    },
    hld: {
      apis: ["POST /addExpense", "GET /balances", "POST /settle"],
      databaseSchema: `
        User(userId, name, email)
        Group(groupId, name)
        Expense(expenseId, groupId, amount, paidBy)
        Balance(userId, owesTo, amount)
      `,
      architectureNotes:
        "Use Balance table for quick lookups. Event sourcing for expense tracking.",
    },
    lld: {
      classDiagram: `
        class User {
          int id;
          String name;
        }

        class Expense {
          int id;
          double amount;
          User paidBy;
          List<User> sharedWith;
        }

        class BalanceSheet {
          Map<User, Double> balances;
        }
      `,
      patterns: ["Observer for balance updates", "Strategy for split logic"],
    },
    extensions: [
      "Support multiple currencies",
      "Send reminders for pending payments",
      "Integrate with payment gateways",
    ],
  },

  SplitwiseSimplifyAlgorithm: {
    title: "Splitwise Simplification Algorithm",
    description:
      "Design an algorithm to minimize the number of transactions required for debt settlement.",
    overview: {
      problem: "We need to reduce redundant transactions in group settlements.",
      functionalReq: [
        "Take all balances as input",
        "Optimize number of transactions",
        "Ensure debts are cleared",
      ],
      nonFunctionalReq: [
        "Efficient for large groups",
        "Accurate settlement",
        "Scalable to 1000s of users",
      ],
    },
    hld: {
      apis: ["POST /simplifyBalances"],
      databaseSchema: `
        Balance(userId, owesTo, amount)
      `,
      architectureNotes:
        "Graph-based approach where nodes represent users and edges represent debts. Apply min-transaction settlement logic.",
    },
    lld: {
      classDiagram: `
        class Transaction {
          User from;
          User to;
          double amount;
        }

        class Simplifier {
          List<Transaction> simplify(List<Balance> balances);
        }
      `,
      patterns: [
        "Greedy algorithm for settlement",
        "Graph algorithm for optimization",
      ],
    },
    extensions: [
      "Visualize transactions as a graph",
      "Suggest settlement via UPI/PayPal",
      "Handle weighted priority settlements",
    ],
  },

  CricBuzz: {
    title: "CricBuzz Live Score System",
    description:
      "Design a live cricket score system with ball-by-ball updates and commentary.",
    overview: {
      problem:
        "We need a system to stream live cricket scores and commentary in real-time.",
      functionalReq: [
        "Update score per ball",
        "Show commentary",
        "Support multiple matches",
        "Show player stats",
      ],
      nonFunctionalReq: [
        "Low latency updates (<1s)",
        "High availability",
        "Scalable for millions of users",
      ],
    },
    hld: {
      apis: ["GET /liveScore", "GET /matchDetails", "WS /subscribeMatch"],
      databaseSchema: `
        Match(matchId, teams, status)
        Score(matchId, runs, wickets, overs)
        Commentary(matchId, ballNo, text, timestamp)
      `,
      architectureNotes:
        "Use WebSockets for real-time score updates. Cache frequently accessed match stats with Redis.",
    },
    lld: {
      classDiagram: `
        class Match {
          int id;
          Team teamA;
          Team teamB;
          Score score;
        }

        class Score {
          int runs;
          int wickets;
          float overs;
        }

        class Commentary {
          int ballNo;
          String text;
        }
      `,
      patterns: [
        "Observer for real-time updates",
        "Publisher-Subscriber for commentary",
      ],
    },
    extensions: [
      "Add video/live streaming",
      "Fantasy league integration",
      "Player comparison and analytics",
    ],
  },

  ATM: {
    title: "ATM System",
    description:
      "Design an ATM system that handles cash withdrawal, deposits, balance inquiry, and transfers.",
    overview: {
      problem:
        "We need to design an ATM that interacts with bank servers and handles multiple types of transactions.",
      functionalReq: [
        "Authenticate card and PIN",
        "Cash withdrawal and deposits",
        "Check balance",
        "Transfer funds between accounts",
      ],
      nonFunctionalReq: [
        "High availability and security",
        "Fast response times",
        "Audit logging for all transactions",
      ],
    },
    hld: {
      apis: [
        "POST /authenticate",
        "POST /withdraw",
        "POST /deposit",
        "GET /balance",
      ],
      databaseSchema: `
        Account(accountId, customerId, balance)
        Transaction(transactionId, accountId, type, amount, timestamp)
      `,
      architectureNotes:
        "ATM connects securely with bank core systems via encrypted APIs. Transactions must ensure atomicity and consistency.",
    },
    lld: {
      classDiagram: `
        class ATM {
          int id;
          CashDispenser dispenser;
          Transaction processRequest(Card c, int pin);
        }

        class Card {
          String number;
          Date expiry;
          int cvv;
        }

        class Account {
          int id;
          double balance;
          boolean debit(double amt);
        }
      `,
      patterns: [
        "State pattern for ATM states",
        "Observer for transaction updates",
      ],
    },
    extensions: [
      "Biometric authentication",
      "Cardless withdrawal with mobile app",
      "Support for multiple currencies",
    ],
  },
};
