import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Layout = (props: any) => {
	return (
	  	<Container id="Layout">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Layout</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Layout;