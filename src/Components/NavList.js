import React, { Component } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
const NavList = ({ titles }) => {
  return (
    <nav id="navbar">
      <header>JS Documentation</header>
      <ul id="nav-list">
        {titles.map((title, index) => (
          <ListItem key={index} title={title.title} id={title.id} />
        ))}
      </ul>
    </nav>
  );
};

NavList.propType = {
  titles: PropTypes.array
};

export default NavList;
