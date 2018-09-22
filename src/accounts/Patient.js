import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Card, Row, Col, Input, Modal, MediaBox } from 'react-materialize';
import FeedbackForm from '../FeedbackForm';
import {Link} from 'react-router-dom';
import ClientWorkout from '../ClientWorkout'



class Patient extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: '',
            providerId: '',
            clientId: '',
            prescriptionInfo: '',
            exerciseInfo: []
        }
    }

    componentDidMount(){
        this.checkUser()
        this.handleClientInfo()
    }

    checkUser = (e) => {
        this.setState({
            providerId: this.props.user.provider,
            clientId: this.props.user.id
        })
        console.log('The provider Id is: ', this.state.providerId)
        console.log('the client id is', this.state.clientId)
    }

    handleClientInfo = (e) => {
        console.log('Trying to retrieve client info');
        axios.get(SERVER_URL + '/users/prescription/' + this.props.user.id)
        .then(results => {
            console.log('The result I get from the GET request is', results.data.result)
            const newExerciseInfo = results.data.result;
            this.setState({
                prescriptionInfo: newExerciseInfo,
                exerciseInfo: newExerciseInfo.prescription.assignedExercises,
            })
            console.log('The exercise info is', this.state.exerciseInfo)
        }).catch(err => {
            console.log('There was an error getting the clientInfo')
        })
    }

    getExercises = (e) => {
        console.log('Now the state is: ', this.state)
    }


  render() {
    return (
      <div>
        <ClientWorkout prescription={this.state.prescriptionInfo} exerciseRegimen={this.state.exerciseInfo} />
      </div>
    )
  }
}

export default Patient;