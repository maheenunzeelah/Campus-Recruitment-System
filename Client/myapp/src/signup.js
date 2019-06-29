import React, {Component} from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';

class Signup extends Component {
    state={
      name:'',  
      email:'',
      password:'',
      role:''
    }
    handlesubmit=(e)=>{
      e.preventDefault();
      console.log(this.state);
      if(this.state.role==="Company"){
        axios.post('http://localhost:3001/signup/company',{name:this.state.name,email:this.state.email,password:this.state.password})
        .then(res => {
          if(res.data==="Something went wrong"){
            document.write(res.data);
          }
          else{
          const token = res.data;
          localStorage.setItem("authorization",token);
          console.log(this.state.role);
          this.props.history.push('/company');
          }
          
        })
      }
      else{
      axios.post('http://localhost:3001/signup',{name:this.state.name,email:this.state.email,password:this.state.password,role:this.state.role})
      .then(res => {
        if(res.data==="Something went wrong"){
          document.write(res.data);
        }
        else{
        const token = res.data;
        localStorage.setItem("authorization",token);
        console.log(this.state.role);
        if(this.state.role==='Student')
        this.props.history.push('/student');
        else if(this.state.role==='Admin')
        this.props.history.push('/admin');
        }
     
      })
  
    }
      //   axios.delete('http://localhost:3002/signin')
      //   .then(res=>{
      //    const data=res.data;
      //    console.log(data);
      //   })
    
    }
    handlechange=(e)=>{
          this.setState({
            [e.target.id]:e.target.value
          })
        }
   handleclick=(e)=>{
          this.setState({
            [e.target.name]:e.target.value
          })
        }
    render(){
    return (
    <div className="App container">
    <center><h1 style={{fontSize:'45px', margin:'15px', color:'#e0a800'}}>Campus Recruitment System</h1></center>
      <center><h1>Signup Form</h1></center>
      <form onSubmit={this.handlesubmit}>
      <div className="form-group">
      <label htmlFor="exampleInputname1">Username</label>
      <input type="text" className="form-control" id="name"  placeholder="Enter name" onChange={this.handlechange} />
      
     </div>
       <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="email"  placeholder="Enter email" onChange={this.handlechange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
  
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={this.handlechange}  />
       </div> 
       <label htmlFor="exampleInputRole1">Role</label>
       <div >
        <input type="radio" name="role" value="Student" onClick={this.handleclick}/> Student
      </div>
      <div >
        <input type="radio" name="role" value="Admin" onClick={this.handleclick}/> Admin
      </div>
      <div >
        <input type="radio" name="role" value="Company"onClick={this.handleclick} /> Company
      </div>
       <center><button type="submit" className="btn btn-md btn-info" style={{fontSize:'30px'}}>Create</button></center>

     </form>
     <p className="success"></p>
    </div>
    );
   }
  }
  export default Signup;