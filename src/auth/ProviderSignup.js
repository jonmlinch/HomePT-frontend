import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Input } from 'react-materialize';



class Signup extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: '',
          email: '',
          password: '',
          type: 'provider',
          redirect: false,
          //provider: this.props.user.id
      };
  };

  setRedirect = () => {
    this.setState({
        redirect: true
    })
  }

  handleNameChange = (e) => {
      this.setState({
          name: e.target.value
      })
  }

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
      const toSubmit = this.state
      console.log(this.state);
      axios.post(SERVER_URL + '/auth/signup', toSubmit)
      .then(result => {
          this.setRedirect();
      }).catch( err => {
          console.log('ERROR', err.response);
      });
  };
  
  render() {
    if(this.state.redirect){
        return (
            <Redirect to="/profile" />
        )   
    } else {
        return (
            <div className="container signup-form-container center z-depth-1">
                <h2>Register As A New Provider</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <Input name="name" label="Full Name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <Input name="email" label="E-Mail" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                    <div>
                        <Input name="password" label="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <div>
                        <Button className="blue darken-1" type="submit" value="Register" waves='light'>Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
  }
}

export default Signup;