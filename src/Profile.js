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

  render() {
    if(this.props.checkedLogin && this.props.user) {
      if(this.props.user.type === 'client'){
        return (
          <Patient />
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