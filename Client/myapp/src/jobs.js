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
  
render(){
    return(
        <div className="container">
            <center><h2>Jobs Available</h2>
            {this.state.jobs.map(job=>{
              return(
                  <div key={job._id}>
                  {job.name}&emsp;
                  <button className="btn btn-md btn-danger"><Link to={'jobDetails/'+job._id}>View Job</Link></button>
                  </div>
              )
              })}
              </center>
        </div>
    )
}
}
 export default JobList;