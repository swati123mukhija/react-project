import React from 'react'
import Radium from 'radium';
const userInput = (props) => {
  //inline style use
  const style = {
    border: '2px solid red',
    '@media(min-width:500px)' : {
      width:'450px'
    }
  };
  return <input type="text" onChange = {props.changed} value = {props.currentName} style = {style}/>
};

export default Radium(userInput);