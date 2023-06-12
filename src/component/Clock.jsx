import React, { Component } from "react";

export class Clock extends Component {
  render() {
    return (
      <div>
        <span className="text">
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </div>
    );
  }
}

export default Clock;