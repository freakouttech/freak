import React, { Component } from 'react';
import { 
	Container,
	Row,
	Col,
} from 'reactstrap';
import "./Footer.css";
class Footer extends React.Component<{}, any> {
  	render() {
	    return (
	      	<footer id="footer-wrapper">
	      		<Container>
	      			<Row>
	      				<Col xs="12" sm="4">
	      					<Row className="text-center">
	      						<p>Item 1</p>
	      					</Row>
	      				</Col>
	      				<Col xs="12" sm="4">
	      					<Row className="text-center">
	      						<p>Item 1</p>
	      					</Row>
	      				</Col>
	      				<Col xs="12" sm="4">
	      					<Row className="text-center">
	      						<p>Item 1</p>
	      					</Row>
	      				</Col>
	      			</Row>
	      			<Row>
	      				<p className="small">© FreakoutTech 2019.</p>
	      			</Row>
	      		</Container>
	        </footer>
	    );
  	}
}



export default Footer;
