import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import Patient from './accounts/Patient';
import Therapist from './accounts/Therapist';



class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            clients: [],
            providerId: ''
        }
    }

    componentDidMount(){
        this.checkUser();
        this.handleNames();
    }

    checkUser = (e) => {
        console.log('The Profile user is: ', this.props.user)
        console.log('The Profile checkedLogin value is: ', this.props.checkedUser)
    }

    handleNames = (e) => {
        if(this.props.user){
          axios.get(SERVER_URL + '/users/clients/' + this.props.user.id)
          .then( result => {
              this.setState({
                  clients: result.data.clients,
                  providerId: this.props.user.id
              })
          }).catch(err => {
              console.log('THERE IS AN ERROR', err)
          })
        }
    }

  render() {

    if(this.props.checkedLogin && this.props.user) {
      if(this.props.user.type === 'client'){
        return (
          <Patient 
          user={this.props.user} 
          checkedLogin={this.props.checkedLogin}/>
        )
          } else {
                return (
                    <Therapist clients={this.state.clients}/>
                )
            }
    } else if(this.props.checkedLogin) {
        return (
          <Redirect to="/" />
        );
    } else {
        return (
            <div>
                <p>Loading ...</p>
            </div>            
        ) 
    }
  }
}

export default Profile;