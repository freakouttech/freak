import React, { Component } from 'react';
import "./Thought.css";
class Thought extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	value: '',
	  	products: []
	  };

	}

  	render() {
	    return (
	      	<div id="Thought">
	      		<h1>Thought</h1>
	        </div>
	    );
  	}
}



export default Thought;
