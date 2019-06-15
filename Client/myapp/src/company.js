import {Link, NavLink} from 'react-router-dom';
import React from 'react';
const Company=()=>{
    const handleClick=(e)=>{
        localStorage.removeItem('authorization');
        window.location='http://localhost:3000';
    }
    return(
    <div className="student container">
     <center> <h1 style={{color:'#0069d9'}}>Welcome to Company Panel</h1></center>
    <ul>
      <li><button id="Getdata" className="btn btn-md btn-success"><Link to=''>List of Students</Link></button></li>
      <li><button id="Deletedata" className="btn btn-md btn-success"><Link to='postJob'>Post Jobs</Link></button></li>
      <li><button style={{fontSize:'30px'}} id="logout" className="btn btn-md btn-success" onClick={handleClick}>Log out</button></li>
      
    </ul>
    </div>
    );
}

export default Company;