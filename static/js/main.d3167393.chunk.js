(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(277)},118:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(110),r=a.n(o),c=(a(118),a(20)),i=a(6),s=a(7),m=a(9),u=a(8),d=a(10),p=a(2),h=a.n(p),b=a(3);h.a.interceptors.request.use(function(e){var t=localStorage.getItem("authorization");return t&&(e.headers.authorization=t),e},function(e){return Promise.reject(e)}),h.a.interceptors.response.use(function(e){return e},function(e){if(401!==e.response.status)return Promise.reject(e);window.location="http://localhost:3000"});var E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",role:""},a.handlesubmit=function(e){e.preventDefault(),localStorage.setItem("role",a.state.role),"Company"===a.state.role?h.a.post("http://localhost:3001/signin/company",{email:a.state.email,password:a.state.password}).then(function(e){if("user not found"===e.data)document.write(e.data);else{var t=e.data;localStorage.setItem("authorization",t),console.log(a.state.role),a.props.history.push("/company")}}):h.a.post("http://localhost:3001/signin",{email:a.state.email,password:a.state.password,role:a.state.role}).then(function(e){if("user not found"===e.data)document.write(e.data);else{var t=e.data;localStorage.setItem("authorization",t),console.log(a.state.role),"Student"===a.state.role?a.props.history.push("/student"):"Admin"===a.state.role&&a.props.history.push("/admin")}})},a.handlechange=function(e){a.setState(Object(c.a)({},e.target.id,e.target.value))},a.handleclick=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement("center",null,l.a.createElement("h1",{style:{fontSize:"45px",margin:"15px",color:"#e0a800"}},"Campus Recruitment System")),l.a.createElement("center",null,l.a.createElement("h1",null,"Login Form")),l.a.createElement("form",{onSubmit:this.handlesubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",onChange:this.handlechange}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",onChange:this.handlechange})),l.a.createElement("label",{htmlFor:"exampleInputRole1"},"Role"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"role",value:"Student",onClick:this.handleclick})," Student"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"role",value:"Admin",onClick:this.handleclick})," Admin"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"role",value:"Company",onClick:this.handleclick})," Company"),l.a.createElement("center",null," ",l.a.createElement("button",{type:"submit",className:"btn btn-md btn-info",style:{fontSize:"30px"}},"Submit"))),l.a.createElement("p",null,l.a.createElement(b.b,{to:"/signup",style:{backgroundColor:"#138496"}},"Create New Account")),l.a.createElement("p",{className:"success"}))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",password:"",role:""},a.handlesubmit=function(e){e.preventDefault(),localStorage.setItem("role",a.state.role),console.log(a.state),"Company"===a.state.role?h.a.post("http://localhost:3001/signup/company",{name:a.state.name,email:a.state.email,password:a.state.password}).then(function(e){if("Something went wrong"===e.data)document.write(e.data);else{var t=e.data;localStorage.setItem("authorization",t),console.log(a.state.role),a.props.history.push("/company")}}):h.a.post("http://localhost:3001/signup",{name:a.state.name,email:a.state.email,password:a.state.password,role:a.state.role}).then(function(e){if("Something went wrong"===e.data)document.write(e.data);else{var t=e.data;localStorage.setItem("authorization",t),console.log(a.state.role),"Student"===a.state.role?a.props.history.push("/student"):"Admin"===a.state.role&&a.props.history.push("/admin")}})},a.handlechange=function(e){a.setState(Object(c.a)({},e.target.id,e.target.value))},a.handleclick=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement("center",null,l.a.createElement("h1",{style:{fontSize:"45px",margin:"15px",color:"#e0a800"}},"Campus Recruitment System")),l.a.createElement("center",null,l.a.createElement("h1",null,"Signup Form")),l.a.createElement("form",{onSubmit:this.handlesubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputname1"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter name",onChange:this.handlechange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",onChange:this.handlechange}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",onChange:this.handlechange})),l.a.createElement("label",{htmlFor:"exampleInputRole1"},"Role"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"role",value:"Student",onClick:this.handleclick})," Student"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"role",value:"Admin",onClick:this.handleclick})," Admin"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"role",value:"Company",onClick:this.handleclick})," Company"),l.a.createElement("center",null,l.a.createElement("button",{type:"submit",className:"btn btn-md btn-info",style:{fontSize:"30px"}},"Create"))),l.a.createElement("p",{className:"success"}))}}]),t}(n.Component),g=function(){return l.a.createElement("div",{className:"student container"},l.a.createElement("center",null," ",l.a.createElement("h1",{style:{color:"#0069d9",margin:"15px"}},"Welcome to Student Panel")),l.a.createElement("ul",{style:{textAlign:"center"}},l.a.createElement("li",null,l.a.createElement("button",{id:"Getdata",className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"compList"},"List of Companies"))),l.a.createElement("li",null,l.a.createElement("button",{id:"Deletedata",className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"jobs"},"Jobs Available"))),l.a.createElement("li",null,l.a.createElement("button",{id:"logout",className:"btn btn-md btn-warning",style:{fontSize:"30px"},onClick:function(e){localStorage.removeItem("authorization"),window.location="http://localhost:3000"}},"Log out"))))},v=a(19),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={companies:[]},a.handleClick=function(e){var t=e.target.id;h.a.delete("http://localhost:3001/signin/admin/compList/".concat(t)).then(function(e){var t=e.data;alert(t),window.location="http://localhost:3000/compList"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:3001/signin/admin/compList").then(function(t){t.data.map(function(t){var a=[].concat(Object(v.a)(e.state.companies),[t]);e.setState({companies:a})})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h2",null,"Companies"),this.state.companies.map(function(t){return l.a.createElement("div",null,t.name,"Admin"===localStorage.getItem("role")?l.a.createElement("button",{id:t._id,className:"btn btn-md btn-danger",onClick:e.handleClick},"Remove Students"):null)})))}}]),t}(n.Component),w=function(){return l.a.createElement("div",{className:"student container"},l.a.createElement("center",null," ",l.a.createElement("h1",{style:{color:"#0069d9",margin:"15px"}},"Welcome to Company Panel")),l.a.createElement("ul",{style:{textAlign:"center"}},l.a.createElement("li",null,l.a.createElement("button",{id:"Getdata",className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"/stuList"},"List of Students"))),l.a.createElement("li",null,l.a.createElement("button",{id:"Deletedata",className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"postJob"},"Post Jobs"))),l.a.createElement("li",null,l.a.createElement("button",{className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"viewJob"},"View Job"))),l.a.createElement("li",null,l.a.createElement("button",{style:{fontSize:"30px"},id:"logout",className:"btn btn-md btn-warning",onClick:function(e){localStorage.removeItem("authorization"),window.location="http://localhost:3000"}},"Log out"))))},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",experience:"",qualification:"",description:"",salary:""},a.handlesubmit=function(e){e.preventDefault(),h.a.post("http://localhost:3001/signin/comp",{name:a.state.name,experience:a.state.experience,qualification:a.state.qualification,description:a.state.description,salary:a.state.salary}).then(function(e){document.write(e.data)})},a.handlechange=function(e){a.setState(Object(c.a)({},e.target.id,e.target.value))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement("center",null,l.a.createElement("h2",null,"Post Job")),l.a.createElement("form",{onSubmit:this.handlesubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputname1"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter name",onChange:this.handlechange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputExperience1"},"Experience"),l.a.createElement("input",{type:"text",className:"form-control",id:"experience",placeholder:"Enter experience details",onChange:this.handlechange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputQualification1"},"Qualification"),l.a.createElement("input",{type:"text",className:"form-control",id:"qualification",placeholder:"Enter Qualification details",onChange:this.handlechange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputQualification1"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"description",placeholder:"Enter Description",onChange:this.handlechange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputSalary1"},"Salary"),l.a.createElement("input",{type:"text",className:"form-control",id:"salary",placeholder:"Enter Salary Offered",onChange:this.handlechange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Post")),l.a.createElement("p",{className:"success"}))}}]),t}(n.Component),N=function(){return l.a.createElement("div",{className:"student container"},l.a.createElement("center",null," ",l.a.createElement("h1",{style:{color:"#0069d9"}},"Welcome to Admin Panel")),l.a.createElement("ul",{style:{textAlign:"center"}},l.a.createElement("li",null,l.a.createElement("button",{id:"Getdata",className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"stuList"},"List of Students"))),l.a.createElement("li",null,l.a.createElement("button",{id:"Deletedata",className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"compList"},"List of Companies"))),l.a.createElement("li",null,l.a.createElement("button",{id:"Deletedata",className:"btn btn-md btn-primary"},l.a.createElement(b.b,{to:"jobs"},"List of Jobs"))),l.a.createElement("li",null,l.a.createElement("button",{id:"logout",className:"btn btn-md btn-warning",style:{fontSize:"30px"},onClick:function(e){localStorage.removeItem("authorization"),window.location="http://localhost:3000"}},"Log out"))))},C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={students:[]},a.handleClick=function(e){var t=e.target.id;h.a.delete("http://localhost:3001/signin/admin/stuList/".concat(t)).then(function(e){var t=e.data;alert(t),window.location="http://localhost:3000/stuList"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:3001/signin/admin/stuList").then(function(t){t.data.map(function(t){var a=[].concat(Object(v.a)(e.state.students),[t]);e.setState({students:a})})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h2",null,"Students"),this.state.students.map(function(t){return l.a.createElement("div",null,t.name,"Admin"===localStorage.getItem("role")?l.a.createElement("button",{id:t._id,className:"btn btn-md btn-danger",onClick:e.handleClick},"Remove Students"):null)})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,name:"",experience:"",qualification:"",description:"",salary:""},a.handleClick=function(e){h.a.post("http://localhost:3001/signin/student/applyjob",{job:a.state.id}).then(function(e){var t=e.data;alert(t)})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;h.a.get("http://localhost:3001/signin/student/jobDetails/".concat(t)).then(function(t){var a=t.data;e.setState({id:a._id,name:a.name,experience:a.experience,qualification:a.qualification,description:a.description,salary:a.salary,companyName:a.company.name})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container",key:this.state.id},l.a.createElement("div",null,"Name: ",this.state.name," "),l.a.createElement("div",null,"Experience Required: ",this.state.experience),l.a.createElement("div",null,"Qualification: ",this.state.qualification),l.a.createElement("div",null,"Description: ",this.state.description),l.a.createElement("div",null,"Salary Offered: ",this.state.salary),l.a.createElement("div",null,"Job Posteb by: ",this.state.companyName),l.a.createElement("button",{id:this.state.id,className:"btn btn-md btn-info",onClick:this.handleClick},"Apply"))}}]),t}(n.Component),k=(a(70),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={jobs:[]},a.handleClick=function(e){var t=e.target.id;h.a.delete("http://localhost:3001/signin/admin/jobList/".concat(t)).then(function(e){var t=e.data;alert(t),window.location="http://localhost:3000/jobs"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:3001/signin/student/jobList").then(function(t){t.data.map(function(t){var a=[].concat(Object(v.a)(e.state.jobs),[t]);e.setState({jobs:a})})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h2",null,"Jobs Available"),this.state.jobs.map(function(t){return l.a.createElement("div",{key:t._id},t.name,"\u2003",l.a.createElement("button",{className:"btn btn-md btn-success"},l.a.createElement(b.b,{to:"jobDetails/"+t._id},"View Job")),"Admin"===localStorage.getItem("role")?l.a.createElement("button",{style:{height:"59px",marginLeft:"7px",fontSize:"28px"},id:t._id,className:"btn btn-lg btn-danger",onClick:e.handleClick},"Remove Job"):null)})))}}]),t}(n.Component)),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={jobs:[]},a.handleClick=function(e){var t=e.target.id;h.a.get("http://localhost:3001/signin/student/stuApply/".concat(t)).then(function(e){var t=e.data;alert(t.student.name)})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:3001/signin/comp/viewJob").then(function(t){t.data.map(function(t){var a=[].concat(Object(v.a)(e.state.jobs),[t]);e.setState({jobs:a})})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h2",null,"Jobs"),this.state.jobs.map(function(t){return l.a.createElement("div",{key:t._id},t.name,"\u2003",l.a.createElement("button",{id:t._id,className:"btn btn-md btn-danger",onClick:e.handleClick},"Students Applied"))})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(21);r.a.render(l.a.createElement(b.a,null,l.a.createElement(O.a,{exact:!0,path:"/",component:E}),l.a.createElement(O.a,{path:"/signup",component:f}),l.a.createElement(O.a,{path:"/student",component:g}),l.a.createElement(O.a,{path:"/company",component:w}),l.a.createElement(O.a,{path:"/postJob",component:j}),l.a.createElement(O.a,{path:"/admin",component:N}),l.a.createElement(O.a,{path:"/compList",component:y}),l.a.createElement(O.a,{path:"/stuList",component:C}),l.a.createElement(O.a,{path:"/jobs",component:k}),l.a.createElement(O.a,{path:"/viewJob",component:x}),l.a.createElement(O.a,{path:"/jobDetails/:id",component:S})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.d3167393.chunk.js.map