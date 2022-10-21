import React from "react";
import {useState} from "react";
import './Login.css'

function Login() {
    const [id, setId] = useState("");
    const [mdp, setMdp] = useState(""); 
    
    const affiche = (event)=>{
        event.preventDefault();
        console.log('The id is submitted: ' + id);
        console.log('The password is submitted: ' + mdp);
          
    }

    const recupereId = (event) => {
        setId(event.target.value);
        
    }

    const recupereMdp = (event) => {
        setMdp(event.target.value);
    }
    return (
    <div className="login">
        <div>Sign In</div>
        <form onSubmit={affiche}>
            <label>
            Email address
        <input className="userInput" type="text" placeholder="Enter email" onChange={recupereId}></input>
            Password
            <input className="userInput" type="text" placeholder="Enter password" onChange={recupereMdp}></input>
            </label>
        <input type="submit" value="Submit"/>
        </form>
        
    </div>)
}

export default Login;