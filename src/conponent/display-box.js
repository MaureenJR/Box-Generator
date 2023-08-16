import React from "react";

const BoxDisplay = (props) => {
    return (
        <div>
            {
                props.color.map((color,index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        border: "1px solid black",
                        backgroundColor: color,
                        width: "100px",
                        height: "100px",
                        margin: "20px",
                        borderRadius: "10px"
                    }}>
                </div>
            ))
            }
        </div>
    );
}

export default BoxDisplay;