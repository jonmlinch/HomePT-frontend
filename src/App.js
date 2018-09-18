import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookie';
import SERVER_URL from './constants/server';
import './App.css';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './Profile';
import Signup from './auth/Signup';
<<<<<<< HEAD
import { Button, Card, Row, Col, Navbar, NavItem } from 'react-materialize';
=======
import { Button, Card, Row, Col } from 'react-materialize';
import { deleteCookie, getCookie } from './helpers/helpers'
>>>>>>> f964162ca3f32b221c6a33e27db93ab43b2614c5

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user: null
      }
    }

  componentDidMount = () => {
    console.log('component did mount!');
    this.getUser();
  }

  getUser = () => {
    var token = getCookie('mernToken');
    if(token){
      console.log('token found in local storage', token);
      //There is a token in localStorage ****This Needs to change to cookies ****
      axios.post(SERVER_URL + '/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(response => {
        console.log('THE RESPONSE IS: ', response);
        console.log('API says: ', response.data )
        this.setState({
          user: response.data.user
        });
      }).catch( err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        deleteCookie('mernToken'); //This will need to change when using Cookies
        this.setState({
          user: null
        });
      });
    } else {
      console.log('No token was found');
      deleteCookie('mernToken');
      this.setState({
        user: null
      });
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
          <Nav user={this.state.user} updateUser={this.getUser} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={
            () => (<Login user={this.state.user} updateUser={this.getUser} />)
          } />
          <Route path="/signup" component={
            () => (<Signup user={this.state.user} updateUser={this.getUser} />)
          } />
          <Route path="/profile" component={
            () => (<Profile user={this.state.user} updateUser={this.getUser} />)
          } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

