import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className='Output'>
      <p>Username: {props.userName}</p>
      <p>two</p>
    </div>
  )
};

export default UserOutput;