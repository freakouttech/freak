import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Thought from "./Thought/Thought";
import Contact from "./Contact/Contact";
import Login from "./../Login/Login";
import Footer from "./Footer/Footer";
import Dashboard from "./../Dashboard/Dashboard";

import "./Bezos.css";
class Bezos extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	value: '',
	  	products: []
	  };

	}

  	render() {
  		console.log("location", window.location);
  		console.log(window.location.hash.startsWith("#/bezos/dashboard/"));
	    return (
	      	<div id="wrapper" className="bezos-body">
	      		{!window.location.hash.startsWith("#/bezos/dashboard/") &&
	      			<Header />
	      		}
	      		<>
	      			<Switch>
	      			  <Route exact path='/bezos/' name='Home' component={Main} />
	      			  <Route exact path='/bezos/about/' name='About Us' component={About} />
	      			  <Route exact path='/bezos/thought/' name='Thought & Work' component={Thought} />
	      			  <Route exact path='/bezos/contact/' name='Contact Us' component={Contact} />
	      			  <Route exact path='/bezos/login/' name='Login' component={Login} />
	      			  <Route path='/bezos/dashboard/' name='Dashboard' component={Dashboard} />
	      			</Switch>
	      		</>
	        </div>
	    );
  	}
}



export default Bezos;
