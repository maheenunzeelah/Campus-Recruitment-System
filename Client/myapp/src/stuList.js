import React, {Component} from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';

class StuList extends Component{
    state={
        students:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3001/signin/admin/stuList')
      .then(res => {
        var data = res.data;
        
            data.map((obj)=>{
            
                let students=[...this.state.students,obj];
              
                this.setState({
                    students
               })
            })
    
       
   
      })

    }
  handleClick=(e)=>{
      let id=e.target.id
      axios.delete(`http://localhost:3001/signin/admin/stuList/${id}`)
      .then(res=>{
       const data=res.data;
       alert(data);
       window.location='http://localhost:3000/stuList'
      })
  }
render(){
    return(
        <div className="container">
            <center><h2>Students</h2>
            {this.state.students.map(student=>{
              return(
                  <div >
                  {student.name}
                  {(localStorage.getItem("role")==="Admin")?
                  <button id={student._id} className="btn btn-md btn-danger"onClick={this.handleClick}>Remove Students</button>
                 :null}
                  </div>
              )
              })}
              </center>
        </div>
    )
}
}
 export default StuList; 
 //<button id="Getdata" className="btn btn-md btn-danger"onClick={this.handleClick}>Remove Students</button>