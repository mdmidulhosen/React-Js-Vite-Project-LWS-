import { render } from "react-dom";
import WithCounter from "./HOC/WithCounter";
import React, { Component } from "react";



export function HoverCounter ({count, increamentCount, theme, changeTheme}) {
    
    const style = theme ===  "dark" ? {backgroundColor:"red", color:"white"} : null;
        return (
            <div>
                 <h1 style={style}  onMouseOver={increamentCount}>
                    Hover {count} Times
                </h1>
                <button type="button" onClick={changeTheme}S>Switch Theme</button>
            </div>
        )


}

export default HoverCounter