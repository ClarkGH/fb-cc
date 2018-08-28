import React from 'react';
import MagicButton from './components/MagicButton';
import styled, { css } from 'react-emotion';

let divStyle = css`
  color: #FFF;
`

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pastColor: [],
      presentColor: '',
      futureColor: [],
    };
    this.colorize = this.colorize.bind(this);
  }

  colorize(color) {
    this.setState({
      presentColor: color,
    })
  }

  render () {
    return (
      <div className={css`background-color: ${this.state.presentColor || '#FFF'};`}>
        <MagicButton handleClick={() => this.colorize('#00F')}>Blue</MagicButton>
        <MagicButton handleClick={() => this.colorize('#F00')}>Red</MagicButton>
        <MagicButton handleClick={() => this.colorize('#FF0')}>Yellow</MagicButton>
      </div>
    );
  }
}

export default App;