import React, { Component } from "react";
import Clock from "./Clock";

export class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange } = this.props;
    const { change: updateChange } = nextProps;

    if (currentChange === updateChange) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { change, tryIt } = this.props;
    return (
      <div>
        <button type="button" onClick={change}>
        {tryIt}
        </button>
      </div>
    );
  }
}

export default Button;
