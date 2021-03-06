import React from 'react';
import MagicButton from './components/MagicButton';
import styled, { css } from 'react-emotion';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pastColors: [],
      presentColor: '#FFF',
      futureColors: [],
    };
    this.colorize = this.colorize.bind(this);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
  }

  colorize(color) {
    let undoArr;

    if (this.state.pastColors[0] !== '#FFF') {
      undoArr = [...this.state.pastColors, this.state.presentColor]
    } else {
      undoArr = [this.state.presentColor]
    }

    this.setState({
      presentColor: color,
      pastColors: undoArr,
      futureColors: []
    })
  }

  undo(){
    let undoArr,
      updatedColor,
      redoArr = this.state.futureColors;

    if (this.state.presentColor !== '#FFF') {
      updatedColor = this.state.pastColors.slice(-1);
      undoArr = this.state.pastColors.slice(0,-1);

      if (redoArr.length > 0) {
        redoArr = [...redoArr, this.state.presentColor]
      } else {
        redoArr = [this.state.presentColor]
      }

      this.setState({
        presentColor: updatedColor,
        pastColors: undoArr,
        futureColors: redoArr
      })
    }


  }

  redo(){
    const redoArr = this.state.futureColors,
      newArr = redoArr.slice(0, -1),
      currentColor = this.state.presentColor;
    if (redoArr.length > 0) {
      this.setState({
        futureColors: [...newArr],
        presentColor: redoArr.slice(-1),
        pastColors: [...this.state.pastColors, currentColor]
      })
    }
  }

  render () {
    return (
      <div className={css`background-color: ${this.state.presentColor || '#FFF'};`}>
        <MagicButton handleClick={() => this.colorize('#00F')}>Blue</MagicButton>
        <MagicButton handleClick={() => this.colorize('#F00')}>Red</MagicButton>
        <MagicButton handleClick={() => this.colorize('#FF0')}>Yellow</MagicButton>
        <MagicButton handleClick={this.undo}>Undo</MagicButton>
        <MagicButton handleClick={this.redo}>Redo</MagicButton>
      </div>
    );
  }
}

export default App;