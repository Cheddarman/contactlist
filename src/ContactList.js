import React from 'react'


const styles = {
	mainDiv: {
		width: '600px',
		margin:'auto',
		marginTop:'60px',
		display:'flex',
		flexWrap:'wrap',
		justifyContent:'center',
	},
	ul: {
		listStyleType:'none',
		padding:'0',
		width:'100%',
	},
	contactInList: {
		width:'100%',
		fontWeight:'bold',
		border:'1px solid gray',
	},
	img: {
		borderRadius:'50%',
		border:'1px solid light gray',
		margin:'5px',
	},
	h1: {
		width:'100%',
	},
	span: {
		padding:'20px',
	},
}


export default React.createClass({
  render() {


    return(
    	<div style={styles.mainDiv} className="mainDiv">
    		<h1 style={styles.h1}>List View</h1>
		  	<ul style={styles.ul}>
		  		<p>My Peeps</p>
		  		{this.props.contacts.map(contact=>(
		  			<li key={contact.id}>
		  				<div style={styles.contactInList} className="contactInList">
		  					<img style={styles.img} src={contact.picture.thumbnail} alt="" /><span style={styles.span}>{contact.name.first} {contact.name.last}</span>
		  				</div>
		  			</li>
		  			))}
		  	</ul>
    	</div>
    )
  }
})