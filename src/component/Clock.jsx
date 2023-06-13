import React, { Component } from "react";

export class Clock extends Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }

  render() {
    return (
      <div>
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </div>
    );
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({date: new Date()})
    }, 1000)
  }

}

export default Clock;