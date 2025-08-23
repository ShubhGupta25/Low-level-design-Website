import styles from "./Styles";

/* ---------------------------
   First 10 Case Studies
   --------------------------- */

const NotifyMeButton = {
  title: "Notify Me Button System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Button Click</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Notification Trigger</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Notification Display</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Command</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Observer</b> <span style={{ color: "#A569BD" }}>→</span> <b>Proxy</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        User Action → Notification Queue → Display Update
      </div>
    </div>
  ),
  code: `// Command Pattern
class NotifyCommand { execute() { console.log('Notify User'); } }

// Observer Pattern
class NotificationCenter {
  subscribe(listener){/*...*/}
  notify(){/*...*/}
}

// Proxy Pattern
class NotificationProxy {
  showNotification(command){/* cache and limit calls */}
}`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Command</span> (Encapsulate user
            action), <span style={{ color: "#10B981" }}>Observer</span> (Notify
            multiple listeners), <span style={{ color: "#F59E42" }}>Proxy</span>{" "}
            (Cache/limit notification display).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Command:</b> Decouple button click from notification logic.
              </li>
              <li>
                <b>Observer:</b> Multiple parts of UI can react to notification
                events.
              </li>
              <li>
                <b>Proxy:</b> Avoid spamming notifications; control access.
              </li>
            </ul>
          </p>
        </>
      ),
    },
    {
      title: "Advantages & Disadvantages",
      content: (
        <>
          <h4>Advantages ✅</h4>
          <ul>
            <li>Easy to extend for multiple notification types.</li>
            <li>Decoupled UI and business logic.</li>
          </ul>
          <h4>Disadvantages ❌</h4>
          <ul>
            <li>Extra boilerplate code for Command/Observer/Proxy setup.</li>
          </ul>
        </>
      ),
    },
  ],
};

const PizzaBillingSystem = {
  title: "Pizza Billing System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Order Builder</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Price Calculator</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Invoice Generator</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Builder</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Template Method</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Customize Pizza → Calculate Price → Generate Invoice
      </div>
    </div>
  ),
  code: `// Builder Pattern
class PizzaBuilder { addTopping(t){/*...*/} addSize(s){/*...*/} build(){/*...*/} }

// Strategy Pattern
class PricingStrategy { calculate(pizza){/*...*/} }

// Template Method Pattern
class Invoice {
  generate(){ this.addHeader(); this.addItems(); this.addTotal(); }
}`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Builder</span> (Flexible pizza
            construction), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Dynamic pricing rules),{" "}
            <span style={{ color: "#F59E42" }}>Template Method</span> (Invoice
            generation steps).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Builder:</b> Create pizzas step by step with different
                options.
              </li>
              <li>
                <b>Strategy:</b> Apply different pricing rules for promotions or
                pizza types.
              </li>
              <li>
                <b>Template Method:</b> Standardized invoice generation with
                overridable steps.
              </li>
            </ul>
          </p>
        </>
      ),
    },
    {
      title: "Advantages & Disadvantages",
      content: (
        <>
          <h4>Advantages ✅</h4>
          <ul>
            <li>Highly flexible order creation.</li>
            <li>Pricing and invoice logic easily extendable.</li>
          </ul>
          <h4>Disadvantages ❌</h4>
          <ul>
            <li>
              Multiple patterns increase initial implementation complexity.
            </li>
          </ul>
        </>
      ),
    },
  ],
};

const ParkingLot = {
  title: "Parking Lot System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Parking Slot Manager</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Payment Processor</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Notification</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Singleton</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Observer</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Slot Assignment → Fee Calculation → Alert Users
      </div>
    </div>
  ),
  code: `// Singleton Pattern
class ParkingLotManager { static getInstance(){/*...*/} }

// Strategy Pattern
class PaymentStrategy { calculateFee(slot){/*...*/} }

// Observer Pattern
class ParkingNotifier { subscribe(listener){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Singleton</span> (Centralized
            parking manager), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Different payment methods),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span> (Notify users
            about free/occupied slots).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Singleton:</b> Ensure single parking lot manager instance
                across system.
              </li>
              <li>
                <b>Strategy:</b> Different ways to compute fees (hourly, flat,
                subscription).
              </li>
              <li>
                <b>Observer:</b> Inform drivers about available slots in
                real-time.
              </li>
            </ul>
          </p>
        </>
      ),
    },
    {
      title: "Advantages & Disadvantages",
      content: (
        <>
          <h4>Advantages ✅</h4>
          <ul>
            <li>Centralized management of slots and payments.</li>
            <li>Flexible fee calculation for different scenarios.</li>
          </ul>
          <h4>Disadvantages ❌</h4>
          <ul>
            <li>Singleton can create tight coupling if overused.</li>
          </ul>
        </>
      ),
    },
  ],
};

const SnakenLadder = {
  title: "Snakes & Ladders Game",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Dice Roll</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Move Player</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Board Update</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Command</b> <span style={{ color: "#00BFFF" }}>→</span> <b>State</b>{" "}
        <span style={{ color: "#A569BD" }}>→</span> <b>Observer</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Dice Action → Player State → Notify Players
      </div>
    </div>
  ),
  code: `// Command Pattern
class RollDiceCommand { execute() { /*...*/ } }

// State Pattern
class PlayerState { setPosition(pos){/*...*/} }

