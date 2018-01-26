import React from 'react';

const Char = (props) => {

  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  const charArray = props.string.split('')
  const letter = charArray.map((char, i) => {
    return (
    <div style={style} key={i} className='something' onClick={props.click}>
      {char}
    </div>)
  });
  return (
    <div>
      {letter}
    </div>
  );
};

export default Char;
