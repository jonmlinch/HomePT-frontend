import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Card, Row, Col, Input, Modal, MediaBox } from 'react-materialize';




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
        <h2 className="center">Client's Profile</h2>
        <Row>
          <Col className="z-depth-1 offset-m3" m={6}>
            <h4 className="center">Monday</h4>
            <hr />
            <p className="flow-text">Exercise summary here</p>
            <Modal
              header="Monday's Exercise"
              trigger={<Button className="right start-regimen-button">Start Regimen</Button>}>
              <Row>
                <Col m={8}>
                  <div class="video-container">
                    <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
                  </div>
                </Col>
                <Col m={4}>
                  <p className="video-exercise-list z-depth-1">
                    EXERCISE ONE
                    <br />
                    EXERCISE TWO
                  </p>
                </Col>
              </Row>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col className="z-depth-1 offset-m3" m={6}>
            <h4 className="center">Tuesday</h4>
            <p className="flow-text">Exercise summary here</p>
          </Col>
        </Row>
        <Row>
          <Col className="z-depth-1 offset-m3" m={6}>
            <h4 className="center">Wednesday</h4>
            <p className="flow-text">Exercise summary here</p>
          </Col>
        </Row>
        <Row>
          <Col className="z-depth-1 offset-m3" m={6}>
            <h4 className="center">Thursday</h4>
            <p className="flow-text">Exercise summary here</p>
          </Col>
        </Row>
        <Row>
          <Col className="z-depth-1 offset-m3" m={6}>
            <h4 className="center">Friday</h4>
            <p className="flow-text">Exercise summary here</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Patient;