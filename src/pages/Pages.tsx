import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardHeader,
	CardFooter,
	CardBody,
  	CardTitle,
  	CardSubtitle,
  	Button
} from 'reactstrap';
import "./Pages.css";

class Pages extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	type: ""
	  };

	}

	render() {
	    return (
	      	<Container id="Pages">
	      		<Row>
	      			<CardBody>
	      			  <CardSubtitle>Pages</CardSubtitle>
	      			</CardBody>
	      		</Row>
	      	</Container>
	    );
	}
};

export default Pages;