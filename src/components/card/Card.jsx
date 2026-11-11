import React from 'react'
import Button from '../button/Button'

const Card = ({name, email, btnName, handler}) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
        <div className='card-footer'>
            <Button 
            btnName={btnName} 
            userName={name} 
            btnHandler={handler}
            />
        </div>
    </div>
  )
}

export default Card
