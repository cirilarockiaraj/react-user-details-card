import React from 'react'

const Button = ({btnName, userName, btnHandler}) => {
  return (
    <button onClick={() => btnHandler(userName)}>{btnName}</button>
  )
}

export default Button
