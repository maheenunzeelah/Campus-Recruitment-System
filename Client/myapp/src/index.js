import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './signup';
import Student from './student';
import CompList from './compList';
import Company from './company';
import PostJobs from './postJob';
import Admin from './admin';
import StuList from './stuList';
import JobList from './jobs';
import JobDetail from './jobDetails';
import ViewJob from './viewJob';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
                 <Route exact path='/' component={App} />
                 <Route path='/signup' component={Signup} />
                 <Route path='/student' component={Student} />
                 <Route path='/company' component={Company} />
                 <Route path='/postJob' component={PostJobs} />
                 <Route path='/admin' component={Admin} />
                 <Route path='/compList' component={CompList} />
                 <Route path='/stuList' component={StuList} />
                 <Route path='/jobs' component={JobList} />
                 <Route path='/viewJob' component={ViewJob}/>
                 <Route path='/jobDetails/:id' component={JobDetail} />
                 </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
