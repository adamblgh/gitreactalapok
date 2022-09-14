import React from 'react'
import { useState } from 'react'
 
export const Counter=()=> {
    const [counter,setCounter] = useState(0)
    const handleMinus=()=>{
      if(counter>0){
        setCounter(counter-1)  
      } 
      else{
        setCounter(0)
      }  
    }

    const handlePlus=()=>{
      if(counter<10){
        setCounter(counter+1)  
      } 
      else{
        setCounter(10)
      }  
    }
  return (
    <div className='d-flex justify-content-around align-items-center w-50 mb-5'>
        <i className="fa-solid fa-plus fa-3x text-success" onClick={handlePlus}></i>
        <div >A számláló értéke: {counter}</div>
        <i className="fa-solid fa-minus fa-3x text-danger" onClick={handleMinus}></i>
    </div>
 
  )
}