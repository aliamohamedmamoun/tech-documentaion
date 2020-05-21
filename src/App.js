import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavList from "./Components/NavList";
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
      { key: 1, title: "Introduction", id: "Introduction" },
      {
        key: 1,
        title: "What you should already know",
        id: "What_you_should_already_know"
      },
      {
        key: 1,
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
    const titles = this.state.titles;
    return (
      <Router>
        <NavList
          titles={this.state.titles}
          handleRouting={this.handleRouting}
        />

        <main id="main-doc">
          <Route path={"/Introduction"} component={Introduction} />
          <Route
            path={"/What_you_should_already_know"}
            component={AlreadyKnow}
          />
          <Route path={"/JavaScript_and_Java"} component={JsAndJava} />
          <Route path={"/Hello_world"} component={HelloWorld} />
          <Route path={"/Variables"} component={Variabels} />
          <Route path={"/Declaring_variables"} component={DeclaringVariables} />
          <Route path={"/Variable_scope"} component={VariableScope} />
          <Route path={"/Global_variables"} component={GlobalVariables} />
          <Route path={"/Constants"} component={Constants} />
          <Route path={"/Data_types"} component={DataTypes} />
          <Route path={"/if...else_statemen"} component={IfStatement} />
          <Route path={"/while_statement"} component={WhileStatement} />
          <Route
            path={"/Function_declarations"}
            component={FunctionDeclaration}
          />
          <Route path={"/Reference"} component={Reference} />
        </main>
      </Router>
    );
  }
}

export default App;
