import React, { useEffect } from "react";
import { useState } from "react";
import './Chrono.css';

function Chrono() {
    const [isActive, setIsActive] = useState(false);
    const [mSec, setMSec] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

    useEffect(()=>{
      if(isActive){
        setTimeout(()=>{
          setMSec(mSec+10);
          if(mSec>99){
            setMSec(0);
            setSec(sec+1);
          }
          if(sec>59){
            setSec(0);
            setMin(min+1);
          }
        },100);
  
      }
    },[isActive, mSec, sec, min])

  const affiche = (a)=>{
    if(a<10){
      return "0"+a;
    }
    return a;
  }
  

    return(
    <div>
      <div class="chrono">
        <span>{affiche(min)}</span>:
        <span>{affiche(sec)}</span>,
        <span>{mSec}</span>
      </div>
      
      <button onClick={()=>setIsActive(true)}>Start</button> 
      <button onClick={()=>setIsActive(false)}>Stop</button>
      <button onClick={()=>{setIsActive(false); setMSec(0); setSec(0); setMin(0)}}>Reset</button>
    </div>)
  
}


export default Chrono;