import React, { Component } from "react";
import Square from "../Square/Square";
import "./Row.css";

export class Row extends Component {
  render() {
    const start = this.props.index * 3;
    return (
      <div className="row">
        <Square value={start + 1} />
        <Square value={start + 2} />
        <Square value={start + 3} />
      </div>
    );
  }
}

export default Row;