import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddCity() {
    const[stateid,setStateId]=useState("");
    const[cityname,setCityName]=useState("");
    const[msg,setMsg]=useState("");
    const[statelst,setStatelst]=useState([]);
     const[citylst,setCitylst]=useState([]);

    function GetState()
    {
        axios
        .get("http://localhost:8080/GetState")
        .then((res)=>{
            setStatelst(res.data);
        })
    }
 useEffect(()=>{
        GetState();
        GetCity();
    },[])

    function GetCity()
    {
        axios
        .get("http://localhost:8080/GetCity")
        .then((res)=>{
            setCitylst(res.data);
            debugger;
        })
    }
function handleAddCity(e)
    {
        e.preventDefault();
        const obj={cityname};

        axios
        .post(`http://localhost:8080/AddCity/${stateid}`,obj)
        .then((res)=>{
            setMsg(res.data);
            clearall();
              GetCity();
        })
    }
    function clearall()
    {
        setStateId("");
        setCityName("");
    }
  return (
    <div className='container'>
      <h2 className='text-center'>Add City Component</h2>
      <div className='row'>
        <div className='card p-5 col-6'>
            <div>
                <label>Select State</label>
                <select className='form-select mb-3'
                value={stateid}
                onChange={(e)=>setStateId(e.target.value)}>
                    <option value={0}>--select--</option>
                    {
                        statelst.map((item,index)=>{
                            return(
                                <option key={index} value={item.stateid}>{item.statename}</option>
                            )
                        })
                    }

                </select>
            </div>
            <div>
                <label>Enter City Name</label>
                <input type='text'
                className='form-control'
                value={cityname}
                onChange={(e)=>setCityName(e.target.value)}/>
            </div>
            <div className='mt-3 text-end'>
                <Link className='btn btn-primary' onClick={handleAddCity}>Add City</Link>
            </div>
    <p>{msg}</p>
        </div>
         <div className='col-6'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SlNo</th>
                        <th>State Name</th>
                        <th>City Name</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    citylst.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.statemaster.statename}</td>
                                <td>{item.cityname}</td>
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
