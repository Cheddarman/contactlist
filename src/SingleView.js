import React from 'react'



export default React.createClass({
  render() {
    return(
    	
	    	<div>
	  			<div className="headBox">
	  			<button></button>
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