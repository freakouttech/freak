import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Pickers = (props: any) => {
	return (
	  	<Container id="Pickers">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Pickers</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Pickers;