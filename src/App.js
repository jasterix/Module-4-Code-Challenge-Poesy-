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

  handleSubmitPoem = (poemObj) => {
    console.log(poemObj);
    this.setState({poemsList: [...this.state.poemsList, poemObj]})
    console.log("submittedddd");
    console.log(this.state.poemsList);
  }

  render(){
    console.log(this.state.username);
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm newUsername={this.handleNewUsername} />
          <UserHeader username={this.state.username}
             onLogout={this.handleLogOut}/>

          <NewPoemForm username={this.state.username}
            poemsList={this.state.poemsList} onPoemSubmit={this.handleSubmitPoem} />
        </div>
        <PoemsContainer poemsList={this.state.poemsList}
          />
      </div>
    );
  }
}

export default App;
