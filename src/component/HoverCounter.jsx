import { render } from "react-dom";
import WithCounter from "./HOC/WithCounter";
import React, { Component } from "react";



export class HoverCounter extends Component {
    // const {count, increamentCount} = props
    state = {
        count: 0,
    }
    increamentCount = () => {
        this.setState((pervState) => ({
            count: pervState.count + 1
        }))
    }
    render(){
    const { count } = this.state;
        return (
            <div>
                <h1 onMouseOver={this.increamentCount}>
                    Hover {count} Times
                </h1>
            </div>
        )
    }


}

export default HoverCounter