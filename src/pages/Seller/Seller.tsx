import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Seller = (props: any) => {
	return (
	  	<Container id="Seller">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Seller</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Seller;