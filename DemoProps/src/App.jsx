import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  return (
    <>
      <h2 className='bg-green-400 rounded-xl p-4'>{props.color} React App</h2>
    </>
  )
}

export default App
