import React, { Component } from 'react';
import { 
	Button,
	Container,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Row,
	Col,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	FormText,
} from 'reactstrap';
import "./Main.css";
class Main extends React.Component<{}, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	value: '',
	  	products: []
	  };

	}
	public scrollTo = () => {
		const elem:any = window.document.querySelector('#contact_us') as Element;
		elem.scrollIntoView({behavior: "smooth"});
	}
  	render() {
	    return (
	      	<div id="wrapper">
	      		<section className="hero">
	      			<video autoPlay={true} loop={true} data-wf-ignore="true" poster="/img/intro-Frame.jpg">
	      				<source src="/vid/intro-small.webm" data-wf-ignore="true" />
	      				<source src="/vid/intro-small.mp4" data-wf-ignore="true" />
	      			</video>
	      			<div className="overlay"></div>
	      			<div className="hero-text">
	      				<h1>Delivering happiness for the world’s most innovative organizations. Fast.</h1>
	      				<Button className="primary-color" onClick={this.scrollTo}>Learn More</Button>
	      			</div>
	      		</section>
	      		<section className="info-section">
	      			<Container>
	      				<h1 className="center-text">What are you looking for?</h1>
	      				<Row>
	      				    <Col sm="6">
	      						<Card>
	      						  <CardBody>
	      						    <CardTitle>I want to ship my products internationally</CardTitle>
	      						    <p className="card-arrow">⇢</p>
	      						  </CardBody>
	      						</Card>
	      					</Col>
	      					<Col sm="6">
	      						<Card>
	      						  <CardBody>
	      						    <CardTitle>I want to manage my inventory</CardTitle>
	      						    <p className="card-arrow">⇢</p>
	      						  </CardBody>
	      						</Card>
	      					</Col>
	      					<div className="clearfix"></div>
	      				</Row>
	      				<Row>
	      				    <Col sm="6">
	      						<Card>
	      						  <CardBody>
	      						    <CardTitle>I want to ship my products internationally</CardTitle>
	      						    <p className="card-arrow">⇢</p>
	      						  </CardBody>
	      						</Card>
	      					</Col>
	      					<Col sm="6">
	      						<Card>
	      						  <CardBody>
	      						    <CardTitle>I want to manage my inventory</CardTitle>
	      						    <p className="card-arrow">⇢</p>
	      						  </CardBody>
	      						</Card>
	      					</Col>
	      					<div className="clearfix"></div>
	      				</Row>
	      			</Container>
	      		</section>
	      		<section className="fulfill-section">
	      			<Container>
	      				<div className="fulfill-title">
	      					<h1 className="fulfill-info">Fulfilment Innovation Solutions</h1>
	      				</div>
	      				<Row className="fulfill-row">
	      					<Card>
	      					  <CardImg left width="100%" src="https://18website-prod.s3.amazonaws.com/uploads/4-d7K0nM6fk19iZE.png" alt="Card image cap" />
	      					  <CardBody>
	      					    <CardText>
	      					      <small className="text-muted">Last updated 3 mins ago</small>
	      					    </CardText>
	      					  </CardBody>
	      					</Card>
	      				</Row>
					</Container>
	      		</section>
	      		<section id="contact_us" className="contact-section">
	      			<Container>
	      				<div className="contact-title">
	      					<h1 className="contact-info">Get in Touch</h1>
	      				</div>
	      				<div className="contact-groups">
	      					<InputGroup className="contact-input">
	      						<Input placeholder="Your Name (requied)" />
	      					</InputGroup>
	      					<br />
	      					<InputGroup className="contact-input">
	      					   <Input placeholder="Email (required)" />
	      					</InputGroup>
	      					<br />
	      					<InputGroup>
	      						<Input className="contact-textarea" type="textarea" placeholder="Your Message" />
	      					</InputGroup>
	      					<br />
	      					<div className="contact-button">
	      						<Button className="primary-color">Send</Button>
	      					</div>
	      				</div>
	      			</Container>	      			
	      		</section>
	        </div>
	    );
  	}
}



export default Main;
