import React from 'react'
import Users from './Users.json'
import ContactList from './ContactList'
import SingleView from './SingleView'
import { BrowserRouter, Route } from 'react-router-dom'

console.log(Users)

export default React.createClass({
  render() {
    return(
    	<BrowserRouter>
	      <div>
	      	<ContactList contacts={Users} />
	      	<SingleView contacts={Users} />
	      </div>  
    	</BrowserRouter>
    )
  }
})

// <Route exact={true} path="/" component={ContactList} />
// 	      	<Route path={}