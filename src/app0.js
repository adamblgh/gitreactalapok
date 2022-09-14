import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0)
  const nev="Gyula"
  const piros={color:"red"}
  const zold={color:"green"}
  const [kapcsolo,setKapcsolo]=useState(1)
  const HandleMinus=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(0)
    }
  }
  return (
    <div className="container">
      <h1>Első Projekt!</h1>
      <h3 >Üdv, {nev}❤️!</h3>
      <div style={counter<10 ? piros : zold}>Számláló: {counter}</div>
      <button className="btn btn-primary m-2" onClick={()=>setCounter(counter+1)}>+</button>
      <Button variant="danger" onClick={HandleMinus}>-</Button>
      <p>{counter>10 ? "❤️" : "🐭"}</p>
      <button className="btn btn-success m-2" onClick={()=>setKapcsolo(kapcsolo+1)}>Kapcsoló</button>
      <p>{kapcsolo%2==0 ? "❤️" : "🐭"}</p>
    </div>
  );
}

export default App;
