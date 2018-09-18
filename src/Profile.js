import React, { Component } from 'react';


class Profile extends Component {
  render() {
    if(this.props.user){
        console.log(this.props.user.type)
        if(this.props.user.type === 'client'){
            return (
                <div>
                    <h2>This will be the CLIENT profile page</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>This will the PROVIDER profile page</h2>
                </div>
            )
        }
        
    }
    return (
      <div>
          <h2>Please login to see your profile!</h2>
      </div>
    );
  }
}

export default Profile;