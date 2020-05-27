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
  static propTypes = {
    to: PropTypes.string,
    title: PropTypes.string
  };
}

export default ListItem;
