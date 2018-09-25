import React, { Component } from 'react';
import { Button, Row, Col, Modal } from 'react-materialize';
import {Link} from 'react-router-dom';



class ClientWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: '',
            providerId: '',
            clientId: '',
            workoutVid: '//www.youtube.com/embed/cIXIZ_8aGM8',
            workoutReps: 'Click on your first exercise or watch this funny prancercise video! ',
            workoutFreq: ''
        }
    }
    componentDidMount(){
        console.log(this.props.prescription)
        this.starterVid();
    }

    starterVid = (e) => {
        console.log("The modal button was clicked")
        console.log("Exercise regimen is: ", this.props.seedVid)    
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
          <Col className="client-dashboard-padding z-depth-1 offset-m3" m={6}>
            <h4 className="center">Your Current Regimen</h4>
            <hr />
            <h5>To get started, click "Start Regimen"</h5>
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
                  <iframe title="video" width="853" height="480" src={this.state.workoutVid} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="1"></iframe>
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
                  <p className="flow-text">{this.state.workoutReps}</p>
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