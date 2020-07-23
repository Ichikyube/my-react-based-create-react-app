import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ProductCustomizer from './components/Product.js';
import logo from './logo.svg';
import './home.css';

export default class Home extends Component {

	render() {
		return  (
    	  <Router>
	        <main style={{marginTop: '64px'}}>
		        <ul>
		          <li>
				  <Link to="/shop">Dagangan</Link>
				  </li>
				  <li>
				  <Link to="/about">Tentang</Link>
				  </li>
				</ul>
	        </main>
	        <div className="App">
		      	  <Switch>
	  				<Route exact path="/shop">
				        <ProductCustomizer />
				  	</Route>
				  	<Route path="/about">
	  			      	<header className="App-header" id="mainShow" style={{backgroundColor:"blue"}}>
					        <img src={logo} className="App-logo" alt="logo" />
					        <h1>Learn React and Gatsby</h1> 
					        <br/>Don't forget to subscribe<br/>
							<h6>    <FontAwesomeIcon icon={faHome} />
								H+ Sport is a fictitious brand created by 
								<a href="#">lynda.com</a> 
								solely for the purpose of training. All products and people associated with H+ Sport are also fictitious. 
								Any resemblance to real brands, products, or people is purely coincidental. 
								Information provided about the product is also fictitious and should not be construed to be representative of actual products on the market in a similar product category.
							</h6>	
				        </header>	
					</Route>
				  </Switch>
	    	</div>
		  </Router>
        );
	}
}