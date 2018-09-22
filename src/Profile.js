import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Patient from './accounts/Patient';
import Therapist from './accounts/Therapist';



class Profile extends Component {
    
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