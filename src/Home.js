import React, { Component } from 'react';
import { Parallax, Row, Col } from 'react-materialize';
import Parallax1 from './woman-running.jpg';
import Parallax2 from './yoga-mat.jpg';

class Home extends Component {
  render() {
    return (
    	<div>
    		<div className="row container home-padding">
        <Col s="10">
    		  <h2 className="header">What is HomePT?</h2>
    		  <p className="grey-text text-darken-3 lighten-3 flow-text">
          HomePT is an application to improve communication between Physical Therapist and Client.
          </p>
        </Col>
    		</div>
    	  <Parallax className="parallax-class z-depth-2" imageSrc={Parallax1}/>
    	  <div className="section white">
    	    <div className="row container">
          <Col s="8 right">
    	      <h2 className="header">Why should I use HomePT?</h2>
    	      <p className="grey-text text-darken-3 lighten-3 flow-text">
            HomePT helps keep clients engaged and motivated by allowing them to always have their exercise regimen on hand. Physical therapists can modify a regimen in real time for the client to see and helps with gathering feedback easier and faster.
            </p>
          </Col>
    	    </div>
    	  </div>
    	  <Parallax className="parallax-class z-depth-2" imageSrc={Parallax2}/>
        <div className="row container">
          <h2 className="header">How do I sign up?</h2>
          <p className="grey-text text-darken-3 lighten-3 flow-text">
          Accounts are only given out by the physical therapist.
          </p>
        </div>
    	</div>
    );
  }
}

export default Home;
