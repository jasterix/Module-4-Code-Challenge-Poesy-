import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({username: event.target.value })
    // console.log(this.state.username);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.newUsername(this.state)


    // this.setState({username: this.props})
  }

  render(){
    // console.log(this.props);
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <input onChange={this.handleChange} placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
