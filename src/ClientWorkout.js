import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Button, Card, Row, Col, Input, Modal, MediaBox } from 'react-materialize';
import FeedbackForm from './FeedbackForm';
import {Link} from 'react-router-dom';



class ClientWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: '',
            providerId: '',
            clientId: '',
            workoutVid: '',
            workoutReps: '',
            workoutFreq: ''
        }
    }
    componentDidMount(){
        console.log(this.props.prescription)
        console.log('The exercise regimin is', this.props.exerciseRegimen[0])
        this.starterVid();
    }

    starterVid = (e) => {
        console.log("The modal button was clicked")
        if(this.props.seedVid){
            this.setState({
                workoutVid: this.props.exerciseRegimen[0]
            })
            console.log('The starting workout vid is ', this.state.workoutVid)
        }     
    }

    handleVideo = (e) => {
        e.preventDefault();
        console.log('This is the button click', e.target.value)
        console.log('The starting workout vid is ', this.state.workoutVid)
        this.setState({
            workoutVid: e.target.value,
            workoutReps: e.target.name
        })
        console.log('the state of workoutVid is', this.state.workoutVid)
    }


  render() {
    return (
      <div>
        <h2 className="center" onChange={this.starterVid}>{this.props.prescription.name}'s Dashboard</h2>
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
                  <div class="video-container">
                  <iframe width="853" height="480" src={this.state.workoutVid} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="1">Welcome!</iframe>
                  </div>
                </Col>
                <Col className="exercise-list-overflow" m={4}>
                {this.props.exerciseRegimen.map(exercises => (
                    <Button onClick={this.handleVideo} className="exercise-button blue lighten-1 btn-small" waves='light' value={exercises.exercise.video} name={`Do it for ${exercises.reps}`}>{exercises.exercise.name}</Button>
                ))}
                </Col>
              </Row>
              <Row>
                <Col m={12}>
                  <h1>{this.state.workoutReps}</h1>
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