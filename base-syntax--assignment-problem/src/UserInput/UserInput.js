import React from 'react';

const UserInput = (props) => {
  const style = {
    border: '1px solid blue'
  };
  return (
      <input type='text' onChange={props.changed} value={props.userName} style={style}/>
  )
};

export default UserInput;