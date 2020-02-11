import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
 } from 'reactstrap';
const Settings = (props: any) => {
	return (
	  	<Container id="Settings">
	  		<Row>
	  			<CardText>
	  			  <CardSubtitle>Settings</CardSubtitle>
	  			</CardText>
	  		</Row>
	  	</Container>
	);
};

export default Settings;