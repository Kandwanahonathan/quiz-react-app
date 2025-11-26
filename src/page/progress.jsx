import React from "react";
function ProgressBar({current,total}) {
    const width= (current/total)% 100;
    return(
        <div style={
            {
                width:"100%",
                height:"10px",
                background:"#eee",
                borderRadius:"5px",
                marginBottom:"15px"
            }
        }>
            <div style={{
                width:`${width}`,
                height:"100%",
                background:"#4caf50",
                borderRadius:"5px",
                transition:"0.3s"
            }}></div>
        </div>
    )
}
export default ProgressBar;
