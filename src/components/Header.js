import React from "react";
import "../styles/header.css";
import logo from "../images/logo.png";
import {FaShoppingBasket} from "react-icons/fa"

import {
  Form,
  FormControl,
  Button,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="nav" expand="lg">
        <Navbar.Brand href="#home">
          {" "}
          <img className="logo" src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavDropdown title="SHOP BY CATEGORY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline id="search-bar">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="input-search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
          <div  className="basket">
            <div className="basket-logo">
              <FaShoppingBasket/>
            </div>
            <h4>My Pantry</h4>
          </div>
         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
