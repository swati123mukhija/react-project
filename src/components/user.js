import React, {Component, Fragment}from 'react';
import Guest from './guest';
class User extends Component{
	constructor(props){
		super(props);
		this.state = {
			logout : this.props.logout,
		}
	}
render(){
	return(
		<Fragment>
		<h1>welcome Rahul</h1>
		<button type="button" onClick= {this.state.logout}>Logout</button>
		</Fragment>
		)
}
}

export default User;
