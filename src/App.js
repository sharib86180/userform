import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddState from './Components/AddState'
import AddCity from './Components/AddCity'
import UserHome from './Components/UserHome'
import AddUser from './Components/AddUser'
import ViewUser from './Components/ViewUser'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<UserHome/>}>
      <Route path="addstate" element={<AddState/>}/>
      <Route path="addcity" element={<AddCity/>}/>
      <Route path="adduser" element={<AddUser/>}/>
      <Route path="viewuser" element={<ViewUser/>}/>
      </Route>
      
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
