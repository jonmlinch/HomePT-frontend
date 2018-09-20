import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { setCookie } from '../helpers/helpers'
import { Button, Card, Row, Col, Input } from 'react-materialize';


class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
          email: '',
          password: '',
      };
  };

  handleEmailChange = (e) =>{ 
      this.setState({
      email: e.target.value
    })
  ;}

  handlePasswordChange = (e) => {
      this.setState({
          password: e.target.value
      });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      axios.post(SERVER_URL + '/auth/login', this.state)
      .then(result => {
          console.log('THIS BITCH IS:', result);
          //Add the newly received token to cookie
          setCookie('mernToken', result.data.token);
          //Update the user with a call to App.js
          this.props.updateUser();
      }).catch( err => {
          console.log('ERROR', err.response.data);
      });
  };
  
  render() {
    if(this.props.user){
        return(<Redirect to="/profile" />);
    }
    return (
      <div className="container form-container center z-depth-2 login">
        <main>
          <h2>Login</h2>
          <form className='form' onSubmit={this.handleSubmit}>
            <div>
                <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
                <input name="password" placeholder="Password"  type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <div>
                <Button className="blue darken-1" type="submit" value="Login" waves='light'>Submit</Button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default Login;