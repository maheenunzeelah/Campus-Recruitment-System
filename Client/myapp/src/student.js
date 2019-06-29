import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Student=()=>{
    const handleClick=(e)=>{
        localStorage.removeItem('authorization');
        window.location='http://localhost:3000';
    }
    return(
    <div className="student container">
     <center> <h1 style={{color:'#0069d9' , margin:'15px'}}>Welcome to Student Panel</h1></center>
    <ul style={{textAlign:'center'}}>
      <li><button id="Getdata" className="btn btn-md btn-primary"><Link to='compList'>List of Companies</Link></button></li>
      <li><button id="Deletedata" className="btn btn-md btn-primary"><Link to='jobs'>Jobs Available</Link></button></li>
      <li><button id="logout" className="btn btn-md btn-warning" style={{fontSize:'30px'}} onClick={handleClick}>Log out</button></li>
      
    </ul>
    </div>
    );}

export default Student;