import React, { Component } from "react";
import Button from "./Button";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      this.clockClose = this.tick();
    }, 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.clockClose);
  }


  handleClick = () => {
    console.log("Clicked");
    if (this.state.locale == "bn-BD") {
      this.setState({
        locale: "en-US",
      });
      let testIt = "lorem"
    } else {
      this.setState({
        locale: "bn-BD",
      });
      let testIt = "ipsum"
    }
  };

  render() {
    let testIt = "Click Here"
    return (
      <div>
        <span className="text">
          {this.state.date.toLocaleTimeString(this.state.locale)}
        </span>
        <Button change={this.handleClick} tryIt={testIt}/>
      </div>
    );
  }
}

export default Clock;
