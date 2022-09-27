import React from "react";  
import { useState, useEffect } from "react";


const Component = () =>{
    const [state, setState] = useState();
    useEffect(()=> {
        setInterval(() => {
            setState(new Date().toLocaleTimeString())
        },999)
    })
    
    return (
        <>
            <p>{state}</p>     
        </>
    )
}


export default Component;