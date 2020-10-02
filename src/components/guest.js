import React, {Component, Fragment}from 'react';
import {MyContext} from "./context";
class Guest extends Component{
	static contextType = MyContext;
	constructor(props){
		super(props);
	}
render(){
	console.log(this.context);
	const {name, value} = this.context.data;
	return(
		<Fragment>
		<h4>Name: {name} value: {value}</h4>

		<h1>welcome Guest</h1>
		<button type="button" onClick = {this.props.login}>SignIn</button>
		<button type="button">SignUp</button>
		</Fragment>
		)
}
}

export default Guest;
