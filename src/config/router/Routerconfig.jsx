import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/css'

const Routerconfig = () => {
  return (
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
       
       </BrowserRouter>
  )
}

export default Routerconfig