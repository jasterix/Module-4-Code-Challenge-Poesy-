import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  render(){

    let poems = this.props.poemsList.map(poem => (
      <Poem key={poem.id} poem={poem} />
    ))
    // console.log(this.props);
    return (
      <div className="poems-container">
        {
          poems
         /* render poems here*/
        }
      </div>
    );
  }
}

export default PoemsContainer;
