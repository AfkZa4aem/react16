import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {

  state = {
    length: null,
    string: ''
  };

  inputChangeHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      string: event.target.value
    })
  };

  deleteCharHandler = (charIndex) => {
    // create array from string
    const char = this.state.string.split('');
    // remove element with index = charIndex
    char.splice(charIndex, 1);
    // join to new string
    const newString = char.join('');
    // set state equal to new string
    this.setState({string: newString});
  }

  render() {
    // create array from user input and create components
    const charList = this.state.string.split('').map((letter, i) => {
      // pass inde as key, character as single letter and delete function
      return <Char key={i} character={letter} clicked={() => this.deleteCharHandler(i)}/>;
    });

    return (
      <div className="App">
        <input 
          type='text' 
          onChange={this.inputChangeHandler} 
          value={this.state.string}/>
        <p>{this.state.string}</p>
        <p>{this.state.length}</p>
        <Validation length={this.state.length}/>
        {charList}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
