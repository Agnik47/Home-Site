import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div className='w-full min-h-screen flex'>
      <Home/>

      <Routes>
        <Route path='/signin' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App