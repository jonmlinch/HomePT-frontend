import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  handleLogout = (e) => {
      console.log('logging out');
      e.preventDefault();
      localStorage.removeItem('mernToken');
      this.props.updateUser();
  }
  
  render() {
    let links = '';
    if(this.props.user){
        links = (
            <span>
                <a href='#' onClick={this.handleLogout}>Logout</a>
                <Link to="/profile">Profile</Link>
            </span>
        );
    } else {
        links = (
            <span>
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
            </span>
        );
    }
    return (
      <div>
        <nav>
            <Link to="/">Home</Link>
            {links}
        </nav>
        
      </div>
    );
  }
}

export default Nav;
