import React from 'react'
import SingleView from './SingleView'
import { BrowserRouter, Route } from 'react-router-dom'

// const styles = {
// 	h1: {
// 		fontWeight:'bold',
// 	}
// },style={styles.h1}


export default React.createClass({
  render() {


    return(
    	<BrowserRouter>
	    	<div>
	    		<h1 >List View</h1>
			  	<ul>
			  		<p>My Peeps</p>
			  		{this.props.contacts.map(contact=>(
			  			<li key={contact.id}>
			  				<div className="contactInList">
			  					<Route component={SingleView}>
			  					<img src={contact.picture.thumbnail} alt="" />{contact.name.first}
			  					</Route>
			  				</div>
			  			</li>
			  			))}
			  	</ul>
	    	</div>
    	</BrowserRouter>
    )
  }
})