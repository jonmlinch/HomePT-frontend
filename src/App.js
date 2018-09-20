import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Foot from './layout/Foot';
import Profile from './Profile';
import Signup from './auth/Signup';
import ScriptForm from './ScriptForm'
import { Button, Card, Row, Col, Footer } from 'react-materialize';
import { deleteCookie, getCookie } from './helpers/helpers';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user: null,
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
        deleteCookie('mernToken'); 
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

  handleNames = () => {
    console.log('Getting those clients for provider', this.props.user)
    const newClient = this.state.clients;
    axios.get(SERVER_URL + '/users/clients/' + this.state.user.id)
    .then( result => {
        console.log(result.data.clients)
          this.setState({
              clients: result.data.clients
          })
          console.log(this.state.clients)
    }).catch(err => {
        console.log('THERE IS AN ERROR', err)
    })
}

  render() {
    return (
      <div>
        <Router>
          <div>
            <main>
              <Nav user={this.state.user} updateUser={this.getUser} />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={
                () => (<Login user={this.state.user} updateUser={this.getUser} />)
              } />
              <Route path="/signup" component={() => (<Signup user={this.state.user} />)} />
              <Route path="/profile" component={
                () => (<Profile user={this.state.user} updateUser={this.getUser} />)
              } />
              <Route path="/prescribe" component={() => (<ScriptForm user={this.state.user} updateUser={this.getUser} />)} />
            </main>
            <Foot />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

