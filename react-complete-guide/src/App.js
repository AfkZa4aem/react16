import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 32 },
      { name: 'Pavel', age: 31 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.person[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Pavel', age: 31 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 32 },
        { name: event.target.value, age: 31 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    const style = {
      background: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {/* Using map method to iterate trough persons array */}
          {this.state.persons.map(person => {
            // send props to each person in array
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! I'm React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>          
        {persons}
      </div>
    );
  }
}

export default App;
