import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server'
import FeedbackForm from '../FeedbackForm'



class Patient extends Component {
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
        console.log('The feedback user is: ', this.props.user)
        console.log('The feedback checkedLogin value is: ', this.props.checkedUser)
    }


  render() {
        return (
            <div>
                <p>this is the client page</p>
            </div>
        )
    }
}

export default Patient;