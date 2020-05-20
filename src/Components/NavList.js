import React, { Component } from "react";
import ListItem from "./ListItem";

const NavList = ({ titles, handleRouting }) => {
  return (
    <nav id="navbar">
      <header>JS Documentation</header>
      <ul id="nav-list">
        {titles.map(title => (
          <ListItem
            title={title.title}
            id={title.id}
            handleRouting={handleRouting}
          />
        ))}
      </ul>
    </nav>
  );
};
export default NavList;
