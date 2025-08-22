import React from "react";
import PatternTemplate from "./PatternTemplate";
import DecoratorPattern from "./DecoratorPattern";
import ObserverPattern from "./ObserverPattern";
import FactoryPattern from "./FactoryPattern";
import StatePattern from "./StatePattern";
import SingletonPattern from "./SingletonPattern";
import BuilderPattern from "./BuilderPattern";
import CompositePattern from "./CompositePattern";
import AdapterPattern from "./AdapterPattern";
import FacadePattern from "./FacadePattern";
import ProxyPattern from "./ProxyPattern";
import ChainOfResponsibilityPattern from "./ChainOfResponsibilityPattern";
import CommandPattern from "./CommandPattern";
import NullObjectPattern from "./NullObjectPattern";
import BridgePattern from "./BridgePattern";
import PrototypePattern from "./PrototypePattern";
import FlyweightPattern from "./FlyweightPattern";
import InterpreterPattern from "./InterpreterPattern";
import IteratorPattern from "./IteratorPattern";
import MediatorPattern from "./MediatorPattern";
import MementoPattern from "./MementoPattern";
import TemplateMethodPattern from "./TemplateMethodPattern";
import VisitorPattern from "./VisitorPattern";
import AbstractFactoryPattern from "./AbstractFactoryPattern";

const patternList = [
  "Observer",
  "Factory",
  "Abstract Factory",
  "Chain of Responsibility",
  "Proxy",
  "Null Object",
  "State",
  "Composite",
  "Adapter",
  "Singleton",
  "Builder",
  "Prototype",
  "Bridge",
  "Façade",
  "Flyweight",
  "Command",
  "Interpreter",
  "Iterator",
  "Mediator",
  "Memento",
  "Template Method",
  "Visitor",
];

const patterns = {};

patterns.DecoratorPattern = DecoratorPattern;
patterns.ObserverPattern = ObserverPattern;
patterns.FactoryPattern = FactoryPattern;
patterns.StatePattern = StatePattern;
patterns.SingletonPattern = SingletonPattern;
patterns.BuilderPattern = BuilderPattern;
patterns.CompositePattern = CompositePattern;
patterns.AdapterPattern = AdapterPattern;
patterns.FacadePattern = FacadePattern;
patterns.ProxyPattern = ProxyPattern;
patterns.ChainOfResponsibilityPattern = ChainOfResponsibilityPattern;
patterns.CommandPattern = CommandPattern;
patterns.NullObjectPattern = NullObjectPattern;
patterns.BridgePattern = BridgePattern;
patterns.PrototypePattern = PrototypePattern;
patterns.FlyweightPattern = FlyweightPattern;
patterns.InterpreterPattern = InterpreterPattern;
patterns.IteratorPattern = IteratorPattern;
patterns.MediatorPattern = MediatorPattern;
patterns.MementoPattern = MementoPattern;
patterns.TemplateMethodPattern = TemplateMethodPattern;
patterns.VisitorPattern = VisitorPattern;
patterns.AbstractFactoryPattern = AbstractFactoryPattern;

patternList.forEach((name) => {
  const componentName = name.replace(/\s+/g, "") + "Pattern";
  if (!patterns[componentName]) {
    patterns[componentName] = () => (
      <PatternTemplate
        title={`${name} Pattern`}
        subtitle="An interactive guide."
      />
    );
  }
});

export default patterns;
