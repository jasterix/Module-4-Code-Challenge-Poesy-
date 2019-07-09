import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  //-------------------------SET INITIAL STATE

  state = {
    poemsList: [],
    username: ""
  }

//-------------------------------FETCH POEMS
  componentDidMount() {
    fetch("http://localhost:3000/poems")
    .then(res=> res.json())
    .then(data => {
      this.setState({poemsList: data})
    })
  }

  //--------------------------------Add new username
  handleNewUsername = (usernameObj) =>{
    // console.log("hello");
    this.setState({username: usernameObj})
  }

//--------------------------------LOG OUT
  handleLogOut = (usernameObj) =>{
    console.log("goodbye");
    this.setState({username: ""})
  }

  render(){
    // console.log(this.state.poemsList);
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm newUsername={this.handleNewUsername} />
          <UserHeader username={this.state.username} onLogout={this.handleLogOut}/>
          <NewPoemForm />
        </div>
        <PoemsContainer poemsList={this.state.poemsList}
          />
      </div>
    );
  }
}

export default App;
