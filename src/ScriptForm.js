import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Signup extends Component {
  constructor(props){
      super(props);
      this.state = {
          redirect: false,
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
      console.log(this.state);
      axios.post(SERVER_URL + '/auth/signup', this.state)
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
            <div>
                <h2>Create a new patient</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Patient:</label>
                        <select>
                            
                        </select>
                    </div>
                    <div>
                        <input name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                    <div>
                        <input name="password" placeholder="Password"  type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <input type="submit" value="Register" className="button" />
                </form>
            </div>
        )
    }
  }
}

export default Signup;