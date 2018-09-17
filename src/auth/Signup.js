import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Signup extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: '',
          email: '',
          password: '',
          pt_id: ''
      };
  };

  handleNameChange = (e) => {
      this.setState({
          name: e.target.value
      })
  }

  handlePtId = (e) => {
      this.setState({
          pt_id: e.target.value
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
      axios.post(SERVER_URL + '/auth/login', this.state)
      .then(result => {
          //Add the newly received token to local storage ***This will likely change when using cookies ****
          localStorage.setItem('mernToken', result.data.token);
          //Update the user with a call to App.js
          this.props.updateUser();
      }).catch( err => {
          console.log('ERROR', err.response.data);
      });
  };
  
  render() {
    // if(this.props.user){
    //     return(<Redirect to="/profile" />);
    // }
    return (
      <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
                <input name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div>
                <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
                <input name="password" placeholder="Password"  type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <div>
                <input name="pt_id" placeholder="pt_id" value={this.state.pt_id} onChange={this.handlePtId} />
            </div>
            <input type="submit" value="Register" className="button" />
          </form>
      </div>
    );
  }
}

export default Signup;