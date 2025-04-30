import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Login></Login>}/>
    </Routes>

    
    
    </BrowserRouter>
  )
}

export default AppRouter