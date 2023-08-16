import React, { useState } from "react";

const Generator = (props) => {
    const [newColor, setNewColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddColor( newColor );
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Box Generator</h1>
            <input className="input-text" type="text" placeholder="Add a color" value={newColor} onChange={e => setNewColor(e.target.value)}/>
            <input className="submit" type="submit" value="Add"/>
        </form>
    );
}

export default Generator;