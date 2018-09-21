import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Button, Card, Row, Col, Input } from 'react-materialize';
import ExerciseInput from './ExerciseInput';


class FeedbackForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          redirect: false,
          RPEData: '5',
          pain: '',
          painLocation: '',
          painSeverity: '5',
          addlComments: '',
          providerId: '',
          clientId: '',

      };
  };

  componentDidMount() {
      console.log("On CDM of SignUp, user is:", this.props.user);
      console.log("This is the checkLogin value: ", this.props.checkedLogin)
      this.handleClientProvider();
      //this.retrieveExercises();
  }  

  handleClientProvider = (e) => {
      if(this.props.user){
        this.setState({
            clientId: this.props.user.id,
            providerId: this.props.user.provider
        })
        console.log('The user info is: ', this.state)
      }
  }

  handleRPE = (e) => {
      console.log("The old RPE is: ", this.state.RPEData);
      this.setState({
          RPEData: e.target.value
      })
      console.log("The NEW RPE is: ", this.state.RPEData)
  }

  handlePain = (e) => {
      console.log('The old pain value is: ', this.state.pain)
      this.setState({
          pain: e.target.value
      })
      console.log('The NEW pain value is: ', this.state.pain)
  }

  handlePainLocation = (e) => {
    console.log('The old pain location is: ', this.state.painLocation)
    this.setState({
        painLocation: e.target.value
    })
    console.log('The NEW pain location is: ', this.state.painLocation)
  }

  handlePainSeverity = (e) => {
    console.log('The old pain severity is: ', this.state.painSeverity)
    this.setState({
        painSeverity: e.target.value
    })
    console.log('The NEW pain severity is: ', this.state.painSeverity)
  }

  handleAddlComments = (e) => {
    console.log('The old comments is: ', this.state.addlComments)
    this.setState({
        addlComments: e.target.value
    })
    console.log('The NEW comments is: ', this.state.addlComments)
  }


//   validateAndAppend = () => {
//     if(this.state.prescribeExercise.exerciseId &&
//         this.state.prescribeExercise.repInfo &&
//         this.state.prescribeExercise.freqInfo){
//         // Data is valid! Append it.
//         const newPrescriptionData = this.state.prescriptionData;
//         newPrescriptionData.push(this.state.prescribeExercise);
//         console.log('old prescription:', this.state.prescriptionData);
//         console.log('new prescriotion:', newPrescriptionData);
//         this.setState({
//             errorMessage: '',
//             prescribeExercise: {
//                 exerciseId: '',
//                 repInfo: '',
//                 freqInfo: ''
//             },
//             prescriptionData: newPrescriptionData,
//             numExercise: this.state.numExercise + 1
//         })
//     }
//     else {
//         // At least one data field not entered
//         this.setState({
//             errorMessage: 'All fields required'
//         })
//     }
//   }

//   handleNames = (e) => {
//       console.log('Getting those clients for provider', this.props.user)
//       if(this.props.user){
//         axios.get(SERVER_URL + '/users/clients/' + this.props.user.id)
//         .then( result => {
//             console.log(result.data.clients)
//                 this.setState({
//                     clients: result.data.clients,
//                     providerId: this.props.user.id
//                 })
//                 console.log(this.state.clients)
//         }).catch(err => {
//             console.log('THERE IS AN ERROR', err)
//         })
//       }
//   }

  setRedirect = () => {
    this.setState({
        redirect: true
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log('The state I am sending to comments is: ', this.state);
      axios.post(SERVER_URL + '/comments', this.state)
      .then(result => {
          this.setRedirect();
      }).catch(err => {
          console.log('The error from sending presciption is: ', err);
      })
  };
  
  render() {
    if (this.state.redirect === false) {
        if(this.props.checkedLogin && this.props.user) {
            return (
                <div className="container script-form-container z-depth-1 center">
                    <h2>Share Your Feedback</h2>
                    <p>{this.state.errorMessage}</p>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Did you have any pain today?</label>
                            <Row>
                                <Input s={6} name='group1' type='checkbox' value='Yes' label='Yes'  onChange={this.handlePain} />
                                <Input s={6} name='group1' type='checkbox' value='No' label='No' onChange={this.handlePain} />
                            </Row>
                        </div>
                        <div>
                            <label>If so, where was it?</label>
                            <Row>
                                <Input s={12} type='text' placeholder="Please describe location of pain" onChange={this.handlePainLocation} />
                            </Row>
                        </div>
                        <div>
                            <label>On a scale of 1 to 10, how would you rate your pain?</label>
                            <Row>
                                <Input s={12} name="name" type='range' min="0" max="10" defaultValue="5" onChange={this.handlePainSeverity}></Input>
                            </Row>
                        </div>
                        <div>
                            <label>On a scale of 1 to 10, how hard was this workout?</label>
                            <Row>
                                <Input s={12} name="name" type='range' min="0" max="10" defaultValue="5" onChange={this.handleRPE}></Input>
                            </Row>
                        </div>
                        <div>
                            <label>Are there any other comments you would like to share with your physical therapist?</label>
                            <Row>
                                <Input s={12} name="name" type='textarea' min="0" max="10" onChange={this.handleAddlComments}></Input>
                            </Row>
                        </div>
                        <br></br>
                        <div>
                            <Button className="blue darken-1" type="submit" value="Register" waves='light' onClick={this.handleSubmit}>Submit</Button>
                        </div>
                    </form>
                </div>
            ) 
        } else if(this.props.checkedLogin) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <div>
                    <p>Loading ...</p>
                </div>
                
            )  
        }
      } else {
        return (
            <Redirect to="/profile" />
        )
    }
  }   
}

export default FeedbackForm;