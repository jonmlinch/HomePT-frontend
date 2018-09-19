import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem } from 'react-materialize';
import { deleteCookie } from '../helpers/helpers'

class Nav extends Component {
  handleLogout = (e) => {
      console.log('logging out');
      e.preventDefault();
      deleteCookie('mernToken');
      this.props.updateUser();
  }
  
  render() {
    let links = '';
    if(this.props.user){
        links = (
            <span>
                <NavItem href='#' onClick={this.handleLogout}>Logout</NavItem>
                <NavItem><Link to="/profile">Profile</Link></NavItem>
            </span>
        );
    } else {
        links = (
          <div>
            <span>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
            </span>
          </div>
        );
    }
    return (
      <div>
        <Navbar className="navbar" brand='HomePT' right>
            <li><Link to="/">Home</Link></li>
            <li>{links}</li>
        </Navbar>
      </div>
    );
  }
}

export default Nav;