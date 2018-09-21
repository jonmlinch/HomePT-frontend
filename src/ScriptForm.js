import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Button, Card, Row, Col, Input } from 'react-materialize';
import ExerciseInput from './ExerciseInput';


class ScriptForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          redirect: false,
          clients: [],
          numExercise: 1,
          exerciseData: [],
          prescriptionData: [],
          prescribeExercise: {
            exerciseId: '',
            repInfo: '',
            freqInfo: '',
            },
      };
  };

  componentDidMount() {
      console.log("On CDM of SignUp, user is:", this.props.user);
      console.log("This is the checkLogin value: ", this.props.checkedLogin)
      this.handleNames();
      this.retrieveExercises();
  }

  newPrescriptionData = [];
  

  handleExerciseName = (e) =>{
      e.preventDefault();
      this.setState({
        prescribeExercise: {
            exerciseId: e.target.value,
            repInfo: this.state.prescribeExercise.repInfo,
            freqInfo: this.state.prescribeExercise.freqInfo,
        }
      })
      console.log('THIS IS THE PRESCRIBED EXERCISE: ', this.state.prescribeExercise)
  }

  handleRepInfo = (e) =>{
    e.preventDefault();
    this.setState({
      prescribeExercise: {
          exerciseId: this.state.prescribeExercise.exerciseId,
          repInfo: e.target.value,
          freqInfo: this.state.prescribeExercise.freqInfo,
      }
    })
    console.log('THIS IS THE PRESCRIBED EXERCISE: ', this.state.prescribeExercise)
  }

  handleFreqInfo = (e) =>{
    e.preventDefault();
    this.setState({
      prescribeExercise: {
        exerciseId: this.state.prescribeExercise.exerciseId,
        repInfo: this.state.prescribeExercise.repInfo,
        freqInfo: e.target.value,
      }
    })
    console.log('THIS IS THE PRESCRIBED EXERCISE: ', this.state.prescribeExercise)
  }

  handleExerciseArray = (e) => {
    const newPrescriptionData = [];
    newPrescriptionData.push(this.state.prescribeExercise);
    console.log('old prescription:', this.state.prescriptionData);
    console.log('new prescriotion:', newPrescriptionData);
    // this.setState({
    //   faves: newFaves
    // })
  }

  handleNames = (e) => {
      //e.preventDefault();
      console.log('Getting those clients for provider', this.props.user)
      const newClient = this.state.clients;
      if(this.props.user){
        axios.get(SERVER_URL + '/users/clients/' + this.props.user.id)
        .then( result => {
            console.log(result.data.clients)
                this.setState({
                    clients: result.data.clients
                })
                console.log(this.state.clients)
        }).catch(err => {
            console.log('THERE IS AN ERROR', err)
        })
      }
  }

  setRedirect = () => {
    this.setState({
        redirect: true
    })
  }

  handleAddExercise = () => {
      this.setState({
          numExercise: this.state.numExercise + 1
      })
  }

  retrieveExercises = () => {
    console.log('GETTING THOSE EXERCISES');
    axios.get(SERVER_URL + '/exercises')
    .then( result => {
        console.log(result.data.exercises)
        this.setState({
            exerciseData: result.data.exercises
        })
        console.log('this is the new exercise state: ', this.state.exerciseData)
    }).catch( err => {
        console.log('Trouble getting exercises!')
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log('The exercise object is: ', this.state.prescribeExercise)
//       console.log(this.state);
//       axios.post(SERVER_URL + '/auth/signup', this.state)
//       .then(result => {
//           this.setRedirect();
//       }).catch( err => {
//           console.log('ERROR', err.response);
//       });
  };
  
  render() {
    const exercises = [];

    for (var i = 0; i < this.state.numExercise; i += 1) {
      exercises.push(<ExerciseInput 
        key={i} 
        number={i} 
        exerciseData={this.state.exerciseData} 
        updateExercise={this.handleExerciseName}
        updateReps={this.handleRepInfo}
        updateFreq={this.handleFreqInfo}
        updateExerciseArray={this.handleExerciseArray} />);
    };



    if(this.props.checkedLogin && this.props.user) {
        return (
            <div className="container script-form-container z-depth-1 center">
                <h2>Create a new workout</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                      <Row>
                        <Input name="name" type='select' label="Patient Name:"  >
                          {this.state.clients.map(client => <option value={client.name}>{client.name}</option>)}
                        </Input>
                      </Row>
                    </div>
                    <div>
                        {exercises}
                      <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.handleAddExercise}><i class="material-icons">add</i></a>
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
  }
}

export default ScriptForm;