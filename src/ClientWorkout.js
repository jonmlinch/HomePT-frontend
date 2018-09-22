import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Button, Row, Col, Modal } from 'react-materialize';
import FeedbackForm from './FeedbackForm';
import {Link} from 'react-router-dom';



class ClientWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: '',
            providerId: '',
            clientId: ''
        }
    }
    componentDidMount(){
        console.log(this.props.prescription)
    }

    getExercises = (e) => {
        console.log('Now the state is: ', this.state)
    }


  render() {
    return (
      <div className="client-profile-margin">
        <h2 className="center">{this.props.prescription.name}'s Dashboard</h2>
        <Row>
          <Col className="z-depth-1 offset-m3" m={6}>
            <h4 className="center">Your Current Regimen</h4>
            <hr />
            <h5>The exercises will be listed here</h5>
            <Modal
              header="Today's Exercises"
              actions={<div>
                <Link to="/feedback"><Button className="btn waves-effect waves-light btn-flat modal-action modal-close button">Feedback</Button></Link> 
                <Button className="btn waves-effect waves-light btn-flat modal-action modal-close button">Close</Button>
              </div>
              }
              trigger={<Button className="blue lighten-1 right start-regimen-button">Start Regimen</Button>}>
              <Row>
                <Col m={8}>
                  <div className="video-container">
                    <iframe title="video" width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
                  </div>
                </Col>
                <Col className="exercise-list-overflow" m={4}>
                <Button className="exercise-button blue lighten-1 btn-small" waves='light'>EXERCISE ONE</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE TWO</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE THREE</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE FOUR</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE FIVE</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE SIX</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE SEVEN</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE EIGHT</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE NINE</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE TEN</Button>
                <Button className="exercise-button blue lighten-1" waves='light'>EXERCISE ELEVEN</Button>
                </Col>
              </Row>
              <Row>
                <Col m={12}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </Col>
              </Row>              
            </Modal>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ClientWorkout;