import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddUser() {

    const[stateid,setStateId]=useState("");
    const[cityid,setCityId]=useState("");
    const[msg,setMsg]=useState("");
    const[statelst,setStatelst]=useState([]);
    const[citylst,setCitylst]=useState([]);

    const[username,setUserName]=useState("");
    const[mobileno,setMobileNo]=useState("");
    const[address,setAddress]=useState("");

    useEffect(()=>{
        GetState();
        GetCity();
    },[])
    function GetState()
    {
        axios
        .get("http://localhost:8080/GetState")
        .then((res)=>{
            setStatelst(res.data);
        })
    }
    function GetCity()
    {
        axios
        .get("http://localhost:8080/GetCity")
        .then((res)=>{
            setCitylst(res.data);
            debugger;
        })
    }
    function handleAddUser(e)
    {
        e.preventDefault();
        const obj={username,mobileno,address};

        axios
        .post(`http://localhost:8080/AddUser/${cityid}`,obj)
        .then((res)=>{
            setMsg(res.data);
            clearall();
             
        })
    }
    function clearall()
    {
        setStateId("");
        setCityId("");
        setUserName("");
        setMobileNo("");
        setAddress("");
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
                <label>Select City</label>
                <select className='form-select mb-3'
                value={cityid}
                onChange={(e)=>setCityId(e.target.value)}>
                    <option value={0}>--select--</option>
                    {
                        citylst.filter(city=>city.statemaster["stateid"]==stateid).map((item,index)=>{
                            return(
                                <option key={index} value={item.cityid}>{item.cityname}</option>
                            )
                        })
                    }

                </select>
            </div>
           <div>
                <label>Enter User Name</label>
                <input type='text'
                className='form-control'
                value={username}
                onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div>
                <label>Enter User MobileNo</label>
                <input type='text'
                className='form-control'
                value={mobileno}
                onChange={(e)=>setMobileNo(e.target.value)}/>
            </div>
            <div>
                <label>Enter User Address</label>
                <input type='text'
                className='form-control'
                value={address}
                onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className='mt-3 text-end'>
                <Link className='btn btn-primary' onClick={handleAddUser}>Add User</Link>
            </div>
    <p>{msg}</p>
        </div>
        

      </div>

    </div>
  )
}
