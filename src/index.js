import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, NavLink,Link,Switch, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './About'  
import Contact from './Contact'  
import Notfound from './notfound'
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/About" exact activeStyle={
            {color:'green'}
          } >About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" exact activeStyle={
            {color:'magenta'}
          }>Contact</NavLink>
        </li>
      </ul>
      <Switch>
      <Route exact path="/" component={App} />  
      <Route path="/About" component={About} />  
      <Route path="/Contact" component={Contact} />
      <Route component={Notfound}></Route>
      </Switch>  
    </div>  
    
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  