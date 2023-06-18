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
    const {renderprops} = this.props;
    const {count} = this.state;

    return (
      renderprops(count, this.increamentCount)
    )
  }
}

export default Counter
