import React from 'react'
import ContactList from './ContactList'
import { Route } from 'react-router-dom'

export default React.createClass({
  render() {
    return(
    	
	    	<div>
	  			<div className="headBox">
	  			<button><Route component={ContactList} /></button>
	  			</div>
	  			<ul>
	  				{this.props.contacts.map(contact=>(
	  				<li key={contact.id}>

	  				</li>
	  				))}
	  			</ul>
	    	</div>
    	
    )
  }
})