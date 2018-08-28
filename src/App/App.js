import React from 'react';
import MagicButton from './components/MagicButton';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.logMe = this.logMe.bind(this);
  }

  logMe() {
    console.log('hi');
  }

  render () {
    return (<div>

      <MagicButton handleClick={this.logMe}>Blue</MagicButton>
      <MagicButton handleClick={this.logMe}>Red</MagicButton>
      <MagicButton handleClick={this.logMe}>Yellow</MagicButton>

    </div>);
  }
}

export default App;