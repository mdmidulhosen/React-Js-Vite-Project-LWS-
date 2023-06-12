import React, { Component } from "react";

export class Index extends Component {
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

export default Index;
