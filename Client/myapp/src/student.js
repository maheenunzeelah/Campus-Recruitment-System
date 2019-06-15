import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Student=()=>{
    const handleClick=(e)=>{
        localStorage.removeItem('authorization');
        window.location='http://localhost:3000';
    }
    return(
    <div className="student container">
     <center> <h1 style={{color:'#0069d9'}}>Welcome to Student Panel</h1></center>
    <ul>
      <li><button id="Getdata" className="btn btn-md btn-success"><Link to='compList'>List of Companies</Link></button></li>
      <li><button id="Deletedata" className="btn btn-md btn-success"><Link to=''>Jobs Available</Link></button></li>
      <li><button id="logout" className="btn btn-md btn-success" style={{fontSize:'30px'}} onClick={handleClick}>Log out</button></li>
      
    </ul>
    </div>
    );}

export default Student;