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
        <Person name="Max" age="32"/>
        <Person name="Pavel" age="31">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
