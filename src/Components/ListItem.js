import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ListItem extends React.Component {
  render() {
    return (
      <li>
        <Link className="nav-link" to={this.props.id}>
          {this.props.title}
        </Link>
      </li>
    );
  }
}

ListItem.propType = {
  handleRouting: PropTypes.func.isRequired
};

export default ListItem;
