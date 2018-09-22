import React, { Component } from 'react';
import { Button, Row, Col, Modal } from 'react-materialize';
import {Link} from 'react-router-dom';
import ClientWorkout from '../ClientWorkout';



class Patient extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: '',
            providerId: '',
            clientId: '',
            prescriptionInfo: ''
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
            this.setState({
                prescriptionInfo: results.data.result
            })
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
        <ClientWorkout prescription={this.state.prescriptionInfo} />
      </div>
    )
  }
}

export default Patient;