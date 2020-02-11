import React, { Component } from 'react';
import "./Contact.css";
class Contact extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	value: '',
	  	products: []
	  };

	}

  	render() {
	    return (
	      	<div id="Contact">
	      		<h1>Contact</h1>
	        </div>
	    );
  	}
}



export default Contact;
