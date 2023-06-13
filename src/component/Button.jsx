import React, { Component } from 'react'
import Clock from './Clock'

export class Button extends Component {
  render() {
    const {change} = this.props;
    return (
      <div>
        <button type="button" onClick={change}>Click Me</button>
      </div>
    )
  }
}

export default Button
