import { render } from "react-dom";
import WithCounter from "./HOC/WithCounter";
import React, { Component } from "react";



export class ClickCounter extends Component {

    state = {
        count: 0,
    }
    increamentCount = () => {
        this.setState((pervState) => ({
            count: pervState.count + 1
        }))
    }
    
    // const {count, increamentCount} = props
    render(){
    const { count } = this.state;
        return (
            <div>
                <button type="button" onClick={this.increamentCount}>
                    Clicked {count} Times
                </button>
            </div>
        )
    }


}

export default ClickCounter