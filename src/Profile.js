import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import Patient from './accounts/Patient';
import Therapist from './accounts/Therapist';



class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: ''
        }
    }

    componentDidMount(){
        this.checkUser()
    }

    checkUser = (e) => {
        console.log('The Profile user is: ', this.props.user)
        console.log('The Profile checkedLogin value is: ', this.props.checkedUser)
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
                    <Therapist />
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