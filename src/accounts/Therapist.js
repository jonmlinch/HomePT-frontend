import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'
import { Row, Col, Input } from 'react-materialize';



class Therapist extends Component {
    constructor(props){
        super(props);
        this.state = {
            clientId: '',
            prescribedExercises: [],
            clientInfo: '',
            exerciseInfo: [],
            commentInfo: []
        }
    }

    handleClientInfo = (e) => {
        this.setState({
            clientId: e.target.value
        })
        console.log('The client info is: ', this.state.clientId)
        this.findExerciseInfo();
    }

    handleCommentInfo = (e) => {
        axios.get(SERVER_URL + '/comments/' + this.state.clientId)
        .then(results => {
            this.setState({
                commentInfo: results.data.comments
            })
            console.log('This is the new state of comments ', this.state.commentInfo)
        }).catch(err => {
            console.log('We are having trouble fetching comments')
        })
    }

    findExerciseInfo = (e) => {
        //this.handleClientInfo()
        console.log('The state I send to the server is: ', this.state.clientId)
        axios.get(SERVER_URL + '/users/prescription/' + this.state.clientId)
        .then(results => {
            console.log('The result of the GET is: ', results.data.result)
            const newClientInfo = results.data.result;
            this.setState({
                clientInfo: newClientInfo,
                exerciseInfo: newClientInfo.prescription.assignedExercises,
            })
            console.log('The clientInfo is ', this.state.clientInfo)
            console.log('The assigned exercises are: ', this.state.exerciseInfo)
            this.handleCommentInfo();
        }).catch(err => {
            console.log('There was an error getting the client prescription info')
        })
    }

  render() {
    
      return (
        <div className="container">
            <h2>{this.props.user.name}'s dashboard</h2>
            <Row>
            <Col m={4} s={12}>
              <Row>
              <Col className="center z-depth-1" m={12} s={12}>
                  <h3 className="flow-text">List of clients</h3>
                  <Input s={12} textclassName="white-text" type='select' label="Clients"  onChange={this.handleClientInfo} defaultValue='1'>
                      <option value={0}>Choose a patient</option>
                      {this.props.clients.map(client => <option value={client.id}>{client.name}</option>)}
                  </Input>
              </Col>
              </Row>
              <Row>
              <Col className="center z-depth-1 therapist-client-info" m={12} s={12}>
                 <p className="center flow-text">Prescribed Exercises</p> 
                 {this.state.exerciseInfo.map(exercises => (
                 <div>
                   <Row>
                     <Col className="" s={4}>
                       <p>Exercise: {exercises.exercise.name}</p>
                     </Col>
                     <Col className="" s={4}>
                       <p>Reps: {exercises.reps}</p>
                     </Col>
                     <Col className="" s={4}>
                       <p>Frequency: {exercises.freq}</p>
                     </Col>
                   </Row>
                 </div>
                 ))}                   
              </Col>
              </Row>
            </Col>
             <Col className="therapist-client-feedback offset-m1 z-depth-1" m={7} s={12}>
                 <h2 className="center">Client Info</h2>
                 <hr/>
                 <h3 className="center therapist-client-name">Feedback</h3>
                 <h5 className="center">Patient's Name: {this.state.clientInfo.name}</h5> 
                 {this.state.commentInfo.map(comments => (
                 <div>
                     <Row className="flow-text" s={2}>
                       <p>Pain?: {comments.feedback.pain}</p>
                     </Row>
                     <Row className="flow-text" s={2}>
                       <p>Pain Location: {comments.feedback.painLocation}</p>
                     </Row>
                     <Row className="flow-text" s={2}>
                       <p>Pain Severity: {comments.feedback.painSeverity}</p>
                     </Row>
                     <Row className="flow-text" s={2}>
                       <p>RPE: {comments.feedback.RPEData}</p>
                     </Row>
                     <Row className="flow-text" s={2}>
                       <p>Additional Comments: {comments.feedback.addlComments}</p>
                     </Row>
                 </div>
                 ))}               
              </Col>            
            </Row>
        </div>
      )
  }
}

export default Therapist;