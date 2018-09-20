import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'
import { Button, Card, Row, Col } from 'react-materialize';
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
            <h2>This will the PROVIDER profile page</h2>
            <Row>
            <Col m={4} s={12}>
                <Card className='card-class' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                I am a very simple card.
                </Card>
                <Calendars />
            </Col>
            </Row>
        </div>
      )
  }
}

export default Therapist;