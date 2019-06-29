import React, {Component} from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';
import { tsRestType } from '@babel/types';

class ViewJob extends Component{
    state={
        jobs:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3001/signin/comp/viewJob')
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
    let id=e.target.id;
    axios.get(`http://localhost:3001/signin/student/stuApply/${id}`)
    .then(res=>{
        var data=res.data;
        alert(data.student.name);
    })
  }
render(){
    return(
        <div className="container">
            <center><h2>Jobs</h2>
            {this.state.jobs.map(job=>{
              return(
                  <div key={job._id}>
                  {job.name}&emsp;
                  <button id={job._id} className="btn btn-md btn-danger" onClick={this.handleClick}>Students Applied</button> 
                  </div>
              )
              })}
              </center>
        </div>
    )
}
}
 export default ViewJob;