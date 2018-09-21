import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'
import { Button, Card, Row, Col, Input } from 'react-materialize';



class Therapist extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: ''
        }
    }


  render() {
      return (
        <div className="container">
            <h2>Provider's dashboard</h2>
            <Row>
            <Col className="center z-depth-1" m={4} s={12}>
                <h2>List of clients</h2>
                <Input s={12} textclassName="white-text" type='select' label="Clients" defaultValue='1'>
                    <option value={0}>Choose a patient</option>
                    {this.props.clients.map(client => <option value={client.id}>{client.name}</option>)}
                </Input>                
            </Col>
            <Col className="therapist-client-info offset-m1 z-depth-1" m={7} s={12}>
                <h2 className="center">Client Info</h2>
                <h4 className="center therapist-client-name">Replace with client name</h4>
                <h5>Prescribed Exercises</h5>
            </Col>
            </Row>
        </div>
      )
  }
}

export default Therapist;