import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Button, Card, Row, Col, Input } from 'react-materialize';

class Signup extends Component {
  constructor(props){
      super(props);
      this.state = {
          redirect: false,
      };
  };

  //handleOnChange= {this.handleOnChange.bind(this)}

  handleNames = (e) => {
      e.preventDefault();
      console.log('Getting those clients')
      axios.get(SERVER_URL + '/controllers/clients')
      .then( result => {
          console.log(result.data.name)
      })
  }

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
            <div className="container form-container z-depth-1 center">
                <h2>Create a new Workout</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <input name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                    <select>
                        <option>Choose your option</option>
                        <option >Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <label>Materialize Multiple Select</label>
                    </div>
                    <div>
                        <Button type="submit" value="Register" waves='light'>Submit</Button>
                    </div>                </form>
            </div>
        )
    }
  }
}

export default Signup;