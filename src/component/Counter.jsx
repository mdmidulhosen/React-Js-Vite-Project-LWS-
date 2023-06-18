import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0,
    }
    increamentCount = () => {
        this.setState((pervState) => ({
            count: pervState.count + 1
        }))
    }

  render() {
    const {renderProps} = this.props;
    const {count} = this.state;

    return (
      renderProps(count, this.increamentCount)
    )
  }
}

export default Counter
