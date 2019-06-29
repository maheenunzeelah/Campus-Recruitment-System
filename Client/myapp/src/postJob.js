import React, {Component} from 'react';
import axios from 'axios';


class PostJobs extends Component{
   state={
       name:'',
       experience:'',
       qualification:'',
       description:'',
       salary:'',
       
   }
   
   
   handlesubmit=(e)=>{
    e.preventDefault();
        axios.post('http://localhost:3001/signin/comp',{name:this.state.name,experience:this.state.experience,qualification:this.state.qualification
        ,description:this.state.description,salary:this.state.salary})
      .then(res=>{
          document.write(res.data);
          
      })

    } 
     handlechange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }
 
  render(){
  return (
  <div className="App container">
    <center><h2>Post Job</h2></center>
    <form onSubmit={this.handlesubmit}>
    <div className="form-group">
    <label htmlFor="exampleInputname1">Name</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter name" onChange={this.handlechange} />
    
   </div>
     <div className="form-group">
      <label htmlFor="exampleInputExperience1">Experience</label>
      <input type="text" className="form-control" id="experience"  placeholder="Enter experience details" onChange={this.handlechange} />
     </div>

      <div className="form-group">
      <label htmlFor="exampleInputQualification1">Qualification</label>
      <input type="text" className="form-control" id="qualification" placeholder="Enter Qualification details" onChange={this.handlechange}  />
     </div> 
     <div className="form-group">
      <label htmlFor="exampleInputQualification1">Description</label>
      <input type="text" className="form-control" id="description" placeholder="Enter Description" onChange={this.handlechange}  />
     </div> 
     <div className="form-group">
      <label htmlFor="exampleInputSalary1">Salary</label>
      <input type="text" className="form-control" id="salary" placeholder="Enter Salary Offered" onChange={this.handlechange}  />
     </div> 
     <button type="submit" className="btn btn-primary">Post</button>
   </form>
   <p className="success"></p>
  </div>
  );
 }
}

 export default PostJobs; 