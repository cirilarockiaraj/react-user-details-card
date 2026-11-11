import React from 'react'
import Card from './components/card/Card'
import './App.css'

const App = () => {

  const buttonHandler = (name)=>{
    alert(`Hey I'm ${name}`);
  }

  return (
    <div className='container'>
      <Card name="Balamurugan" email="balamurugan@gmail.com" btnName="Bala Button" handler={buttonHandler}/>
      <Card name="Arun kumar" email="arunkumar@gmail.com" btnName="Arun Button" handler={buttonHandler}/>
      <Card name="Priya Sharma" email="priyasharma@gmail.com" btnName="Priya Button" handler={buttonHandler}/>
    </div>
  )
}

export default App
