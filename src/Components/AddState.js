import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddState() {
    const[statename,setStateName]=useState("");
    const[msg,setMsg]=useState("");

    function handleAddState(e)
    {
        e.preventDefault();
        const obj={statename};

        axios
        .post("http://localhost:8080/AddState",obj)
        .then((res)=>{
            setMsg(res.data);
            clearall();
             GetState();
        })
    }
    useEffect(()=>{
        GetState();
    },[])

    function clearall()
    {
        setStateName("");
    }
    const [statelst,setStatelst]=useState([])
    function GetState()
    {
        axios
        .get("http://localhost:8080/GetState")
        .then((res)=>{
            setStatelst(res.data);
        })
    }
  return (
    <div className='container'>
      <h2 className='text-center'>Add State Component</h2>
      <div className='row'>
        <div className='card p-5 col-6'>
            <div>
                <label>Enter State Name</label>
                <input type='text'
                className='form-control'
                value={statename}
                onChange={(e)=>setStateName(e.target.value)}/>
            </div>
            <div className='mt-3 text-end'>
                <Link className='btn btn-primary' onClick={handleAddState}>Add State</Link>
            </div>
    <p>{msg}</p>
        </div>
        <div className='col-6'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SlNo</th>
                        <th>State Name</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    statelst.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.statename}</td>
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
