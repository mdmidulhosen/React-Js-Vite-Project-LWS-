import React, { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  };

  componentDidMount() {
    setInterval(() => {
      this.clockClose =this.tick()
    }, 1000);
  };

  tick(){
    this.setState({ date: new Date() });
  }

  componentWillUnmount(){
    clearInterval(this.clockClose)
  }

  render() {
    return (
      <div>
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </div>
    );
  };
}

export default Clock;
