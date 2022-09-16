import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export const Toggle=()=> {
  const [isHappy,setisHappy]=useState(true)
  return (
    <div className='text-center mb-5'>
      <Button onClick={()=>setisHappy(!isHappy)}>Are you happy? {isHappy?'😀':'😒'}</Button>
    </div>
  )
}
