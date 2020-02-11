import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Customers = (props: any) => {
	return (
	  	<Container id="Customers">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Customers</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Customers;