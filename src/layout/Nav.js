import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
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
        if(this.props.user.type === 'client'){
            links = (
                <span>
                    <li><Link to="/profile">Profile</Link></li>
                    <NavItem href='#' onClick={this.handleLogout}>Logout</NavItem>
                </span>
            );   
        } else {
            links = (
                <span>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/prescribe">New Workout</Link></li>
                    <li><Link to="/signup">Add New Client</Link></li>
                    <NavItem href='#' onClick={this.handleLogout}>Logout</NavItem>
                </span>
            );
        }
        
    } else {
        links = (
          <div>
            <span>
                <li><Link to="/login">Login</Link></li> 
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