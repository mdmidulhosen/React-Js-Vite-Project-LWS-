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
    } else {
      this.setState({
        locale: "bn-BD",
      });
    }
  };

  render() {
    let testIt 

    if (this.state.locale === "bn-BD") {
    testIt = "ভাষা পরিবর্তন করুন";
    // console.log(testIt);
  } else if(this.state.locale === "en-US") {
    testIt = "Change the language";
    // console.log(testIt);
  }else{
    testIt = "Click Here";
  }

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
