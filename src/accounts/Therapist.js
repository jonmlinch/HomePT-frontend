import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'
import { Button, Card, Row, Col, Input } from 'react-materialize';



class Therapist extends Component {
    constructor(props){
        super(props);
        this.state = {
            clientId: '',
            prescribedExercises: [],
            clientInfo: '',
            exerciseInfo: [],
            exercises: []
        }
    }

    handleClientInfo = (e) => {
        this.setState({
            clientId: e.target.value
        })
        console.log('The client info is: ', this.state.clientId)
        this.findExerciseInfo();
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
                exercises: []
            })
            console.log('The clientInfo is ', this.state.clientInfo)
            console.log('The assigned exercises are: ', this.state.exerciseInfo)
            this.getExercises()
        }).catch(err => {
            console.log('There was an error getting the client prescription info')
        })
    }

    getExercises = (e) => {
        this.state.exerciseInfo.map(exercises => {
            //console.log('I am going to send exercises', exercises.exercise)
            axios.get(SERVER_URL + '/exercises/one/' + exercises.exercise)
            .then(result => {
                console.log('The getExercise function returns:', result.data.exercise.name)
                const newExercises = this.state.exercises;
                newExercises.push(result.data.exercise.name);
                this.setState({
                    exercises: newExercises
                })
                console.log('The exercises array looks like', this.state.exercises)
            }).catch(err => {
                console.log('getExercises is returning an error')
            })
        })
        
        
    }

    // handleExercises = () => {
    //     if(this.state.clientInfo.prescription.assignedExercises){
    //         {this.state.clientInfo.prescription.assignedExercises.map(exercise => {
    //             return (<p>{exercise.name}</p>)
    //         })
    //       }
    //     } else {
    //         return (<p></p>)
    //     }
    // }


  render() {
    
      return (
        <div className="container">
            <h2>Provider's dashboard</h2>
            <Row>
            <Col className="center z-depth-1" m={4} s={12}>
                <h2>List of clients</h2>
                <Input s={12} textclassName="white-text" type='select' label="Clients"  onChange={this.handleClientInfo} defaultValue='1'>
                    <option value={0}>Choose a patient</option>
                    {this.props.clients.map(client => <option value={client.id}>{client.name}</option>)}
                </Input>                
            </Col>
            <Col className="therapist-client-info offset-m1 z-depth-1" m={7} s={12}>
                <h2 className="center">Client Info</h2>
                <hr/>
                <h4 className="center therapist-client-name">{this.state.clientInfo.name}</h4>
                <h5>Prescribed Exercises</h5> 
                {this.state.exercises.map(exercise => <p>{exercise}</p>)}               
            </Col>
            </Row>
        </div>
      )
  }
}

export default Therapist;