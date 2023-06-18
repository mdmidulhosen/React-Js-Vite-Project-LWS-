import { render } from "react-dom";
import WithCounter from "./HOC/WithCounter";
import React, { Component } from "react";



export class HoverCounter extends Component {
    // const {count, increamentCount} = props
    
    render(){
    const { count, increamentCount } = this.props;
        return (
            <div>
                <h1 onMouseOver={increamentCount}>
                    Hover {count} Times
                </h1>
            </div>
        )
    }


}

export default HoverCounter