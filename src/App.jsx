import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './page/quizeContainer'
import Home from './page/home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Question' element={<Question/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Home/> */}
      {/* <Question/> */}
    </>
  )
}

export default App
