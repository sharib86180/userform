import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ViewUser() {
     const[cityname,setCityName]=useState("");
    const[msg,setMsg]=useState("");
     const[userlst,setUserlst]=useState([]);

     function handleGetUser(e)
    {
        e.preventDefault();
        axios
        .get(`http://localhost:8080/GetUserInfo/${cityname}`)
        .then((res)=>{
            setUserlst(res.data);
            debugger;
        })
    }
  return (
    <div className='container'>
      <h2 className='text-center'>View User Component</h2>
      <div className='row'>
        <div className='card p-5 col-6'>
            
            <div>
                <label>Enter City Name</label>
                <input type='text'
                className='form-control'
                value={cityname}
                onChange={(e)=>setCityName(e.target.value)}/>
            </div>
            <div className='mt-3 text-end'>
                <Link className='btn btn-primary' onClick={handleGetUser}>Get User</Link>
            </div>
    <p>{msg}</p>
        </div>
         <div className='col-6'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SlNo</th>
                         <th>User Name</th>
                        <th>Mobile No</th>
                         <th>Address</th>
                         <th>City Name</th>
                         <th>State Name</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    userlst.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.username}</td>
                                <td>{item.mobileno}</td>
                                 <td>{item.address}</td>
                                  <td>{item.citymaster.cityname}</td>
                                   <td>{item.citymaster.statemaster.statename}</td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>

        </div>

      </div>

    </div>
  )
}