// Observer Pattern
class GameNotifier { subscribe(player){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Command</span> (Dice roll
            encapsulation), <span style={{ color: "#10B981" }}>State</span>{" "}
            (Player position & status),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span> (Notify players
            of moves).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Command:</b> Decouples dice roll action from board movement.
              </li>
              <li>
                <b>State:</b> Tracks each player's current position and status
                on the board.
              </li>
              <li>
                <b>Observer:</b> Updates all players whenever a move happens.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const ElevatorSystem = {
  title: "Elevator System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Idle/Moving State</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Move Strategy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Floor Notifier</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>State</b> <span style={{ color: "#00BFFF" }}>→</span> <b>Strategy</b>{" "}
        <span style={{ color: "#A569BD" }}>→</span> <b>Observer</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Elevator Status → Move Logic → Notify Floors
      </div>
    </div>
  ),
  code: `// State Pattern
class ElevatorState { setState(state){/*...*/} }

// Strategy Pattern
class MovementStrategy { move(elevator, floor){/*...*/} }

// Observer Pattern
class FloorNotifier { subscribe(floor){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>State</span> (Elevator
            idle/moving/maintenance),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Movement
            algorithms), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (Notify floors/users).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>State:</b> Maintain elevator behavior depending on current
                state.
              </li>
              <li>
                <b>Strategy:</b> Swap movement algorithms dynamically
                (nearest-first, round-robin).
              </li>
              <li>
                <b>Observer:</b> Notify floors about arrival or door open
                events.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const CarRentalSystem = {
  title: "Car Rental System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Car Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Booking Strategy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Payment Adapter</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Adapter</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Car Creation → Pricing & Booking → Payment Integration
      </div>
    </div>
  ),
  code: `// Factory Pattern
class CarFactory { createCar(type){/*...*/} }

// Strategy Pattern
class BookingStrategy { calculatePrice(car, days){/*...*/} }

// Adapter Pattern
class PaymentAdapter { process(payment){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Create car
            objects), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Calculate rental pricing),{" "}
            <span style={{ color: "#F59E42" }}>Adapter</span> (Integrate
            multiple payment gateways).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Encapsulates creation of different types of
                cars.
              </li>
              <li>
                <b>Strategy:</b> Allows flexible pricing rules for different car
                types and durations.
              </li>
              <li>
                <b>Adapter:</b> Standardizes payment processing across various
                gateway APIs.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const LoggingSystem = {
  title: "Logging System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Log Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Log Writer</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Singleton Logger</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Singleton</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Create Log → Write Log → Single Instance Logger
      </div>
    </div>
  ),
  code: `// Factory Pattern
class LogFactory { createLog(level, message){/*...*/} }

// Singleton Pattern
class Logger { 
  constructor() { if(Logger.instance) return Logger.instance; Logger.instance = this; }
  log(logObj){/*...*/} 
}`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Create different
            log entries), <span style={{ color: "#10B981" }}>Singleton</span>{" "}
            (Single logger instance).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Encapsulates creation of logs (info, warn,
                error).
              </li>
              <li>
                <b>Singleton:</b> Ensures a single logger instance across the
                application for consistency.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const TicTacToe = {
  title: "Tic Tac Toe Game",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Board</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Player Move</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Game State</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Composite</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>State</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Board Cells → Player Move → Game Status
      </div>
    </div>
  ),
  code: `// Composite Pattern
class Cell { constructor(value){ this.value = value; } }
class Board { constructor(){ this.cells = []; } addCell(cell){ this.cells.push(cell); } }

// State Pattern
class GameState { setState(state){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Composite</span> (Board & Cells),{" "}
            <span style={{ color: "#10B981" }}>State</span> (Game progress:
            ongoing, draw, win).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Composite:</b> Treat board and cells uniformly for moves and
                rendering.
              </li>
              <li>
                <b>State:</b> Manages game status dynamically depending on
                moves.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const BookMyShow = {
  title: "BookMyShow (Ticket Booking)",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Client</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Booking Service</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Payment Gateway</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Observer</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Factory</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Strategy</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Seat Lock → Ticket Creation → Pricing & Promo
      </div>
    </div>
  ),
  code: `// Observer Pattern
class SeatHold { subscribe(client){/*...*/} notify(){/*...*/} }

// Factory Pattern
class TicketFactory { create(type, details){/*...*/} }

// Strategy Pattern
class PricingStrategy { getPrice(base, context){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Observer</span> (Seat
            availability updates),{" "}
            <span style={{ color: "#10B981" }}>Factory</span> (Ticket creation),{" "}
            <span style={{ color: "#F59E42" }}>Strategy</span> (Dynamic pricing
            & promotions).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Observer:</b> Push seat hold/release events to clients to
                avoid double-booking.
              </li>
              <li>
                <b>Factory:</b> Enforce consistent ticket creation for different
                types (Standard/IMAX/3D).
              </li>
              <li>
                <b>Strategy:</b> Flexible pricing rules and promotions
                dynamically applied at runtime.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const VendingMachine = {
  title: "Vending Machine",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Item Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Selection Strategy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Stock Observer</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Machine State</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Observer</b> <span style={{ color: "#F59E42" }}>→</span> <b>State</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Item Creation → Selection → Stock Update → Machine Status
      </div>
    </div>
  ),
  code: `// Factory Pattern
class ItemFactory { createItem(type){/*...*/} }

// Strategy Pattern
class SelectionStrategy { selectItem(userChoice){/*...*/} }

// Observer Pattern
class StockObserver { subscribe(stock){/*...*/} notify(){/*...*/} }

// State Pattern
class MachineState { setState(state){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Item creation),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Selection
            logic), <span style={{ color: "#F59E42" }}>Observer</span> (Stock
            updates), <span style={{ color: "#FDE047" }}>State</span> (Machine
            operational state).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Standardizes item creation for vending machine.
              </li>
              <li>
                <b>Strategy:</b> Different selection/dispensing algorithms
                (first-come, priority, etc.).
              </li>
              <li>
                <b>Observer:</b> Monitor stock levels and notify when refill
                needed.
              </li>
              <li>
                <b>State:</b> Machine can be Ready, OutOfService, or
                Maintenance.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const Atm = {
  title: "ATM System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Transaction Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Dispense Strategy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Audit Observer</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>ATM State</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Observer</b> <span style={{ color: "#F59E42" }}>→</span> <b>State</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Transaction → Cash Dispense → Audit → ATM Session
      </div>
    </div>
  ),
  code: `// Factory Pattern
class TransactionFactory { create(type, amount){/*...*/} }

// Strategy Pattern
class DispenseStrategy { calculateNotes(amount){/*...*/} }

// Observer Pattern
class AuditObserver { subscribe(events){/*...*/} notifyAll(){/*...*/} }

// State Pattern
class ATMState { setState(state){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Transaction
            creation), <span style={{ color: "#10B981" }}>Strategy</span> (Cash
            dispensing), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (Audit & alerts), <span style={{ color: "#FDE047" }}>State</span>{" "}
            (ATM session flow).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Create transactions consistently (withdraw,
                deposit, transfer).
              </li>
              <li>
                <b>Strategy:</b> Optimize note combinations & transaction fees.
              </li>
              <li>
                <b>Observer:</b> Stream events for auditing and fraud detection.
              </li>
              <li>
                <b>State:</b> Track ATM session stages: Ready → Authenticated →
                Processing → Eject/OutOfService.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const CheesGame = {
  title: "Chess Game",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Piece Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Move Strategy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Game State</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Score Observer</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span> <b>State</b>{" "}
        <span style={{ color: "#F59E42" }}>→</span> <b>Observer</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Pieces → Move Rules → Game Progress → Score Updates
      </div>
    </div>
  ),
  code: `// Factory Pattern
class PieceFactory { create(type, color){/*...*/} }

// Strategy Pattern
class MoveStrategy { validateMove(piece, from, to){/*...*/} }

// State Pattern
class GameState { setState(state){/*...*/} }

// Observer Pattern
class ScoreObserver { subscribe(player){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Chess pieces),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Move
            validation), <span style={{ color: "#F59E42" }}>State</span> (Game
            progress), <span style={{ color: "#FDE047" }}>Observer</span> (Score
            updates).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Create different types of pieces (Pawn, Knight,
                Queen) easily.
              </li>
              <li>
                <b>Strategy:</b> Separate movement rules for each piece type.
              </li>
              <li>
                <b>State:</b> Keep track of game phases (ongoing, check,
                checkmate).
              </li>
              <li>
                <b>Observer:</b> Notify scoreboards and spectators of captures
                and game events.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const FileSystem = {
  title: "File System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>File / Folder Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Composite Structure</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Access Proxy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>State Manager</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Composite</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Proxy</b> <span style={{ color: "#F59E42" }}>→</span> <b>State</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        File/Folder → Hierarchy → Access Control → File Operations
      </div>
    </div>
  ),
  code: `// Factory Pattern
class FileFactory { createFile(name){/*...*/} createFolder(name){/*...*/} }

// Composite Pattern
class FileComponent { add(child){/*...*/} remove(child){/*...*/} }

// Proxy Pattern
class AccessProxy { checkPermissions(user){/*...*/} access(file){/*...*/} }

// State Pattern
class FileState { setState(state){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (File/Folder
            creation), <span style={{ color: "#10B981" }}>Composite</span>{" "}
            (Folder hierarchy), <span style={{ color: "#F59E42" }}>Proxy</span>{" "}
            (Access control), <span style={{ color: "#FDE047" }}>State</span>{" "}
            (File operation states).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Standardized creation of files and directories.
              </li>
              <li>
                <b>Composite:</b> Represent folder/file hierarchy naturally.
              </li>
              <li>
                <b>Proxy:</b> Control file access and permissions securely.
              </li>
              <li>
                <b>State:</b> Track file open/read/write/closed states.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const Splitwise = {
  title: "Splitwise (Expense Sharing)",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Transaction Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Simplify Strategy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>User Observer</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Observer</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Transaction → Settlement Algorithm → Notifications
      </div>
    </div>
  ),
  code: `// Factory Pattern
class TransactionFactory { create(amount, payer, payees){/*...*/} }

// Strategy Pattern
class SimplifyStrategy { computeSettlements(transactions){/*...*/} }

// Observer Pattern
class UserObserver { subscribe(user){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Transaction
            creation), <span style={{ color: "#10B981" }}>Strategy</span> (Debt
            simplification), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (User notifications).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Create transaction objects consistently for all
                expenses.
              </li>
              <li>
                <b>Strategy:</b> Compute simplified settlements (minimize
                transactions).
              </li>
              <li>
                <b>Observer:</b> Notify users about new expenses, payments, and
                updates.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const SplitwiseSimplify = {
  title: "Splitwise Simplify Algorithm",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={styles.car}>Transaction Factory</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Greedy Strategy</div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}>Settlement Observer</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b> <span style={{ color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b> <span style={{ color: "#A569BD" }}>→</span>{" "}
        <b>Observer</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Transaction → Debt Minimization → Notification
      </div>
    </div>
  ),
  code: `// Factory Pattern
class TransactionFactory { create(amount, payer, payees){/*...*/} }

// Strategy Pattern
class GreedyStrategy { minimizeTransactions(transactions){/*...*/} }

// Observer Pattern
class SettlementObserver { subscribe(user){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Transaction
            creation), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Greedy debt minimization),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span> (User
            notifications).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Consistently generate transactions for each
                expense.
              </li>
              <li>
                <b>Strategy:</b> Reduce the number of transfers using greedy
                optimization.
              </li>
              <li>
                <b>Observer:</b> Notify all users about final settlements.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const CricBuzz = {
  title: "CricBuzz (Live Cricket Updates)",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Match → Score Updates → Event Handlers
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Match Creation | Live Score/Events | Standard Match Flow
      </div>
    </div>
  ),
  code: `// Factory: Match/Team/Player creation
class MatchFactory { createMatch(details){/*...*/} createTeam(details){/*...*/} }
// Observer: Live score updates
class ScoreObserver { subscribe(listener){/*...*/} notifyAll(){/*...*/} }
// Strategy: Scoring rules
class ScoringStrategy { calculateScore(event){/*...*/} }
// Template Method: Standard match flow
class MatchFlow {
  startMatch(){ this.innings(); this.endMatch(); }
  innings(){/*...*/} 
  endMatch(){/*...*/}
}`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Match, Team,
            Player objects), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (Live scores/events),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Scoring
            algorithms),{" "}
            <span style={{ color: "#FDE047" }}>Template Method</span> (Standard
            match flow).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Consistently create match and team objects.
              </li>
              <li>
                <b>Observer:</b> Push live updates to clients efficiently.
              </li>
              <li>
                <b>Strategy:</b> Allows different scoring rules per match type.
              </li>
              <li>
                <b>Template Method:</b> Enforce standard flow of innings and
                match completion.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const TrueCaller = {
  title: "TrueCaller (Caller Identification & Spam Detection)",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        User DB → Spam Detection → Notifications
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Singleton DB | Detection Algorithm | Notifications
      </div>
    </div>
  ),
  code: `// Singleton: Central user database
class UserDatabase {
  static instance;
  constructor(){ if(UserDatabase.instance) return UserDatabase.instance; UserDatabase.instance = this; }
  getUser(id){/*...*/}
}
// Proxy: Access to DB
class UserDBProxy { getUser(id){/*...*/} }
// Observer: Notifications
class NotificationObserver { subscribe(listener){/*...*/} notifyAll(){/*...*/} }
// Strategy: Spam detection algorithm
class SpamDetectionStrategy { detect(call){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#FFD700" }}>Singleton</span> (User DB),{" "}
            <span style={{ color: "#F59E42" }}>Proxy</span> (DB access),{" "}
            <span style={{ color: "#22D3EE" }}>Observer</span> (Notifications),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Spam detection).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Singleton:</b> Ensures only one central user DB instance
                exists.
              </li>
              <li>
                <b>Proxy:</b> Controlled access to user data for security.
              </li>
              <li>
                <b>Observer:</b> Notify users of spam or call events in
                real-time.
              </li>
              <li>
                <b>Strategy:</b> Flexible spam detection algorithms can be
                swapped dynamically.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const CarBookingService = {
  title: "Car Booking Service (Uber/Ola-like)",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Rider → Matching → Driver
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Factory | Strategy | Mediator | Observer
      </div>
    </div>
  ),
  code: `// Factory: Ride & Vehicle objects
class RideFactory { createRide(details){/*...*/} createVehicle(details){/*...*/} }
// Strategy: Matching & pricing
class MatchingStrategy { match(rider, drivers){/*...*/} }
// Mediator: Manages interactions between Rider, Driver, Payment modules
class BookingMediator {
  notify(sender, event){/*...*/}
}
// Observer: Real-time ride updates
class RideObserver { subscribe(listener){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>
              Factory
            </span> (Ride/Vehicle),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Matching/Pricing),{" "}
            <span style={{ color: "#FDE047" }}>Mediator</span> (Module
            interactions), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (Real-time ride updates).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Consistently create ride and vehicle objects.
              </li>
              <li>
                <b>Strategy:</b> Flexible driver matching and dynamic pricing.
              </li>
              <li>
                <b>Mediator:</b> Coordinates Rider, Driver, Payment modules
                without tight coupling.
              </li>
              <li>
                <b>Observer:</b> Stream ride status updates to users in
                real-time.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const HotelBookingSystem = {
  title: "Hotel Booking System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Hotel → Room Allocation → Payment
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Factory | Strategy | Observer
      </div>
    </div>
  ),
  code: `// Factory: Hotel, Room objects
class HotelFactory { createHotel(details){/*...*/} createRoom(details){/*...*/} }
// Strategy: Pricing & discounts
class RoomPricingStrategy { calculatePrice(room, season){/*...*/} }
// Observer: Notify availability & booking status
class BookingObserver { subscribe(listener){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Hotel & Room),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Pricing/Discounts),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (Booking/Availability notifications).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Consistent creation of Hotel and Room objects.
              </li>
              <li>
                <b>Strategy:</b> Flexible pricing based on season, demand, and
                offers.
              </li>
              <li>
                <b>Observer:</b> Real-time notifications for room availability
                and booking updates.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const LibraryManagementSystem = {
  title: "Library Management System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Book → User → Transaction
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Factory | Composite | Observer
      </div>
    </div>
  ),
  code: `// Factory: Book and User objects
class LibraryFactory { createBook(details){/*...*/} createUser(details){/*...*/} }
// Composite: Organize books in categories
class BookCategory {
  constructor(name){ this.name = name; this.books = []; }
  addBook(book){ this.books.push(book); }
}
// Observer: Notify users about due dates or new arrivals
class UserObserver { subscribe(user){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Books & Users),{" "}
            <span style={{ color: "#FDE047" }}>Composite</span> (Book
            categories), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (Notifications).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Centralized creation of Book and User objects.
              </li>
              <li>
                <b>Composite:</b> Manage hierarchical book categories
                seamlessly.
              </li>
              <li>
                <b>Observer:</b> Notify users about due dates, holds, and new
                arrivals.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const TrafficLightSystem = {
  title: "Traffic Light System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Light Controller → Signal → Vehicle Flow
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Chain of Responsibility | State | Observer
      </div>
    </div>
  ),
  code: `// Chain of Responsibility: Signal Handling
class SignalHandler {
  setNext(handler){ this.next = handler; }
  handle(vehicle){ if(this.next){ this.next.handle(vehicle); } }
}
class RedLightHandler extends SignalHandler { handle(vehicle){/*Stop vehicle*/ super.handle(vehicle);} }
class GreenLightHandler extends SignalHandler { handle(vehicle){/*Allow vehicle*/ super.handle(vehicle);} }
// State: Light status
class LightState { change(){/*...*/} }
// Observer: Notify vehicles about light changes
class VehicleObserver { subscribe(vehicle){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#F59E42" }}>
              Chain of Responsibility
            </span>{" "}
            (Signal handling), <span style={{ color: "#FDE047" }}>State</span>{" "}
            (Traffic light status),{" "}
            <span style={{ color: "#22D3EE" }}>Observer</span> (Notify
            vehicles).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Chain of Responsibility:</b> Each light signal decides
                vehicle action in order.
              </li>
              <li>
                <b>State:</b> Manage transitions between Red, Yellow, Green
                lights.
              </li>
              <li>
                <b>Observer:</b> Vehicles are notified of changes in traffic
                light state in real-time.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const MeetingScheduler = {
  title: "Meeting Scheduler",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        User → Scheduler → Notification
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Command | Observer | Strategy
      </div>
    </div>
  ),
  code: `// Command: schedule actions
class ScheduleCommand { execute(){/*...*/} }
// Strategy: Conflict resolution
class ConflictResolutionStrategy { resolve(meetings){/*...*/} }
// Observer: Notify participants
class ParticipantObserver { subscribe(participant){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#F59E42" }}>Command</span> (Schedule
            actions), <span style={{ color: "#22D3EE" }}>Observer</span> (Notify
            participants), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Resolve meeting conflicts).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Command:</b> Encapsulate scheduling requests and allow
                undo/redo.
              </li>
              <li>
                <b>Observer:</b> Inform participants when meetings are scheduled
                or updated.
              </li>
              <li>
                <b>Strategy:</b> Apply different conflict resolution policies
                (priority, time slot, etc.).
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const OnlineVotingSystem = {
  title: "Online Voting System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Voter → Voting Service → Result Aggregator
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Proxy | Observer | Singleton
      </div>
    </div>
  ),
  code: `// Proxy: Authenticate and route requests
class VotingProxy { validate(voter){/*...*/} castVote(vote){/*...*/} }
// Observer: Notify results subscribers
class ResultObserver { subscribe(subscriber){/*...*/} notifyAll(){/*...*/} }
// Singleton: Ensure single result aggregator instance
class ResultAggregator {
  constructor(){ if(ResultAggregator.instance){ return ResultAggregator.instance; } ResultAggregator.instance = this; }
  aggregate(votes){/*...*/}
}`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#FDE047" }}>Proxy</span> (Vote validation &
            access), <span style={{ color: "#22D3EE" }}>Observer</span> (Notify
            results), <span style={{ color: "#10B981" }}>Singleton</span>{" "}
            (Result aggregator).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Proxy:</b> Secure vote submission and access control.
              </li>
              <li>
                <b>Observer:</b> Inform subscribers in real-time when results
                are available.
              </li>
              <li>
                <b>Singleton:</b> Maintain a single instance to aggregate votes
                consistently.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const InventoryManagementSystem = {
  title: "Inventory Management System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Product → Stock → Notification
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Observer | State | Factory
      </div>
    </div>
  ),
  code: `// Observer: Stock alerts
class StockObserver { subscribe(listener){/*...*/} notifyAll(){/*...*/} }
// State: Stock status (In Stock, Low Stock, Out of Stock)
class StockState { changeStatus(){/*...*/} }
// Factory: Product creation
class ProductFactory { createProduct(details){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#F59E42" }}>Observer</span> (Stock
            notifications), <span style={{ color: "#FDE047" }}>State</span>{" "}
            (Stock status management),{" "}
            <span style={{ color: "#22D3EE" }}>Factory</span> (Product
            creation).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Observer:</b> Notify relevant teams when stock changes.
              </li>
              <li>
                <b>State:</b> Track stock lifecycle: In Stock → Low → Out of
                Stock.
              </li>
              <li>
                <b>Factory:</b> Standardized creation of product objects with
                required attributes.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const CacheMechanism = {
  title: "Cache Mechanism",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Request → Cache → DB
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Proxy | Singleton | Strategy
      </div>
    </div>
  ),
  code: `// Proxy: Cache access layer
class CacheProxy { get(key){/*...*/} set(key, value){/*...*/} }
// Singleton: Shared cache instance
class CacheInstance { constructor(){ if(CacheInstance.instance){ return CacheInstance.instance;} CacheInstance.instance = this; } }
// Strategy: Eviction policy
class EvictionStrategy { evict(cache){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#FDE047" }}>Proxy</span> (Cache access),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Eviction
            policy), <span style={{ color: "#22D3EE" }}>Singleton</span> (Shared
            cache instance).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Proxy:</b> Intercept DB calls and provide cached responses.
              </li>
              <li>
                <b>Strategy:</b> Implement multiple eviction strategies (LRU,
                LFU, TTL).
              </li>
              <li>
                <b>Singleton:</b> Ensure a single cache instance is shared
                globally.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const LinkedInn = {
  title: "LinkedIn System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        User → Connection Service → Feed
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Observer | Composite | Strategy
      </div>
    </div>
  ),
  code: `// Observer: Feed updates
class FeedObserver { subscribe(user){/*...*/} notifyAll(){/*...*/} }
// Composite: Manage network of connections
class ConnectionGroup { add(connection){/*...*/} remove(connection){/*...*/} }
// Strategy: Feed ranking algorithms
class RankingStrategy { rank(posts){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#F59E42" }}>Observer</span> (Feed updates),{" "}
            <span style={{ color: "#FFD600" }}>Composite</span> (User
            connections network),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Feed ranking
            algorithm).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Observer:</b> Push feed updates to users when connections
                post content.
              </li>
              <li>
                <b>Composite:</b> Represent groups of connections as a tree
                structure.
              </li>
              <li>
                <b>Strategy:</b> Switch feed ranking algorithms dynamically
                (chronological, relevance, engagement).
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const Amazon = {
  title: "Amazon E-Commerce System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <div style={styles.car}>Product Factory</div>
        <span style={styles.arrow}>→</span>{" "}
        <div style={styles.car}>Checkout Strategy</div>
        <span style={styles.arrow}>→</span>{" "}
        <div style={styles.car}>Inventory Observer</div>
        <span style={styles.arrow}>→</span>{" "}
        <div style={styles.car}>Cache Proxy</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b>{" "}
        <span style={{ ...styles.arrow, color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b>{" "}
        <span style={{ ...styles.arrow, color: "#A569BD" }}>→</span>{" "}
        <b>Observer</b> <span style={{ color: "#F59E42" }}>→</span> <b>Proxy</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Product creation &nbsp;|&nbsp; Checkout & Promotions &nbsp;|&nbsp;
        Inventory Updates &nbsp;|&nbsp; Cached Access
      </div>
    </div>
  ),
  code: `// Factory
class ProductFactory { createProduct(details){/*...*/} createOrder(details){/*...*/} }
// Strategy
class CheckoutStrategy { applyDiscount(cart){/*...*/} }
// Observer
class InventoryNotifier { subscribe(user){/*...*/} notifyAll(){/*...*/} }
// Proxy
class CacheProxy { get(entity){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Products &
            Orders), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Checkout/Discounts),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span> (Inventory
            Updates), <span style={{ color: "#FDE047" }}>Proxy</span> (Caching
            Access Control).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Abstract product & order creation.
              </li>
              <li>
                <b>Strategy:</b> Swap pricing & promotion algorithms.
              </li>
              <li>
                <b>Observer:</b> Stream inventory & shipment updates.
              </li>
              <li>
                <b>Proxy:</b> Cache frequent reads, enforce access control.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const AirlineManagementSystem = {
  title: "Airline Management System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <div style={styles.car}>Flight Factory</div>
        <span style={{ ...styles.arrow }}>→</span>
        <div style={styles.car}>Booking Strategy</div>
        <span style={{ ...styles.arrow }}>→</span>
        <div style={styles.car}>Notifier Observer</div>
        <span style={{ ...styles.arrow }}>→</span>
        <div style={styles.car}>Booking State</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          fontSize: "1.1rem",
          color: "#FFD600",
          marginBottom: 8,
        }}
      >
        <b style={styles.bus}>Factory</b>{" "}
        <span style={{ ...styles.arrow, color: "#00BFFF" }}>→</span>
        <b style={styles.bus}>Strategy</b>{" "}
        <span style={{ ...styles.arrow, color: "#A569BD" }}>→</span>
        <b style={styles.bus}>Observer</b>{" "}
        <span style={{ ...styles.arrow, color: "#F59E42" }}>→</span>
        <b style={styles.bus}>State</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Flight creation &nbsp;|&nbsp; Pricing & Booking &nbsp;|&nbsp;
        Notifications &nbsp;|&nbsp; Booking Status
      </div>
    </div>
  ),
  code: `// Factory
class FlightFactory { createFlight(details){ /*...*/ } createBooking(details){ /*...*/ } }
// Strategy
class PricingStrategy { calculatePrice(flight){ /*...*/ } }
// Observer
class BookingNotifier { subscribe(user){/*...*/} notifyAll(){/*...*/} }
// State
class Booking { setState(state){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Flights,
            Bookings), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Pricing & Discounts),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span> (Booking
            Notifications), <span style={{ color: "#FDE047" }}>State</span>{" "}
            (Booking Status).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Encapsulate creation of flight & booking
                objects.
              </li>
              <li>
                <b>Strategy:</b> Dynamic pricing & discount policies.
              </li>
              <li>
                <b>Observer:</b> Notify passengers for booking changes &
                updates.
              </li>
              <li>
                <b>State:</b> Track booking stages: Reserved → Confirmed →
                Cancelled.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const StockExchange = {
  title: "Stock Exchange System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Order → Matching Engine → Notifications
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Chain of Responsibility | Observer | Strategy
      </div>
    </div>
  ),
  code: `// Chain of Responsibility
class OrderHandler { setNext(handler){ this.next = handler; } handle(order){ /*...*/ } }
// Strategy
class MatchingStrategy { matchOrders(buyOrders, sellOrders){ /*...*/ } }
// Observer
class TradeNotifier { subscribe(user){/*...*/} notifyAll(trade){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#F59E42" }}>
              Chain of Responsibility
            </span>{" "}
            (Order Handling), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Matching Engine),{" "}
            <span style={{ color: "#22D3EE" }}>Observer</span> (Trade
            Notifications).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Chain of Responsibility:</b> Pass orders through validation
                and processing steps.
              </li>
              <li>
                <b>Strategy:</b> Allow different matching algorithms for
                buy/sell orders.
              </li>
              <li>
                <b>Observer:</b> Notify brokers and users of executed trades in
                real-time.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const LearningManagement = {
  title: "Learning Management System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <div style={styles.car}>Course Factory</div>
        <span style={styles.arrow}>→</span>{" "}
        <div style={styles.car}>Content Strategy</div>
        <span style={styles.arrow}>→</span>{" "}
        <div style={styles.car}>Progress Observer</div>
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600", marginBottom: 8 }}>
        <b>Factory</b>{" "}
        <span style={{ ...styles.arrow, color: "#00BFFF" }}>→</span>{" "}
        <b>Strategy</b>{" "}
        <span style={{ ...styles.arrow, color: "#A569BD" }}>→</span>{" "}
        <b>Observer</b>
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Course creation &nbsp;|&nbsp; Learning Path Logic &nbsp;|&nbsp; Student
        Progress
      </div>
    </div>
  ),
  code: `// Factory
class CourseFactory { createCourse(details){/*...*/} createModule(details){/*...*/} }
// Strategy
class ContentStrategy { selectModule(student){/*...*/} }
// Observer
class ProgressObserver { subscribe(student){/*...*/} notifyAll(progress){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Courses &
            Modules), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Learning Path), <span style={{ color: "#F59E42" }}>Observer</span>{" "}
            (Student Progress).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Abstract creation of courses and modules.
              </li>
              <li>
                <b>Strategy:</b> Adapt content delivery based on student
                performance.
              </li>
              <li>
                <b>Observer:</b> Track and notify student progress and
                achievements.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const CalendarApp = {
  title: "Calendar Application",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Event Factory → Notification Observer → Recurrence Strategy
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Create Events | Notifications | Repeat/Recurring Events
      </div>
    </div>
  ),
  code: `// Factory
class EventFactory { createEvent(details){/*...*/} }
// Observer
class NotificationObserver { subscribe(user){/*...*/} notifyAll(event){/*...*/} }
// Strategy
class RecurrenceStrategy { getNextOccurrence(event){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Event Creation),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span> (Notifications),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Recurring
            Events).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Consistent creation of different event types.
              </li>
              <li>
                <b>Observer:</b> Notify participants of event changes or
                reminders.
              </li>
              <li>
                <b>Strategy:</b> Support flexible recurrence patterns (daily,
                weekly, custom).
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const PaymentSystem = {
  title: "Payment System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Payment Factory → Strategy → Proxy / Adapter
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Create Payment | Payment Gateway Logic | External API Handling
      </div>
    </div>
  ),
  code: `// Factory
class PaymentFactory { createPayment(type, details){/*...*/} }
// Strategy
class PaymentStrategy { process(payment){/*...*/} }
// Proxy / Adapter
class GatewayAdapter { callGateway(payment){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Payment
            Creation), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Payment Processing Logic),{" "}
            <span style={{ color: "#FDE047" }}>Proxy / Adapter</span> (Gateway
            Integration).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Create different payment types (credit, debit,
                UPI, wallet).
              </li>
              <li>
                <b>Strategy:</b> Support multiple payment algorithms and rules.
              </li>
              <li>
                <b>Proxy / Adapter:</b> Integrate external gateways while
                providing uniform interface.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const ChatBasedSystem = {
  title: "Chat-Based System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Message Factory → Observer / Mediator
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Create Messages | Notify Participants
      </div>
    </div>
  ),
  code: `// Factory
class MessageFactory { createMessage(type, content){/*...*/} }
// Observer / Mediator
class ChatMediator { subscribe(user){/*...*/} sendMessage(msg){/*...*/} notifyAll(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Message
            Creation),{" "}
            <span style={{ color: "#F59E42" }}>Observer / Mediator</span>{" "}
            (Message Distribution).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Standardized message object creation.
              </li>
              <li>
                <b>Observer / Mediator:</b> Efficiently notify multiple
                participants and manage chat flow.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const FoodDeliveryApp = {
  title: "Food Delivery App",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Order Factory → Strategy → Observer / Proxy
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Create Orders | Delivery Assignment Logic | Notifications & Caching
      </div>
    </div>
  ),
  code: `// Factory
class OrderFactory { createOrder(details){/*...*/} }
// Strategy
class DeliveryStrategy { assignRider(order, riders){/*...*/} }
// Observer / Proxy
class NotificationProxy { notifyUser(order){/*...*/} cacheUpdates(order){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Order Creation),{" "}
            <span style={{ color: "#10B981" }}>Strategy</span> (Delivery
            Assignment),{" "}
            <span style={{ color: "#FDE047" }}>Observer / Proxy</span>{" "}
            (Notifications & Caching).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Standardize order creation with details and
                metadata.
              </li>
              <li>
                <b>Strategy:</b> Flexible assignment of delivery riders based on
                location, load, or priority.
              </li>
              <li>
                <b>Observer / Proxy:</b> Notify users efficiently and cache
                delivery info for repeated access.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const CommunityDiscussionPlatform = {
  title: "Community Discussion Platform",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Post Factory → Observer / Mediator
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Create Posts | Notify Followers / Manage Discussions
      </div>
    </div>
  ),
  code: `// Factory
class PostFactory { createPost(content, type){/*...*/} }
// Observer / Mediator
class DiscussionMediator { subscribe(user){/*...*/} notifyFollowers(post){/*...*/} manageThreads(){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Post Creation),{" "}
            <span style={{ color: "#F59E42" }}>Observer / Mediator</span>{" "}
            (Discussion Notifications & Thread Management).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Consistent creation of posts with type, content,
                and metadata.
              </li>
              <li>
                <b>Observer / Mediator:</b> Notify followers efficiently and
                manage thread interactions centrally.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const RestaurantManagementSystem = {
  title: "Restaurant Management System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Menu / Order Factory → Strategy → Observer
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Create Menu Items & Orders | Pricing / Promotions | Notify Kitchen /
        Staff
      </div>
    </div>
  ),
  code: `// Factory
class MenuOrderFactory { createMenuItem(details){/*...*/} createOrder(details){/*...*/} }
// Strategy
class PricingStrategy { calculatePrice(order){/*...*/} }
// Observer
class StaffNotifier { subscribe(staff){/*...*/} notifyAll(order){/*...*/} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#22D3EE" }}>Factory</span> (Menu & Order
            Creation), <span style={{ color: "#10B981" }}>Strategy</span>{" "}
            (Pricing / Promotions),{" "}
            <span style={{ color: "#F59E42" }}>Observer</span> (Notify Staff /
            Kitchen).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Factory:</b> Centralize creation of menu items and orders.
              </li>
              <li>
                <b>Strategy:</b> Apply flexible pricing and promotion rules per
                order.
              </li>
              <li>
                <b>Observer:</b> Notify kitchen and staff about new orders and
                updates.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

const BowlingAlleyMachine = {
  title: "Bowling Alley Machine",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={styles.lane}>
        {[...Array(10)].map((_, i) => (
          <div key={i} style={styles.pin}></div>
        ))}
      </div>
      <div style={{ fontSize: "1.1rem", color: "#FFD600" }}>
        State → Strategy → Observer
      </div>
    </div>
  ),
  code: `// State Pattern
class Frame { setScore(pins){ /* ... */ } }

// Strategy Pattern
class ScoringStrategy { calculateScore(frames){ /* ... */ } }

// Observer Pattern
class Scoreboard { subscribe(player){ /* ... */ } notifyAll(){ /* ... */ } }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#FFD600" }}>State</span> (frame/game
            progress), <span style={{ color: "#00BFFF" }}>Strategy</span>{" "}
            (scoring logic), <span style={{ color: "#A569BD" }}>Observer</span>{" "}
            (scoreboard updates).
          </p>
          <ul>
            <li>
              <b>State:</b> Manage frames, strikes, spares, and game stages.
            </li>
            <li>
              <b>Strategy:</b> Support multiple scoring variants (standard,
              league, custom).
            </li>
            <li>
              <b>Observer:</b> Notify scoreboard and players in real-time.
            </li>
          </ul>
        </>
      ),
    },
  ],
};

const RateLimiter = {
  title: "Rate Limiter System",
  visualization: (
    <div style={styles.visualizationBlock}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <div style={styles.car}></div>
        <span style={styles.arrow}>→</span>
        <div style={styles.car}></div>
      </div>
      <div style={{ fontSize: "1.05rem", color: "#FFD600" }}>
        Singleton → Proxy / Strategy
      </div>
      <div style={{ fontSize: "0.95rem", color: "#F0F0F0" }}>
        Rate Limiter Instance | Enforcement Logic / Caching
      </div>
    </div>
  ),
  code: `// Singleton
class RateLimiter { static getInstance(){/* ... */} }

// Strategy / Proxy
class LimitingStrategy { allowRequest(user){/* ... */} }
class CacheProxy { get(key){/* ... */} set(key, value){/* ... */} }`,
  explanations: [
    {
      title: "Low-Level Pattern(s) Used & Why",
      content: (
        <>
          <p>
            <b>Patterns Used:</b> <br />
            <span style={{ color: "#FDE047" }}>Singleton</span> (central rate
            limiter instance),{" "}
            <span style={{ color: "#00BFFF" }}>Strategy / Proxy</span>{" "}
            (enforcement logic & caching).
          </p>
          <p>
            <b>Why:</b>
            <ul>
              <li>
                <b>Singleton:</b> Ensure a single rate limiter instance across
                the system.
              </li>
              <li>
                <b>Strategy / Proxy:</b> Apply flexible rate limiting rules and
                cache request states efficiently.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ],
};

export {
  BowlingAlleyMachine,
  RateLimiter,
  FoodDeliveryApp,
  CommunityDiscussionPlatform,
  RestaurantManagementSystem,
  CalendarApp,
  PaymentSystem,
  ChatBasedSystem,
  AirlineManagementSystem,
  StockExchange,
  LearningManagement,
  CacheMechanism,
  LinkedInn,
  Amazon,
  MeetingScheduler,
  OnlineVotingSystem,
  InventoryManagementSystem,
  LibraryManagementSystem,
  TrafficLightSystem,
  TrueCaller,
  CarBookingService,
  HotelBookingSystem,
  Splitwise,
  SplitwiseSimplify,
  CricBuzz,
  NotifyMeButton,
  PizzaBillingSystem,
  ParkingLot,
  SnakenLadder,
  ElevatorSystem,
  CarRentalSystem,
  CheesGame,
  LoggingSystem,
  TicTacToe,
  BookMyShow,
  VendingMachine,
  FileSystem,
  Atm,
};
