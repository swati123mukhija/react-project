import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Marks from './marks';
class Student extends Component{
	//without use of constructor
	constructor(props){
		super(props);

		this.state = {
		name: "sachu",
		roll: this.props.roll,
		submit: "value change",
		subjects: ['html5', 'css3', 'js', 'vuejs', 'sass', 'reactjs'],
		change: false,
	};
	}
//arrow function use with bind this keyword
	handleClick = (id,e) => {
	this.setState({roll:200, subjects : 'java', change: true}) // props value never changed, if you can change the value then you can use setState()
	};	
	//argument pass to event handler
	handleClickarg = e =>{
		this.handleClick(this.state.change, e);
	}
	//this is instance property
	//returns the multiple element then use the fragment
	render(){
		const btnStyle = {
			color: "blue",
			backgroundColor: "orange",
			fontSize: '20px',
		};
		if(this.state.change){
			btnStyle.backgroundColor ="white";
		}
		return( 
		<Fragment>
		<h1> your name is: {this.state.name}</h1>
		<h2 className="head">your roll no is: {this.state.roll}</h2>
		<h2>your age is {this.props.age}</h2>
		<Marks subjects	 = {this.state.subjects}/>
		<button style={btnStyle} onClick={this.handleClickarg}>{this.state.submit}</button>
		</Fragment>
			);
			
	}

}

Student.propTypes = {
	name: PropTypes.string.isRequired,
	roll: PropTypes.number
}

export default Student;