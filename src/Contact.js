import React ,{Component}from 'react'
import {Route,Link} from 'react-router-dom'
const Contacts=({match}) =><p>{match.params.id}</p>
class Contact extends Component{
    render()
    {
       const {url} =this.props.match
       return(
           <div>
               <h1>WELCOME TO CONTACT PAGE</h1>
               <strong>Select contact Id</strong>
               <ul>
                   <li>
                       <Link to="/Contact/1">Contact1</Link>
                   </li>
                   <li>
                       <Link to="/Contact/2">Contact2</Link>
                   </li>
                   <li>
                       <Link to="/Contact/3">Contact3</Link>
                   </li>
                   <li>
                       <Link to="/Contact/4">Contact4</Link>
                   </li>
                   <Route path ="/Contact/:id" component={Contacts}/>
               </ul>
           </div>
       )

    }
}
export default Contact