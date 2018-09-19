import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'



class Patient extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: ''
        }
    }


  render() {
        return (
            <div>
                <h2>This will be the CLIENT profile page</h2>
            </div>
        )
    }
}

export default Patient;