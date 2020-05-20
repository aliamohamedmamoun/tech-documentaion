import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ListItem from "./Components/ListItem";
import Introduction from "./Components/Content/Introduction";
import AlreadyKnow from "./Components/Content/AlreadyKnow";
import JsAndJava from "./Components/Content/JsAndJava";
import HelloWorld from "./Components/Content/HelloWorld";
import Variabels from "./Components/Content/Variabels";
import DeclaringVariables from "./Components/Content/DeclaringVariables";
import VariableScope from "./Components/Content/VariableScope";
import GlobalVariables from "./Components/Content/GlobalVariables";
import Constants from "./Components/Content/Constants";
import DataTypes from "./Components/Content/DataTypes";
import IfStatement from "./Components/Content/IfStatement";
import WhileStatement from "./Components/Content/WhileStatement";
import FunctionDeclaration from "./Components/Content/FunctionDeclaration";
import Reference from "./Components/Content/Reference";

import "./App.css";

export class App extends React.Component {
  state = {
    titles: [
      { title: "Introduction", id: "Introduction" },
      {
        title: "What you should already know",
        id: "What_you_should_already_know"
      },
      {
        title: "JavaScript and Java",
        id: "JavaScript_and_Java"
      },
      { title: "Hello world", id: "Hello_world" },
      { title: "Variables", id: "Variables" },
      {
        title: "Declaring variables",
        id: "Declaring_variables"
      },
      {
        title: "Variable scope",
        id: "Variable_scope"
      },
      {
        title: "Global variables",
        id: "Global_variables"
      },
      { title: "Constants", id: "Constants" },
      { title: "Data types", id: "Data_types" },
      {
        title: "if...else statement",
        id: "if...else_statemen"
      },
      {
        title: "while statment",
        id: "while_statement"
      },
      {
        title: "Function declartaion",
        id: "Function_declarations"
      },
      { title: "Reference", id: "Reference" }
    ]
  };

  render() {
    return (
      <Router>
        <nav id="navbar">
          <header>JS Documentation</header>
          <ul id="nav-list">
            {this.state.titles.map(title => (
              <ListItem title={title.title} id={title.id} />
            ))}
          </ul>
        </nav>

        <main id="main-doc">
          <Introduction />
          <AlreadyKnow />
          <JsAndJava />
          <HelloWorld />
          <Variabels />
          <DeclaringVariables />
          <VariableScope />
          <GlobalVariables />
          <Constants />
          <DataTypes />
          <IfStatement />
          <WhileStatement />
          <FunctionDeclaration />
          <Reference />
        </main>
      </Router>
    );
  }
}

export default App;
