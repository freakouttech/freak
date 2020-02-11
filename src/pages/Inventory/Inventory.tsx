import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Inventory = (props: any) => {
	return (
	  	<Container id="Inventory">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Inventory</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Inventory;