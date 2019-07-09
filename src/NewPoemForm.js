import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
    author: "",
    id: 0
  }

  handlePoemNameChange = (event) => {
    this.setState({title: event.target.value})
    this.setState({author: this.props.username.username})
    this.setState({id: [...this.props.poemsList].length + 2})
    // console.log(this.state.id);
  }

  handlePoemContentChange = (event) => {
    this.setState({content: event.target.value})
    console.log(this.state.content);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.username && this.props.onPoemSubmit(this.state)
  }

  render(){
    // console.log(this.state);

    return (
      <div className="new-poem">
        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input onChange={this.handlePoemNameChange} placeholder="Name your masterpiece..." />
          <textarea onChange={this.handlePoemContentChange} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
