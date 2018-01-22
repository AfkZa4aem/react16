import React from 'react';

const person = (props) => {
  return (
    <div>
      {/* Using props */}
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/* get access to something between oppening and closing tags */}
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;