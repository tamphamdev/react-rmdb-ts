import React, { useState } from 'react'
interface Props {
  count: number,
  callback: any
}

const Button = ({count ,callback}:Props) => (
    <button onClick={callback}>Count: {count}</button>
  )


export default Button