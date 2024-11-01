import React from 'react'
import Home from './homes/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import { Route,Routes } from "react-router-dom"
const App = () => {
  return (
    <div>  
   

   <div  className="bg-white">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='/skills' element={<Skill/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </div>
    </div>
  )
}

export default App
