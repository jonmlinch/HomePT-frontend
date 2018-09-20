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
          clients: [],
      };
  };

  componentDidMount() {
      console.log("On CDM of SignUp, user is:", this.props.user);
      console.log("The user state is: ", this.props.user.id)
  }

  handleNames = (e) => {
      //e.preventDefault();
      console.log('Getting those clients for provider', this.props.user)
      const newClient = this.state.clients;
      axios.get(SERVER_URL + '/users/clients/' + this.props.user.id)
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

  handleSubmit = () => {
      console.log(this.state);
      axios.post(SERVER_URL + '/auth/signup', this.state)
      .then(result => {
          this.setRedirect();
      }).catch( err => {
          console.log('ERROR', err.response);
      });
  };

  static getDerivedStateFromProps = () =>{
      this.handleNames
  }
  
  render() {
    if(this.props.user){
        if(this.state.redirect){
            return (
                <Redirect to="/profile" />
            )   
        } else {
            return (
                <div>
                    <h2>Create a new Workout</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
                        </div>
                        <div>
                        <Row>
                        <Input s={12} type='select' label="Materialize Select" defaultValue='2' onChange={this.handleNames}>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                            {this.state.clients.map(client => <option value={client.name}>{client.name}</option>)}
                        </Input>
                        </Row>
                        </div>
                        <input type="submit" value="Register" className="button" />
                    </form>
                </div>
            )
        }
    }
    else {
        return (
            <Redirect to="/login" />
          );
    }
}
    
}

export default Signup;