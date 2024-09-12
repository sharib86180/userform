import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function UserHome() {
  return (
    <>
    <div className='container'>
        <h2 className='text-center'>User Home Page</h2>
        <div className='text-center my-5'>
            <Link to="addstate" className='btn btn-primary me-3'>Add State</Link>
            <Link to="addcity" className='btn btn-primary me-3'>Add City</Link>
            <Link to="adduser" className='btn btn-primary me-3'>Add User</Link>
            <Link to="viewuser" className='btn btn-primary me-3'>View User</Link>
        </div>
      
    </div>
    <Outlet/>
    </>
    
  )
}
