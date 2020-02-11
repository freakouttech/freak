import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Purchases = (props: any) => {
	return (
	  	<Container id="Purchases">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Purchases</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Purchases;