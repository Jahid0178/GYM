import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../images/logo.webp";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const [{ user, logOut }] = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              {user.email || user.displayName ? (
                <NavLink className="nav-link" to="#" onClick={logOut}>
                  Log Out
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
              {!user.displayName && (
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              )}
              <Navbar.Text>
                Signed in as: <a href="#login">{user.displayName}</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
