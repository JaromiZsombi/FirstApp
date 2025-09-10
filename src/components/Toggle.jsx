import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { Dice } from './Dice'

export const Toggle = () => {
  const [isHappy, setIsHappy]=useState(true)

  return (
    <div className='p-5 d-flex gap-2 justify-content-center'>
      <Button onClick={()=>setIsHappy(!isHappy)} outline>Are you happy?</Button>
      <div>
        {isHappy?<div style={{fontSize:"3rem"}}>😀</div>:<div style={{fontSize:"3rem"}}>😭</div>}
      </div>
      <Dice/>
    </div>

  )
}

