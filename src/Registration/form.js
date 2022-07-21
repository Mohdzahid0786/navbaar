// import './App.css'
import React, { useState } from 'react'
import React,{ useEffect,useState} from 'react';
function form() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("")
  return (
    <div className='form'>
        <h1>API Method of POST</h1>
        <input type="text" name="name"></input>
        <input type="text" name="email"></input>
        <input type="text" name="mobile"></input>
        <button type="button">Save</button>

    </div>
  )
}

export default form;