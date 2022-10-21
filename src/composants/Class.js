import React from "react";
import { useState } from "react";

function Class() {
    const [increment, setIncrement] = useState(0);
        return(<div>
            <button onClick={() => setIncrement(increment + 1)}>Incrémenter</button>
            <button onClick={() => setIncrement(0)}>Réinitialiser</button>
            <p>valeur : {increment}</p>
        
        </div>)
    
}
export default Class;