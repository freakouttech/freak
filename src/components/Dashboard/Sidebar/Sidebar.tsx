import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

import "./Sidebar.css";
const Sidebar = (props: any) => {
  const [dropdownWarehouseOpen, setDropdownWarehouseOpen] = useState(false);
  const toggleWare = () => setDropdownWarehouseOpen(!dropdownWarehouseOpen);

  const [dropdownSellerOpen, setDropdownSellerOpen] = useState(false);
  const toggleSell = () => setDropdownSellerOpen(!dropdownSellerOpen);
  
  const	activeStateOne = window.location.hash === "#/lastmile/dashboard/" ? true : false;
  const	activeStateTwo = window.location.hash.indexOf("warehouse") > -1 ? true : false;
  const	activeStateThree = window.location.hash.indexOf("seller") > -1 ? true : false;

  return (
    <div id="Sidebar-Wrapper">
      <Nav tabs>
        <NavItem>
          <NavLink
          	href="/#/lastmile/dashboard/"
          	className="nav-link"
          	active={activeStateOne}
          >
          	Dashboard
          </NavLink>
        </NavItem>
        <Dropdown
        	nav
        	isOpen={dropdownWarehouseOpen}
        	toggle={toggleWare}
        	active={activeStateTwo}
        	onMouseEnter={toggleWare}
        	onMouseLeave={toggleWare}
        >
          <DropdownToggle nav caret>
            <a
            	href="/#/lastmile/dashboard/warehouse/"
            	className="sidebar-nav-link"
            >
            	Warehouse
            </a>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
            	href="/#/lastmile/dashboard/warehouse/arrivals"
            	className="sidebar-nav-link"
            >
            	Arrivals
            </DropdownItem>
            <DropdownItem
            	href="/#/lastmile/dashboard/warehouse/inventory"
            	className="sidebar-nav-link"
            >
            	Inventory
            </DropdownItem>
            <DropdownItem
            	href="/#/lastmile/dashboard/warehouse/layout"
            	className="sidebar-nav-link"
            >
            	Layout
            </DropdownItem>
            <DropdownItem
            	tag="a"
            	href="/#/lastmile/dashboard/warehouse/pickers"
            	className="sidebar-nav-link text-left"
            >
            	Fulfilment
            </DropdownItem>
            <DropdownItem
            	tag="a"
            	href="/#/lastmile/dashboard/warehouse/pickers"
            	className="sidebar-nav-link text-left"
            >
            	Pickers
            </DropdownItem>
            <DropdownItem
            	tag="a"
            	href="/#/lastmile/dashboard/warehouse/orders"
            	className="sidebar-nav-link text-left"
            >
            	Orders
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
        	nav
        	isOpen={dropdownSellerOpen}
        	active={activeStateThree}
        	toggle={toggleSell}
        	onMouseEnter={toggleSell}
        	onMouseLeave={toggleSell}
        >
          <DropdownToggle nav caret>
            Seller
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
            	href="/#/lastmile/dashboard/seller/inventory"
            	className="sidebar-nav-link"
            >
            	Inventory
            </DropdownItem>
            <DropdownItem
            	tag="a"
            	href="/#/lastmile/dashboard/seller/orders"
            	className="sidebar-nav-link text-left"
            >
            	Orders
            </DropdownItem>
            <DropdownItem
            	tag="a"
            	href="/#/lastmile/dashboard/seller/purchases"
            	className="sidebar-nav-link text-left"
            >
            	Purchases
            </DropdownItem>
            <DropdownItem
            	tag="a"
            	href="/#/lastmile/dashboard/seller/customers"
            	className="sidebar-nav-link text-left"
            >
            	Customers
            </DropdownItem>
            <DropdownItem
            	href="/#/lastmile/dashboard/seller/settings"
            	className="sidebar-nav-link"
            >
            	Settings
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/#/lastmile/dashboard/orders">Customers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Settings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#/lastmile/dashboard/picker">Picker</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Sidebar;