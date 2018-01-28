import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'adfg', name: 'Max', age: 32 },
      { id: 'zxcv', name: 'Pavel', age: 31 },
      { id: 'ui,g', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // find index of element in state.persons array
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // create a new JS object by using 'spread' operator
    // first way:
    // const person = Object.assign({}, this.state.persons[personIndex])
    // second (modern) way:
    const person = {
      ...this.state.persons[personIndex]
    };

    // adjust the name from input
    person.name = event.target.value;

    // update persons object with new name value for object with personIndex id
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // update state object
    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // Create a copy of this.state.persons array
    // first example:
    // const persons = this.state.persons.slice();
    // second example with ES6 'spread' operator
    const persons = [...this.state.persons];
    // remove current person from array of persons
    persons.splice(personIndex, 1);
    // update state.persons array with new one
    this.setState({persons: persons})
  }

  render() {

    const style = {
      background: 'green',
      color: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // add pseudo selector using Radium
      ':hover': {
          background: 'lightgreen',
          color: 'black'
      }
    };
    
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {/* Using map method to iterate trough persons array */}
          {this.state.persons.map((person, index) => {
            // send props to each person in array
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // when person list is visible, apply red background
      style.background = 'red';
      // add pseudo selector using Radium syntax
      style[':hover'] = {
        background: 'salmon',
        color: 'black'
    }
    }

    const classes = [];
    // when we have 2 or less persons, add .red css class
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    // when we have 1 or less persons, add .bold css class
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi! I'm React App</h1>
        {/* use .join here to get string */}
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>          
        {persons}
      </div>
    );
  }
}

// using radium as heigher order component
// injecting some extra functionality
export default Radium(App);
