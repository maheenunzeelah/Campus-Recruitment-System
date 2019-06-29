import React, {Component} from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';

class JobDetail extends Component{
    state={
        id:null,
        name:'',
        experience:'',
        qualification:'',
        description:'',
        salary:'',
        
    }
    componentDidMount(){
           let id=this.props.match.params.id;
           axios.get(`http://localhost:3001/signin/student/jobDetails/${id}`)
      .then(res=>{
       const data=res.data;
       this.setState({
           id:data._id,
           name:data.name,
           experience:data.experience,
           qualification:data.qualification,
           description:data.description,
           salary:data.salary,
           companyName:data.company.name
       })
      })
    }
    handleClick=(e)=>{
        axios.post('http://localhost:3001/signin/student/applyjob',{job:this.state.id})
        .then(res=>{
            var data=res.data;
            alert(data);
        })
    }
    render(){
      
        return(
            <div className="container" key={this.state.id}> 
                <div>Name: {this.state.name} </div>
                <div>Experience Required: {this.state.experience}</div>
                <div>Qualification: {this.state.qualification}</div>
                <div>Description: {this.state.description}</div>
                <div>Salary Offered: {this.state.salary}</div>
                <div>Job Posteb by: {this.state.companyName}</div>
                <button id={this.state.id} className="btn btn-md btn-info" onClick={this.handleClick}>Apply</button>
            </div>
        );
    }
}
export default JobDetail;