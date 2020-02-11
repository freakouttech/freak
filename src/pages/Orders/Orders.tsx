import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Orders = (props: any) => {
	return (
	  	<Container id="Orders">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Orders</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Orders;