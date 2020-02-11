import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Arrivals = (props: any) => {
	return (
	  	<Container id="Arrivals">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Arrivals</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Arrivals;