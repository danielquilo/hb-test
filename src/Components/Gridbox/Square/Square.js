import React, { Component } from "react";
import "./Square.css";

export class Square extends Component {
  render() {
    return <div className="square">{this.props.value}</div>;
  }
}

export default Square;