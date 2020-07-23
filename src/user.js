import React, { Component } from 'react';
import './styles/user.css';
import Title from './styles/Title/Title';
import Background from './styles/Background/Background';
import Grid from './styles/Grid/Grid';
import Rocket from './styles/Rocket/Rocket';
import Smoke from './styles/Rocket/Smoke';

import facts from './NASA_facts.json';

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  facts,
		};
	}
	updateClicked(id) {
		let stateCopy = Object.assign({}, this.state);
		stateCopy.facts[id].clicked = true;
		this.setState(stateCopy);
	}
	componentDidMount() { 
       document.getElementById('root').className = "night";
	}
	componentWillUnmount() {
       document.getElementById('root').className = "day";
	}
	render() {
		return  (
			<div className="App" style={{textAlign: 'center', margin: 0, padding: 0, justifyContent:'center', color:"white"}}>
		        <Title />
		        <Background />
		        <Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)}/>
		        <Rocket />
		        <Smoke />
	        </div>
	        );
	}
}
