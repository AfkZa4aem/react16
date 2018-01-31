import React from 'react';
import classes from './Person.css';

const person = ( props ) => {
  const rnd = Math.random();

    if (rnd > 0.7) {
      throw new Error('Something went wrong');
    }
  
  return (
    <div className={classes.Person}>
      {/* Using props */}
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/* get access to something between oppening and closing tags */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
};

export default person;