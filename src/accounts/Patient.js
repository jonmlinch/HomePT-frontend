import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import FeedbackForm from '../FeedbackForm';
import ClientWorkout from '../ClientWorkout'



class Patient extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: '',
            providerId: '',
            clientId: '',
            prescriptionInfo: '',
            exerciseInfo: [],
            seederVid: ''
        }
    }

    componentDidMount(){
        this.handleClientInfo()
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
                seederVid: newExerciseInfo.prescription.assignedExercises[0].exercise.video
            })
            console.log('The exercise info is', this.state.exerciseInfo)
            console.log('The seeder video is ', this.state.seederVid)
        }).catch(err => {
            console.log('There was an error getting the clientInfo')
        })
    }


  render() {
    return (
      <div>
        <ClientWorkout prescription={this.state.prescriptionInfo} exerciseRegimen={this.state.exerciseInfo} seedVid={this.state.seederVid} />
      </div>
    )
  }
}

export default Patient;