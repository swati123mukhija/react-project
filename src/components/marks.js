import React, {Component} from 'react';

export default class Marks extends Component{
	constructor(props){
		super(props);
		this.state = {
			sub: this.props.subjects
		}
	}

	static getDerivedStateFromProps(props, state){
		console.log("getDerivedStateFromProps");
		console.log(props,state);
		if(props.subjects!= state.sub){
			return {sub: props.subjects}
		}else{
			return null;
		}
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log("shouldComponentUpdate");
		console.log(nextProps, nextState);
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log("getSnapshotBeforeUpdate - it suns before update");
		console.log(prevProps, prevState);
		return 46;
	}
	componentDidUpdate(prevProps, prevState, snapshot){
		console.log("componentDidUpdate - it suns after update");
		console.log(prevProps, prevState, snapshot);
	}
	
	render(){
	return(
		<div>
		{this.state.sub}
		</div>
		);
}
}