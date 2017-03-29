import React from 'react'
import { Link } from 'react-router-dom'
import Users from './Users.json'

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
		display:'inlineBlock',
		width:'50px',
	},
	h1: {
		width:'100%',
	},
	p: {
		backgroundColor:'#81BC39',
		lineHeight:'60px',
		fontSize:'20px',
		paddingLeft:'10px',
	},
	li: {
		lineHeight:'40px',
	},
	imgdiv: {
		lineHeight:'40px',
		display:'inline',
	},
	div: {
		lineHeight:'40px',
		display:'inline',
	},
	span: {
		lineHeight:'40px',
	}
}


export default React.createClass({
  render() {
    return(
    	<div style={styles.mainDiv} className="mainDiv">
    		<h1 style={styles.h1}>List View</h1>
		  	<ul style={styles.ul}>
		  		<p style={styles.p}>My Peeps</p>
		  		{Users.map(contact=>(
		  			<Link key={contact.id} to={'/SingleView/' + contact.id} >
		  			<li style={styles.li} >
		  				<div style={styles.contactInList} className="contactInList">
		  					<div style={styles.imgdiv}>
		  						<img style={styles.img} src={contact.picture.thumbnail} alt={contact.name.first} />
								</div>
								<div style={styles.div}>
								{contact.name.first} {contact.name.last}
								</div>
		  				</div>
		  			</li>
		  			</Link>
		  			))}
		  	</ul>
    	</div>
    )
  }
})