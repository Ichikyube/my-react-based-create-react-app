import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faGoogle,
  faPinterest,
  faInstagram,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import ProductCustomizer from './components/Product.js';
import Home from './home.js';
import Client from './product.js';
import User from './user.js';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  componentDidMount() { 
	if ((document.location.pathname) == "/user") {
		       document.getElementById('root').className = "night";
		} else {
		       document.getElementById('root').className = "day";
		}
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ textAlign: 'center', height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Switch >
	      <Route exact path='/'><Home /></Route>
	      <Route exact path='/product' ><Client /></Route>
	      <Route exact path='/user' ><User /></Route>
        </Switch>	
        <div style={{textAlign: 'center', margin: 0, padding: 0, justifyContent:'center', color:"white", backgroundColor:"black"}}>
			<div className="Video-wrapper">
				<iframe width="740" height="416" src="https://www.youtube.com/embed/LKafSYIwUfM?feature=oembed" frameborder="0" allowfullscreen></iframe> 
			</div>
			<div className="social-media-button-container">
				<a className="Social-media-button Facebook" target="_blank" href="https://www.facebook.com/"><span> <FontAwesomeIcon icon={faFacebook} /> </span> </a> 
				<a className="Social-media-button Twitter" target="_blank" href="https://twitter.com/HPlusSport"> <span> <FontAwesomeIcon icon={faTwitter} /> </span> </a>
				<a className="Social-media-button Instagram" target="_blank" href="https://instagram.com/"> <span> <FontAwesomeIcon icon={faInstagram} /></span> </a> 
				<a className="Social-media-button Pinterest" href="https://www.pinterest.com/"> <span> <FontAwesomeIcon icon={faPinterest} /> </span> </a> 
			</div>
	  </div>
    </div>

    );
  }
}

export default App;
