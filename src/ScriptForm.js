import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Button, Card, Row, Col, Input } from 'react-materialize';


class ScriptForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          redirect: false,
          clients: [],
      };
  };

  componentDidMount() {
      console.log("On CDM of SignUp, user is:", this.props.user);
      console.log("This is the checkLogin value: ", this.props.checkedLogin)
      this.handleNames();
  }

  handleLogout = () => {
      console.log('this is the logout function talking here')
      setTimeout(function() {return (<Redirect to="/" />)}.bind(this), 1000);
  }

  handleNames = (e) => {
      //e.preventDefault();
      console.log('Getting those clients for provider', this.props.user)
      const newClient = this.state.clients;
      if(this.props.user){
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
    if(this.props.checkedLogin && this.props.user) {
        return (
            <div>
                <h2>Create a new Workout</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                    <Row>
                    <Input s={12} type='select' label="Patient Name:" defaultValue='2' onChange={this.handleNames}>
                        {this.state.clients.map(client => <option value={client.name}>{client.name}</option>)}
                    </Input>
                    </Row>
                    </div>
                    <input type="submit" value="Register" className="button" />
                </form>
            </div>
        ) 
    } else if(this.props.checkedLogin) {
        return (
            <Redirect to="/" />
        )
    } else {
        return (
            <div>
                <p>Loading ...</p>
            </div>
            
        )  
    }
  }
}

export default ScriptForm;