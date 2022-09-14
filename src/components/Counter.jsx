import React, { useState } from 'react'

export const Counter=()=> {
    const [counter,setCounter]=useState(0)
  return (
    <div className='row text-align-center'>
      <div className='col-md-2'><i className="fa-solid fa-plus fa-3x text-success"></i></div>
      <div className='col-md-2'><div>A számláló értéke: {counter}</div></div>
      <div className='col-md-2'><i className="fa-solid fa-minus fa-3x text-danger"></i></div>
    </div>
  )
}
