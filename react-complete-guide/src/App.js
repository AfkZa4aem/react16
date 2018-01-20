import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // without JSX
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))

    // with JSX
    return (
      <div className="App">
        <h1>Hi! I'm React App</h1>
        <Person />
      </div>
    );
  }
}

export default App;
