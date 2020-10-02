import React, {Component} from 'react';
class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
		name: "sachuswati",
		password: "sachu",
	}
	}
	handleName= e =>{
		
		const value = e.target.name === "password"?e.target.value.toUpperCase().substr(0,10): e.target.value;
		this.setState({[e.target.name]:value});

	}

	render(){
		return(
			<div>
			<form>
			<input name="name" type = "text" value={this.state.name}
			onChange={this.handleName}/>
			<input name= "password" type = "password" value={this.state.password}
			onChange={this.handleName}/>
			<textarea width="240"></textarea>
			<button type="button" value="submit">Submit</button>
			</form>
			</div>
			)
	}
}

export default Form;