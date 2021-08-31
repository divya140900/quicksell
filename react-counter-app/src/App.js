 import { ifStatement } from "@babel/types";
import React, {useState} from "react";

import "./App.css";
  
const App = () => {
  const [counter, setCounter] = useState(1)
  const [mymax, setMax] = useState(1000)
  
  const handleClick1 = () => {
    if(parseInt(counter) + parseInt(1)<=mymax)
      setCounter(parseInt(counter) + parseInt(1)) //increment
  }
  
  const handleClick2 = () => {
    setCounter(counter - 1)   //decrement
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      <input style = {{fontSize: '60%',
          position: 'relative',
          top: '10vh',
          marginBottom: '5px',
          padding: '10px 20px 10px 20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          borderColor:'#A52A2A',
          color: '#A52A2A',}} placeholder="START" onChange={e => setCounter(e.target.value)} />
      <input style = {{fontSize: '60%',
          position: 'relative',
          top: '10vh',
          padding: '10px 20px 10px 20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          borderColor:'#A52A2A',
          color: '#A52A2A',}} placeholder="STOP" onChange={e => setMax(e.target.value)} />
      <div className="buttons">
      <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          padding: '10px 20px 10px 20px',
          backgroundColor: 'white',
          borderRadius: '8px 0px 0px 8px',
          borderColor:'#A52A2A transparent #A52A2A #A52A2A',
          color: '#A52A2A',
        }}
          onClick={handleClick2}>-</button>
      <button style={{
          fontSize: '60%',
          fontWeight: 'bold',
          position: 'relative',
          top: '20vh',
          padding: '10px 20px 10px 20px',
          backgroundColor: '#FFE4E1',
          //borderRadius: '8px 0px 0px 8px',
          borderColor:'#A52A2A',
          color: '#A52A2A',
        }}
          >{counter}</button>
      <button style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        padding: '10px 20px 10px 20px',
        backgroundColor: '#A52A2A',
        borderRadius: '0px 8px 8px 0px',
        borderColor:'#A52A2A',
        color: 'white',
      }}
        onClick={handleClick1}>+</button>
      </div>
    </div>
  )
}
  
export default App