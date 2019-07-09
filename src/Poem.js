import React from 'react';

class Poem extends React.Component {

  state = {
    readStatus: false,
    color: "black"
  }

  handleClick = (event) => {
    this.setState({readStatus: !this.state.readStatus}, () => {
      this.state.readStatus ? this.setState({color: "rebeccapurple"}) : this.setState({color: "black"})
    })
  }

  render(){



    return (
      <div onClick={this.handleClick} style={{color: this.state.color}}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- By {this.props.poem.author}</strong>
      </div>
    );
  }
}

export default Poem;
