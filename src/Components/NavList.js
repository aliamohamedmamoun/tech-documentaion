import React, { Component } from "react";
import ListItem from "./ListItem";

const NavList = ({ titles, handleRouting }) => {
  return (
    <nav id="navbar">
      <header>JS Documentation</header>
      <ul id="nav-list">
        {titles.map(title => (
          <ListItem key={title.id} title={title.title} id={title.id} />
        ))}
      </ul>
    </nav>
  );
};
export default NavList;
