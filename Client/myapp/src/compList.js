import React, {Component} from 'react';
import axios from 'axios';


class CompList extends Component{
   state={
       companies:[]
   }
    componentDidMount(){
        axios.get('http://localhost:3001/signin/admin/compList')
      .then(res => {
        var data = res.data;
        data.map((obj)=>{
            
            let companies=[...this.state.companies,obj];
            
            this.setState({
                companies
           })
        }) 
      })

    }
    handleClick=(e)=>{
        let id=e.target.id
        axios.delete(`http://localhost:3001/signin/admin/compList/${id}`)
        .then(res=>{
         const data=res.data;
         alert(data);
         window.location='http://localhost:3000/compList'
        })
    }
render(){
    return(
        <div className="container">
            <center><h2>Companies</h2>
            {this.state.companies.map(company=>{
              return(
                  <div >
                  {company.name}
                  {(localStorage.getItem("role")==="Admin")?
                  <button id={company._id} className="btn btn-md btn-danger"onClick={this.handleClick}>Remove Students</button>
                 :null}
                  </div>
              )
              })}
              </center>
        </div>
    )
}
}
 export default CompList; 