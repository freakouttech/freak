import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
  	Button,
 } from 'reactstrap';
 import './Picker.css';
const Picker = (props: any) => {
	return (
	  	<Container id="Picker">
	  		<Row>
	  			<div className="picker-button-holder">
	  				<Button className="picker-links"><a href="/#/bezos/dashboard/picker/scanner">Log Product</a></Button>
	  				<Button className="picker-links"><a href="/#/bezos/dashboard/picker/hook">Pick Product</a></Button>
	  				<Button className="picker-links"><a href="/#/bezos/dashboard/picker/scanner">Product Info</a></Button>
	  			</div>
	  		</Row>
	  	</Container>
	);
};

export default Picker;