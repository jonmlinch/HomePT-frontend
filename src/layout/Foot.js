import React, { Component } from 'react';
import { Footer } from 'react-materialize';


class Foot extends Component {
  render() {
    return (
      <div>
        <Footer copyrights="&copy; HomePT 2018"
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Terms of Service</a></li>
            </ul>
          }
          className='foot'
        >
            <h3 className="white-text">HomePT</h3>
            {/*<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>*/}
        </Footer>
      </div>
    );
  }
}

export default Foot;