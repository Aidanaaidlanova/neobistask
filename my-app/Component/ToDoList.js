import React, { Component } from 'react';

export default class ToDoList extends Component{
	constructor(props){
		super(props);

		this.state={
			userInput:'',
			list:[]
		}
	}
	changeUserInput(input){
		this.setState({
			userInput:input
		});
		}

		render(){
			return (
				<div className ="to-do-list-main">
				<input 
				onChange={ (e)=>this.changeUserInput(e.target.value)}
				value={this.state.userInput}
				type="text"
				/>
			<button onClick={ ()=> this.addToList(this.state.userInput)}>нажми</button>
			</div>
			);
		}
	}
