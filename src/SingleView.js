import React from 'react'
import Users from './Users.json'


const styles = {
	headbox: {
		background: '#A7D076',
		position:'relative',
		textAlign:'center'
	},
	main: {
		width: '600px',
		margin:'auto'
	},
	button: {
		position:'absolute',
		top:'10px',
		left:'10px'
	},
	img: {
		borderRadius:'50%',
		padding:'60px',
	},
	ul: {
		listStyleType:'none',
		padding:'0',
	},
	li: {
		lineHeight:'30px',
		borderTop:'1px solid lightGray',
		
	}
}


export default React.createClass({
  getInitialState() {
  	return {
  		dude: Users.filter(human=>{
  			return Number(human.id) === Number(this.props.match.params.userId)
  		})[0]
  	}
  },
  handleBack (e){
  	e.preventDefault()
  	this.props.history.goBack()
  },
  render() {

    return(
    	
	    	<div style={styles.main}>
	  			<div style={styles.headbox} className="headBox">
	  				<button style={styles.button} onClick={this.handleBack}>Back</button>
	  				<img style={styles.img} alt="" src={this.state.dude.picture.large} />
	  			</div>
	  			
	  			<ul style={styles.ul}>
	  				<li style={styles.li}>
	  				{this.state.dude.name.first} {this.state.dude.name.last}
	  				</li>
	  				<li style={styles.li}>
	  				{this.state.dude.email}
	  				</li>
	  				<li style={styles.li}>
	  				{this.state.dude.phone}
	  				</li>
	  				<li style={styles.li}>
	  				{this.state.dude.location.city}, {this.state.dude.location.state}
	  				</li>
	  			</ul>
	    	</div>
    	
    )
  }
})


//{this.props.contacts.map(contact=>(	))}