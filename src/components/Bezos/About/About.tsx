import React, { Component } from 'react';
import "./About.css";
class About extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	value: '',
	  	products: []
	  };

	}

  	render() {
	    return (
	      	<div id="About">
	      		<h1>About</h1>
	        </div>
	    );
  	}
}



export default About;
