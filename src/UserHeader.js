import React from 'react';

class UserHeader extends React.Component {

  handleLogOut = (event) => {
    this.props.onLogout({username: ""})
  }
  render(){
    // console.log(this.props.username.username);
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.username.username}!</h3>
        <button onClick={this.handleLogOut}>Logout</button>
      </div>
    );
  }
}

export default UserHeader;
