import React, { Component } from "react";
import Row from "../Row/Row";
import "./Grid.css";

export class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <Row index={0} />
        <Row index={1} />
        <Row index={2} />
      </div>
    );
  }
}

export default Grid;