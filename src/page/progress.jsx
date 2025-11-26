import React from "react";
const ProgressBar=({current,total})=> {
    const percentage= (current/total)* 100;
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
                width:`${percentage}%`,
                height:"100%",
                background:"#4caf50",
                borderRadius:"5px",
                transition:"0.3s"
            }}></div>
        </div>
    )
}
export default ProgressBar;
