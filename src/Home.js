import React, { Component } from 'react';
import { Parallax } from 'react-materialize';
import parallax1 from './woman-running.jpg';

class Home extends Component {
  render() {
    return (
    	<div>
    		<div className="row container">
    		  <h2 className="header">EXAMPLE HEADER</h2>
    		  <p className="grey-text text-darken-3 lighten-3">This is example text</p>
    		</div>
    	  <Parallax imageSrc={parallax1}/>
    	  <div className="section white">
    	    <div className="row container">
    	      <h2 className="header">EXAMPLE HEADER</h2>
    	      <p className="grey-text text-darken-3 lighten-3">This is example text</p>
    	    </div>
    	  </div>
    	  <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
    	</div>
    );
  }
}

export default Home;