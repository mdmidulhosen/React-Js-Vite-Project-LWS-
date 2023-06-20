import React from "react";

function HookButton({handleClick, children}){
    console.log(`rerendering button ${children}`)
    return (
        <p>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    )
}

export default React.memo(HookButton)