import React, { Component } from 'react';
import Button from './components/Button'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: '',
      previous: []
    }
  }

  render() {
    const buttons = [

    ];

    return (
      <div className="App">
        <input type="text" className="result" value={this.state.current} />
      </div>
    );
  }
}

export default App;
