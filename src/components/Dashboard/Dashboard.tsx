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
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Pages from "./../../pages/Pages";
import Inventory from "./../../pages/Inventory/Inventory";
import Warehouse from "./../../pages/Warehouse/Warehouse";
import Fulfilment from "./../../pages/Warehouse/Fulfilment/Fulfilment";
import Arrivals from "./../../pages/Warehouse/Arrivals/Arrivals";
import Pickers from "./../../pages/Warehouse/Pickers/Pickers";
import Layout from "./../../pages/Warehouse/Layout/Layout";
import Orders from "./../../pages/Orders/Orders";
import Seller from "./../../pages/Seller/Seller";
import Customers from "./../../pages/Seller/Customers/Customers";
import Purchases from "./../../pages/Seller/Purchases/Purchases";
import Settings from "./../../pages/Seller/Settings/Settings";
import Picker from "./../../pages/Picker/Picker";
import Scanner from "./../../pages/Picker/Scanner/Scanner";
import Hook from "./../../pages/Picker/Scanner/ScanHook";
import "./Dashboard.css";

interface IDashboardProps {
  user: any;
  type: any;
}

class Dashboard extends React.Component<IDashboardProps, any> {
	constructor(props: any) {
	  super(props);
	  this.state = {
	  	type: ""
	  };

	}

	render() {
		console.log("this", this);
	    return (
	      	<div>
	      		<Row>
	      			<Container id="Dashboard">
	      				<Row>
	      					<Card className="page-body">
	      						<CardHeader className="no-padding-bottom">
	      							<Sidebar />
	      						</CardHeader>
	      						<CardBody>
	      							<Switch>
	      								<Route exact path='/lastmile/dashboard/' name='Dashboard' component={Pages} />
	      							  	<Route exact path='/lastmile/dashboard/seller' name='Seller' component={Seller} />
	      							  	<Route exact path='/lastmile/dashboard/warehouse' name='Warehouse' component={Warehouse} />
	      							  	<Route exact path='/lastmile/dashboard/warehouse/arrivals' name='Arrivals' component={Arrivals} />
	      							  	<Route exact path='/lastmile/dashboard/warehouse/orders' name='Orders' component={Orders} />
	      							  	<Route exact path='/lastmile/dashboard/warehouse/fulfilment' name='Fulfilment' component={Fulfilment} />
	      							  	<Route exact path='/lastmile/dashboard/warehouse/inventory' name='Inventory' component={Inventory} />
	      							  	<Route exact path='/lastmile/dashboard/warehouse/layout'  name='Layout' component={Layout} />
	      							  	<Route exact path='/lastmile/dashboard/warehouse/pickers'  name='Pickers' component={Pickers} />
	      							  	<Route exact path='/lastmile/dashboard/seller/customers' name='Customers' component={Customers} />
	      							  	<Route exact path='/lastmile/dashboard/seller/purchases' name='Purchases' component={Purchases} />
	      							  	<Route exact path='/lastmile/dashboard/seller/inventory' name='Inventory' component={Inventory} />
	      							  	<Route exact path='/lastmile/dashboard/seller/settings'  name='Settings' component={Settings} />
	      							  	<Route exact path='/lastmile/dashboard/seller/orders'  name='Orders' component={Orders} />
	      							  	<Route exact path='/lastmile/dashboard/picker'  name='Picker' component={Picker} />
	      							  	<Route exact path='/lastmile/dashboard/picker/scanner'  name='Scanner' component={Scanner} />
	      							  	<Route exact path='/lastmile/dashboard/picker/hook'  name='Scanner' component={Hook} />
	      							</Switch>
	      						</CardBody>
	      					</Card>
	      				</Row>
	      			</Container>
	      		</Row>
	      	</div>
	    );
	}
};

export default Dashboard;