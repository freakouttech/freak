import React, { Component } from 'react';

class Header extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	type: ""
	  };

	}

	render() {
	    return (
	      	<div id="Header"></div>
	    );
	}
};

export default Header;