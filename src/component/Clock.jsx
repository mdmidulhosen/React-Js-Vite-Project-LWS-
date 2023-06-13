import React, { Component } from "react";
import Button from "./Button";

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

  handleClick = () => {
    if (this.state.locale == "en-US") {
      this.setState({
        locale: "bn-BD"
      });
    } else {
      this.setState({
        locale: "en-US"
      });
    }
  }

  render() {
    return (
      <div>
        <span className="text">
          {this.state.date.toLocaleTimeString(this.state.locale)}
        </span>
        <Button change={this.handleClick}/>
      </div>
    );
  };
}

export default Clock;

