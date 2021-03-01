import { React } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo.png";
import user from "../images/user.png";
import { FaShoppingBasket } from "react-icons/fa";
import { CgLogIn, CgLogOut } from "react-icons/cg";

import {
  Form,
  FormControl,
  Button,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Header() {
  const loggedOut = () => {
    sessionStorage.removeItem("isUserLogged");
  };

  return (
    <>
      <Navbar className="nav" expand="lg" fixed="top">
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
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              id="input-search"
            />
            <Button>Search</Button>
          </Form>

          {sessionStorage.getItem("isUserLogged") ? (
            <div>
              <Link to="/">
                <button onClick={loggedOut} className="userLogin">
                  <CgLogOut />
                </button>
              </Link>
            </div>
          ) : (
            <div className="userLogin">
              <Link to="/login">
                <CgLogIn />
              </Link>
            </div>
          )}
          <Nav>
            <div className="basket">
              <div className="basket-logo">
                <FaShoppingBasket />
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
