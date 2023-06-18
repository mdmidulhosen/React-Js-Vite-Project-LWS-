import { render } from "react-dom";
import WithCounter from "./HOC/WithCounter";
import React, { Component } from "react";



export class ClickCounter extends Component {

    
    
    // const {count, increamentCount} = props
    render(){
    const { count, increamentCount } = this.props;
        return (
            <div>
                <button type="button" onClick={increamentCount}>
                    Clicked {count} Times
                </button>
            </div>
        )
    }


}

export default ClickCounter