import React, {Component} from 'react';
import JobDetail from './jobDetails';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';
import { tsRestType } from '@babel/types';

class JobList extends Component{
    state={
        jobs:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3001/signin/student/jobList')
      .then(res => {
        var data = res.data;
        
            data.map((obj)=>{
            
                let jobs=[...this.state.jobs,obj];
              
                this.setState({
                    jobs
               })
            })
    
       
   
      })

    }
    handleClick=(e)=>{
        let id=e.target.id
        axios.delete(`http://localhost:3001/signin/admin/jobList/${id}`)
        .then(res=>{
         const data=res.data;
         alert(data);
         window.location='http://localhost:3000/jobs'
        })
    }
  
render(){
    return(
        <div className="container">
            <center><h2>Jobs Available</h2>
            {this.state.jobs.map(job=>{
              return(
                  <div key={job._id}>
                  {job.name}&emsp;
                  <button className="btn btn-md btn-success"><Link to={'jobDetails/'+job._id}>View Job</Link></button>
                  {(localStorage.getItem("role")==="Admin")?
                  <button style={{height:"59px", marginLeft:"7px",fontSize:"28px"}} id={job._id} className="btn btn-lg btn-danger"onClick={this.handleClick}>Remove Job</button>
                 :null}
                  </div>
              )
              })}
              </center>
        </div>
    )
}
}
 export default JobList;