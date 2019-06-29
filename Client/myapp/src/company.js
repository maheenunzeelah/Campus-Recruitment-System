import {Link, NavLink} from 'react-router-dom';
import React from 'react';
const Company=()=>{
    const handleClick=(e)=>{
        localStorage.removeItem('authorization');
        window.location='http://localhost:3000';
    }
    return(
    <div className="student container">
     <center> <h1 style={{color:'#0069d9', margin:'15px'}}>Welcome to Company Panel</h1></center>
    <ul style={{textAlign:'center'}}>
      <li><button id="Getdata" className="btn btn-md btn-primary"><Link to='/stuList'>List of Students</Link></button></li>
      <li><button id="Deletedata" className="btn btn-md btn-primary"><Link to='postJob'>Post Jobs</Link></button></li>
      <li><button  className="btn btn-md btn-primary"><Link to='viewJob'>View Job</Link></button></li>
      <li><button style={{fontSize:'30px'}} id="logout" className="btn btn-md btn-warning" onClick={handleClick}>Log out</button></li>
      
    </ul>
    </div>
    );
}

export default Company;