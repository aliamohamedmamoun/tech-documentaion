import React, { Component } from "react";
import ListItem from "./ListItem";

export default function NavList(titles) {
  return (
    <nav id="navbar">
      <header>JS Documentation</header>
      <ul id="nav-list">
        {titles.map(title => (
          <ListItem title={title.title} id={title.id} />
        ))}
      </ul>
    </nav>
  );
}
