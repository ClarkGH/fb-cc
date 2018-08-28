import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<button onClick={this.props.handleClick}>{this.props.children}</button>);
  }
}

export default App;