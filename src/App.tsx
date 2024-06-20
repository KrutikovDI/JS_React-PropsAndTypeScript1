import { Stars } from './components/Stars/Stars'
import './App.css'
import React from 'react'

interface IStars {
  (count: number):React.ReactNode
}

function App() {
  return (
    <>
        <Stars count={2}/>
    </>
  )
}

export default App
