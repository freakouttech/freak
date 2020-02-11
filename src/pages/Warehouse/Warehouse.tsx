import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Warehouse = (props: any) => {
	return (
	  	<Container id="Warehouse">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Warehouse</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Warehouse;