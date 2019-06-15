import {Link, NavLink} from 'react-router-dom';
import React from 'react';
const Admin=()=>{
    const handleClick=(e)=>{
        localStorage.removeItem('authorization');
        window.location='http://localhost:3000';
    }
    return(
    <div className="student container">
     <center> <h1 style={{color:'#0069d9'}}>Welcome to Admin Panel</h1></center>

    <ul style={{textAlign:'center'}} >

      <li><button id="Getdata" className="btn btn-md btn-primary"><Link to='stuList'>List of Students</Link></button></li>
     
      <li><button id="Deletedata" className="btn btn-md btn-primary"><Link to='compList'>List of Companies</Link></button></li>
      
      <li><button id="Deletedata" className="btn btn-md btn-primary"><Link to=''>List of Jobs</Link></button></li>
   
      <li><button id="logout" className="btn btn-md btn-warning" style={{fontSize:'30px'}} onClick={handleClick}>Log out</button></li>
      
    </ul>
    </div>
    );
}

export default Admin;