import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'
import { Button, Card, Row, Col, Input } from 'react-materialize';
import Calendars from '../Calendar';



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
            <Col m={4} s={12}>
                <Card className='card-class' textClassName='white-text' title='Clients'>
                THIS IS TEST TEXT
                <Row>
                <Input s={12} textclassName="white-text" type='select' label="Clients" defaultValue='1'>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                </Input>
                </Row>
                </Card>
                <Calendars />
            </Col>
            </Row>
        </div>
      )
  }
}

export default Therapist;