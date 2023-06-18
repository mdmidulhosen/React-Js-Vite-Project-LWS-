import { render } from "react-dom";
import WithCounter from "./HOC/WithCounter";
import React, { Component } from "react";



export function HoverCounter ({count, increamentCount, theme}) {
    
    const style = theme ===  "dark" ? {backgroundColor:"red", color:"white"} : null;
        return (
            <div>
                <h1 style={style}  onMouseOver={increamentCount}>
                    Hover {count} Times
                </h1>
            </div>
        )


}

export default HoverCounter