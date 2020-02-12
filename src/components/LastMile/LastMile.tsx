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

import "./LastMile.css";
class lastmile extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	value: '',
	  	products: []
	  };

	}

  	render() {
  		console.log("location", window.location);
  		console.log(window.location.hash.startsWith("#/lastmile/dashboard/"));
	    return (
	      	<div id="wrapper" className="lastmile-body">
	      		{!window.location.hash.startsWith("#/lastmile/dashboard/") &&
	      			<Header />
	      		}
	      		<>
	      			<Switch>
	      			  <Route exact path='/lastmile/' name='Home' component={Main} />
	      			  <Route exact path='/lastmile/about/' name='About Us' component={About} />
	      			  <Route exact path='/lastmile/thought/' name='Thought & Work' component={Thought} />
	      			  <Route exact path='/lastmile/contact/' name='Contact Us' component={Contact} />
	      			  <Route exact path='/lastmile/login/' name='Login' component={Login} />
	      			  <Route path='/lastmile/dashboard/' name='Dashboard' component={Dashboard} />
	      			</Switch>
	      		</>
	        </div>
	    );
  	}
}



export default lastmile;
