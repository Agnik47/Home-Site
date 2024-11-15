import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='w-full min-h-screen flex'>
      <Home/>
    </div>
  )
}

export default App