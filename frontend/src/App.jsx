import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    {/* users routs */}
    <Route path='/'  element={<Home/>} />
    <Route path='/login'  element={<Login/>} />
    <Route path='/signup'  element={<Register/>} />
    <Route path='/Profile'  element={<Profile/>} />

    {/* admin routes */}
    <Route path='/admin/dashboard'  element={<AdminDashboard/>} />


   </Routes>
   </BrowserRouter>
  )
}

export default App