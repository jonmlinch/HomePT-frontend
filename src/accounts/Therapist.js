import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'



class Therapist extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: ''
        }
    }


  render() {
      return (
        <div>
            <h2>This will the PROVIDER profile page</h2>
        </div>
      )
  }
}

export default Therapist;