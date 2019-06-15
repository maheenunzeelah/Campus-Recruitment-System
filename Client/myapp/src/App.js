import React, {Component} from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';



axios.interceptors.request.use(function (config) {
  // spinning start to show
  const token = localStorage.getItem("authorization");
  if (token) {
     config.headers.authorization = token
     
  }
  return config
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {

  return response;

}, function (error) {

  if (401 === error.response.status) {
     window.location='http://localhost:3000';

  } else {

      return Promise.reject(error);

  }

});
// axios.defaults.headers["authorization"] = localStorage.getItem('authorization'); //Attaching the header
class App extends Component {
  state={
    email:'',
    password:'',
    role:''
  }
  handlesubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    if(this.state.role==="Company"){
      axios.post('http://localhost:3001/signin/company',{email:this.state.email,password:this.state.password})
      .then(res => {
        if(res.data==="user not found"){
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
    axios.post('http://localhost:3001/signin',{email:this.state.email,password:this.state.password,role:this.state.role})
    .then(res => {
      if(res.data==="user not found"){
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
    <center><h1>Login Form</h1></center>
    <form onSubmit={this.handlesubmit}>
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
    <center> <button type="submit" className="btn btn-md btn-info" style={{fontSize:'30px'}}>Submit</button></center>
   </form>
   <p><Link to='/signup' style={{backgroundColor:"#138496"}}>Create New Account</Link></p>
   <p className="success"></p>
  </div>
  );
 }
}
export default App;


