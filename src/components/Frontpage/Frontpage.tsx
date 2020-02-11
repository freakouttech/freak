import React, { Component } from 'react';
import "./Frontpage.css";

class Frontpage extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	value: '',
	  	products: []
	  };

	}

  	render() {
	    return (
	      	<div id="Frontpage">
	      		<div>
	            	<img className="hero-logo animated" src="/img/logo.svg"></img>
	            	<a href="mailto:michael.copeland@freakout.tech" className="text-muted contact-us-link">Contact Us</a>
	            </div>
	        </div>
	    );
  	}
}



export default Frontpage;
