import React,{Component} from 'react';

import './App.css';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav className="ist-group list-group-horizontal">
        <ul>
        <li><NavLink activeStyle={{background:'pink'}} to="/home">Home</NavLink></li>
          
      
          <li><NavLink activeStyle={{background:'pink'}} to="/project">Project</NavLink></li>
     
      
          <li><NavLink activeStyle={{background:'pink'}} to="/service">Service</NavLink></li>
        
       
          <li><NavLink activeStyle={{background:'pink'}} to="/contact">Contact</NavLink></li>
        </ul>
        </nav>
        
          <Route path="/home" render={
            ()=>{
              return (<h1>You chose <span>home</span></h1>);
            }

          }></Route>
          <Route path="/project" render={
            ()=>{
              return (<h1>You chose <span>projects</span></h1>);
            }
          }></Route>
          <Route path="/service" render={
            ()=>{
              return (<h1>You chose <span>service</span></h1>);
            }
          }></Route>
          <Route path="/contact" render={
            ()=>{
              return (<h1>You chose <span>contact</span></h1>);
            }
          }></Route>
          
        </div>
      </Router>
    )
  }
}

export default App

